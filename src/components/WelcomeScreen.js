import Image from "next/image";

export default function WelcomeScreen({
  onEnter,
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${
        isDark
          ? "bg-[#0f1511] text-[#f3f4ee]"
          : "bg-[#f5f2e9] text-[#172019]"
      }`}
    >
      {/* TOP SYSTEM BAR */}
      <header
        className={`absolute left-0 top-0 z-30 flex h-12 w-full items-center justify-between border-b px-6 backdrop-blur-md ${
          isDark
            ? "border-white/10 bg-[#0f1511]/80"
            : "border-black/10 bg-[#f5f2e9]/80"
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

          <span
            className={`font-mono text-sm ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            Developer OS v1.0
          </span>
        </div>

        <div
          className={`hidden items-center gap-5 font-mono text-xs sm:flex ${
            isDark ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          <span>WiFi</span>
          <span>●</span>
          <span>System Ready</span>
        </div>
      </header>

      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0">
        <div
          className={`absolute left-[10%] top-[20%] h-72 w-72 rounded-full blur-3xl ${
            isDark
              ? "bg-green-900/20"
              : "bg-green-100/60"
          }`}
        />

        <div
          className={`absolute bottom-[5%] right-[8%] h-80 w-80 rounded-full blur-3xl ${
            isDark
              ? "bg-yellow-900/10"
              : "bg-yellow-100/60"
          }`}
        />
      </div>

      {/* DECORATIVE MESSAGE */}
      <div className="absolute left-10 top-28 hidden max-w-40 2xl:block">
        <div
          className={`border-l-4 pl-4 ${
            isDark
              ? "border-green-400"
              : "border-green-700"
          }`}
        >
          <p
            className={`font-mono text-sm leading-6 ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            still building.
            <br />
            still learning.
            <br />
            still curious.
          </p>
        </div>
      </div>

      {/* WELCOME WINDOW */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-24 pt-20">
        <div
          className={`w-full max-w-4xl overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl ${
            isDark
              ? "border-white/10 bg-[#151c17]/95"
              : "border-black/15 bg-white/90"
          }`}
        >
          {/* WINDOW TITLE BAR */}
          <div
            className={`flex h-12 items-center justify-between border-b px-5 ${
              isDark
                ? "border-white/10 bg-[#19221c]"
                : "border-black/10 bg-[#faf9f5]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />

              <span
                className={`ml-4 font-mono text-sm ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                welcome.exe
              </span>
            </div>

            <span
              className={`hidden font-mono text-xs sm:block ${
                isDark ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              /ramkirstensantos
            </span>
          </div>

          {/* WINDOW BODY */}
          <div className="grid gap-8 p-7 md:grid-cols-[0.8fr_1.6fr] md:p-10">
            {/* LEFT PANEL */}
            <div
              className={`rounded-xl border p-6 ${
                isDark
                  ? "border-green-400/20 bg-[#1b241e]"
                  : "border-green-800/15 bg-[#f5f6f0]"
              }`}
            >
              <div
                className={`relative h-40 w-32 overflow-hidden rounded-xl border shadow-sm ${
                  isDark
                    ? "border-green-400/20 bg-[#151c17]"
                    : "border-green-800/20 bg-white"
                }`}
              >
                <Image
                  src="/images/profile.png"
                  alt="Ram Kirsten Santos"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <p
                className={`mt-5 font-mono text-sm font-semibold ${
                  isDark ? "text-green-400" : "text-green-800"
                }`}
              >
                ramkirsten@dev
              </p>

              <div
                className={`mt-2 flex items-center gap-2 font-mono text-xs ${
                  isDark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-green-500" />
                online
              </div>

              <div
                className={`my-6 border-t ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}
              />

              <div
                className={`space-y-2 font-mono text-xs ${
                  isDark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                <p>
                  <span
                    className={
                      isDark ? "text-green-400" : "text-green-800"
                    }
                  >
                    &gt;
                  </span>{" "}
                  building: portfolio.exe
                </p>

                <p>
                  <span
                    className={
                      isDark ? "text-green-400" : "text-green-800"
                    }
                  >
                    &gt;
                  </span>{" "}
                  focus: web + software
                </p>

                <p>
                  <span
                    className={
                      isDark ? "text-green-400" : "text-green-800"
                    }
                  >
                    &gt;
                  </span>{" "}
                  open_to: opportunities
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex flex-col justify-center">
              <p
                className={`font-mono text-lg ${
                  isDark ? "text-green-400" : "text-green-800"
                }`}
              >
                Hello, I&apos;m
              </p>

              <h1
  className={`mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl ${
    isDark
      ? "text-[#f3f4ee]"
      : "text-[#172019]"
  }`}
>
  &gt; Ram Kirsten Santos
</h1>

              <p
                className={`mt-3 font-mono text-sm ${
                  isDark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Developer OS v1.0
              </p>

              <p
                className={`mt-7 max-w-xl font-mono text-sm leading-7 sm:text-base ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                Welcome to my digital workspace.
                <br />
                A collection of projects, experiences, and things I&apos;ve
                built while learning and growing as a developer.
              </p>

              <button
                onClick={onEnter}
                className={`mt-8 flex w-full items-center justify-between rounded-xl px-6 py-4 font-mono text-base font-semibold text-white shadow-lg transition hover:-translate-y-1 ${
                  isDark
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-green-800 hover:bg-green-700"
                }`}
              >
                <span>&gt; Enter Portfolio</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM STATUS TEXT */}
      <div
        className={`absolute bottom-8 left-8 hidden font-mono text-xs leading-6 md:block ${
          isDark ? "text-zinc-500" : "text-zinc-500"
        }`}
      >
        <p>&gt; System Ready</p>
        <p>&gt; Portfolio OS v1.0</p>
        <p>&gt; Click enter to begin...</p>
      </div>

      {/* MINI DOCK */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <div
          className={`flex items-center gap-2 rounded-2xl border p-2 shadow-lg backdrop-blur-xl ${
            isDark
              ? "border-white/10 bg-[#18211b]/90"
              : "border-black/10 bg-white/70"
          }`}
        >
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl font-mono font-bold shadow-sm ${
              isDark
                ? "bg-[#243028] text-green-400"
                : "bg-white text-green-800"
            }`}
          >
            RK
          </div>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ${
              isDark ? "bg-[#243028]" : "bg-white"
            }`}
          >
            📁
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 font-mono text-white shadow-sm">
            &gt;_
          </div>
        </div>
      </div>
    </main>
  );
}