import React from "react";
import Image from "next/image";

export function TerminalDashboard() {
  const handleCommandClick = (cmd: string) => {
    window.dispatchEvent(new CustomEvent("terminal-cmd", { detail: cmd }));
  };

  const ClickableCmd = ({ cmd }: { cmd: string }) => (
    <span
      onClick={() => handleCommandClick(cmd)}
      className="text-terminal-text font-bold cursor-pointer hover:text-terminal-highlight hover:bg-terminal-highlight/10 border-l-2 border-transparent hover:border-terminal-highlight pl-2 -ml-[10px] py-0.5 transition-all duration-150 relative"
    >
      {cmd}
    </span>
  );

  return (
    <div className="w-full mb-2">
      {/* Dashed Main Container — matches vladburca.com structure */}
      <div className="w-full flex flex-col md:flex-row border border-dashed border-terminal-muted/30 overflow-hidden">

        {/* Left Column: Portrait Image */}
        <div className="w-full md:w-[58%] border-b md:border-b-0 md:border-r border-dashed border-terminal-muted/30 flex flex-col items-center justify-center">
          <div className="font-bold text-terminal-text text-sm sm:text-base pt-5 pb-3 tracking-wide">
            Welcome, visitor.
          </div>
          {/* The dissolving ASCII portrait — shown as image seamlessly blending with terminal bg */}
          <div className="relative w-full flex-1 min-h-[280px] md:min-h-[360px] flex items-center justify-center my-2">
            <Image
              src="/images/portrait-ascii.png"
              alt="Vaibhav Deopa — ASCII portrait"
              fill
              className="object-contain object-center transform scale-105 mix-blend-lighten"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
          <div className="pb-5 text-center text-terminal-text text-xs sm:text-sm font-mono z-10 relative">
            AI & Full-Stack Developer • India
            <div className="mt-1.5 text-terminal-muted hover:text-terminal-highlight cursor-pointer transition-colors text-xs">
              udaydeopa2023@gmail.com
            </div>
          </div>
        </div>

        {/* Right Column: Capabilities + Navigation */}
        <div className="w-full md:w-[42%] flex flex-col">

          {/* Capabilities Section */}
          <div className="p-5 md:p-7 border-b border-dashed border-terminal-muted/30">
            <div className="text-terminal-accent font-bold mb-4 text-sm">Capabilities</div>
            <table className="w-full text-xs sm:text-sm leading-7 sm:leading-8 font-mono">
              <tbody>
                <tr>
                  <td className="text-terminal-muted w-20 sm:w-24 align-top pr-4">AI Core</td>
                  <td className="text-terminal-text font-medium">LLMs, Agents, RAG, PyTorch</td>
                </tr>
                <tr>
                  <td className="text-terminal-muted w-20 sm:w-24 align-top pr-4">Stack</td>
                  <td className="text-terminal-text font-medium">React, Next.js, Node, TS</td>
                </tr>
                <tr>
                  <td className="text-terminal-muted w-20 sm:w-24 align-top pr-4">Cloud</td>
                  <td className="text-terminal-text font-medium">AWS, Docker, Linux, CI/CD</td>
                </tr>
                <tr>
                  <td className="text-terminal-muted w-20 sm:w-24 align-top pr-4">Data</td>
                  <td className="text-terminal-text font-medium">PostgreSQL, Redis, VectorDBs</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Navigation Section */}
          <div className="p-5 md:p-7 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-terminal-accent font-bold mb-4 text-sm">Navigation</div>
              <div className="space-y-2.5 text-xs sm:text-sm font-mono flex flex-col items-start">
                <ClickableCmd cmd="/about" />
                <ClickableCmd cmd="/projects" />
                <ClickableCmd cmd="/skills" />
                <ClickableCmd cmd="/contact" />
              </div>
            </div>
            <div className="mt-8 text-terminal-muted text-xs italic font-mono">
              ... /help for all commands
              <br />
              <span className="mt-1 block">Try /themes to change the vibe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
