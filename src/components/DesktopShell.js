"use client";

import { useEffect, useState } from "react";
import HomeWindow from "./HomeWindow";
import AboutWindow from "./AboutWindow";
import ProjectsWindow from "./ProjectsWindow";
import HealthcareProjectWindow from "./HealthcareProjectWindow";
import FSLProjectWindow from "./FSLProjectWindow";
import MicroLessonProjectWindow from "./MicroLessonProjectWindow";
import DraftFunProjectWindow from "./DraftFunProjectWindow";
import ResumeWindow from "./ResumeWindow";
import ContactWindow from "./ContactWindow";
import TerminalWindow from "./TerminalWindow";
import SettingsWindow from "./SettingsWindow";

export default function DesktopShell() {
  const [activeWindow, setActiveWindow] = useState("home");

  const [homeMaximized, setHomeMaximized] = useState(false);
  const [aboutMaximized, setAboutMaximized] = useState(false);
  const [projectsMaximized, setProjectsMaximized] = useState(false);
  const [healthcareMaximized, setHealthcareMaximized] = useState(false);
  const [fslMaximized, setFslMaximized] = useState(false);
  const [microLessonMaximized, setMicroLessonMaximized] = useState(false);
  const [draftFunMaximized, setDraftFunMaximized] = useState(false);
  const [resumeMaximized, setResumeMaximized] = useState(false);
  const [contactMaximized, setContactMaximized] = useState(false);
  const [terminalMaximized, setTerminalMaximized] = useState(false);
  const [settingsMaximized, setSettingsMaximized] = useState(false);
  const [desktopBackground, setDesktopBackground] = useState("plain");
  useEffect(() => {
  const savedBackground = localStorage.getItem(
    "developerOS.desktopBackground"
  );

  if (
    savedBackground === "plain" ||
    savedBackground === "grid" ||
    savedBackground === "dots"
  ) {
    setDesktopBackground(savedBackground);
  }
}, []);
const [reducedMotion, setReducedMotion] = useState(false);
const [showBootScreen, setShowBootScreen] = useState(true);
const [theme, setTheme] = useState("light");
useEffect(() => {
  const savedReducedMotion = localStorage.getItem(
    "developerOS.reducedMotion"
  );

  if (savedReducedMotion === "true") {
    setReducedMotion(true);
  }
}, []);

useEffect(() => {
  const savedBootPreference = localStorage.getItem(
    "developerOS.showBootScreen"
  );

  if (savedBootPreference === "false") {
    setShowBootScreen(false);
  }

  if (savedBootPreference === "true") {
    setShowBootScreen(true);
  }
}, []);

useEffect(() => {
  const savedTheme = localStorage.getItem(
    "developerOS.theme"
  );

  if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
  }
}, []);

  // HOME WINDOW ACTIONS
  const openHome = () => {
    setActiveWindow("home");
  };

  const closeHome = () => {
    setActiveWindow(null);
    setHomeMaximized(false);
  };

  const minimizeHome = () => {
    setActiveWindow("home-minimized");
  };

  const toggleHomeMaximize = () => {
    setHomeMaximized((previousState) => !previousState);
  };

  // ABOUT WINDOW ACTIONS
  const openAbout = () => {
    setActiveWindow("about");
  };

  const closeAbout = () => {
    setActiveWindow(null);
    setAboutMaximized(false);
  };

  const minimizeAbout = () => {
    setActiveWindow("about-minimized");
  };

  const toggleAboutMaximize = () => {
    setAboutMaximized((previousState) => !previousState);
  };

  // PROJECTS WINDOW ACTIONS
  const openProjects = () => {
    setActiveWindow("projects");
  };

  const closeProjects = () => {
    setActiveWindow(null);
    setProjectsMaximized(false);
  };

  const minimizeProjects = () => {
    setActiveWindow("projects-minimized");
  };

  const toggleProjectsMaximize = () => {
    setProjectsMaximized((previousState) => !previousState);
  };

  // HEALTHCARE PROJECT ACTIONS
  const openHealthcareProject = () => {
    setActiveWindow("healthcare-project");
  };

  const closeHealthcareProject = () => {
    setActiveWindow(null);
    setHealthcareMaximized(false);
  };

  const minimizeHealthcareProject = () => {
    setActiveWindow("healthcare-project-minimized");
  };

  const toggleHealthcareMaximize = () => {
    setHealthcareMaximized((previousState) => !previousState);
  };

  const backToProjects = () => {
  setActiveWindow("projects");
  setHealthcareMaximized(false);
  setFslMaximized(false);
  setMicroLessonMaximized(false);
  setDraftFunMaximized(false);
};

  // FSL PROJECT ACTIONS
