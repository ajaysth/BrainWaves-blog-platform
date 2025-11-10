"use client";

import AnalyticsDashboard from "@/components/admin/analytics/AnalyticsDashboard";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Analytics
      </h1>
      <AnalyticsDashboard />
    </div>
  );
}
