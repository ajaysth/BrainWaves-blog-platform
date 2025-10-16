"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog-card";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

const trendingBlogs = [
  {
    slug: "future-of-web-development-2025",
    title: "The Future of Web Development: What's Next in 2025",
    excerpt:
      "Explore the cutting-edge technologies and frameworks that are shaping the future of web development. From AI integration to new JavaScript features.",
    category: "Technology",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    image: "/cardimg/1.jpg",
    trending: true,
  },
  {
    slug: "mastering-minimalist-design",
    title: "Mastering the Art of Minimalist Designing",
    excerpt:
      "Discover how less can be more in design. Learn the principles of minimalism and how to apply them to create stunning, user-friendly interfaces.",
    category: "Design",
    date: "Jan 12, 2025",
    readTime: "6 min read",
    image: "/cardimg/2.jpg",
    trending: true,
  },
  {
    slug: "building-scalable-applications",
    title: "Building Scalable Applications with Modern Architecture",
    excerpt:
      "A deep dive into microservices, serverless computing, and cloud-native architectures that power today's most successful applications.",
    category: "Development",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    image: "/cardimg/3.jpg",
    trending: true,
  },
  {
    slug: "psychology-behind-user-experience",
    title: "The Psychology Behind User Experience",
    excerpt:
      "Understanding how users think and behave is crucial for creating exceptional digital experiences. Learn the psychology principles that drive UX.",
    category: "UX Design",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    image: "/cardimg/4.jpg",
    trending: false,
  },
  {
    slug: "ai-machine-learning-practical-guide",
    title: "AI and Machine Learning: A Practical Guide",
    excerpt:
      "Demystifying AI and ML for developers. Learn how to integrate intelligent features into your applications with practical examples.",
    category: "AI/ML",
    date: "Jan 5, 2025",
    readTime: "12 min read",
    image: "/cardimg/5.jpg",
    trending: true,
  },
  {
    slug: "sustainable-tech-building-better-tomorrow",
    title: "Sustainable Tech: Building for a Better Tomorrow",
    excerpt:
      "How technology companies are addressing climate change and building sustainable solutions for the future of our planet.",
    category: "Sustainability",
    date: "Jan 3, 2025",
    readTime: "9 min read",
    image: "/cardimg/6.jpg",
    trending: false,
  },
];

export default function TrendingBlogs() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">
              Top Trending
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Most Popular Stories
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the articles our community can't stop reading
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingBlogs.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              {...blog}
              index={index}
              image={blog.image}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-colors"
            >
              View All Articles
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
