"use client";

import { Search, Grid3x3, List, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CategoryFilters({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}) {
  const sortLabels = {
    name: "Name",
    posts: "Most Posts",
    recent: "Recently Updated",
  };

  return (
    <section className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Input */}
          <div className="relative flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 transition-all focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="hidden sm:inline">{sortLabels[sortBy]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => onSortChange("name")}>
                  <span className={sortBy === "name" ? "font-medium" : ""}>
                    Sort by Name
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange("posts")}>
                  <span className={sortBy === "posts" ? "font-medium" : ""}>
                    Most Posts
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange("recent")}>
                  <span className={sortBy === "recent" ? "font-medium" : ""}>
                    Recently Updated
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 rounded-lg border border-border bg-background p-1">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("list")}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
