import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { PostTable } from "@/components/dashboard/PostTable";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import db from "@/lib/prisma";

export default async function PostsPage() {
  const { userId } = auth();

  // if (!userId) {
  //   return <div>Not authenticated</div>; // Or redirect to sign-in
  // }

  const posts = (await db.post.findMany({
    where: {
      author: {
        clerkUserId: userId,
      },
    },
    include: {
      category: true,
      tags: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })) || [];

  return (
    <div>
      <DashboardNavbar title="My Posts" />

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">All Posts</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Manage and edit your blog posts
            </p>
          </div>
          <Link href="/dashboard/posts/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        <PostTable posts={posts} />
      </div>
    </div>
  );
}
