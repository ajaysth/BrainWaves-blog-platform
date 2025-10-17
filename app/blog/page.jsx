import db from "@/lib/prisma";
import BlogPageClient from "@/components/blog-page-client";

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: { status: "PUBLISHED" },
    include: {
      author: true,
      category: true,
      tags: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  const categories = await db.category.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });

  // Tags fetched but unused here; preserving structure without altering functionality
  const tags = await db.tag.findMany({});

  return <BlogPageClient posts={posts} categories={categories} />;
}