"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              New: Discover inspiring stories
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            <span
              className={`block transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Stories that
            </span>
            <span
              className={`block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-accent to-foreground bg-[length:200%_auto] transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animation: isVisible ? "shimmer 3s linear infinite" : "none",
              }}
            >
              inspire minds
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Explore thoughtful perspectives, creative insights, and meaningful
            conversations that shape our world.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              Start Reading
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-secondary/50 transition-all hover:scale-105 bg-transparent"
            >
              Browse Topics
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Articles</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                50K+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                20+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Categories
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  );
}
