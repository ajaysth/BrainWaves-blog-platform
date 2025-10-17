"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ClockIcon,
  CalendarIcon,
  GridIcon,
  ListIcon,
  BookOpenIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function CategoryPostsClient({ initialPosts }) {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("latest");

  const sortedPosts = [...initialPosts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === "popular") {
      return (b.views || b.readTime) - (a.views || a.readTime);
    }
    return 0;
  });

  return (
    <main className="lg:col-span-8">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">View:</span>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="gap-2"
          >
            <GridIcon className="h-4 w-4" />
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="gap-2"
          >
            <ListIcon className="h-4 w-4" />
            List
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button
            variant={sortBy === "latest" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("latest")}
          >
            Latest
          </Button>
          <Button
            variant={sortBy === "popular" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("popular")}
          >
            Popular
          </Button>
        </div>
      </div>

      {/* Posts Grid/List */}
      {sortedPosts.length === 0 ? (
        <Card className="p-12 text-center border-dashed">
          <BookOpenIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2 text-foreground">
            No posts yet
          </h3>
          <p className="text-muted-foreground">
            Check back soon for new content in this category.
          </p>
        </Card>
      ) : (
        <div
          className={cn(
            viewMode === "grid"
              ? "grid grid-cols-1 lg:grid-cols-2 gap-6"
              : "flex flex-col gap-6",
            "animate-fade-in-up"
          )}
        >
          {sortedPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={`/blog/${post.slug}`} className="block">
                {viewMode === "grid" ? (
                  <>
                    <div className="relative overflow-hidden aspect-video bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="secondary"
                          className="bg-background/90 backdrop-blur-sm shadow-lg"
                        >
                          {post.tags && post.tags.length > 0 ? post.tags[0] : "Untagged"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-balance">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed text-pretty">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3">
                          <Image
                            src={post.author.imageUrl || "/placeholder.svg"}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="rounded-full ring-2 ring-border"
                          />
                          <span className="text-sm font-medium text-foreground">
                            {post.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ClockIcon className="h-4 w-4" />
                          {post.readTime}m
                        </div>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-6 p-6">
                    <div className="relative overflow-hidden rounded-lg sm:w-64 aspect-video sm:aspect-auto flex-shrink-0 bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags && post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-3">
                          <Image
                            src={post.author.imageUrl || "/placeholder.svg"}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="rounded-full ring-2 ring-border"
                          />
                          <span className="text-sm font-medium text-foreground">
                            {post.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {post.readTime}m
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </a>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
