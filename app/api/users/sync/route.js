
import { Webhook } from "svix";
import { headers } from "next/headers";
import db from "@/lib/prisma";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name } = evt.data;

    if (!email_addresses || email_addresses.length === 0) {
      console.error("User created webhook received, but no email address found.");
      return new Response("No email address found", { status: 400 });
    }

    const name = `${first_name || ""} ${last_name || ""}`.trim();

    try {
      await db.user.create({
        data: {
          clerkUserId: id,
          email: email_addresses[0].email_address,
          name,
          imageUrl: image_url,
        },
      });
      return new Response("User created", { status: 201 });
    } catch (error) {
      console.error("Error creating user:", error);
      return new Response("Error occured", {
        status: 500,
      });
    }
  }

  if (eventType === "user.updated") {
    const { id, image_url, first_name, last_name } = evt.data;

    const name = `${first_name || ""} ${last_name || ""}`.trim();

    try {
      await db.user.update({
        where: {
          clerkUserId: id,
        },
        data: {
          name,
          imageUrl: image_url,
        },
      });
      return new Response("User updated", { status: 200 });
    } catch (error) {
      console.error("Error updating user:", error);
      return new Response("Error occured", {
        status: 500,
      });
    }
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;

    try {
      await db.user.delete({
        where: {
          clerkUserId: id,
        },
      });
      return new Response("User deleted", { status: 200 });
    } catch (error) {
      console.error("Error deleting user:", error);
      // If the user is not found, it's not a critical error.
      if (error.code === 'P2025') {
        return new Response("User not found", { status: 200 });
      }
      return new Response("Error occured", {
        status: 500,
      });
    }
  }

  return new Response("", { status: 200 });
}
