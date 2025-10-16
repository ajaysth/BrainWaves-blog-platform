import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const gradientVariants = {
  blue: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
  purple: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
  green: "from-green-500/10 to-emerald-500/10 border-green-500/20",
  orange: "from-orange-500/10 to-amber-500/10 border-orange-500/20",
};

const iconBgVariants = {
  blue: "bg-gradient-to-br from-blue-500 to-cyan-500",
  purple: "bg-gradient-to-br from-purple-500 to-pink-500",
  green: "bg-gradient-to-br from-green-500 to-emerald-500",
  orange: "bg-gradient-to-br from-orange-500 to-amber-500",
};

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  trend = "up",
  variant = "blue",
}) {
  const isPositive = trend === "up";

  return (
    <Card
      className={cn(
        "p-6 bg-gradient-to-br border-2 hover:shadow-lg transition-all duration-300",
        gradientVariants[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <div className="flex items-center gap-1">
              {isPositive ? (
                <ArrowUpRight className="h-4 w-4 text-green-600" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-600" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  isPositive ? "text-green-600" : "text-red-600"
                )}
              >
                {change}
              </span>
              <span className="text-sm text-muted-foreground">
                vs last month
              </span>
            </div>
          )}
        </div>
        {Icon && (
          <div
            className={cn("rounded-lg p-3 shadow-md", iconBgVariants[variant])}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
        )}
      </div>
    </Card>
  );
}
