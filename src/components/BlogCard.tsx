"use client";

import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const categoryColor =
    post.category === "AI Engineering"
      ? "#ff006e"
      : post.category === "AI"
      ? "#7b2ff7"
      : post.category === "Web Dev"
      ? "#00f2ff"
      : post.category === "Design"
      ? "#00ff88"
      : post.category === "Graphics"
      ? "#4361ee"
      : "#00f2ff";

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.article
      className="group relative rounded-[var(--radius-card)] overflow-hidden border border-border bg-surface hover:bg-surface-hover transition-all duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, borderColor: categoryColor + "44" }}
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${categoryColor}66 50%, transparent 100%)`,
          opacity: 0.5,
        }}
      />

      <div className="p-6 space-y-4">
        {/* Category + Date row */}
        <div className="flex items-center justify-between">
          <span
            className="px-3 py-1 text-xs font-mono rounded-full border"
            style={{
              color: categoryColor,
              borderColor: categoryColor + "33",
              backgroundColor: categoryColor + "0d",
            }}
          >
            {post.category}
          </span>
          <span className="text-xs text-text-muted font-mono">
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary group-hover:text-neon-cyan transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Clock size={12} />
            {post.readTime}
          </div>

          <motion.div
            className="flex items-center gap-1 text-sm text-text-muted group-hover:text-neon-cyan transition-colors"
            whileHover={{ x: 3 }}
          >
            Read
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
