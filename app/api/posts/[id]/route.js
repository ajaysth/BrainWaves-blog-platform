import { NextResponse } from "next/server";
import { checkUser } from "@/lib/checkUser";
import db from "@/lib/prisma";

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const post = await db.post.findUnique({
      where: { id },
      include: {
        images: true,
        tags: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const user = await checkUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content, categoryId, status, excerpt, images, tags, featuredImage } =
    await request.json();

  if (!title || !content || !categoryId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const existingPost = await db.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (existingPost.authorId !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Disconnect existing images and tags before creating new ones
    await db.post.update({
      where: { id },
      data: {
        images: { deleteMany: {} },
        tags: { set: [] }, // Disconnect all existing tags
      },
    });

    const updatedPost = await db.post.update({
      where: { id },
      data: {
        title,
        content,
        excerpt,
        slug: createSlug(title),
        categoryId,
        status: status || "DRAFT",
        featuredImage: featuredImage || "/cardimg/1.jpg",
        images: {
          create: (images || []).map((image) => ({
            url: image.url,
            isFeatured: image.isFeatured || false,
          })),
        },
        tags: {
          connectOrCreate: (tags || []).map((tag) => ({
            where: { name: tag },
            create: { name: tag, slug: createSlug(tag) },
          })),
        },
      },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const user = await checkUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const post = await db.post.findUnique({
      where: { id },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.authorId !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await db.post.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post", details: error.message },
      { status: 500 }
    );
  }
}
