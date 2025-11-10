"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import CategoriesTable from "@/components/admin/categories/CategoriesTable";
import CategoryForm from "@/components/admin/categories/CategoryForm";

export default function CategoriesPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Categories
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Plus size={20} />
          {showForm ? "Cancel" : "New Category"}
        </button>
      </div>

      {showForm && <CategoryForm onClose={() => setShowForm(false)} />}
      <CategoriesTable />
    </div>
  );
}
