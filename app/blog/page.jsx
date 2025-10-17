import { Search, Filter, TrendingUp, X } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import db from "@/lib/prisma";

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: { status: "PUBLISHED" },
    include: {
      author: true,
      category: true,
      tags: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  const categories = await db.category.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });

  const tags = await db.tag.findMany({});

  // For now, we'll keep the client-side filtering logic minimal
  // and focus on displaying all fetched posts.
  // The filtering and search functionality will need to be re-implemented
  // using client components or server actions if needed.

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

            {/* Search Bar - currently non-functional in server component */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
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
              {/* Static categories for now, will need client component for interaction */}
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border whitespace-nowrap transition-all bg-card border-border hover:border-primary/50 text-foreground`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-75">({category._count.posts})</span>
                </button>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 border-primary/30 hover:bg-primary/10"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Filters Panel - currently non-functional in server component */}
        {/* Selected Tags - currently non-functional in server component */}

        {/* Blog Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            All Articles
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Showing {posts.length} articles
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard {...post} image={post.featuredImage} />
            </div>
          ))}
        </div>

        {/* Pagination - currently non-functional in server component */}
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