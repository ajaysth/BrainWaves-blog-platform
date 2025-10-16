"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function CategoryHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {mounted && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                Discover your interests
              </span>
            </div>
          )}

          <h1 className="text-balance font-sans text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Explore our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                categories
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30" />
            </span>
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Discover stories, insights, and ideas across diverse topics. Find
            what inspires you.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-primary/3 blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
      </div>
    </section>
  );
}
