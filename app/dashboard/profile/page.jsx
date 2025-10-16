import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { Card } from "@/components/ui/card";
import { FileText, Heart, MessageSquare } from "lucide-react";

const recentActivity = [
  {
    id: 1,
    type: "post",
    title: "Published a new post",
    description: "Getting Started with Next.js 14",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "like",
    title: "Received 15 new likes",
    description: "On your post 'Advanced React Patterns'",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "comment",
    title: "New comment on your post",
    description: "Someone commented on 'Building Scalable APIs'",
    time: "1 day ago",
  },
];

export default function ProfilePage() {
  return (
    <div>
      <DashboardNavbar title="Profile" />

      <div className="p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="rounded-lg bg-primary/10 p-2">
                      {activity.type === "post" && (
                        <FileText className="h-5 w-5 text-primary" />
                      )}
                      {activity.type === "like" && (
                        <Heart className="h-5 w-5 text-primary" />
                      )}
                      {activity.type === "comment" && (
                        <MessageSquare className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {activity.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Top Posts
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Getting Started with Next.js 14", views: 1234 },
                  { title: "Advanced React Patterns", views: 987 },
                  { title: "Building Scalable APIs", views: 856 },
                ].map((post, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {post.title}
                    </p>
                    <span className="text-sm text-muted-foreground">
                      {post.views} views
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
