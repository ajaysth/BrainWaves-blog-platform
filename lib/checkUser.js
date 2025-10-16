import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  try {
    let dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();
      dbUser = await db.user.create({
        data: {
          clerkUserId: user.id,
          name,
          email: user.emailAddresses[0]?.emailAddress || "",
          imageUrl: user.imageUrl || null,
        },
      });
    }

    return dbUser;
  } catch (error) {
    console.error("Error syncing user:", error);
    return null;
  }
};
