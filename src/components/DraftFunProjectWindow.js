import Image from "next/image";
import AppWindow from "./AppWindow";

export default function DraftFunProjectWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  onBack,
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <AppWindow
      title="draftfun-project.exe"
      path="/projects/draftfun"
      onClose={onClose}
      onMinimize={onMinimize}
      isMaximized={isMaximized}
      onToggleMaximize={onToggleMaximize}
      fullScreenOnMaximize
      largeByDefault
    >
      <div
        className={`${
          isMaximized
            ? "h-[calc(100vh-44px)] overflow-y-auto px-10 py-8 xl:px-20"
            : "h-[calc(100vh-124px)] overflow-y-auto px-8 py-8 pb-28 md:px-10"
        } ${
          isDark
            ? "bg-[#151c17] text-[#f3f4ee]"
            : "bg-[#fbfbf8] text-[#172019]"
        }`}
      >
        {/* PROJECT HEADER */}
        <div className="w-full">
          {/* TOP HEADER ROW */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* BACK BUTTON */}
            <button
              onClick={onBack}
              className={`w-fit font-mono text-sm transition hover:-translate-x-1 ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              ← Back to Projects
            </button>

            {/* PROJECT META */}
            <div className="ml-auto flex flex-col items-start gap-3 lg:min-w-105 lg:items-end">
              <p
                className={`font-mono text-sm ${
                  isDark ? "text-green-400" : "text-green-800"
                }`}
              >
                ~/projects/draftfun
              </p>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  Freelance Project
                </span>

                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  Mobile Application
                </span>

                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  Game-Based Learning
                </span>
              </div>
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-1 max-w-5xl">
            <h1
              className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              DraftFun
            </h1>

            <p
              className={`mt-3 max-w-4xl font-mono text-xs leading-5 sm:text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              DraftFun: An Interactive Game-Based Approach to Enhance the
              Visualization of Drawing Students
            </p>
          </div>
        </div>

        {/* HERO / PROJECT PREVIEW */}
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div
            className={`relative aspect-video overflow-hidden rounded-xl border ${
              isDark
                ? "border-white/10 bg-[#1b241e]"
                : "border-black/10 bg-white"
            }`}
          >
            <Image
              src="/projects/draftfun.png"
              alt="DraftFun mobile application preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* PROJECT INFO */}
          <div
            className={`rounded-xl border p-6 ${
              isDark
                ? "border-green-400/20 bg-[#1b241e]"
                : "border-green-800/15 bg-[#f3f4ee]"
            }`}
          >
            <p
              className={`font-mono text-xs font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              &gt; project_info
            </p>

            <div
              className={`mt-5 space-y-4 font-mono text-xs leading-5 ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
                  project_type
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Paid Freelance Mobile Application
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
                  my_role
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Freelance Flutter Developer
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
                  platform
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Android
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
                  backend
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Firebase
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
                  distribution
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Android APK
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OVERVIEW */}
        <section className="mt-10 max-w-5xl">
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; overview.txt
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            What the application does
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            DraftFun is an Android-based interactive learning application
            developed to support students in understanding technical drawing
            concepts through lessons, activities, and game-based learning
            elements.
          </p>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The application organizes learning content into four chapters,
            combining instructional materials, interactive exercises, results,
            progress-related features, and audio support within one mobile
            learning experience.
          </p>
        </section>

        {/* MY ROLE */}
        <section
          className={`mt-10 max-w-5xl rounded-xl border p-6 ${
            isDark
              ? "border-green-400/20 bg-green-400/5"
              : "border-green-800/15 bg-green-50/40"
          }`}
        >
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; my_role.exe
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            Freelance Flutter Developer
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I developed DraftFun as a paid freelance mobile application,
            handling the implementation of the user interface, authentication,
            Firebase integration, lesson and activity flows, results pages,
            leaderboard, settings, and application navigation.
          </p>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I also implemented the application&apos;s background music, sound
            effects, narration controls, persistent audio settings, responsive
            layouts for different Android screen sizes, and APK preparation for
            deployment and testing on Android devices.
          </p>
        </section>

        {/* APPLICATION FLOW */}
        <section className="mt-10">
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; application_flow
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            User Learning Flow
          </h2>

          <p
            className={`mt-3 max-w-3xl text-sm leading-6 ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The application guides learners through a structured mobile
            experience from account access to lessons, interactive activities,
            results, and progress tracking.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {[
              ["01", "Login / Create Account"],
              ["02", "Chapter Selection"],
              ["03", "Lessons"],
              ["04", "Interactive Activities"],
              ["05", "Results"],
              ["06", "Progress / Leaderboard"],
            ].map(([number, title], index) => (
              <div
                key={number}
                className={`relative rounded-xl border p-4 ${
                  isDark
                    ? "border-white/10 bg-[#1b241e]"
                    : "border-black/10 bg-[#f8f8f4]"
                }`}
              >
                <p
                  className={`font-mono text-xs font-semibold ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  {number}
                </p>

                <p
                  className={`mt-3 text-sm font-semibold leading-5 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  {title}
                </p>

                {index < 5 && (
                  <span
                    className={`absolute -right-3 top-1/2 hidden -translate-y-1/2 font-mono xl:block ${
                      isDark ? "text-green-400" : "text-green-800"
                    }`}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="mt-10">
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; core_features
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            Core Application Features
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "User Authentication"],
              ["02", "Four Learning Chapters"],
              ["03", "Interactive Activities"],
              ["04", "Results and Progress Flow"],
              ["05", "Leaderboard"],
              ["06", "Audio and Narration Controls"],
              ["07", "Persistent User Settings"],
              ["08", "Responsive Android Layouts"],
              ["09", "APK Distribution"],
            ].map(([number, feature]) => (
              <div
                key={number}
                className={`rounded-xl border p-5 ${
                  isDark
                    ? "border-white/10 bg-[#1b241e]"
                    : "border-black/10 bg-[#f8f8f4]"
                }`}
              >
                <p
                  className={`font-mono text-xs font-semibold ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  {number}
                </p>

                <p
                  className={`mt-3 text-sm font-semibold leading-5 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK + DEVELOPMENT */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* TECH STACK */}
          <section>
            <p
              className={`font-mono text-sm font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              &gt; tech_stack
            </p>

            <h2
              className={`mt-3 text-2xl font-bold ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Technologies Used
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Flutter",
                "Dart",
                "Firebase Authentication",
                "Cloud Firestore",
                "Shared Preferences",
                "Audioplayers",
                "Material 3",
              ].map((technology) => (
                <span
                  key={technology}
                  className={`rounded-md border px-3 py-2 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* DEVELOPMENT DETAILS */}
          <section>
            <p
              className={`font-mono text-sm font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              &gt; development_details
            </p>

            <h2
              className={`mt-3 text-2xl font-bold ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Development Work
            </h2>

            <div
              className={`mt-5 space-y-4 text-sm leading-7 ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {[
                "Flutter UI and responsive mobile layouts",
                "Firebase authentication and user data integration",
                "Chapter, lesson, and activity navigation",
                "Interactive activity and result flows",
                "Leaderboard and user progress-related features",
                "Background music, sound effects, and narration",
                "Persistent settings and audio preferences",
                "Android device testing and APK preparation",
              ].map((detail) => (
                <p key={detail}>
                  <span
                    className={`mr-2 font-mono ${
                      isDark ? "text-green-400" : "text-green-800"
                    }`}
                  >
                    &gt;
                  </span>
                  {detail}
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* PROJECT LINKS */}
        <section
          className={`mt-10 border-t pt-6 ${
            isDark ? "border-white/10" : "border-black/10"
          }`}
        >
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; project_links
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {/* VIDEO DEMO - CONNECT LATER */}
            <button
              disabled
              className={`cursor-not-allowed rounded-lg border px-5 py-3 font-mono text-sm opacity-60 ${
                isDark
                  ? "border-green-400/20 bg-green-400/10 text-green-300"
                  : "border-green-800/20 bg-green-50 text-green-900"
              }`}
            >
              Watch App Demo ▶
            </button>

            {/* GITHUB - CONNECT LATER */}
            <button
              disabled
              className={`cursor-not-allowed rounded-lg border px-5 py-3 font-mono text-sm opacity-60 ${
                isDark
                  ? "border-white/10 bg-[#1b241e] text-zinc-300"
                  : "border-black/15 bg-white text-zinc-600"
              }`}
            >
              View Source Code ↗
            </button>

            {/* APK DOWNLOAD */}
            <a
              href="https://github.com/ramsantosk/portfolio/releases/download/v1.0.0/DraftFun-v1.0.apk"
              
              className={`rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white transition hover:-translate-y-0.5 ${
                isDark
                  ? "bg-green-600 hover:bg-green-500"
                  : "bg-green-800 hover:bg-green-700"
              }`}
            >
              Download APK ↓
            </a>
          </div>

          <div
            className={`mt-4 space-y-1 font-mono text-[11px] leading-5 ${
              isDark ? "text-zinc-500" : "text-zinc-400"
            }`}
          >
            <p>Android APK available for direct download.</p>

            <p>
              Video demonstration and source code links will be added separately.
            </p>
          </div>
        </section>
      </div>
    </AppWindow>
  );
}