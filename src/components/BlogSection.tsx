"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogs";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="blog" className="relative py-[var(--section-gap)] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-neon-cyan mb-2 block">
            03. &lt;blog&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Latest{" "}
            <span className="gradient-text-cyber">Writings</span>
          </h2>
          <p className="max-w-xl text-text-secondary">
            Thoughts on AI engineering, web development, and the intersection of
            technology and creativity.
          </p>
        </motion.div>

        {/* Blog cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-border text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/30 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f2ff11" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
            <span className="text-neon-cyan">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
