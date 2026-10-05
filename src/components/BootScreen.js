"use client";

import { motion } from "motion/react";

const bootMessages = [
  { text: "initializing portfolio...", delay: 0.1 },
  { text: "loading developer profile...", delay: 0.3 },
  { text: "loading projects...", delay: 0.5 },
  { text: "loading workspace...", delay: 0.7 },
];

export default function BootScreen({
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <main
      className={`flex min-h-screen items-center justify-center px-6 ${
        isDark
          ? "bg-[#0f1511] text-[#f3f4ee]"
          : "bg-[#f5f2e9] text-[#172019]"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-xl font-mono"
      >
        {/* SYSTEM HEADER */}
        <div className="mb-8 flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg border font-bold shadow-sm ${
              isDark
                ? "border-green-400/20 bg-[#1b241e] text-green-400"
                : "border-green-800/20 bg-white text-green-800"
            }`}
          >
            RK
          </div>

          <div>
            <p
              className={`text-sm font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              Developer OS v1.0
            </p>

            <p
              className={`text-xs ${
                isDark ? "text-zinc-500" : "text-zinc-500"
              }`}
            >
              system boot
            </p>
          </div>
        </div>

        {/* TERMINAL OUTPUT */}
        <div
          className={`space-y-3 text-sm sm:text-base ${
            isDark ? "text-zinc-300" : "text-[#172019]"
          }`}
        >
          {bootMessages.map((message) => (
            <motion.p
              key={message.text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: message.delay }}
            >
              <span
                className={
                  isDark ? "text-green-400" : "text-green-700"
                }
              >
                &gt;
              </span>{" "}
              {message.text}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className={`font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            <span>&gt;</span> system ready_
          </motion.p>
        </div>

        {/* LOADING BAR */}
        <div
          className={`mt-8 h-2 overflow-hidden rounded-full ${
            isDark ? "bg-white/10" : "bg-black/10"
          }`}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
            }}
            className={`h-full ${
              isDark ? "bg-green-500" : "bg-green-700"
            }`}
          />
        </div>

        <p
          className={`mt-3 text-xs ${
            isDark ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          RK Developer OS © 2026
        </p>
      </motion.div>
    </main>
  );
}