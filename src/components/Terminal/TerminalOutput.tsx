import React from "react";

interface CommandEntry {
  command: string;
  output: React.ReactNode;
}

export function TerminalOutput({ history }: { history: CommandEntry[] }) {
  return (
    <div className="space-y-6">
      {history.map((entry, index) => (
        <div key={index} className="animate-fade-in">
          <div className="flex items-center text-terminal-muted mb-2">
            <span className="text-terminal-accent mr-3">&gt;</span>
            <span className="text-terminal-text">{entry.command}</span>
          </div>
          <div className="text-terminal-text pl-6">{entry.output}</div>
        </div>
      ))}
    </div>
  );
}
