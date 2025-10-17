"use client";

import { CategoryCard } from "./category-card";
import { CategoryListItem } from "./category-list-item";
import { useMemo, useState, useEffect } from "react";
import { Sparkles, Search } from "lucide-react";

export function CategoryGrid({ categories, searchQuery, sortBy, viewMode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredAndSortedCategories = useMemo(() => {
    const filtered = categories.filter(
      (category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (category.description && category.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "posts":
          return b._count.posts - a._count.posts;
        case "recent":
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [categories, searchQuery, sortBy]);

  const totalPosts = categories.reduce((sum, cat) => sum + (cat._count.posts || 0), 0);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-medium tracking-tight text-foreground">
                All Categories
              </h2>
              {mounted && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 animate-in fade-in zoom-in duration-500">
                  <Sparkles className="h-3 w-3 text-primary" />
                </div>
              )}
            </div>
            <p className="text-muted-foreground">
              {filteredAndSortedCategories.length}{" "}
              {filteredAndSortedCategories.length === 1
                ? "category"
                : "categories"}{" "}
              • {totalPosts} total articles
            </p>
          </div>

          {mounted && (
            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="rounded-lg border border-border bg-card px-4 py-2">
                <div className="text-xs text-muted-foreground">Most Active</div>
                <div className="text-sm font-medium">
                  {
                    categories.reduce((max, cat) =>
                      (cat._count.posts || 0) > (max._count.posts || 0) ? cat : max
                    ).name
                  }
                </div>
              </div>
            </div>
          )}
        </div>

        {filteredAndSortedCategories.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="animate-in fade-in slide-in-from-bottom-4"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredAndSortedCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="animate-in fade-in slide-in-from-left-4"
                  style={{
                    animationDelay: `${index * 30}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <CategoryListItem category={category} />
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 p-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-medium">No categories found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search query
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
