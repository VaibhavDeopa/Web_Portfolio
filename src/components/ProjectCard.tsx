"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative rounded-[var(--radius-card)] overflow-hidden border border-border bg-surface hover:bg-surface-hover transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-[var(--radius-card)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border pointer-events-none" />

      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden bg-navy-800">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(135deg, ${
              project.category === "ai"
                ? "#ff006e22"
                : project.category === "web"
                ? "#00f2ff22"
                : project.category === "tools"
                ? "#4361ee22"
                : "#7b2ff722"
            } 0%, transparent 60%)`,
          }}
        />
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 circuit-bg opacity-30" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 text-xs font-mono rounded-full border backdrop-blur-sm"
            style={{
              color:
                project.category === "ai"
                  ? "#ff006e"
                  : project.category === "web"
                  ? "#00f2ff"
                  : project.category === "tools"
                  ? "#4361ee"
                  : "#7b2ff7",
              borderColor:
                project.category === "ai"
                  ? "#ff006e44"
                  : project.category === "web"
                  ? "#00f2ff44"
                  : project.category === "tools"
                  ? "#4361ee44"
                  : "#7b2ff744",
              backgroundColor:
                project.category === "ai"
                  ? "#ff006e11"
                  : project.category === "web"
                  ? "#00f2ff11"
                  : project.category === "tools"
                  ? "#4361ee11"
                  : "#7b2ff711",
            }}
          >
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-neon-green/40 text-neon-green bg-neon-green/10 backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}

        {/* Project icon/visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-6xl font-bold font-mono opacity-10 text-text-primary"
            whileHover={{ scale: 1.1, opacity: 0.2 }}
          >
            {project.title.charAt(0)}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-text-primary group-hover:text-neon-cyan transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[11px] font-mono rounded border border-border text-text-muted"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-[11px] font-mono rounded border border-border text-text-muted">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-neon-cyan transition-colors"
              whileHover={{ x: 3 }}
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
              whileHover={{ x: 3 }}
            >
              Source
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
