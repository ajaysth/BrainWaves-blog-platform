"use client";

import PostForm from "@/components/admin/posts/PostForm";

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create New Post
        </h1>
      </div>
      <PostForm />
    </div>
  );
}
