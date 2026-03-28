"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

const allCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="pt-12 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-neon-cyan transition-colors mb-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -3 }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-neon-cyan mb-2 block">
              /blog
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              All{" "}
              <span className="gradient-text-cyber">Posts</span>
            </h1>
            <p className="max-w-xl text-text-secondary text-lg">
              Exploring ideas at the intersection of AI, engineering, and
              creative technology.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Category filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {allCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                  activeCategory === cat
                    ? "border-neon-cyan/50 text-neon-cyan bg-neon-cyan/10"
                    : "border-border text-text-secondary hover:text-text-primary hover:border-text-muted/40"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Posts grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted font-mono">
                No posts in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
