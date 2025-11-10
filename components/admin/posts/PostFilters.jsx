"use client";

import { Search, X } from "lucide-react";

export default function PostFilters({ filters, setFilters }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
      {/* Search */}
      <div className="relative flex-1 min-w-xs">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search posts..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Status Filter */}
      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Status</option>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      {/* Category Filter */}
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Categories</option>
        <option value="tech">Technology</option>
        <option value="dev">Development</option>
        <option value="design">Design</option>
      </select>

      {/* Clear Button */}
      <button
        onClick={() =>
          setFilters({ search: "", status: "all", category: "all" })
        }
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      >
        <X size={18} />
        Clear
      </button>
    </div>
  );
}
