"use client";

import { CategoryGrid } from "@/components/category-grid";
import { CategoryHero } from "@/components/category-hero";
import { CategoryFilters } from "@/components/category-filters";
import { useState } from "react";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <main className="min-h-screen">
      <CategoryHero />
      <CategoryFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <CategoryGrid
        searchQuery={searchQuery}
        sortBy={sortBy}
        viewMode={viewMode}
      />
    </main>
  );
}
