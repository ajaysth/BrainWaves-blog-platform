"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import PostFilters from "@/components/admin/posts/PostFilters";
import PostsTable from "@/components/admin/posts/PostsTable";

export default function PostsPage() {
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    category: "all",
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Posts Management
          </h1>
        </div>
        <Link href="/admin/posts/new">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            <Plus size={20} />
            New Post
          </button>
        </Link>
      </div>

      <PostFilters filters={filters} setFilters={setFilters} />
      <PostsTable filters={filters} />
    </div>
  );
}
