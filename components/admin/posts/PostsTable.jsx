"use client";

import { useState, useEffect } from "react";
import { Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import ConfirmDialog from "../shared/ConfirmDialog";

export default function PostsTable({ filters }) {
  const [posts, setPosts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    // Mock data
    setPosts([
      {
        id: "1",
        title: "Getting Started with Next.js",
        slug: "getting-started-nextjs",
        status: "PUBLISHED",
        views: 1250,
        likes: 89,
        category: "Technology",
        author: "John Doe",
        createdAt: "2025-10-20",
      },
      {
        id: "2",
        title: "React Best Practices",
        slug: "react-best-practices",
        status: "DRAFT",
        views: 450,
        likes: 32,
        category: "Development",
        author: "Jane Smith",
        createdAt: "2025-10-19",
      },
    ]);
  }, [filters]);

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== deleteId));
    setShowConfirm(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Author
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Status
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                Views
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                Likes
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {post.title}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {post.category}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {post.author}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.status === "PUBLISHED"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">
                  {post.views}
                </td>
                <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-400">
                  {post.likes}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {post.createdAt}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/blog/${post.slug}`}>
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
                        <Eye size={16} />
                      </button>
                    </Link>
                    <Link href={`/admin/posts/${post.id}`}>
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
                        <Edit size={16} />
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        setDeleteId(post.id);
                        setShowConfirm(true);
                      }}
                      className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 rounded transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Delete Post"
        description="Are you sure you want to delete this post? This action cannot be undone."
        onConfirm={handleDelete}
      />
    </>
  );
}
