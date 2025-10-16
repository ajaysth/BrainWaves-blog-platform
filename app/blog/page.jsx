"use client";

import { useState } from "react";
import { Search, Filter, TrendingUp, X } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "All", count: 156, trending: true },
  { name: "Technology", count: 45, trending: true },
  { name: "Design", count: 32, trending: false },
  { name: "Business", count: 28, trending: true },
  { name: "Lifestyle", count: 24, trending: false },
  { name: "Health", count: 18, trending: false },
  { name: "Travel", count: 9, trending: true },
];

const tags = [
  "React",
  "Next.js",
  "JavaScript",
  "CSS",
  "UI/UX",
  "AI",
  "Web Dev",
  "Mobile",
  "Cloud",
  "DevOps",
];

const mockPosts = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt:
      "Learn how to build modern web applications with Next.js 15 and its powerful features.",
    category: "Technology",
    tags: ["Next.js", "React", "Web Dev"],
    image: "cardimg/1.jpg",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    views: "2.4K",
    likes: "156",
  },
  {
    id: 2,
    slug: "design-systems-2024",
    title: "Building Scalable Design Systems in 2024",
    excerpt:
      "Explore best practices for creating and maintaining design systems that scale.",
    category: "Design",
    tags: ["UI/UX", "Design", "CSS"],
    image: null,
    date: "Dec 14, 2024",
    readTime: "8 min read",
    views: "1.8K",
    likes: "124",
  },
  {
    id: 3,
    slug: "ai-business-transformation",
    title: "How AI is Transforming Modern Business",
    excerpt:
      "Discover the impact of artificial intelligence on business operations and strategy.",
    category: "Business",
    tags: ["AI", "Business", "Technology"],
    image: null,
    date: "Dec 13, 2024",
    readTime: "6 min read",
    views: "3.2K",
    likes: "198",
  },
  {
    id: 4,
    slug: "healthy-work-life-balance",
    title: "Achieving Work-Life Balance in Tech",
    excerpt:
      "Practical tips for maintaining a healthy balance between work and personal life.",
    category: "Lifestyle",
    tags: ["Lifestyle", "Health", "Productivity"],
    image: null,
    date: "Dec 12, 2024",
    readTime: "4 min read",
    views: "1.5K",
    likes: "89",
  },
  {
    id: 5,
    slug: "cloud-architecture-patterns",
    title: "Modern Cloud Architecture Patterns",
    excerpt:
      "Understanding microservices, serverless, and other cloud-native patterns.",
    category: "Technology",
    tags: ["Cloud", "DevOps", "Architecture"],
    image: null,
    date: "Dec 11, 2024",
    readTime: "10 min read",
    views: "2.1K",
    likes: "142",
  },
  {
    id: 6,
    slug: "mobile-first-design",
    title: "Mobile-First Design Principles",
    excerpt:
      "Learn how to create responsive designs that prioritize mobile experiences.",
    category: "Design",
    tags: ["Mobile", "UI/UX", "Design"],
    image: null,
    date: "Dec 10, 2024",
    readTime: "7 min read",
    views: "1.9K",
    likes: "112",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center space-y-4 animate-fadeInUp">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover insightful articles and stay updated with the latest
              trends
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-12 bg-card border-border focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-3 pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border whitespace-nowrap transition-all ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg"
                      : "bg-card border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                  {category.trending && <TrendingUp className="h-3.5 w-3.5" />}
                </button>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className="shrink-0 border-primary/30 hover:bg-primary/10"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-8 p-6 rounded-xl bg-card border border-border animate-fadeInUp">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTags([])}
                className="text-primary hover:text-accent"
              >
                Clear All
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={
                        selectedTags.includes(tag) ? "default" : "outline"
                      }
                      className={`cursor-pointer transition-all ${
                        selectedTags.includes(tag)
                          ? "bg-gradient-to-r from-primary to-accent text-white border-0"
                          : "border-primary/30 hover:bg-primary/10"
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Selected Tags */}
        {selectedTags.length > 0 && (
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">
              Active filters:
            </span>
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                className="bg-gradient-to-r from-primary to-accent text-white border-0 cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                #{tag}
                <X className="ml-1 h-3 w-3" />
              </Badge>
            ))}
          </div>
        )}

        {/* Blog Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {selectedCategory === "All"
              ? "All Articles"
              : `${selectedCategory} Articles`}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Showing {mockPosts.length} articles
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockPosts.map((post, index) => (
            <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            Previous
          </Button>
          <Button className="bg-gradient-to-r from-primary to-accent text-white">
            1
          </Button>
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            2
          </Button>
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            3
          </Button>
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
