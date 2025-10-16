"use client";

import { useState, use } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeftIcon,
  ClockIcon,
  CalendarIcon,
  GridIcon,
  ListIcon,
  TrendingUpIcon,
  BookOpenIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data - replace with your actual data fetching
const categoryData = {
  "web-development": {
    name: "Web Development",
    description:
      "Explore the latest trends, best practices, and tutorials in modern web development. From frontend frameworks to backend architectures.",
    color: "from-primary/20 to-accent/20",
    icon: "💻",
    posts: [
      {
        id: 1,
        title: "Building Modern Web Applications with Next.js 15",
        excerpt:
          "Learn how to leverage the latest features in Next.js 15 to build fast, scalable web applications with server components and streaming.",
        image: "/modern-web-development.png",
        author: {
          name: "Sarah Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "Dec 15, 2024",
        readTime: 8,
        tags: ["Next.js", "React", "Web Development"],
        slug: "building-modern-web-apps-nextjs-15",
      },
      {
        id: 2,
        title: "Mastering React Server Components",
        excerpt:
          "Deep dive into React Server Components and understand how they revolutionize the way we build React applications.",
        image: "/react-components.png",
        author: {
          name: "Michael Chen",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "Dec 10, 2024",
        readTime: 12,
        tags: ["React", "Server Components", "Web Development"],
        slug: "mastering-react-server-components",
      },
      {
        id: 3,
        title: "Web Performance Optimization Techniques",
        excerpt:
          "Discover proven strategies to optimize your website's performance and deliver lightning-fast user experiences.",
        image: "/web-performance-concept.png",
        author: {
          name: "Emily Rodriguez",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "Dec 5, 2024",
        readTime: 10,
        tags: ["Performance", "Optimization", "Web Development"],
        slug: "web-performance-optimization",
      },
      {
        id: 4,
        title: "The Future of Web Development in 2025",
        excerpt:
          "Explore emerging technologies and trends that will shape the future of web development in the coming year.",
        image: "/future-technology-cityscape.png",
        author: {
          name: "David Kim",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "Dec 1, 2024",
        readTime: 15,
        tags: ["Trends", "Future", "Web Development"],
        slug: "future-web-development-2025",
      },
    ],
  },
  "future-web-development-2025": {
    name: "Future Web Development 2025",
    description:
      "Explore emerging technologies and trends that will shape the future of web development in the coming year.",
    color: "from-primary/20 to-accent/20",
    icon: "🚀",
    posts: [
      {
        id: 1,
        title: "Building Modern Web Applications with Next.js 15",
        excerpt:
          "Learn how to leverage the latest features in Next.js 15 to build fast, scalable web applications with server components and streaming.",
        image: "/modern-web-development.png",
        author: {
          name: "Sarah Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        date: "Dec 15, 2024",
        readTime: 8,
        tags: ["Next.js", "React", "Web Development"],
        slug: "building-modern-web-apps-nextjs-15",
      },
    ],
  },
  design: {
    name: "Design",
    description:
      "Discover design principles, UI/UX best practices, and creative inspiration for building beautiful digital experiences.",
    color: "from-primary/20 to-accent/20",
    icon: "🎨",
    posts: [],
  },
  javascript: {
    name: "JavaScript",
    description:
      "Master JavaScript fundamentals, ES6+ features, and modern JavaScript frameworks to become a better developer.",
    color: "from-primary/20 to-accent/20",
    icon: "⚡",
    posts: [],
  },
};

const relatedCategories = [
  { name: "React", slug: "react", count: 24, icon: "⚛️" },
  { name: "TypeScript", slug: "typescript", count: 18, icon: "📘" },
  { name: "CSS", slug: "css", count: 15, icon: "🎨" },
  { name: "Performance", slug: "performance", count: 12, icon: "⚡" },
];

export default function CategoryPage({ params }) {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("latest");

  const category = categoryData[use(params).slug] || categoryData["web-development"];
  const posts = category.posts;

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "popular") {
      return b.readTime - a.readTime;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild className="hover:bg-accent">
            <a href="/categories" className="flex items-center gap-2">
              <ArrowLeftIcon className="h-4 w-4" />
              All Categories
            </a>
          </Button>
        </div>
      </header>

      {/* Category Hero */}
      <div className="relative overflow-hidden border-b border-border bg-card">
        <div
          className={cn("absolute inset-0 bg-gradient-to-br", category.color)}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">{category.icon}</span>
              <Badge variant="secondary" className="text-sm font-medium">
                {posts.length} {posts.length === 1 ? "Article" : "Articles"}
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">
              {category.name}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">
                  View:
                </span>
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
            {posts.length === 0 ? (
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
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-4 right-4">
                              <Badge
                                variant="secondary"
                                className="bg-background/90 backdrop-blur-sm shadow-lg"
                              >
                                {post.tags[0]}
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
                                <img
                                  src={post.author.avatar || "/placeholder.svg"}
                                  alt={post.author.name}
                                  className="w-8 h-8 rounded-full ring-2 ring-border"
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
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag) => (
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
                                <img
                                  src={post.author.avatar || "/placeholder.svg"}
                                  alt={post.author.name}
                                  className="w-8 h-8 rounded-full ring-2 ring-border"
                                />
                                <span className="text-sm font-medium text-foreground">
                                  {post.author.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <CalendarIcon className="h-4 w-4" />
                                  {post.date}
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

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Category Stats */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
                    <TrendingUpIcon className="h-5 w-5 text-primary" />
                    Category Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">
                        Total Articles
                      </span>
                      <span className="font-semibold text-foreground">
                        {posts.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">
                        Total Read Time
                      </span>
                      <span className="font-semibold text-foreground">
                        {posts.reduce((acc, post) => acc + post.readTime, 0)}m
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">
                        Last Updated
                      </span>
                      <span className="font-semibold text-foreground">
                        {posts[0]?.date || "N/A"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Categories */}
              <div>
                <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                  Related Categories
                </h3>
                <div className="space-y-3">
                  {relatedCategories.map((cat) => (
                    <Card
                      key={cat.slug}
                      className="hover:bg-accent hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      <a href={`/categories/${cat.slug}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{cat.icon}</span>
                              <div>
                                <h4 className="font-semibold text-sm text-foreground">
                                  {cat.name}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {cat.count} articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-foreground">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Get the latest {category.name.toLowerCase()} articles
                    delivered to your inbox.
                  </p>
                  <Button className="w-full">Subscribe Now</Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
