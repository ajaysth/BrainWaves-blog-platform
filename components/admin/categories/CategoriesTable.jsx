"use client";

import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import ConfirmDialog from "../shared/ConfirmDialog";

export default function CategoriesTable() {
  const [categories, setCategories] = useState([
    { id: "1", name: "Technology", slug: "technology", posts: 12 },
    { id: "2", name: "Development", slug: "development", posts: 8 },
    { id: "3", name: "Design", slug: "design", posts: 5 },
  ]);
  const [deleteId, setDeleteId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    setCategories(categories.filter((c) => c.id !== deleteId));
    setIsOpen(false);
  };

  return (
    <>
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Slug
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold">
                Posts
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr
                key={cat.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 font-medium">{cat.name}</td>
                <td className="px-6 py-4">{cat.slug}</td>
                <td className="px-6 py-4 text-right">{cat.posts}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                      <Edit size={16} />
                    </button>
                    <button
                      className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-600"
                      onClick={() => {
                        setDeleteId(cat.id);
                        setIsOpen(true);
                      }}
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
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Category"
        description="Are you sure you want to delete this category?"
        onConfirm={handleDelete}
      />
    </>
  );
}
