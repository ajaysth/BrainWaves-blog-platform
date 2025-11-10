"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { post: "Next.js Guide", likes: 120 },
  { post: "React Tips", likes: 95 },
  { post: "CSS Tricks", likes: 150 },
  { post: "JS Basics", likes: 80 },
  { post: "Web Design", likes: 110 },
];

export function PostLikesChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Top Posts by Likes</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="post" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="likes" fill="#38a169" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
