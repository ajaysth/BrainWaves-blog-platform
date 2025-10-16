"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Bookmark,
  BarChart3,
  Settings,
  User,
  PenSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Posts", href: "/dashboard/posts", icon: FileText },
  { name: "Create Post", href: "/dashboard/posts/new", icon: PenSquare },
  { name: "Saved", href: "/dashboard/saved", icon: Bookmark },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 h-screen border-r border-sidebar-border bg-sidebar transition-all duration-300",
        isHovered ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b border-sidebar-border px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            {isHovered && (
              <span className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
                BlogHub
              </span>
            )}
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-2 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary shadow-sm"
                    : "text-sidebar-foreground/70 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-sidebar-foreground"
                )}
              >
                <item.icon
                  className={cn("h-5 w-5 shrink-0", isActive && "text-primary")}
                />
                {isHovered && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-sidebar-border p-3 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md">
              <User className="h-5 w-5" />
            </div>
            {isHovered && (
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium text-sidebar-foreground">
                  John Doe
                </p>
                <p className="truncate text-xs text-sidebar-foreground/60">
                  john@example.com
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
