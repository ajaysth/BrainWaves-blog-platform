"use client";

import { useState } from "react";
import { Save, Bell, Lock, Palette, Database, Eye, EyeOff } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    siteName: "My Blog",
    siteDescription: "A beautiful blog platform",
    postsPerPage: 10,
    enableComments: true,
    enableNotifications: true,
    emailNotifications: true,
    darkMode: true,
    autoSave: true,
    backupFrequency: "weekly",
  });

  const tabs = [
    { id: "general", label: "General", icon: Palette },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "database", label: "Database", icon: Database },
  ];

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Manage your admin panel preferences and configurations
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg p-6">
        {/* General Settings */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleChange("siteName", e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Site Description
              </label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) =>
                  handleChange("siteDescription", e.target.value)
                }
                rows="3"
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Posts Per Page
                </label>
                <input
                  type="number"
                  value={settings.postsPerPage}
                  onChange={(e) =>
                    handleChange(
                      "postsPerPage",
                      Number.parseInt(e.target.value)
                    )
                  }
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Backup Frequency
                </label>
                <select
                  value={settings.backupFrequency}
                  onChange={(e) =>
                    handleChange("backupFrequency", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableComments}
                  onChange={(e) =>
                    handleChange("enableComments", e.target.checked)
                  }
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Enable Comments
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => handleChange("darkMode", e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Dark Mode
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoSave}
                  onChange={(e) => handleChange("autoSave", e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Auto Save
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Notifications Settings */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                Configure how you receive notifications about your blog
                activity.
              </p>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                <input
                  type="checkbox"
                  checked={settings.enableNotifications}
                  onChange={(e) =>
                    handleChange("enableNotifications", e.target.checked)
                  }
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Enable Notifications
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Receive in-app notifications
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) =>
                    handleChange("emailNotifications", e.target.checked)
                  }
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Email Notifications
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Receive email updates
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === "security" && (
          <div className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                Keep your account secure with strong passwords and two-factor
                authentication.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Two-Factor Authentication
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Add extra security to your account
                </p>
              </div>
            </label>
          </div>
        )}

        {/* Database Settings */}
        {activeTab === "database" && (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <p className="text-sm text-purple-900 dark:text-purple-200">
                Manage your database backups and maintenance tasks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                <Database size={18} />
                Create Backup
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg font-medium transition">
                <Database size={18} />
                Restore Backup
              </button>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Recent Backups
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Backup - 2024-01-15
                  </span>
                  <span className="text-xs text-slate-500">2.4 GB</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Backup - 2024-01-14
                  </span>
                  <span className="text-xs text-slate-500">2.3 GB</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105">
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
}
