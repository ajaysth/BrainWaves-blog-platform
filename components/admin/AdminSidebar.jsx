"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Folder,
  Tag,
  Users,
  BarChart3,
  Settings,
  ChevronRight,
  LogOut,
  X,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/posts", label: "Posts", icon: FileText },
  { href: "/admin/categories", label: "Categories", icon: Folder },
  { href: "/admin/tags", label: "Tags", icon: Tag },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

export default function AdminSidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const shouldExpand = isOpen || isHovered;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed md:relative z-40 h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-r border-slate-700/50 flex flex-col shadow-2xl transition-all duration-300 ease-out ${
          shouldExpand ? "w-64" : "w-20"
        } ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            {shouldExpand && (
              <div className="transition-opacity duration-200">
                <h2 className="text-lg font-bold text-white">Admin</h2>
                <p className="text-xs text-slate-400">Management</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {shouldExpand && (
                    <span className="flex-1 font-medium text-sm transition-opacity duration-200">
                      {item.label}
                    </span>
                  )}
                  {isActive && shouldExpand && <ChevronRight size={16} />}

                  {/* Tooltip for collapsed state */}
                  {!shouldExpand && (
                    <div className="absolute left-20 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {item.label}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-slate-700/50 space-y-1">
          <Link href="/admin/settings">
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200 group relative">
              <Settings size={20} className="flex-shrink-0" />
              {shouldExpand && (
                <span className="font-medium text-sm">Settings</span>
              )}
              {!shouldExpand && (
                <div className="absolute left-20 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Settings
                </div>
              )}
            </div>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-900/10 transition-all duration-200 group relative">
            <LogOut size={20} className="flex-shrink-0" />
            {shouldExpand && (
              <span className="font-medium text-sm">Logout</span>
            )}
            {!shouldExpand && (
              <div className="absolute left-20 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Logout
              </div>
            )}
          </button>
        </div>

        {/* Close button for mobile */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        )}
      </div>
    </>
  );
}
