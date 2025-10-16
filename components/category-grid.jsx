"use client";

import { CategoryCard } from "./category-card";
import { CategoryListItem } from "./category-list-item";
import { useMemo, useState, useEffect } from "react";
import { Sparkles, Search } from "lucide-react";

// Sample categories - replace with your actual data from Supabase/Prisma
const categories = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "Latest trends in tech, software development, and innovation.",
    postCount: 42,
    color: "from-blue-500/10 to-cyan-500/10",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    description: "UI/UX design, visual arts, and creative inspiration.",
    postCount: 38,
    color: "from-purple-500/10 to-pink-500/10",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    name: "Business",
    slug: "business",
    description: "Entrepreneurship, startups, and business strategies.",
    postCount: 29,
    color: "from-emerald-500/10 to-teal-500/10",
    icon: "📊",
    gradient: "from-emerald-500 to-teal-500",
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "4",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Health, wellness, travel, and personal development.",
    postCount: 51,
    color: "from-orange-500/10 to-amber-500/10",
    icon: "🌟",
    gradient: "from-orange-500 to-amber-500",
    updatedAt: new Date("2024-01-18"),
  },
  {
    id: "5",
    name: "Science",
    slug: "science",
    description: "Scientific discoveries, research, and exploration.",
    postCount: 24,
    color: "from-indigo-500/10 to-blue-500/10",
    icon: "🔬",
    gradient: "from-indigo-500 to-blue-500",
    updatedAt: new Date("2024-01-12"),
  },
  {
    id: "6",
    name: "Culture",
    slug: "culture",
    description: "Arts, music, literature, and cultural commentary.",
    postCount: 33,
    color: "from-rose-500/10 to-red-500/10",
    icon: "🎭",
    gradient: "from-rose-500 to-red-500",
    updatedAt: new Date("2024-01-22"),
  },
];

export function CategoryGrid({ searchQuery, sortBy, viewMode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredAndSortedCategories = useMemo(() => {
    const filtered = categories.filter(
      (category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "posts":
          return b.postCount - a.postCount;
        case "recent":
          return b.updatedAt.getTime() - a.updatedAt.getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, sortBy]);

  const totalPosts = categories.reduce((sum, cat) => sum + cat.postCount, 0);

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
                      cat.postCount > max.postCount ? cat : max
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
