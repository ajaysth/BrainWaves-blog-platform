"use client";

import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Heart } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const viewsData = [
  { name: "Mon", views: 400 },
  { name: "Tue", views: 300 },
  { name: "Wed", views: 600 },
  { name: "Thu", views: 800 },
  { name: "Fri", views: 500 },
  { name: "Sat", views: 700 },
  { name: "Sun", views: 900 },
];

const engagementData = [
  { name: "Week 1", likes: 120, comments: 45 },
  { name: "Week 2", likes: 150, comments: 60 },
  { name: "Week 3", likes: 180, comments: 75 },
  { name: "Week 4", likes: 200, comments: 90 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <DashboardNavbar title="Analytics" />

      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Performance Metrics
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Track your blog's performance over time
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-chart-1/10 p-3">
                <Eye className="h-6 w-6 text-chart-1" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold text-foreground">12.5K</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-chart-2/10 p-3">
                <Users className="h-6 w-6 text-chart-2" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Unique Visitors</p>
                <p className="text-2xl font-bold text-foreground">8.3K</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-chart-3/10 p-3">
                <Heart className="h-6 w-6 text-chart-3" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Likes</p>
                <p className="text-2xl font-bold text-foreground">3.2K</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-chart-4/10 p-3">
                <TrendingUp className="h-6 w-6 text-chart-4" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Read Time</p>
                <p className="text-2xl font-bold text-foreground">4.2m</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Weekly Views
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={viewsData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Engagement Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="likes" fill="hsl(var(--chart-3))" />
                <Bar dataKey="comments" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}
