import Image from "next/image";
import AppWindow from "./AppWindow";

export default function HealthcareProjectWindow({
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
      title="healthcare-project.exe"
      path="/projects/healthcare"
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
                ~/projects/healthcare
              </p>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  Web System
                </span>

                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  Healthcare Management
                </span>

                <span
                  className={`rounded-md border px-3 py-1 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  PHP / MySQL
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
              Smart Web-Based Healthcare Management System
            </h1>

            <p
              className={`mt-3 max-w-4xl font-mono text-xs leading-5 sm:text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              A healthcare management system developed for Barangay Ilaya
              Alabang to manage patient information, consultation requests,
              healthcare records, reports, and administrative processes.
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
              src="/projects/healthcare.png"
              alt="Smart Web-Based Healthcare Management System preview"
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
                  Web-Based Healthcare System
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
                  Full-Stack Developer
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
                  database
                </p>

                <p
                  className={`mt-1 ${
                    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                  }`}
                >
                  MySQL
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }
                >
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
            What the system does
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            The system was developed for Barangay Ilaya Alabang to centralize
            healthcare-related processes into one web-based platform. It
            supports patient registration and records, consultation requests,
            QR-based patient identification, staff workflows, administrative
            management, and healthcare reporting.
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
            Full-Stack Development
          </h2>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I worked across both the frontend and backend of the system,
            including interface development, PHP functionality, MySQL database
            integration, user flows, and the connection between patient,
            staff, and administrative modules.
          </p>

          <p
            className={`mt-4 max-w-4xl text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I also worked on QR-related functionality, deployment
            configuration, database setup, and production-related fixes while
            preparing the system for use in a live hosting environment.
          </p>
        </section>

        {/* KEY FEATURES */}
        <section className="mt-10">
          <p
            className={`font-mono text-sm font-semibold ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            &gt; key_features
          </p>

          <h2
            className={`mt-3 text-2xl font-bold ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            Core System Features
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Patient Registration & Records"],
              ["02", "QR Patient Identification"],
              ["03", "Consultation Requests"],
              ["04", "Staff Portal"],
              ["05", "Administrative Management"],
              ["06", "Reports & Healthcare Records"],
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

        {/* TECHNOLOGIES + SYSTEM INFO */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* TECHNOLOGIES */}
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
                "HTML",
                "CSS",
                "JavaScript",
                "AJAX",
                "Hostinger",
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
              className={`mt-5 space-y-3 text-sm leading-7 ${
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
                Frontend interface and responsive layouts
              </p>

              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                Backend PHP functionality and database integration
              </p>

              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                Patient, staff, and administrative workflows
              </p>

              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                QR generation and patient identification
              </p>

              <p>
                <span
                  className={`mr-2 font-mono ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  &gt;
                </span>
                Hosting configuration and production fixes
              </p>
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