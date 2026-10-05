import Image from "next/image";
import AppWindow from "./AppWindow";

export default function MicroLessonProjectWindow({
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
      title="microlesson-project.exe"
      path="/projects/microlesson"
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
                ~/projects/microlesson
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
                  University Thesis System
                </span>

                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  E-Learning Platform
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
              Micro-Lesson Generator
            </h1>

            <p
              className={`mt-3 max-w-4xl font-mono text-xs leading-5 sm:text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              An E-Learning Platform with Real-Time Adaptive Difficulty and
              Micro-Lesson Generator
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
              src="/projects/microlesson.png"
              alt="Micro-Lesson Generator preview"
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
                <p className={isDark ? "text-zinc-500" : "text-zinc-400"}>
                  project_type
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Freelance Web Application
                </p>
              </div>

              <div>
                <p className={isDark ? "text-zinc-500" : "text-zinc-400"}>
                  client_context
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  University Thesis
                </p>
              </div>

              <div>
                <p className={isDark ? "text-zinc-500" : "text-zinc-400"}>
                  my_role
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Freelance Full-Stack Web Developer
                </p>
              </div>

              <div>
                <p className={isDark ? "text-zinc-500" : "text-zinc-400"}>
                  platform
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Web
                </p>
              </div>

              <div>
                <p className={isDark ? "text-zinc-500" : "text-zinc-400"}>
                  deployment
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  Hostinger
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
            What the platform does
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The Micro-Lesson Generator is an e-learning platform developed as
            the system output for a university thesis. It provides students
            with structured lessons, progress tracking, quizzes, and
            micro-learning content while giving instructors tools to manage
            courses, lessons, and assessments.
          </p>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The system was designed around a guided learning flow where
            students progress through lessons, complete learning activities,
            and take quizzes before continuing through the course.
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
            Freelance Full-Stack Web Developer
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I developed the web application as a freelance project for a
            university thesis. I handled the implementation of the
            system&apos;s frontend and backend, database integration, user
            workflows, lesson management, quiz functionality, and student
            progress tracking.
          </p>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I also worked on the course progression logic, lesson unlocking,
            quiz scoring and validation, instructor management features, and
            deployment-related configuration needed to run the application in
            a live hosting environment.
          </p>
        </section>

        {/* LEARNING FLOW */}
        <section className="mt-10">
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; learning_flow
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            Student Learning Flow
          </h2>

          <p
            className={`mt-3 max-w-3xl text-sm leading-6 ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The platform guides students through a structured sequence from
            enrollment to lesson completion, assessment, and course progress.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {[
              ["01", "Enroll in Course"],
              ["02", "Start Lesson"],
              ["03", "Complete Lesson"],
              ["04", "Unlock Next Content"],
              ["05", "Take Quiz"],
              ["06", "Track Progress"],
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

        {/* STUDENT + INSTRUCTOR FEATURES */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* STUDENT */}
          <section>
            <p
              className={`font-mono text-sm font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              &gt; student_features
            </p>

            <h2
              className={`mt-3 text-2xl font-bold ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Student Features
            </h2>

            <div
              className={`mt-5 space-y-4 text-sm leading-7 ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {[
                "Course enrollment",
                "Structured micro-lessons",
                "Lesson progress tracking",
                "Sequential lesson unlocking",
                "Quiz and assessment system",
                "Quiz results and course progress",
              ].map((feature) => (
                <p key={feature}>
                  <span
                    className={`mr-2 font-mono ${
                      isDark ? "text-green-400" : "text-green-800"
                    }`}
                  >
                    &gt;
                  </span>
                  {feature}
                </p>
              ))}
            </div>
          </section>

          {/* INSTRUCTOR */}
          <section>
            <p
              className={`font-mono text-sm font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              &gt; instructor_features
            </p>

            <h2
              className={`mt-3 text-2xl font-bold ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Instructor Features
            </h2>

            <div
              className={`mt-5 space-y-4 text-sm leading-7 ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {[
                "Course management",
                "Lesson creation and editing",
                "Publish and unpublish lessons",
                "Lesson ordering",
                "Quiz builder and question management",
                "Student learning content management",
              ].map((feature) => (
                <p key={feature}>
                  <span
                    className={`mr-2 font-mono ${
                      isDark ? "text-green-400" : "text-green-800"
                    }`}
                  >
                    &gt;
                  </span>
                  {feature}
                </p>
              ))}
            </div>
          </section>
        </div>

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
                "PHP",
                "MySQL",
                "PDO",
                "HTML",
                "CSS",
                "JavaScript",
                "AJAX",
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
                "Frontend interface development",
                "PHP backend implementation",
                "MySQL database design and integration",
                "Student progress and lesson unlocking logic",
                "Quiz scoring and validation",
                "Instructor course and lesson management",
                "Deployment and production configuration",
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

        {/* SYSTEM EVALUATION */}
        <section
          className={`mt-10 rounded-xl border p-6 ${
            isDark
              ? "border-green-400/20 bg-[#1b241e]"
              : "border-green-800/15 bg-[#f3f4ee]"
          }`}
        >
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; system_evaluation
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            System Evaluation
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The completed system was evaluated using ISO/IEC 25010 software
            quality criteria as part of the university thesis evaluation.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div
              className={`rounded-lg border p-5 ${
                isDark
                  ? "border-white/10 bg-[#151c17]"
                  : "border-black/10 bg-white/70"
              }`}
            >
              <p
                className={`font-mono text-xs ${
                  isDark ? "text-zinc-500" : "text-zinc-400"
                }`}
              >
                functional_suitability
              </p>

              <p
                className={`mt-2 text-xl font-bold ${
                  isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                }`}
              >
                4.28
              </p>
            </div>

            <div
              className={`rounded-lg border p-5 ${
                isDark
                  ? "border-white/10 bg-[#151c17]"
                  : "border-black/10 bg-white/70"
              }`}
            >
              <p
                className={`font-mono text-xs ${
                  isDark ? "text-zinc-500" : "text-zinc-400"
                }`}
              >
                reliability
              </p>

              <p
                className={`mt-2 text-xl font-bold ${
                  isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                }`}
              >
                4.30
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
              Live Demo ↗
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
            Links will be added once the live project and repository are ready.
          </p>
        </section>
      </div>
    </AppWindow>
  );
}