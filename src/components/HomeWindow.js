import AppWindow from "./AppWindow";
import Image from "next/image";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

export default function HomeWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  onOpenProjects,
  onOpenContact,
  theme = "light",
}) {
const isDark = theme === "dark";
  return (
    <AppWindow
      title="home.exe"
      path="/ramkirstensantos"
      onClose={onClose}
      onMinimize={onMinimize}
      isMaximized={isMaximized}
      onToggleMaximize={onToggleMaximize}
      wideByDefault
    >
      {/* WINDOW CONTENT */}
     <div className="grid max-h-[calc(100vh-180px)] items-start gap-8 overflow-y-auto px-8 pt-8 pb-36 md:max-h-none md:grid-cols-[240px_1fr] md:overflow-visible md:p-10">
        {/* PROFILE PANEL */}
        <div
  className={`self-start rounded-xl border p-6 ${
    isDark
      ? "border-green-400/20 bg-[#1b241e]"
      : "border-green-800/20 bg-[#f3f4ee]"
  }`}
>
          <div>
<div
  className={`relative mb-6 h-44 w-36 overflow-hidden rounded-xl border ${
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
  className={`mt-6 border-t pt-6 ${
    isDark ? "border-white/10" : "border-black/10"
  }`}
>
  <p
  className={`mb-3 font-mono text-xs font-semibold ${
    isDark ? "text-green-400" : "text-green-800"
  }`}
>
    &gt; quick_links
  </p>

  <div
  className={`space-y-2 font-mono text-xs ${
    isDark ? "text-zinc-400" : "text-zinc-500"
  }`}
>
    <a
  href="https://github.com/ramsantosk"
  target="_blank"
  rel="noopener noreferrer"
  className={`block transition ${
  isDark ? "hover:text-green-400" : "hover:text-green-800"
}`}
>
  ↗ GitHub
</a>

<a
  href="https://www.linkedin.com/in/ramkirstensantos"
  target="_blank"
  rel="noopener noreferrer"
  className={`block transition ${
  isDark ? "hover:text-green-400" : "hover:text-green-800"
}`}
>
  ↗ LinkedIn
</a>

    <a
  href="mailto:ramkirstensantos@gmail.com"
  className={`block transition ${
  isDark ? "hover:text-green-400" : "hover:text-green-800"
}`}
>
  ✉ Email
</a>
  </div>
</div>
        </div>

        {/* INTRO PANEL */}
        <div className="flex flex-col justify-center">
          <p
  className={`font-mono text-sm ${
    isDark ? "text-green-400" : "text-green-800"
  }`}
>
  Hello, I&apos;m
</p>

          <h1
  className={`mt-2 text-4xl font-bold tracking-tight lg:text-5xl ${
    isDark ? "text-[#f3f4ee]" : "text-[#172019]"
  }`}
>
            &gt; Ram Kirsten Santos
          </h1>

          <div
  className={`mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs sm:text-sm ${
    isDark ? "text-zinc-400" : "text-zinc-500"
  }`}
>
            <span>Web Developer</span>
            <span>/</span>
            <span>Software Developer</span>
            <span>/</span>
            <span>Front-End Developer</span>
          </div>

          <p
  className={`mt-6 max-w-xl text-sm leading-7 sm:text-base ${
    isDark ? "text-zinc-300" : "text-zinc-600"
  }`}
>
  Most of my experience came from building actual school, thesis, freelance,
  and client projects — from PHP/MySQL web systems to a Flutter/Firebase
  mobile application.
</p>

         <div className="mt-8 flex flex-wrap gap-3">
  <button
    onClick={onOpenProjects}
    className={`rounded-lg border px-5 py-3 font-mono text-sm font-semibold transition hover:-translate-y-1 ${
      isDark
        ? "border-green-400/40 bg-green-400/10 text-green-300 hover:bg-green-400/20"
        : "border-green-800 bg-green-100 text-green-900 hover:bg-green-200"
    }`}
  >
    [ View My Work → ]
  </button>

  <button
    onClick={onOpenContact}
    className={`rounded-lg border px-5 py-3 font-mono text-sm transition hover:-translate-y-1 ${
      isDark
        ? "border-white/10 bg-[#1b241e] text-zinc-200 hover:bg-[#243028]"
        : "border-black/15 bg-white text-[#172019] hover:bg-zinc-100"
    }`}
  >
    Contact Me ✉
  </button>
</div>

          {/* TECH STACK */}
<div className="mt-8">
  <p
  className={`mb-4 font-mono text-xs font-semibold uppercase tracking-wider ${
    isDark ? "text-green-400" : "text-green-800"
  }`}
>
    &gt; tech_stack
  </p>

<div className="grid grid-cols-3 gap-x-8 gap-y-4">
    {[
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
      { name: "Firebase", icon: SiFirebase },
    ].map(({ name, icon: Icon }) => (
      <div
        key={name}
        className={`flex items-center gap-2 font-mono text-xs ${
  isDark ? "text-zinc-300" : "text-zinc-600"
}`}
      >
        <Icon
  className={`text-lg ${
    isDark ? "text-green-400" : "text-green-800"
  }`}
/>
        <span>{name}</span>
      </div>
    ))}
  </div>
</div>


        </div>
      </div>
    </AppWindow>
  );
}