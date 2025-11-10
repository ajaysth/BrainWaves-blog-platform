"use client";

import { Search, Bell, Settings, Menu, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function AdminHeader({ onMenuClick }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 px-6 py-4 shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Left: Menu & Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 text-slate-300 hover:bg-slate-700 rounded-lg transition"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Admin Panel</h1>
              <p className="text-slate-400 text-xs">Blog Management System</p>
            </div>
          </div>
        </div>

        {/* Center: Search */}
        <div className="relative max-w-md hidden md:block">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search posts, categories..."
            className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-slate-300 hover:bg-slate-700/50 rounded-lg transition group">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {/* Settings */}
          <Link href="/admin/settings">
            <button className="p-2 text-slate-300 hover:bg-slate-700/50 rounded-lg transition">
              <Settings size={20} />
            </button>
          </Link>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="p-2 text-slate-300 hover:bg-slate-700/50 rounded-lg transition flex items-center gap-2"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                A
              </div>
              <span className="text-sm text-slate-300 hidden sm:inline">
                Admin
              </span>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl z-50 backdrop-blur-sm">
                <div className="p-4 border-b border-slate-700/50">
                  <p className="text-white font-semibold text-sm">Admin User</p>
                  <p className="text-slate-400 text-xs">admin@example.com</p>
                </div>
                <Link href="/admin/settings">
                  <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700/50 text-sm flex items-center gap-2 transition">
                    <Settings size={16} />
                    Profile Settings
                  </button>
                </Link>
                <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700/50 text-sm flex items-center gap-2 transition border-t border-slate-700/50">
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
