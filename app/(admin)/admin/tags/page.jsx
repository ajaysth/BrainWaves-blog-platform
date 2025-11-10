"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import TagsTable from "@/components/admin/tags/TagsTable";
import TagForm from "@/components/admin/tags/TagForm";

export default function TagsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tags
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Plus size={20} />
          {showForm ? "Cancel" : "New Tag"}
        </button>
      </div>

      {showForm && <TagForm onClose={() => setShowForm(false)} />}
      <TagsTable />
    </div>
  );
}
