"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Week 1", trending: 10 },
  { week: "Week 2", trending: 15 },
  { week: "Week 3", trending: 12 },
  { week: "Week 4", trending: 20 },
  { week: "Week 5", trending: 18 },
];

export function TrendingPostsChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Trending Posts Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="trending"
            fill="#ed8936"
            stroke="#ed8936"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
