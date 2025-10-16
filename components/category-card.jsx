"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function CategoryCard({ category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="relative h-full overflow-hidden border border-border bg-card transition-all duration-500 hover:border-foreground/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
              />
              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-4xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
              >
                {category.icon}
              </div>
            </div>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all duration-500 ${
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
              }`}
            >
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-medium tracking-tight text-card-foreground transition-colors group-hover:text-foreground">
              {category.name}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              <span className="font-medium">{category.postCount}</span>
              <span>articles</span>
            </div>
            {category.postCount > 40 && (
              <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                <TrendingUp className="h-3 w-3" />
                <span>Popular</span>
              </div>
            )}
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-5`}
        />

        <div
          className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${
            isHovered ? "translate-x-full" : ""
          }`}
        />
      </Card>
    </Link>
  );
}