const openFSLProject = () => {
  setActiveWindow("fsl-project");
};

const closeFSLProject = () => {
  setActiveWindow(null);
  setFslMaximized(false);
};

const minimizeFSLProject = () => {
  setActiveWindow("fsl-project-minimized");
};

const toggleFSLMaximize = () => {
  setFslMaximized((previousState) => !previousState);
};

// MICRO-LESSON PROJECT ACTIONS
const openMicroLessonProject = () => {
  setActiveWindow("microlesson-project");
};

const closeMicroLessonProject = () => {
  setActiveWindow(null);
  setMicroLessonMaximized(false);
};

const minimizeMicroLessonProject = () => {
  setActiveWindow("microlesson-project-minimized");
};

const toggleMicroLessonMaximize = () => {
  setMicroLessonMaximized((previousState) => !previousState);
};

// DRAFTFUN PROJECT ACTIONS
const openDraftFunProject = () => {
  setActiveWindow("draftfun-project");
};

const closeDraftFunProject = () => {
  setActiveWindow(null);
  setDraftFunMaximized(false);
};

const minimizeDraftFunProject = () => {
  setActiveWindow("draftfun-project-minimized");
};

const toggleDraftFunMaximize = () => {
  setDraftFunMaximized((previousState) => !previousState);
};

// RESUME WINDOW ACTIONS
const openResume = () => {
  setActiveWindow("resume");
};

const closeResume = () => {
  setActiveWindow(null);
  setResumeMaximized(false);
};

const minimizeResume = () => {
  setActiveWindow("resume-minimized");
};

const toggleResumeMaximize = () => {
  setResumeMaximized((previousState) => !previousState);
};

// CONTACT WINDOW ACTIONS
const openContact = () => {
  setActiveWindow("contact");
};

const closeContact = () => {
  setActiveWindow(null);
  setContactMaximized(false);
};

const minimizeContact = () => {
  setActiveWindow("contact-minimized");
};

const toggleContactMaximize = () => {
  setContactMaximized((previousState) => !previousState);
};

// TERMINAL WINDOW ACTIONS
const openTerminal = () => {
  setActiveWindow("terminal");
};

const closeTerminal = () => {
  setActiveWindow(null);
  setTerminalMaximized(false);
};

const minimizeTerminal = () => {
  setActiveWindow("terminal-minimized");
};

const toggleTerminalMaximize = () => {
  setTerminalMaximized((previousState) => !previousState);
};

// SETTINGS WINDOW ACTIONS
const openSettings = () => {
  setActiveWindow("settings");
};

const closeSettings = () => {
  setActiveWindow(null);
  setSettingsMaximized(false);
};

const minimizeSettings = () => {
  setActiveWindow("settings-minimized");
};

const toggleSettingsMaximize = () => {
  setSettingsMaximized((previousState) => !previousState);
};
const isDark = theme === "dark";
const desktopBackgroundClass = isDark
  ? {
      plain: "bg-[#0f1511]",

      grid:
        "bg-[#0f1511] bg-[linear-gradient(to_right,rgba(134,239,172,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(134,239,172,0.08)_1px,transparent_1px)] bg-[size:32px_32px]",

      dots:
        "bg-[#0f1511] bg-[radial-gradient(rgba(134,239,172,0.16)_1px,transparent_1px)] bg-[size:18px_18px]",
    }[desktopBackground]
  : {
      plain: "bg-[#f4f1e8]",

      grid:
        "bg-[#f4f1e8] bg-[linear-gradient(to_right,rgba(22,101,52,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,101,52,0.08)_1px,transparent_1px)] bg-[size:32px_32px]",

      dots:
        "bg-[#f4f1e8] bg-[radial-gradient(rgba(22,101,52,0.18)_1px,transparent_1px)] bg-[size:18px_18px]",
    }[desktopBackground];

const changeDesktopBackground = (background) => {
  setDesktopBackground(background);

  localStorage.setItem(
    "developerOS.desktopBackground",
    background
  );
};



