"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, TrendingUp, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  trending,
  slug,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`}>
        <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 hover:border-accent/50 py-0 gap-0">
          <CardHeader className="p-0 gap-0">
            <div className="relative overflow-hidden aspect-video">
              <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Trending Badge */}
              {trending && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground flex items-center gap-1 px-3 py-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </Badge>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <Badge
                  variant="secondary"
                  className="bg-background/90 backdrop-blur-sm"
                >
                  {category}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pb-0">
            <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
              {title}
            </h3>

            <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          </CardContent>

          <CardFooter className="pt-0 flex justify-between items-center">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
