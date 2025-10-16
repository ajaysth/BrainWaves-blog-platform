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

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    status: "published",
    views: 1234,
    likes: 89,
    comments: 23,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    status: "draft",
    views: 0,
    likes: 0,
    comments: 0,
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Building Scalable APIs",
    status: "published",
    views: 2341,
    likes: 156,
    comments: 45,
    date: "2024-01-12",
  },
];

export function PostTable() {
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
                  <p className="font-medium text-foreground">{post.title}</p>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      post.status === "published" ? "default" : "secondary"
                    }
                    className={
                      post.status === "published"
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
                      {post.comments}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
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
