"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export function CategoryListItem({ category }) {
  return (
    <Link href={`/category/${category.slug}`} className="group block">
      <Card className="overflow-hidden border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-primary/5">
        <div className="flex items-center gap-6 p-6">
          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br ${category.gradient} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-20`}
            />
            <div
              className={`relative flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-3xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105`}
            >
              {category.icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-medium tracking-tight text-card-foreground transition-colors group-hover:text-foreground">
              {category.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>

          {/* Stats and Arrow */}
          <div className="flex flex-shrink-0 items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span className="font-medium">{category.postCount}</span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
