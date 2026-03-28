"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import {
  Brain,
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
} from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning", color: "#ff006e" },
  { icon: Code2, label: "Full Stack Dev", color: "#00f2ff" },
  { icon: Database, label: "Data Engineering", color: "#4361ee" },
  { icon: Globe, label: "Web Technologies", color: "#00ff88" },
  { icon: Server, label: "Cloud & DevOps", color: "#7b2ff7" },
  { icon: Cpu, label: "Edge Computing", color: "#ff006e" },
];

const techStack = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Rust",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-[var(--section-gap)] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-neon-cyan mb-2 block">
            01. &lt;about&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About{" "}
            <span className="gradient-text-cyber">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terminal - Bio */}
          <TerminalWindow title="~/about/bio.md">
            <div className="space-y-4 text-text-secondary">
              <p>
                <span className="text-neon-cyan">##</span>{" "}
                <span className="text-text-primary font-semibold">
                  Hello, World!
                </span>
              </p>
              <p>
                I&apos;m <span className="text-neon-cyan">Vaibhav Deopa</span>,
                an AI Engineer and Full Stack Developer passionate about
                building intelligent systems that solve real-world problems.
              </p>
              <p>
                With expertise spanning{" "}
                <span className="text-neon-magenta">machine learning</span>,{" "}
                <span className="text-neon-cyan">deep learning</span>, and{" "}
                <span className="text-neon-blue">modern web development</span>,
                I create end-to-end solutions from data pipelines to beautiful
                user interfaces.
              </p>
              <p>
                Currently focused on{" "}
                <span className="text-neon-green">LLM applications</span>,{" "}
                <span className="text-neon-purple">computer vision</span>, and{" "}
                <span className="text-neon-cyan">scalable architectures</span>{" "}
                that push the boundaries of what&apos;s possible.
              </p>
              <div className="pt-4 border-t border-border mt-4">
                <p className="text-text-muted text-xs">
                  <span className="text-neon-cyan">&gt;</span> Based in India 🇮🇳
                  &bull; Open to remote collaboration
                </p>
              </div>
            </div>
          </TerminalWindow>

          {/* Skills Grid */}
          <div className="space-y-8">
            {/* Skill cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-surface hover:bg-surface-hover transition-all cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: skill.color + "66",
                    boxShadow: `0 0 20px ${skill.color}22`,
                  }}
                >
                  <skill.icon
                    size={24}
                    style={{ color: skill.color }}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="text-xs text-text-secondary text-center font-medium">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tech stack tags */}
            <TerminalWindow title="~/about/stack.json">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-md border border-border bg-surface-elevated text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/30 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
