"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BookmarkIcon,
  Share2Icon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  ClockIcon,
  CalendarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BlogPostDetail({ post }) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(progress);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("h2[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress value={readingProgress} className="h-1 rounded-none" />
      </div>

      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <a href="/blog" className="flex items-center gap-2">
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Blog
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <BookmarkIcon
                  className={cn("h-5 w-5", isBookmarked && "fill-current")}
                />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2Icon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {post.tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "block text-sm text-left w-full py-1.5 px-3 rounded-md transition-colors hover:bg-accent",
                      activeSection === item.id
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                  Share Article
                </h3>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="justify-start bg-transparent"
                    onClick={() => handleShare("twitter")}
                  >
                    <TwitterIcon className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="justify-start bg-transparent"
                    onClick={() => handleShare("linkedin")}
                  >
                    <LinkedinIcon className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="justify-start bg-transparent"
                    onClick={() => handleShare("facebook")}
                  >
                    <FacebookIcon className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-6">
            {/* Article Header */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  {post.readTime} min read
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-12 rounded-xl overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {post.content.map((section, index) => (
                <div key={index}>
                  {section.type === "heading" && (
                    <h2 id={section.id} className="scroll-mt-24">
                      {section.text}
                    </h2>
                  )}
                  {section.type === "paragraph" && <p>{section.text}</p>}
                  {section.type === "code" && (
                    <div className="relative group">
                      <pre className="relative">
                        <code>{section.code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyCode(section.code, index)}
                      >
                        {copiedCode === index ? (
                          <>
                            <CheckIcon className="h-4 w-4 mr-1" />
                            Copied
                          </>
                        ) : (
                          <>
                            <CopyIcon className="h-4 w-4 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                  {section.type === "quote" && (
                    <blockquote>{section.text}</blockquote>
                  )}
                  {section.type === "list" && (
                    <ul>
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </article>

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {post.author.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-sm leading-relaxed">{post.author.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.previousPost && (
                <Card className="hover:bg-accent transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ArrowLeftIcon className="h-4 w-4" />
                      Previous Post
                    </div>
                    <h4 className="font-semibold">{post.previousPost.title}</h4>
                  </CardContent>
                </Card>
              )}
              {post.nextPost && (
                <Card className="hover:bg-accent transition-colors cursor-pointer md:col-start-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      Next Post
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                    <h4 className="font-semibold text-right">
                      {post.nextPost.title}
                    </h4>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>

          {/* Related Posts Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                Related Posts
              </h3>
              <div className="space-y-4">
                {post.relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="hover:bg-accent transition-colors cursor-pointer"
                  >
                    <CardContent className="p-4">
                      {relatedPost.image && (
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-32 object-cover rounded-md mb-3"
                        />
                      )}
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {relatedPost.readTime} min read
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
