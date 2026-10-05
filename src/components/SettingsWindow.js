"use client";

import AppWindow from "./AppWindow";

export default function SettingsWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,

  theme = "light",
  onChangeTheme,

  desktopBackground = "plain",
  onChangeBackground,

  reducedMotion = false,
  onToggleReducedMotion,

  showBootScreen = true,
  onToggleBootScreen,

  onResetPreferences,
}) {
  const isDark = theme === "dark";

  const backgroundOptions = [
    {
      id: "plain",
      label: "Plain",
      preview: isDark
        ? "bg-[#0f1511]"
        : "bg-[#f4f1e8]",
    },
    {
      id: "grid",
      label: "Grid",
      preview: isDark
        ? "bg-[#0f1511] bg-[linear-gradient(to_right,rgba(134,239,172,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(134,239,172,0.12)_1px,transparent_1px)] bg-[size:12px_12px]"
        : "bg-[#f4f1e8] bg-[linear-gradient(to_right,rgba(22,101,52,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,101,52,0.12)_1px,transparent_1px)] bg-[size:12px_12px]",
    },
    {
      id: "dots",
      label: "Dots",
      preview: isDark
        ? "bg-[#0f1511] bg-[radial-gradient(rgba(134,239,172,0.22)_1px,transparent_1px)] bg-[size:10px_10px]"
        : "bg-[#f4f1e8] bg-[radial-gradient(rgba(22,101,52,0.25)_1px,transparent_1px)] bg-[size:10px_10px]",
    },
  ];

  const borderClass = isDark
    ? "border-white/10"
    : "border-black/10";

  const headingClass = isDark
    ? "text-[#f3f4ee]"
    : "text-[#172019]";

  const mutedClass = isDark
    ? "text-zinc-400"
    : "text-zinc-500";

  const accentClass = isDark
    ? "text-green-400"
    : "text-green-800";

  const cardClass = isDark
    ? "border-white/10 bg-[#1b241e]"
    : "border-black/10 bg-white";

  return (
    <AppWindow
      title="settings.exe"
      path="/settings"
      onClose={onClose}
      onMinimize={onMinimize}
      isMaximized={isMaximized}
      onToggleMaximize={onToggleMaximize}
      wideByDefault
    >
      <div
        className={`max-h-[calc(100vh-180px)] overflow-y-auto p-8 md:p-10 ${
          isDark
            ? "bg-[#151c17] text-[#f3f4ee]"
            : "bg-[#fbfbf8] text-[#172019]"
        }`}
      >
        {/* HEADER */}
        <div className={`border-b pb-7 ${borderClass}`}>
          <p
            className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] ${accentClass}`}
          >
            &gt; system_preferences
          </p>

          <h1
            className={`mt-3 text-3xl font-bold tracking-tight ${headingClass}`}
          >
            Settings
          </h1>

          <p
            className={`mt-3 max-w-xl text-sm leading-6 ${mutedClass}`}
          >
            Customize how the Developer OS looks and behaves on this
            device.
          </p>
        </div>

        {/* APPEARANCE */}
        <section className={`border-b py-7 ${borderClass}`}>
          <p
            className={`font-mono text-xs font-semibold uppercase tracking-wider ${accentClass}`}
          >
            Appearance
          </p>

          {/* THEME */}
          <div className="mt-5">
            <h2
              className={`text-lg font-semibold ${headingClass}`}
            >
              Theme
            </h2>

            <p className={`mt-1 text-sm ${mutedClass}`}>
              Choose the appearance of Developer OS.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:max-w-md">
              {/* LIGHT */}
              <button
                type="button"
                onClick={() => onChangeTheme?.("light")}
                className={`rounded-xl border p-4 text-left transition ${
                  theme === "light"
                    ? "border-green-700 bg-green-50"
                    : isDark
                      ? "border-white/10 bg-[#1b241e] hover:border-green-400/40"
                      : "border-black/10 bg-white hover:border-green-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-sm font-semibold ${
                      theme === "light"
                        ? "text-[#172019]"
                        : headingClass
                    }`}
                  >
                    ☀ Light
                  </span>

                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      theme === "light"
                        ? "border-green-800 bg-green-800"
                        : isDark
                          ? "border-zinc-600 bg-[#151c17]"
                          : "border-zinc-300 bg-white"
                    }`}
                  >
                    {theme === "light" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </div>
              </button>

              {/* DARK */}
              <button
                type="button"
                onClick={() => onChangeTheme?.("dark")}
                className={`rounded-xl border p-4 text-left transition ${
                  theme === "dark"
                    ? "border-green-500 bg-[#1c2a21]"
                    : "border-black/10 bg-white hover:border-green-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-sm font-semibold ${
                      theme === "dark"
                        ? "text-[#f3f4ee]"
                        : "text-[#172019]"
                    }`}
                  >
                    ◐ Dark
                  </span>

                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      theme === "dark"
                        ? "border-green-500 bg-green-600"
                        : "border-zinc-300 bg-white"
                    }`}
                  >
                    {theme === "dark" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* DESKTOP BACKGROUND */}
          <div className="mt-7">
            <h2
              className={`text-lg font-semibold ${headingClass}`}
            >
              Desktop Background
            </h2>

            <p className={`mt-1 text-sm ${mutedClass}`}>
              Choose a background style for the desktop.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {backgroundOptions.map((option) => {
              const selected =
                desktopBackground === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    onChangeBackground?.(option.id)
                  }
                  className={`rounded-xl border p-3 text-left transition ${
                    selected
                      ? isDark
                        ? "border-green-500 bg-[#1c2a21]"
                        : "border-green-800 bg-green-50"
                      : isDark
                        ? "border-white/10 bg-[#1b241e] hover:border-green-400/40"
                        : "border-black/10 bg-white hover:border-green-800/40"
                  }`}
                >
                  <div
                    className={`h-24 w-full rounded-lg border ${
                      isDark
                        ? "border-white/10"
                        : "border-black/10"
                    } ${option.preview}`}
                  />

                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-semibold ${headingClass}`}
                    >
                      {option.label}
                    </span>

                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        selected
                          ? isDark
                            ? "border-green-500 bg-green-600"
                            : "border-green-800 bg-green-800"
                          : isDark
                            ? "border-zinc-600 bg-[#151c17]"
                            : "border-zinc-300 bg-white"
                      }`}
                    >
                      {selected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ACCESSIBILITY */}
        <section className={`border-b py-7 ${borderClass}`}>
          <div>
            <p
              className={`font-mono text-xs font-semibold uppercase tracking-wider ${accentClass}`}
            >
              Accessibility
            </p>

            <h2
              className={`mt-2 text-lg font-semibold ${headingClass}`}
            >
              Motion Effects
            </h2>

            <p className={`mt-1 text-sm ${mutedClass}`}>
              Reduce movement and hover animations across the
              desktop.
            </p>
          </div>

          <div
            className={`mt-5 flex items-center justify-between rounded-xl border p-4 ${cardClass}`}
          >
            <div>
              <p
                className={`text-sm font-semibold ${headingClass}`}
              >
                Reduced Motion
              </p>

              <p className={`mt-1 text-xs ${mutedClass}`}>
                {reducedMotion
                  ? "Animations are reduced."
                  : "Normal animations are enabled."}
              </p>
            </div>

            <button
              type="button"
              onClick={onToggleReducedMotion}
              aria-pressed={reducedMotion}
              className={`relative h-7 w-12 rounded-full transition ${
                reducedMotion
                  ? isDark
                    ? "bg-green-600"
                    : "bg-green-800"
                  : isDark
                    ? "bg-zinc-700"
                    : "bg-zinc-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
                  reducedMotion ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </section>

        {/* STARTUP */}
        <section className={`border-b py-7 ${borderClass}`}>
          <div>
            <p
              className={`font-mono text-xs font-semibold uppercase tracking-wider ${accentClass}`}
            >
              Startup
            </p>

            <h2
              className={`mt-2 text-lg font-semibold ${headingClass}`}
            >
              Boot Screen
            </h2>

            <p className={`mt-1 text-sm ${mutedClass}`}>
              Choose whether the Developer OS boot animation
              appears after entering the portfolio.
            </p>
          </div>

          <div
            className={`mt-5 flex items-center justify-between rounded-xl border p-4 ${cardClass}`}
          >
            <div>
              <p
                className={`text-sm font-semibold ${headingClass}`}
              >
                Show Boot Screen
              </p>

              <p className={`mt-1 text-xs ${mutedClass}`}>
                {showBootScreen
                  ? "Boot animation is enabled."
                  : "Portfolio opens directly to the desktop."}
              </p>
            </div>

            <button
              type="button"
              onClick={onToggleBootScreen}
              aria-pressed={showBootScreen}
              className={`relative h-7 w-12 rounded-full transition ${
                showBootScreen
                  ? isDark
                    ? "bg-green-600"
                    : "bg-green-800"
                  : isDark
                    ? "bg-zinc-700"
                    : "bg-zinc-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
                  showBootScreen ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </section>

        {/* SYSTEM INFO */}
        <section className={`border-b py-7 ${borderClass}`}>
          <p
            className={`font-mono text-xs font-semibold uppercase tracking-wider ${accentClass}`}
          >
            System
          </p>

          <div
            className={`mt-5 overflow-hidden rounded-xl border ${cardClass}`}
          >
            <div
              className={`flex items-center justify-between border-b px-4 py-3 ${borderClass}`}
            >
              <span
                className={`font-mono text-xs ${mutedClass}`}
              >
                operating_system
              </span>

              <span
                className={`font-mono text-xs font-semibold ${headingClass}`}
              >
                Developer OS
              </span>
            </div>

            <div
              className={`flex items-center justify-between border-b px-4 py-3 ${borderClass}`}
            >
              <span
                className={`font-mono text-xs ${mutedClass}`}
              >
                version
              </span>

              <span
                className={`font-mono text-xs font-semibold ${headingClass}`}
              >
                1.0
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <span
                className={`font-mono text-xs ${mutedClass}`}
              >
                developer
              </span>

              <span
                className={`font-mono text-xs font-semibold ${headingClass}`}
              >
                Ram Kirsten Santos
              </span>
            </div>
          </div>
        </section>

        {/* RESET */}
        <section className="pt-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p
                className={`font-mono text-xs font-semibold uppercase tracking-wider ${accentClass}`}
              >
                Reset
              </p>

              <p className={`mt-2 text-sm ${mutedClass}`}>
                Restore the default Developer OS preferences.
              </p>
            </div>

            <button
              type="button"
              onClick={onResetPreferences}
              className={`rounded-lg border px-4 py-2.5 font-mono text-xs font-semibold transition ${
                isDark
                  ? "border-white/10 bg-[#1b241e] text-zinc-200 hover:border-green-400/40 hover:bg-[#243028]"
                  : "border-black/15 bg-white text-zinc-700 hover:border-green-800/40 hover:bg-zinc-50"
              }`}
            >
              Reset Preferences
            </button>
          </div>
        </section>
      </div>
    </AppWindow>
  );
}