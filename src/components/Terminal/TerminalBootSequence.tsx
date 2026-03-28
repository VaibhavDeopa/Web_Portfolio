"use client";

import React, { useState, useEffect } from "react";

export function TerminalBootSequence({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sequence timing logic
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStep(1), 500)); // "Initializing portfolio system..."
    timers.push(setTimeout(() => setStep(2), 1000)); // "Loading design tokens..."
    timers.push(setTimeout(() => setStep(3), 1500)); // "Mounting component library..."
    timers.push(setTimeout(() => setStep(4), 2000)); // Start progress bar

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 30) {
          clearInterval(progressInterval);
          return 30; // Max length
        }
        return p + 1; // Increment speed (slower)
      });
    }, 120);
    timers.push(progressInterval as any);

    // Continue sequence after progress
    timers.push(setTimeout(() => setStep(5), 6000)); // "Resolving 12 case studies..."
    timers.push(setTimeout(() => setStep(6), 6400)); // "Connecting to AI Core..."
    timers.push(setTimeout(() => setStep(7), 6800)); // "ok"

    timers.push(setTimeout(() => setStep(8), 7400)); // Block of 4 lines
    timers.push(setTimeout(() => setStep(9), 8200)); // Ready prompt

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  // Listen for 'Enter' string keypress to complete
  useEffect(() => {
    if (step < 9) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step, onComplete]);

  return (
    <div className="text-terminal-text space-y-4 pt-10 px-4 md:px-8 font-mono pb-20 overflow-hidden cursor-default select-none h-full bg-terminal-bg relative">
      <div className="space-y-1">
        {step >= 1 && <div>Initializing portfolio system...</div>}
        {step >= 2 && <div>Loading design tokens...</div>}
        {step >= 3 && <div>Mounting component library...</div>}
        {step >= 4 && (
          <div className="flex items-center">
            <span className="text-terminal-muted">[</span>
            <span className="text-terminal-highlight tracking-[0.2em]">{Array(progress).fill("|").join("")}</span>
            <span className="text-transparent tracking-[0.2em]">{Array(30 - progress).fill("|").join("")}</span>
            <span className="text-terminal-muted">]</span>
            <span className="ml-3 font-mono text-terminal-text w-12">{Math.floor((progress / 30) * 100)}%</span>
            {progress >= 30 && <span className="text-terminal-success ml-2 font-bold">done</span>}
          </div>
        )}
      </div>

      <div className="space-y-1">
        {step >= 5 && <div className="animate-fade-in">Resolving 12 case studies...</div>}
        {step >= 6 && <div className="animate-fade-in">Connecting to AI Core...</div>}
        {step >= 7 && <div className="text-terminal-success font-bold animate-fade-in">ok</div>}
      </div>

      {step >= 8 && (
        <div className="space-y-1 animate-fade-in">
          <div>Design systems: operational</div>
          <div>AI research modules: loaded</div>
          <div>Don't search for /secrets here...</div>
          <div>Strategic thinking: engaged</div>
        </div>
      )}

      {step >= 9 && (
        <div className="space-y-1 pt-4 animate-fade-in">
          <div className="text-terminal-muted text-lg">✦</div>
          <div className="text-terminal-accent font-bold">vaibhav.deopa v10.0 — ready.</div>
          <div className="animate-pulse-glow text-terminal-muted">Press Enter to continue...</div>
        </div>
      )}
    </div>
  );
}
