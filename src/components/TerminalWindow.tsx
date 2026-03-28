"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <motion.div
      className={`rounded-[var(--radius-terminal)] overflow-hidden border border-border ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-border">
        <div className="flex items-center gap-2">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
        </div>
        <span className="flex-1 text-center text-sm font-mono text-text-secondary truncate">
          {title}
        </span>
        <div className="w-[52px]" /> {/* Spacer to center title */}
      </div>

      {/* Content area */}
      <div className="bg-navy-950 p-6 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
