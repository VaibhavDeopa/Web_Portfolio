"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-[var(--section-gap)] px-6">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-magenta/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-neon-cyan mb-2 block">
            02. &lt;projects&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured{" "}
            <span className="gradient-text-cyber">Projects</span>
          </h2>
          <p className="max-w-xl text-text-secondary">
            A selection of projects that showcase my expertise in AI, full-stack
            development, and creative engineering.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                activeCategory === cat.id
                  ? "border-neon-cyan/50 text-neon-cyan bg-neon-cyan/10"
                  : "border-border text-text-secondary hover:text-text-primary hover:border-text-muted/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/VaibhavDeopa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-border text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/30 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f2ff11" }}
            whileTap={{ scale: 0.95 }}
          >
            View All on GitHub
            <span className="text-neon-cyan">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
