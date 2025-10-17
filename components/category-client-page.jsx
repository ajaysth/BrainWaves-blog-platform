"use client";

import { useState } from "react";
import { CategoryFilters } from "./category-filters";
import { CategoryGrid } from "./category-grid";

export default function CategoryClientPage({ categories }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <>
      <CategoryFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <CategoryGrid
        categories={categories}
        searchQuery={searchQuery}
        sortBy={sortBy}
        viewMode={viewMode}
      />
    </>
  );
}
