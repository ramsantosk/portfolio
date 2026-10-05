import Image from "next/image";
import AppWindow from "./AppWindow";

export default function FSLProjectWindow({
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
      title="fsl-project.exe"
      path="/projects/fsl"
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
                ~/projects/fsl
              </p>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  Academic Thesis
                </span>

                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  AI / Embedded System
                </span>

                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-amber-400/20 bg-amber-400/10 text-amber-300"
                      : "border-amber-700/20 bg-amber-50 text-amber-800"
                  }`}
                >
                  Best in Research Paper
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
              Basic Filipino Sign Language Translation System
            </h1>

            <p
              className={`mt-3 max-w-4xl font-mono text-xs leading-5 sm:text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Bridging the Communication Gap: Developing A Real-Time System for
              Translating Basic Filipino Sign Language Gesture into
              Text-to-Speech
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
              src="/projects/fsl.png"
              alt="Basic Filipino Sign Language Translation System"
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
                  Academic Thesis / Embedded AI System
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
                  Lead Software Developer
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
                  Raspberry Pi
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
                  output
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Gesture → Text → Speech
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
            What the system does
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The project is a real-time Basic Filipino Sign Language recognition
            system designed to recognize hand gestures through a camera and
            translate the detected gesture into readable text and synthesized
            speech. The goal was to provide a practical communication tool that
            could help bridge interactions between Filipino Sign Language users
            and people who may not understand sign language.
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
            Lead Software Developer
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            This was a collaborative research project, and I took the lead in
            developing and integrating the system&apos;s software components. I
            was primarily responsible for writing and integrating the code
            behind the gesture recognition and translation process.
          </p>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I led the software workflow from collecting and organizing gesture
            data, preparing the dataset, and training and testing the model, to
            integrating the recognition process with the Raspberry Pi and
            producing the final text and text-to-speech output.
          </p>
        </section>

        {/* DEVELOPMENT PIPELINE */}
        <section className="mt-10">
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; development_pipeline
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            How I built the software
          </h2>

          <p
            className={`mt-3 max-w-3xl text-sm leading-6 ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The software was developed as a complete recognition pipeline,
            beginning with gesture data collection and ending with real-time
            text and speech output.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {[
              ["01", "Gesture Data Collection"],
              ["02", "Dataset Preparation"],
              ["03", "Model Training"],
              ["04", "Real-Time Recognition"],
              ["05", "Text Output"],
              ["06", "Text-to-Speech"],
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

        {/* OBJECTIVES + TECH STACK */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* OBJECTIVES */}
          <section>
            <p
              className={`font-mono text-sm font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              &gt; objectives.txt
            </p>

            <h2
              className={`mt-3 text-2xl font-bold ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Project Objectives
            </h2>

            <div
              className={`mt-5 space-y-4 text-sm leading-7 ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                Develop a system capable of recognizing Basic Filipino Sign
                Language gestures in real time.
              </p>

              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                Convert recognized gestures into readable text.
              </p>

              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                Produce speech output from the translated gesture.
              </p>

              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                Build the recognition process into a Raspberry Pi-based
                portable system.
              </p>
            </div>
          </section>

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
                "Raspberry Pi 4",
                "Python",
                "MediaPipe",
                "TensorFlow Lite",
                "Computer Vision",
                "Text-to-Speech",
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
        </div>

        {/* RESEARCH RECOGNITION */}
        <section
          className={`mt-10 rounded-xl border p-6 ${
            isDark
              ? "border-amber-400/20 bg-amber-400/5"
              : "border-amber-700/20 bg-amber-50/50"
          }`}
        >
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-amber-300" : "text-amber-800"
            }`}
          >
            &gt; recognition.log
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            Research Recognition
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div
              className={`rounded-lg border p-5 ${
                isDark
                  ? "border-amber-400/15 bg-[#1b241e]"
                  : "border-amber-700/15 bg-white/60"
              }`}
            >
              <p
                className={`font-semibold ${
                  isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                }`}
              >
                Best in Research Paper
              </p>

              <p
                className={`mt-2 text-sm leading-6 ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                In-House Research Presentation for Bachelor of Industrial
                Technology Students
              </p>
            </div>

            <div
              className={`rounded-lg border p-5 ${
                isDark
                  ? "border-amber-400/15 bg-[#1b241e]"
                  : "border-amber-700/15 bg-white/60"
              }`}
            >
              <p
                className={`font-semibold ${
                  isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                }`}
              >
                Research Presenter
              </p>

              <p
                className={`mt-2 text-sm leading-6 ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                December 10, 2025
              </p>
            </div>
          </div>
        </section>

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
            <button
              disabled
              className={`cursor-not-allowed rounded-lg border px-5 py-3 font-mono text-sm opacity-60 ${
                isDark
                  ? "border-green-400/20 bg-green-400/10 text-green-300"
                  : "border-green-800/20 bg-green-50 text-green-900"
              }`}
            >
              Watch Video Demo ▶
            </button>

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
          </div>

          <p
            className={`mt-3 font-mono text-[11px] ${
              isDark ? "text-zinc-500" : "text-zinc-400"
            }`}
          >
            Links will be added once the video and GitHub repository are ready.
          </p>
        </section>
      </div>
    </AppWindow>
  );
}