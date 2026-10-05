"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import WelcomeScreen from "@/components/WelcomeScreen";
import BootScreen from "@/components/BootScreen";
import DesktopShell from "@/components/DesktopShell";

export default function Home() {
  const [screen, setScreen] = useState("welcome");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("developerOS.theme");

    if (savedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (screen !== "boot") return;

    const bootTimer = setTimeout(() => {
      setScreen("desktop");
    }, 1400);

    return () => clearTimeout(bootTimer);
  }, [screen]);

  const handleEnterPortfolio = () => {
    const savedBootPreference = localStorage.getItem(
      "developerOS.showBootScreen"
    );

    if (savedBootPreference === "false") {
      setScreen("desktop");
    } else {
      setScreen("boot");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {screen === "welcome" && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <WelcomeScreen
            onEnter={handleEnterPortfolio}
            theme={theme}
          />
        </motion.div>
      )}

      {screen === "boot" && (
        <motion.div
          key="boot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <BootScreen theme={theme} />
        </motion.div>
      )}

      {screen === "desktop" && (
        <motion.div
          key="desktop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <DesktopShell />
        </motion.div>
      )}
    </AnimatePresence>
  );
}