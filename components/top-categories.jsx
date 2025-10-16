// "use client";

// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";
// import {
//   ArrowRight,
//   TrendingUp,
//   Laptop,
//   Palette,
//   TrendingUpIcon,
//   Sparkles,
//   Zap,
//   Smartphone,
// } from "lucide-react";

// export default function TopCategories() {
//   const categories = [
//     {
//       id: 1,
//       name: "Technology",
//       slug: "technology",
//       description: "Latest in tech, AI, and innovation",
//       postCount: 156,
//       Icon: Laptop,
//       colorClass: "text-blue-600",
//       bgClass: "bg-blue-50 dark:bg-blue-950/30",
//     },
//     {
//       id: 2,
//       name: "Design",
//       slug: "design",
//       description: "UI/UX, graphics, and creative inspiration",
//       postCount: 89,
//       Icon: Palette,
//       colorClass: "text-accent",
//       bgClass: "bg-accent/10",
//     },
//     {
//       id: 3,
//       name: "Business",
//       slug: "business",
//       description: "Entrepreneurship, startups, and growth",
//       postCount: 124,
//       Icon: TrendingUpIcon,
//       colorClass: "text-green-600",
//       bgClass: "bg-green-50 dark:bg-green-950/30",
//     },
//     {
//       id: 4,
//       name: "Lifestyle",
//       slug: "lifestyle",
//       description: "Health, wellness, and personal growth",
//       postCount: 203,
//       Icon: Sparkles,
//       colorClass: "text-orange-600",
//       bgClass: "bg-orange-50 dark:bg-orange-950/30",
//     },
//     {
//       id: 5,
//       name: "Development",
//       slug: "development",
//       description: "Code tutorials, frameworks, and tools",
//       postCount: 178,
//       Icon: Zap,
//       colorClass: "text-indigo-600",
//       bgClass: "bg-indigo-50 dark:bg-indigo-950/30",
//     },
//     {
//       id: 6,
//       name: "Marketing",
//       slug: "marketing",
//       description: "SEO, content strategy, and social media",
//       postCount: 95,
//       Icon: Smartphone,
//       colorClass: "text-pink-600",
//       bgClass: "bg-pink-50 dark:bg-pink-950/30",
//     },
//   ];

//   return (
//     <section className="w-full py-16 px-4 bg-background">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4 animate-fade-in-up">
//           <div>
//             <Badge className="mb-4 bg-accent/20 text-accent-foreground hover:bg-accent/30 border-accent/30">
//               Explore Topics
//             </Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
//               Top Categories
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl">
//               Discover content across our most popular topics and find what
//               interests you most
//             </p>
//           </div>
//           <Link
//             href="/categories"
//             className="flex items-center gap-2 text-accent hover:text-accent/80 hover:gap-3 transition-all duration-300 font-medium group"
//           >
//             View All Categories
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {categories.map((category, index) => {
//             const IconComponent = category.Icon;
//             return (
//               <Link
//                 key={category.id}
//                 href={`/category/${category.slug}`}
//                 className="group animate-scale-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <Card className="relative overflow-hidden h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 bg-card">
//                   <div className="relative z-10">
//                     <div className="flex items-start justify-between mb-4">
//                       <div
//                         className={`p-3 rounded-xl ${category.bgClass} ${category.colorClass} transition-transform group-hover:scale-110 duration-300`}
//                       >
//                         <IconComponent className="w-8 h-8" />
//                       </div>
//                       {index < 3 && (
//                         <Badge
//                           variant="secondary"
//                           className="flex items-center gap-1 bg-secondary text-secondary-foreground"
//                         >
//                           <TrendingUp className="w-3 h-3" />
//                           Trending
//                         </Badge>
//                       )}
//                     </div>

//                     <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors text-card-foreground">
//                       {category.name}
//                     </h3>

//                     <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                       {category.description}
//                     </p>

//                     <div className="flex items-center justify-between">
//                       <span className="text-sm font-medium text-muted-foreground">
//                         {category.postCount} articles
//                       </span>
//                       <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                     </div>
//                   </div>

//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                 </Card>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Laptop,
  Palette,
  TrendingUpIcon,
  Sparkles,
  Zap,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TopCategories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      slug: "technology",
      description: "Latest in tech, AI, and innovation",
      postCount: 156,
      Icon: Laptop,
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      id: 2,
      name: "Design",
      slug: "design",
      description: "UI/UX, graphics, and creative inspiration",
      postCount: 89,
      Icon: Palette,
      colorClass: "text-accent",
      bgClass: "bg-accent/10",
    },
    {
      id: 3,
      name: "Business",
      slug: "business",
      description: "Entrepreneurship, startups, and growth",
      postCount: 124,
      Icon: TrendingUpIcon,
      colorClass: "text-green-600",
      bgClass: "bg-green-50 dark:bg-green-950/30",
    },
    {
      id: 4,
      name: "Lifestyle",
      slug: "lifestyle",
      description: "Health, wellness, and personal growth",
      postCount: 203,
      Icon: Sparkles,
      colorClass: "text-orange-600",
      bgClass: "bg-orange-50 dark:bg-orange-950/30",
    },
    {
      id: 5,
      name: "Development",
      slug: "development",
      description: "Code tutorials, frameworks, and tools",
      postCount: 178,
      Icon: Zap,
      colorClass: "text-indigo-600",
      bgClass: "bg-indigo-50 dark:bg-indigo-950/30",
    },
    {
      id: 6,
      name: "Marketing",
      slug: "marketing",
      description: "SEO, content strategy, and social media",
      postCount: 95,
      Icon: Smartphone,
      colorClass: "text-pink-600",
      bgClass: "bg-pink-50 dark:bg-pink-950/30",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 gap-4"
        >
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">
                Trending Categories
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
              Top Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover content across our most popular topics and find what
              interests you most
            </p>
          </div>
          <Link
            href="/categories"
            className="flex items-center gap-2 text-accent hover:text-accent/80 hover:gap-3 transition-all duration-300 font-medium group"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.Icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <Link href={`/category/${category.slug}`}>
                  <Card className="relative overflow-hidden h-full p-6 border-2 bg-card hover:border-accent/50">
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl ${category.bgClass} ${category.colorClass}`}
                        >
                          <IconComponent className="w-8 h-8" />
                        </div>
                        {category.id <= 3 && (
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1 bg-secondary text-secondary-foreground"
                          >
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                        {category.name}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {category.postCount} articles
                        </span>
                        <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
