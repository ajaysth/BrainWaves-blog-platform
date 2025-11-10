"use client";

import { Eye, Heart, BarChart3, TrendingUp } from "lucide-react";
import { PostViewsChart } from "./PostViewsChart";
import { PostLikesChart } from "./PostLikesChart";
import { TrendingPostsChart } from "./TrendingPostsChart";
import { CategoryBreakdown } from "./CategoryBreakdown";

const StatCard = ({ icon: Icon, label, value, color }) => {
  const colorClasses = {
    blue: "text-blue-500",
    red: "text-red-500",
    teal: "text-teal-500",
    orange: "text-orange-500",
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className={`opacity-20 ${colorClasses[color]}`}>
          <Icon size={32} />
        </div>
      </div>
    </div>
  );
};

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Eye} label="Total Views" value="12,450" color="blue" />
        <StatCard icon={Heart} label="Total Likes" value="2,340" color="red" />
        <StatCard
          icon={BarChart3}
          label="Published Posts"
          value="45"
          color="teal"
        />
        <StatCard
          icon={TrendingUp}
          label="Trending Posts"
          value="8"
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PostViewsChart />
        <PostLikesChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendingPostsChart />
        <CategoryBreakdown />
      </div>
    </div>
  );
}
