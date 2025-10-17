import { NextResponse } from "next/server";
import { checkUser } from "@/lib/checkUser";
import db from "@/lib/prisma";

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export async function POST(request) {
  const user = await checkUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content, categoryId, status, excerpt, images, tags } =
    await request.json();

  if (!title || !content || !categoryId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const post = await db.post.create({
      data: {
        title,
        content,
        excerpt,
        slug: createSlug(title),
        date: new Date(),
        authorId: user.id,
        categoryId,
        status: status || "DRAFT",
        images: {
          create: images.map((image) => ({
            url: image.url,
            isFeatured: image.isFeatured || false,
          }))
        },
        tags: {
          connectOrCreate: tags.map((tag) => ({
            where: { name: tag },
            create: { name: tag, slug: createSlug(tag) },
          }))
        }
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
