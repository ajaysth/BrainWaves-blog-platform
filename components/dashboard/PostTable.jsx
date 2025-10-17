"use client";

import {
  MoreVertical,
  Eye,
  Heart,
  MessageSquare,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function PostTable({ posts }) {
  const router = useRouter();

  const handleDeletePost = async (postId) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.details || "Failed to delete post");
      }

      toast.success("Post deleted successfully!");
      router.refresh(); // Refresh the page to update the post list
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                Engagement
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                Date
              </th>
              <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-b border-border last:border-0 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all"
              >
                <td className="px-6 py-4">
                  <Link href={`/blog/${post.slug}`} className="font-medium text-foreground hover:underline">
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      post.status === "PUBLISHED" ? "default" : "secondary"
                    }
                    className={
                      post.status === "PUBLISHED"
                        ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 border border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30"
                        : "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-700 border border-gray-500/30"
                    }
                  >
                    {post.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <Eye className="h-4 w-4 text-blue-600" />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1 hover:text-red-600 transition-colors">
                      <Heart className="h-4 w-4 text-red-600" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      {/* Assuming comments are not directly on Post model, or need to be fetched */}
                      {0} 
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/posts/edit/${post.id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
