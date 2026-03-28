"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { TerminalHeader } from "./TerminalHeader";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalDashboard } from "./TerminalDashboard";
import { TerminalBootSequence } from "./TerminalBootSequence";

interface CommandEntry {
  command: string;
  output: React.ReactNode;
}

// Simple Typewriter Wrapper
function Typewriter({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Slight delay to mimic processing
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);
  
  return (
    <div className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function TerminalApp() {
  const [history, setHistory] = useState<CommandEntry[]>([]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark");
  const [isBooted, setIsBooted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Apply theme to HTML root
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // Auto-focus input
  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  // Auto-scroll
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Listen for custom events from click components (like dashboard links)
  useEffect(() => {
    const handleCustomCommand = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      executeCommand(customEvent.detail);
    };
    window.addEventListener("terminal-cmd", handleCustomCommand);
    return () => window.removeEventListener("terminal-cmd", handleCustomCommand);
  }, [history]); // history dependency ensures executeCommand closure is fresh

  const executeCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    let response: React.ReactNode = "";

    switch (cmd) {
      case "/help":
        response = (
          <Typewriter>
            <div className="text-terminal-text">
              <div className="mb-2 text-terminal-accent">vlad@burca ~ /portfolio</div>
              <table className="w-full text-left max-w-xl">
                <tbody>
                  <tr><td className="w-32 font-bold text-terminal-highlight">/about</td><td className="text-terminal-muted">Who am I and what do I do</td></tr>
                  <tr><td className="w-32 font-bold text-terminal-highlight">/projects</td><td className="text-terminal-muted">Selected AI & Full-Stack work</td></tr>
                  <tr><td className="w-32 font-bold text-terminal-highlight">/skills</td><td className="text-terminal-muted">Tech stack and capabilities</td></tr>
                  <tr><td className="w-32 font-bold text-terminal-highlight">/contact</td><td className="text-terminal-muted">Links to my GitHub, LinkedIn, etc.</td></tr>
                  <tr><td className="w-32 font-bold text-terminal-highlight">clear</td><td className="text-terminal-muted">Clear the terminal logic history</td></tr>
                </tbody>
              </table>
              <div className="mt-4 text-terminal-muted italic">...and a few secret commands, if you know where to look.</div>
            </div>
          </Typewriter>
        );
        break;
      case "/about":
        response = (
          <Typewriter>
            <div className="text-terminal-text p-4 border border-dashed border-terminal-muted/30 rounded-md bg-terminal-bg/50 mt-2">
              <pre className="text-terminal-accent font-bold mb-4 leading-tight text-xs sm:text-sm">
{`
 _    __      _ __    __                
| |  / /___ _(_) /_  / /_  ____ __   __ 
| | / / __ \`/ / __ \\/ __ \\/ __ \`/ | / / 
| |/ / /_/ / / /_/ / / / / /_/ /| |/ /  
|___/\\__,_/_/_.___/_/ /_/\\__,_/ |___/   
`}
              </pre>
              <p className="mb-4">
                Hi, I'm <span className="text-terminal-highlight font-bold">Vaibhav Deopa</span>.
                I'm an AI Engineer and Full Stack Developer based in the digital realm.
              </p>
              <p className="mb-4 text-terminal-muted">
                I specialize in building intelligent systems, training language models, and crafting seamless Web3/Full-Stack experiences. 
                When I'm not writing code, I'm probably optimizing it.
              </p>
            </div>
          </Typewriter>
        );
        break;
      case "/projects":
      case "/work":
        response = (
          <Typewriter>
            <div className="text-terminal-text p-4 border-l-2 border-dashed border-terminal-accent mt-2">
              <div className="mb-4 text-terminal-accent tracking-widest uppercase text-xs">Selected Works // 2024-2026</div>
              <ul className="space-y-6">
                <li>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span className="font-bold text-terminal-highlight text-lg">AInimals</span>
                    <span className="text-terminal-muted text-sm">— Next.js Web3 Game Platform</span>
                  </div>
                  <div className="text-sm text-terminal-muted mt-2">Developed an AI-powered gaming application mimicking casino experiences with real-time crypto transactions matching.</div>
                </li>
                <li>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span className="font-bold text-terminal-highlight text-lg">Triage Dispatcher</span>
                    <span className="text-terminal-muted text-sm">— PyTorch Multi-Agent System</span>
                  </div>
                  <div className="text-sm text-terminal-muted mt-2">Built a reinforcement learning medical triage system maximizing throughput using LLM agents.</div>
                </li>
              </ul>
              <div className="mt-6 text-terminal-muted text-xs italic">Use generic commands to view full repository files if you prefer.</div>
            </div>
          </Typewriter>
        );
        break;
      case "/skills":
        response = (
          <Typewriter>
            <div className="text-terminal-text">
               <div className="mb-4 text-terminal-accent">Technical Stack:</div>
               <table className="w-full text-left max-w-xl text-sm border border-dashed border-terminal-muted/30">
                <tbody className="divide-y divide-dashed divide-terminal-muted/30">
                  <tr className="hover:bg-terminal-highlight/10 transition-colors"><td className="p-3 w-32 font-bold text-terminal-highlight">Languages</td><td className="p-3 text-terminal-muted">TypeScript, Python, JavaScript, SQL</td></tr>
                  <tr className="hover:bg-terminal-highlight/10 transition-colors"><td className="p-3 w-32 font-bold text-terminal-highlight">Frontend</td><td className="p-3 text-terminal-muted">React, Next.js, Framer Motion, Tailwind</td></tr>
                  <tr className="hover:bg-terminal-highlight/10 transition-colors"><td className="p-3 w-32 font-bold text-terminal-highlight">Backend</td><td className="p-3 text-terminal-muted">Node.js, Express, FastAPI</td></tr>
                  <tr className="hover:bg-terminal-highlight/10 transition-colors"><td className="p-3 w-32 font-bold text-terminal-highlight">AI/ML</td><td className="p-3 text-terminal-muted">PyTorch, LLMs, Agents, Vector DBs</td></tr>
                </tbody>
              </table>
            </div>
          </Typewriter>
        );
        break;
      case "/contact":
        response = (
          <Typewriter>
            <div className="text-terminal-text mt-2">
               <div className="mb-4 text-terminal-accent">Establish Connection:</div>
               <div className="pl-4 border-l border-dashed border-terminal-muted/40 space-y-3">
                 <div>[Email]   <a href="mailto:udaydeopa2023@gmail.com" className="text-terminal-highlight hover:underline decoration-dashed underline-offset-4">udaydeopa2023@gmail.com</a></div>
                 <div>[GitHub]  <a href="https://github.com/VaibhavDeopa" target="_blank" className="text-terminal-highlight hover:underline decoration-dashed underline-offset-4">github.com/VaibhavDeopa</a></div>
                 <div>[LinkdIn] <a href="https://www.linkedin.com/in/vaibhavdeopa/" target="_blank" className="text-terminal-highlight hover:underline decoration-dashed underline-offset-4">linkedin.com/in/vaibhavdeopa</a></div>
               </div>
            </div>
          </Typewriter>
        );
        break;
      case "/themes":
      case "/theme":
        response = (
          <Typewriter>
            <div className="text-terminal-text mt-2">
              <div className="mb-2 text-terminal-accent">Available visual themes:</div>
              <ul className="space-y-1 pl-4">
                <li><span className="font-bold text-terminal-highlight cursor-pointer hover:underline" onClick={() => executeCommand("/dark")}>/dark</span> - Default hacker mode</li>
                <li><span className="font-bold text-terminal-highlight cursor-pointer hover:underline" onClick={() => executeCommand("/retro")}>/retro</span> - Vintage 1980s Phosphor CRT</li>
                <li><span className="font-bold text-terminal-highlight cursor-pointer hover:underline" onClick={() => executeCommand("/glass")}>/glass</span> - Translucent spatial computing</li>
              </ul>
            </div>
          </Typewriter>
        );
        break;
      case "/retro":
        setTheme("retro");
        response = <Typewriter><div className="text-terminal-accent">:: vibe check: retro crt engaged.</div></Typewriter>;
        break;
      case "/glass":
        setTheme("glass");
        response = <Typewriter><div className="text-terminal-accent">:: vibe check: translucent glass engaged.</div></Typewriter>;
        break;
      case "/dark":
        setTheme("dark");
        response = <Typewriter><div className="text-terminal-accent">:: vibe check: default dark mode engaged.</div></Typewriter>;
        break;
      case "sudo":
      case "rm -rf /":
      case "sudo rm -rf /":
        response = <div className="text-red-400">nice try... but I don't give root access easily.</div>;
        break;
      default:
        response = (
          <div className="text-terminal-muted">
            command not found: {cmd}. Try "/help"
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-0 sm:p-4 md:p-12 font-mono overflow-hidden relative"
      onClick={handleWrapperClick}
    >
      {/* Atmospheric Background — user's photo, heavily blurred */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-[80px] opacity-40 scale-125"
        style={{
          backgroundImage: "url('/images/bg-photo.png')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#20242b]/60" />

      {/* Terminal Window Frame */}
      <div className="relative z-10 w-full h-[100dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-[1100px] flex flex-col sm:rounded-xl bg-terminal-bg border border-terminal-muted/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 mx-auto transition-colors duration-500">
        <TerminalHeader title={isBooted ? "vaibhav@deopa ~ /portfolio" : "vaibhav@deopa ~ /sys/boot"} />

        {!isBooted ? (
          <TerminalBootSequence onComplete={() => setIsBooted(true)} />
        ) : (
          <div className="flex flex-col h-full flex-1 overflow-hidden relative">
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 scrollbars-hidden text-[14px] leading-relaxed">
              {/* Static Startup Dashboard */}
              <TerminalDashboard />

              {/* Scrolling Command History */}
              <TerminalOutput history={history} />
              
              <div ref={terminalEndRef} className="h-4" />
            </div>

            {/* System message + Input — Fixed at Bottom */}
            <div className="shrink-0 bg-terminal-bg backdrop-blur-sm">
              <div className="px-4 sm:px-6 md:px-8 pt-3 pb-1 text-terminal-muted text-xs font-mono">
                [system] Ready for input. Type /help to see available commands.
              </div>
              <div className="flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4">
                <span className="text-terminal-accent mr-3 font-bold">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="flex-1 bg-transparent border-none outline-none text-terminal-text caret-terminal-accent placeholder:text-terminal-muted/60 text-[14px]"
                  placeholder='Type a command... try "/help"'
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
