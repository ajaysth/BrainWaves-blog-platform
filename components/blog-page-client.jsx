"use client";

import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const chipItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function BlogPageClient({ posts, categories }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden border-b border-border"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div className="text-center space-y-4" variants={fadeUp}>
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-foreground"
            >
              Explore Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Discover insightful articles and stay updated with the latest trends
            </motion.p>

            {/* Search Bar - non-functional (UI only) */}
            <motion.div variants={fadeUp} className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-12 pr-4 h-12 bg-card border-border focus:border-primary/50 transition-colors"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 overflow-x-auto">
            <motion.div
              className="flex gap-3 pb-2"
              variants={gridContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  variants={chipItem}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border whitespace-nowrap transition-all bg-card border-border hover:border-primary/50 text-foreground shadow-sm hover:shadow"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-75">({category._count.posts})</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 border-primary/30 hover:bg-primary/10"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Blog Heading */}
        <motion.div
          className="mb-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground">
            All Articles
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-muted-foreground mt-1">
            Showing {posts.length} articles
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={gridItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.6 }}
            >
              <BlogCard {...post} image={post.featuredImage} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            Previous
          </Button>
          <Button className="bg-gradient-to-r from-primary to-accent text-white">1</Button>
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            2
          </Button>
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            3
          </Button>
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            Next
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
