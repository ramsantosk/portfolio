import AppWindow from "./AppWindow";
import Image from "next/image";

export default function AboutWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <AppWindow
      title="about.exe"
      path="/about"
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
      ? "grid h-[calc(100vh-44px)] items-start gap-12 overflow-y-auto px-8 pt-8 pb-36 md:px-10 md:py-12 lg:grid-cols-[240px_1fr] xl:px-20 2xl:px-28"
      : "grid max-h-[calc(100vh-180px)] items-start gap-8 overflow-y-auto px-8 pt-8 pb-36 md:max-h-none md:grid-cols-[240px_1fr] md:overflow-visible md:p-10"
  } ${
    isDark
      ? "bg-[#151c17] text-[#f3f4ee]"
      : "bg-[#fbfbf8] text-[#172019]"
  }`}
>
        {/* LEFT PANEL */}
        <div
          className={`w-full max-w-60 self-start rounded-xl border p-6 ${
            isDark
              ? "border-green-400/20 bg-[#1b241e]"
              : "border-green-800/20 bg-[#f3f4ee]"
          }`}
        >
          <div
            className={`relative h-48 w-40 overflow-hidden rounded-xl border ${
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

          <div className="mt-6">
            <p
              className={`font-mono text-sm font-semibold ${
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
          </div>

          <div
            className={`my-6 border-t ${
              isDark ? "border-white/10" : "border-black/10"
            }`}
          />

          <div
            className={`space-y-3 font-mono text-xs leading-5 ${
              isDark ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            <p>
              <span
                className={isDark ? "text-green-400" : "text-green-800"}
              >
                &gt;
              </span>{" "}
              building: portfolio.exe
            </p>

            <p>
              <span
                className={isDark ? "text-green-400" : "text-green-800"}
              >
                &gt;
              </span>{" "}
              focus: web + software
            </p>

            <p>
              <span
                className={isDark ? "text-green-400" : "text-green-800"}
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
            className={`font-mono text-sm ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            about_me.txt
          </p>

          <h2
            className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            Most of what I know came from building actual projects.
          </h2>

          <div
            className={`mt-6 space-y-5 text-sm leading-7 sm:text-base ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            <p>
              I&apos;m Ram Kirsten Santos, a fresh graduate focused on web and
              software development. I started with PHP, MySQL, HTML, CSS, and
              JavaScript, then gradually moved into React, Next.js, Flutter,
              and Firebase as my projects became more varied.
            </p>

            <p>
              A lot of my experience came from school, thesis, freelance, and
              client-based projects rather than practice exercises. I&apos;ve
              worked on web systems, an e-learning platform, a healthcare
              management system, and a mobile learning application.
            </p>

            <p>
              I like working through the parts that make a project actually
              work: connecting the frontend and backend, handling data, fixing
              issues, and cleaning up the interface until it feels right.
            </p>
          </div>

          {/* SKILLS */}
          <div className="mt-8">
            <p
              className={`mb-3 font-mono text-xs font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              &gt; skills.exe
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL",
                "React",
                "Next.js",
                "Flutter",
              ].map((skill) => (
                <span
                  key={skill}
                  className={`rounded-md border px-3 py-1.5 font-mono text-xs ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}