const toggleReducedMotion = () => {
  setReducedMotion((previousState) => {
    const newState = !previousState;

    localStorage.setItem(
      "developerOS.reducedMotion",
      String(newState)
    );

    return newState;
  });
};

const changeTheme = (newTheme) => {
  setTheme(newTheme);

  localStorage.setItem(
    "developerOS.theme",
    newTheme
  );
};

const toggleBootScreen = () => {
  setShowBootScreen((previousState) => {
    const newState = !previousState;

    localStorage.setItem(
      "developerOS.showBootScreen",
      String(newState)
    );

    return newState;
  });
};

const resetPreferences = () => {
  setDesktopBackground("plain");
  setReducedMotion(false);
  setShowBootScreen(true);
  setTheme("light");

  localStorage.removeItem("developerOS.desktopBackground");
  localStorage.removeItem("developerOS.reducedMotion");
  localStorage.removeItem("developerOS.showBootScreen");
  localStorage.removeItem("developerOS.theme");
};

  return (
   <main
  data-reduced-motion={reducedMotion ? "true" : "false"}
  style={{
    "--window-bg": isDark ? "#151c17" : "rgba(255,255,255,0.95)",
    "--window-titlebar": isDark ? "#19221c" : "#f7f7f4",
    "--window-border": isDark
      ? "rgba(255,255,255,0.10)"
      : "rgba(0,0,0,0.15)",
    "--window-text": isDark ? "#f3f4ee" : "#172019",
    "--window-muted": isDark ? "#a1a1aa" : "#52525b",
  }}
  className={`relative h-screen overflow-hidden ${
    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
  } ${desktopBackgroundClass}`}
>
  <style jsx global>{`
    [data-reduced-motion="true"] * {
      transition-duration: 0.001ms !important;
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  `}</style>

  {/* TOP SYSTEM BAR */}
      <header
  className={`fixed left-0 top-0 z-50 flex h-12 w-full items-center justify-between border-b px-6 backdrop-blur-md ${
    isDark
      ? "border-white/10 bg-[#0f1511]/90"
      : "border-black/10 bg-[#f4f1e8]/90"
  }`}
>
        <div className="flex items-center gap-4">
         <span
  className={`font-mono text-lg font-bold ${
    isDark ? "text-green-400" : "text-green-800"
  }`}
>
            RK
          </span>

          <span className="hidden font-mono text-sm md:block">
            Ram Kirsten Santos
          </span>

        <span
  className={`hidden text-xs md:block ${
    isDark ? "text-zinc-400" : "text-zinc-500"
  }`}
>
            // Developer OS v1.0
          </span>
        </div>

        <div
  className={`font-mono text-xs ${
    isDark ? "text-zinc-300" : "text-zinc-600"
  }`}
>
          CODE • CREATE • LEARN
        </div>
      </header>

      {/* DESKTOP */}
      <section className="relative min-h-screen pt-12">
        {/* DESKTOP ICONS */}
        <aside className="absolute left-5 top-20 z-30 hidden flex-col gap-7 md:flex">
         {/* HOME */}
<button
  onClick={openHome}
  aria-label="Open Home"
  className="group flex w-20 flex-col items-center gap-2"
>
  <div
    className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition group-hover:-translate-y-1 ${
      isDark
        ? "border-green-400/20 bg-[#18211b]"
        : "border-green-800/20 bg-white"
    }`}
  >
    🏠
  </div>

  <span className="font-mono text-xs">
    Home
  </span>
</button>

          {/* ABOUT */}
          <button
            onClick={openAbout}
            aria-label="Open About"
            className="group flex w-20 flex-col items-center gap-2"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition group-hover:-translate-y-1 ${
  isDark
    ? "border-green-400/20 bg-[#18211b]"
    : "border-green-800/20 bg-white"
}`}>
              📁
            </div>

            <span className="font-mono text-xs">About</span>
          </button>

          {/* PROJECTS */}
          <button
            onClick={openProjects}
            aria-label="Open Projects"
            className="group flex w-20 flex-col items-center gap-2"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition group-hover:-translate-y-1 ${
  isDark
    ? "border-green-400/20 bg-[#18211b]"
    : "border-green-800/20 bg-white"
}`}>
              📂
            </div>

            <span className="font-mono text-xs">Projects</span>
          </button>

          {/* RESUME */}
          <button
          onClick={openResume}
            aria-label="Open Resume"
            className="group flex w-20 flex-col items-center gap-2"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition group-hover:-translate-y-1 ${
  isDark
    ? "border-green-400/20 bg-[#18211b]"
    : "border-green-800/20 bg-white"
}`}>
              📄
            </div>

            <span className="font-mono text-xs">Resume</span>
          </button>

          {/* CONTACT */}
          <button
          onClick={openContact}
            aria-label="Open Contact"
            className="group flex w-20 flex-col items-center gap-2"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition group-hover:-translate-y-1 ${
  isDark
    ? "border-green-400/20 bg-[#18211b]"
    : "border-green-800/20 bg-white"
}`}>
              ✉️
            </div>

            <span className="font-mono text-xs">Contact</span>
          </button>
        </aside>

        {/* APP WORKSPACE */}
        <div className="flex min-h-[calc(100vh-48px)] items-center justify-center px-3 pb-24 md:px-6 md:pb-28 md:pl-28 md:pr-6">
          {activeWindow === "home" && (
            <HomeWindow
             onClose={closeHome}
              onMinimize={minimizeHome}
              isMaximized={homeMaximized}
              onToggleMaximize={toggleHomeMaximize}
              onOpenProjects={openProjects}
              onOpenContact={openContact}
              theme={theme}
            />
          )}

          {activeWindow === "about" && (
            <AboutWindow
              onClose={closeAbout}
              onMinimize={minimizeAbout}
              isMaximized={aboutMaximized}
              onToggleMaximize={toggleAboutMaximize}
              theme={theme}
            />
          )}

          {activeWindow === "projects" && (
            <ProjectsWindow
              onClose={closeProjects}
              onMinimize={minimizeProjects}
              isMaximized={projectsMaximized}
              onToggleMaximize={toggleProjectsMaximize}
              onOpenHealthcare={openHealthcareProject}
              onOpenFSL={openFSLProject}
              onOpenMicroLesson={openMicroLessonProject}
              onOpenDraftFun={openDraftFunProject}
              theme={theme}
            />
          )}

          {activeWindow === "healthcare-project" && (
  <HealthcareProjectWindow
    onClose={closeHealthcareProject}
    onMinimize={minimizeHealthcareProject}
    isMaximized={healthcareMaximized}
    onToggleMaximize={toggleHealthcareMaximize}
    onBack={backToProjects}
    theme={theme}
  />
)}

{activeWindow === "fsl-project" && (
  <FSLProjectWindow
    onClose={closeFSLProject}
    onMinimize={minimizeFSLProject}
    isMaximized={fslMaximized}
    onToggleMaximize={toggleFSLMaximize}
    onBack={backToProjects}
    theme={theme}
  />
)}

{activeWindow === "microlesson-project" && (
  <MicroLessonProjectWindow
    onClose={closeMicroLessonProject}
    onMinimize={minimizeMicroLessonProject}
    isMaximized={microLessonMaximized}
    onToggleMaximize={toggleMicroLessonMaximize}
    onBack={backToProjects}
    theme={theme}
  />
)}

{activeWindow === "draftfun-project" && (
  <DraftFunProjectWindow
    onClose={closeDraftFunProject}
    onMinimize={minimizeDraftFunProject}
    isMaximized={draftFunMaximized}
    onToggleMaximize={toggleDraftFunMaximize}
    onBack={backToProjects}
    theme={theme}
  />
)}

{activeWindow === "resume" && (
  <ResumeWindow
    onClose={closeResume}
    onMinimize={minimizeResume}
    isMaximized={resumeMaximized}
    onToggleMaximize={toggleResumeMaximize}
    theme={theme}
  />
)}

{activeWindow === "contact" && (
  <ContactWindow
    onClose={closeContact}
    onMinimize={minimizeContact}
    isMaximized={contactMaximized}
    onToggleMaximize={toggleContactMaximize}
    theme={theme}
  />
)}

{activeWindow === "terminal" && (
  <TerminalWindow
    onClose={closeTerminal}
    onMinimize={minimizeTerminal}
    isMaximized={terminalMaximized}
    onToggleMaximize={toggleTerminalMaximize}

    onOpenHome={openHome}
    onOpenAbout={openAbout}
    onOpenProjects={openProjects}

    onOpenFSL={openFSLProject}
    onOpenHealthcare={openHealthcareProject}
    onOpenMicroLesson={openMicroLessonProject}
    onOpenDraftFun={openDraftFunProject}

    onOpenResume={openResume}
    onOpenContact={openContact}
  />
)}


{activeWindow === "settings" && (
  <SettingsWindow
    onClose={closeSettings}
    onMinimize={minimizeSettings}
    isMaximized={settingsMaximized}
    onToggleMaximize={toggleSettingsMaximize}

    theme={theme}
    onChangeTheme={changeTheme}

    desktopBackground={desktopBackground}
    onChangeBackground={changeDesktopBackground}

    reducedMotion={reducedMotion}
    onToggleReducedMotion={toggleReducedMotion}

    showBootScreen={showBootScreen}
    onToggleBootScreen={toggleBootScreen}

    onResetPreferences={resetPreferences}
  />
)}

</div>
      </section>

      {/* BOTTOM DOCK */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div
  className={`flex items-center gap-1.5 rounded-2xl border p-2 shadow-xl backdrop-blur-lg md:gap-3 md:p-3 ${
    isDark
      ? "border-white/10 bg-[#18211b]/90"
      : "border-black/10 bg-white/80"
  }`}
>
          {/* ABOUT */}
          <button
            onClick={openAbout}
            aria-label="Open About"
            title="About"
            className={`flex h-9 w-9 items-center justify-center rounded-xl text-base transition hover:-translate-y-2 md:h-11 md:w-11 md:text-xl ${
  isDark
    ? "bg-[#243028] hover:bg-[#2c3a30]"
    : "bg-zinc-100 hover:bg-zinc-200"
}`}
          >
            📁
          </button>

          {/* PROJECTS */}
          <button
            onClick={openProjects}
            aria-label="Open Projects"
            title="Projects"
            className={`flex h-9 w-9 items-center justify-center rounded-xl text-base transition hover:-translate-y-2 md:h-11 md:w-11 md:text-xl ${
  isDark
    ? "bg-[#243028] hover:bg-[#2c3a30]"
    : "bg-zinc-100 hover:bg-zinc-200"
}`}
          >
            📂
          </button>

          {/* HOME */}
          <button
            onClick={openHome}
            aria-label="Open Home"
            title="Home"
            className={`flex h-9 w-9 items-center justify-center rounded-xl text-base transition hover:-translate-y-2 md:h-11 md:w-11 md:text-xl ${
  isDark
    ? "bg-[#243028] hover:bg-[#2c3a30]"
    : "bg-zinc-100 hover:bg-zinc-200"
}`}
          >
            💻
          </button>

          {/* RESUME - MOBILE ONLY */}
<button
  onClick={openResume}
  aria-label="Open Resume"
  title="Resume"
  className={`flex h-9 w-9 items-center justify-center rounded-xl text-base transition hover:-translate-y-2 md:hidden ${
    isDark
      ? "bg-[#243028] hover:bg-[#2c3a30]"
      : "bg-zinc-100 hover:bg-zinc-200"
  }`}
>
  📄
</button>

{/* CONTACT - MOBILE ONLY */}
<button
  onClick={openContact}
  aria-label="Open Contact"
  title="Contact"
  className={`flex h-9 w-9 items-center justify-center rounded-xl text-base transition hover:-translate-y-2 md:hidden ${
    isDark
      ? "bg-[#243028] hover:bg-[#2c3a30]"
      : "bg-zinc-100 hover:bg-zinc-200"
  }`}
>
  ✉️
</button>




          {/* TERMINAL */}
          <button
          onClick={openTerminal}
            aria-label="Terminal"
            title="Terminal"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#262626] font-mono text-base text-white shadow-sm transition hover:-translate-y-2 hover:bg-[#1f1f1f] md:h-11 md:w-11 md:text-xl"
          >
            &gt;_
          </button>

          {/* SETTINGS */}
<button
  onClick={openSettings}
  aria-label="Settings"
  title="Settings"
  className={`flex h-9 w-9 items-center justify-center rounded-xl text-base transition hover:-translate-y-2 md:h-11 md:w-11 md:text-xl ${
  isDark
    ? "bg-[#243028] hover:bg-[#2c3a30]"
    : "bg-zinc-100 hover:bg-zinc-200"
}`}
>
  ⚙️
</button>
        </div>
      </div>
    </main>
  );
}