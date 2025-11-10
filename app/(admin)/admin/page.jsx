"use client";

import AnalyticsDashboard from "@/components/admin/analytics/AnalyticsDashboard";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome to your blog admin panel
        </p>
      </div>
      <AnalyticsDashboard />
    </div>
  );
}
