import React from "react";

export function TerminalHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center px-4 py-3 bg-terminal-frame border-b border-dashed border-terminal-muted/30 sticky top-0 z-20">
      {/* Traffic Lights */}
      <div className="flex space-x-2 w-16">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>

      {/* Title */}
      <div className="flex-1 flex justify-center text-terminal-muted text-xs sm:text-sm font-medium tracking-wide">
        {title}
      </div>

      {/* Spacer for flex balance */}
      <div className="w-16" />
    </div>
  );
}
