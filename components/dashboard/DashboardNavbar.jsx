"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function DashboardNavbar({ title }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-16 items-center gap-4 px-6">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </h1>

        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="w-64 pl-9 bg-muted/50 border-border focus:border-primary/50 transition-colors"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-primary/10 transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-red-500 to-pink-500 animate-pulse" />
          </Button>
        </div>
      </div>
    </header>
  );
}
