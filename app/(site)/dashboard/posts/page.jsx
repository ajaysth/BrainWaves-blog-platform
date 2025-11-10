import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { PostTable } from "@/components/dashboard/PostTable";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function PostsPage() {
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

        <PostTable />
      </div>
    </div>
  );
}
