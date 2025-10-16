import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { Card } from "@/components/ui/card";
import { Bookmark, Eye, Heart, Clock } from "lucide-react";

const savedPosts = [
  {
    id: 1,
    title: "10 Tips for Better Code Reviews",
    author: "Jane Smith",
    views: 2341,
    likes: 156,
    readTime: "5 min read",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    author: "Mike Johnson",
    views: 3421,
    likes: 234,
    readTime: "8 min read",
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Building Scalable Microservices",
    author: "Sarah Williams",
    views: 1876,
    likes: 98,
    readTime: "12 min read",
    date: "2024-01-12",
  },
];

export default function SavedPage() {
  return (
    <div>
      <DashboardNavbar title="Saved Posts" />

      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Bookmarked Articles
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Posts you've saved for later reading
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {savedPosts.map((post) => (
            <Card
              key={post.id}
              className="p-6 bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground text-lg leading-tight">
                    {post.title}
                  </h3>
                  <Bookmark className="h-5 w-5 text-primary fill-primary" />
                </div>

                <p className="text-sm text-muted-foreground">
                  by {post.author}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Saved on {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
