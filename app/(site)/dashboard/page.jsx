import { FileText, Eye, Heart, TrendingUp } from "lucide-react";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { StatCard } from "@/components/dashboard/StatCard";
import { PostTable } from "@/components/dashboard/PostTable";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <DashboardNavbar title="Overview" />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Posts"
            value="24"
            change="+12%"
            icon={FileText}
            trend="up"
            variant="blue"
          />
          <StatCard
            title="Total Views"
            value="12.5K"
            change="+23%"
            icon={Eye}
            trend="up"
            variant="purple"
          />
          <StatCard
            title="Total Likes"
            value="3.2K"
            change="+8%"
            icon={Heart}
            trend="up"
            variant="green"
          />
          <StatCard
            title="Engagement Rate"
            value="4.8%"
            change="-2%"
            icon={TrendingUp}
            trend="down"
            variant="orange"
          />
        </div>

        {/* Recent Posts */}
        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Recent Posts
            </h2>
            <a
              href="/dashboard/posts"
              className="text-sm text-primary hover:text-accent transition-colors font-medium"
            >
              View all →
            </a>
          </div>
          <PostTable />
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-3 shadow-md group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Create New Post
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Start writing your next blog post
                </p>
              </div>
            </div>
          </Card>

          <Link href="/dashboard/analytics" className="block">
            <Card className="p-6 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-2 border-green-500/20 hover:border-green-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-3 shadow-md group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    View Analytics
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Check your blog performance metrics
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
