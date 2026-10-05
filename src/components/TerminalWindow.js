"use client";

import { useEffect, useRef, useState } from "react";
import AppWindow from "./AppWindow";

export default function TerminalWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,

  onOpenHome,
  onOpenAbout,
  onOpenProjects,
  onOpenFSL,
  onOpenHealthcare,
  onOpenMicroLesson,
  onOpenDraftFun,
  onOpenResume,
  onOpenContact,
}) {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    {
      type: "system",
      lines: [
        "Ram Kirsten Developer OS [Version 1.0]",
        "",
        'Type "help" to view available commands.',
      ],
    },
  ]);

  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const availableCommands = [
    "help",
    "ls",
    "pwd",

    "home",
    "about",
    "projects",
    "projects --list",
    "resume",
    "contact",

    "open fsl",
    "open healthcare",
    "open microlesson",
    "open draftfun",

    "whoami",
    "skills",
    "experience",
    "education",

    "github",
    "linkedin",
    "email",

    "clear",
    "exit",
  ];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history]);

  const addOutput = (command, lines = []) => {
    setHistory((previousHistory) => [
      ...previousHistory,
      {
        type: "command",
        command,
        lines,
      },
    ]);
  };

  const openWindow = (rawCommand, message, callback) => {
    addOutput(rawCommand, [message]);

    setTimeout(() => {
      callback?.();
    }, 250);
  };

  const runCommand = (rawCommand) => {
    const command = rawCommand
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

    if (!command) {
      return;
    }

    switch (command) {
      // --------------------------------------------------
      // HELP
      // --------------------------------------------------

      case "help":
        addOutput(rawCommand, [
          "Available commands",
          "",
          "NAVIGATION",
          "home                 Open Home",
          "about                Open About",
          "projects             Open Projects",
          "resume               Open Resume",
          "contact              Open Contact",
          "",
          "PROJECTS",
          "projects --list      List all projects",
          "open fsl             Open FSL project",
          "open healthcare      Open Healthcare project",
          "open microlesson     Open Micro-Lesson Generator",
          "open draftfun        Open DraftFun project",
          "",
          "PROFILE",
          "whoami               About Ram Kirsten",
          "skills               View technical skills",
          "experience           View experience",
          "education            View education",
          "",
          "LINKS",
          "github               Open GitHub",
          "linkedin             Open LinkedIn",
          "email                Send an email",
          "",
          "SYSTEM",
          "ls                   List portfolio files",
          "pwd                  Show current directory",
          "help                 Show available commands",
          "clear                Clear terminal",
          "exit                 Close terminal",
          "",
          "TIP",
          "Use ↑ and ↓ to browse previous commands.",
          "Press Tab to autocomplete commands.",
        ]);
        break;

      // --------------------------------------------------
      // SYSTEM COMMANDS
      // --------------------------------------------------

      case "ls":
      case "dir":
        addOutput(rawCommand, [
          "about/",
          "projects/",
          "contact/",
          "resume.pdf",
          "skills.txt",
          "experience.txt",
          "education.txt",
        ]);
        break;

      case "pwd":
        addOutput(rawCommand, [
          "/home/ramkirsten/portfolio",
        ]);
        break;

      case "clear":
      case "cls":
        setHistory([]);
        break;

      case "exit":
        onClose?.();
        break;

      // --------------------------------------------------
      // PROFILE
      // --------------------------------------------------

      case "whoami":
        addOutput(rawCommand, [
          "Ram Kirsten Santos",
          "",
          "Web Developer",
          "Software Developer",
          "Front-End Developer",
          "",
          "Computer Technology graduate with experience building",
          "web systems, mobile applications, freelance projects,",
          "and academic technology projects.",
        ]);
        break;

      case "skills":
        addOutput(rawCommand, [
          "Technical Skills",
          "",
          "WEB",
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "AJAX",
          "",
          "FRONTEND",
          "React",
          "Next.js",
          "Tailwind CSS",
          "",
          "MOBILE",
          "Flutter",
          "Dart",
          "",
          "DATABASE / BACKEND",
          "MySQL",
          "Firebase Authentication",
          "Cloud Firestore",
          "",
          "TOOLS / OTHER",
          "Git",
          "GitHub",
          "Python",
          "Raspberry Pi",
          "PuTTY",
        ]);
        break;

      case "experience":
        addOutput(rawCommand, [
          "Experience",
          "",
          "FREELANCE WEB & MOBILE DEVELOPMENT",
          "2025 — 2026",
          "",
          "• DraftFun",
          "  Flutter / Dart / Firebase",
          "",
          "• Micro-Lesson Generator",
          "  PHP / MySQL / JavaScript / AJAX",
          "",
          "• Smart Healthcare Management System",
          "  PHP / MySQL / JavaScript",
          "",
          "INTERNSHIP",
          "Powernet Edge Solutions Corp.",
          "Post-Sales Department",
          "January — March 2026",
          "",
          "Worked with network configuration, VLANs,",
          "device deployment, structured cabling,",
          "testing, monitoring, and technical documentation.",
        ]);
        break;

      case "education":
        addOutput(rawCommand, [
          "Education",
          "",
          "Bulacan State University — Bustos Campus",
          "",
          "Bachelor of Industrial Technology",
          "Major in Computer Technology",
          "",
          "2022 — 2026",
          "Magna Cum Laude",
        ]);
        break;

      // --------------------------------------------------
      // MAIN NAVIGATION
      // --------------------------------------------------

      case "home":
        openWindow(
          rawCommand,
          "Opening home.exe...",
          onOpenHome
        );
        break;

      case "about":
        openWindow(
          rawCommand,
          "Opening about.exe...",
          onOpenAbout
        );
        break;

      case "projects":
        openWindow(
          rawCommand,
          "Opening projects.exe...",
          onOpenProjects
        );
        break;

      case "resume":
        openWindow(
          rawCommand,
          "Opening resume.pdf...",
          onOpenResume
        );
        break;

      case "contact":
        openWindow(
          rawCommand,
          "Opening contact.exe...",
          onOpenContact
        );
        break;

      // --------------------------------------------------
      // PROJECT LIST
      // --------------------------------------------------

      case "projects --list":
        addOutput(rawCommand, [
          "Projects",
          "",
          "01  Basic Filipino Sign Language Translation System",
          "    AI / Embedded System",
          "",
          "02  Smart Web-Based Healthcare Management System",
          "    Web System",
          "",
          "03  Micro-Lesson Generator",
          "    E-Learning Platform",
          "",
          "04  DraftFun",
          "    Flutter Mobile Application",
          "",
          'Use "open <project>" to view a project.',
        ]);
        break;

      // --------------------------------------------------
      // PROJECT NAVIGATION
      // --------------------------------------------------

      case "open fsl":
      case "fsl":
        openWindow(
          rawCommand,
          "Opening fsl-project.exe...",
          onOpenFSL
        );
        break;

      case "open healthcare":
      case "healthcare":
        openWindow(
          rawCommand,
          "Opening healthcare-project.exe...",
          onOpenHealthcare
        );
        break;

      case "open microlesson":
      case "microlesson":
        openWindow(
          rawCommand,
          "Opening microlesson-project.exe...",
          onOpenMicroLesson
        );
        break;

      case "open draftfun":
      case "draftfun":
        openWindow(
          rawCommand,
          "Opening draftfun-project.exe...",
          onOpenDraftFun
        );
        break;

      // --------------------------------------------------
      // EXTERNAL LINKS
      // --------------------------------------------------

      case "github":
        addOutput(rawCommand, [
          "Opening GitHub...",
          "github.com/ramsantosk",
        ]);

        window.open(
          "https://github.com/ramsantosk",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case "linkedin":
        addOutput(rawCommand, [
          "Opening LinkedIn...",
          "linkedin.com/in/ramkirstensantos",
        ]);

        window.open(
          "https://www.linkedin.com/in/ramkirstensantos",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case "email":
        addOutput(rawCommand, [
          "Opening email client...",
          "ramkirstensantos@gmail.com",
        ]);

        window.location.href =
          "mailto:ramkirstensantos@gmail.com";
        break;

      // --------------------------------------------------
      // EASTER EGG
      // --------------------------------------------------

      case "sudo hire ramkirsten":
        addOutput(rawCommand, [
          "Requesting elevated permissions...",
          "",
          "Permission granted.",
          "",
          "Opening contact.exe...",
        ]);

        setTimeout(() => {
          onOpenContact?.();
        }, 700);
        break;

      // --------------------------------------------------
      // UNKNOWN COMMAND
      // --------------------------------------------------

      default:
        addOutput(rawCommand, [
          `Command not found: ${rawCommand}`,
          "",
          'Type "help" to view available commands.',
        ]);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const command = input.trim();

    if (!command) {
      return;
    }

    setCommandHistory((previousHistory) => [
      ...previousHistory,
      command,
    ]);

    setHistoryIndex(-1);
    setInput("");

    runCommand(command);
  };

  const handleKeyDown = (event) => {
    // COMMAND HISTORY — UP
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) {
        return;
      }

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);

      return;
    }

    // COMMAND HISTORY — DOWN
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === -1) {
        return;
      }

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }

      return;
    }

    // TAB AUTOCOMPLETE
    if (event.key === "Tab") {
      event.preventDefault();

      const currentInput = input
        .trim()
        .toLowerCase();

      if (!currentInput) {
        return;
      }

      const matches = availableCommands.filter((command) =>
        command.startsWith(currentInput)
      );

      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const headingLines = [
    "Available commands",
    "Technical Skills",
    "Experience",
    "Education",
    "Projects",
    "Ram Kirsten Santos",

    "NAVIGATION",
    "PROJECTS",
    "PROFILE",
    "LINKS",
    "SYSTEM",
    "TIP",

    "WEB",
    "FRONTEND",
    "MOBILE",
    "DATABASE / BACKEND",
    "TOOLS / OTHER",

    "FREELANCE WEB & MOBILE DEVELOPMENT",
    "INTERNSHIP",
  ];

  return (
    <AppWindow
      title="terminal.exe"
      path="/terminal"
      onClose={onClose}
      onMinimize={onMinimize}
      isMaximized={isMaximized}
      onToggleMaximize={onToggleMaximize}
      fullScreenOnMaximize
      largeByDefault
      largeHeightClass="h-[calc(100vh-176px)]"
    >
      <div
        className={
          isMaximized
            ? "flex h-[calc(100vh-44px)] flex-col bg-[#101511]"
            : "flex h-[calc(100vh-220px)] flex-col bg-[#101511]"
        }
        onClick={() => inputRef.current?.focus()}
      >
        {/* TERMINAL HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div>
            <p className="font-mono text-xs font-semibold text-green-400">
              ramkirsten@portfolio
            </p>

            <p className="mt-1 font-mono text-[10px] text-zinc-500">
              Developer OS Terminal
            </p>
          </div>

          <p className="font-mono text-[10px] text-zinc-500">
            terminal session
          </p>
        </div>

        {/* TERMINAL OUTPUT */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 font-mono text-sm leading-6">
          {history.map((entry, index) => (
            <div
              key={index}
              className={index === 0 ? "" : "mt-4"}
            >
              {entry.type === "command" && (
                <div className="flex gap-2">
                  <span className="shrink-0 text-green-400">
                    ramkirsten@portfolio:~$
                  </span>

                  <span className="break-all text-white">
                    {entry.command}
                  </span>
                </div>
              )}

              {entry.lines?.map((line, lineIndex) => {
                const isHeading =
                  headingLines.includes(line);

                return (
                  <p
                    key={lineIndex}
                    className={
                      isHeading
                        ? "mt-2 whitespace-pre-wrap text-green-400"
                        : "whitespace-pre-wrap text-zinc-300"
                    }
                  >
                    {line || "\u00A0"}
                  </p>
                );
              })}
            </div>
          ))}

          {/* COMMAND INPUT */}
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex items-center gap-2"
          >
            <span className="shrink-0 text-green-400">
              ramkirsten@portfolio:~$
            </span>

            <input
              ref={inputRef}
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck="false"
              autoFocus
              aria-label="Terminal command"
              className="min-w-0 flex-1 bg-transparent text-white caret-green-400 outline-none"
            />
          </form>

          <div ref={terminalEndRef} />
        </div>

        {/* STATUS BAR */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-2 font-mono text-[10px] text-zinc-500">
          <span>
            Type help for commands • ↑↓ history • Tab autocomplete
          </span>

          <span>Developer OS v1.0</span>
        </div>
      </div>
    </AppWindow>
  );
}