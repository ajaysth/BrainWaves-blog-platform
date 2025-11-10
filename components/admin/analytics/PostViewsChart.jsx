"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", views: 400 },
  { day: "Tue", views: 600 },
  { day: "Wed", views: 800 },
  { day: "Thu", views: 700 },
  { day: "Fri", views: 1200 },
  { day: "Sat", views: 900 },
  { day: "Sun", views: 1100 },
];

export function PostViewsChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Post Views (7 Days)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#3182ce"
            strokeWidth={2}
            dot={{ fill: "#3182ce" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
