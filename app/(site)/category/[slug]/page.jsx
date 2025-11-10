import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, TrendingUpIcon, BookOpenIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DynamicLucideIcon } from "@/components/ui/dynamic-lucide-icon";
import prisma from "@/lib/prisma";
import CategoryPostsClient from "@/components/category-posts-client";

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      posts: {
        include: {
          author: true,
        },
      },
    },
  });

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="p-12 text-center border-dashed">
          <BookOpenIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2 text-foreground">
            Category not found
          </h3>
          <p className="text-muted-foreground">
            The category you are looking for does not exist.
          </p>
          <Button asChild className="mt-6">
            <a href="/categories">Back to all categories</a>
          </Button>
        </Card>
      </div>
    );
  }

  const posts = category.posts || [];

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
              {/* Use DynamicLucideIcon for category icon */}
              {category.icon && (
                <DynamicLucideIcon
                  name={category.icon}
                  className="h-12 w-12 text-foreground"
                />
              )}
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
          <CategoryPostsClient initialPosts={posts} />

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
                        {posts[0]?.createdAt
                          ? new Date(posts[0].createdAt).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Categories - Removed for now */}
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
