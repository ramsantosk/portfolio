import AppWindow from "./AppWindow";

export default function ResumeWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  theme = "light",
}) {
  const isDark = theme === "dark";

  const resumePath = "/resume/Ram-Kirsten-Santos-Resume.pdf";

  return (
    <AppWindow
      title="resume.pdf"
      path="/resume/Ram-Kirsten-Santos-Resume.pdf"
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
            ? "flex h-[calc(100vh-44px)] flex-col"
            : "flex h-[calc(100vh-124px)] flex-col"
        } ${
          isDark
            ? "bg-[#151c17] text-[#f3f4ee]"
            : "bg-[#f3f4ee] text-[#172019]"
        }`}
      >
        {/* TOOLBAR */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 ${
            isDark
              ? "border-white/10 bg-[#1b241e]"
              : "border-black/10 bg-[#f8f8f4]"
          }`}
        >
          {/* FILE INFO */}
          <div>
            <p
              className={`font-mono text-xs font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}
            >
              ~/resume/resume.pdf
            </p>

            <p
              className={`mt-1 font-mono text-[10px] ${
                isDark ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              Ram Kirsten Santos • Resume • PDF
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-lg border px-4 py-2 font-mono text-xs transition lg:inline-block ${
                isDark
                  ? "border-white/10 bg-[#243028] text-zinc-200 hover:bg-[#2c3a30]"
                  : "border-black/15 bg-white text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              Open in New Tab ↗
            </a>

            <a
              href={resumePath}
              download="Ram-Kirsten-Santos-Resume.pdf"
              className={`rounded-lg px-4 py-2 font-mono text-xs font-semibold text-white transition ${
                isDark
                  ? "bg-green-600 hover:bg-green-500"
                  : "bg-green-800 hover:bg-green-700"
              }`}
            >
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* PDF VIEWER */}
        <div
          className={`min-h-0 flex-1 p-3 md:p-4 ${
            isDark ? "bg-[#0f1511]" : "bg-zinc-200"
          }`}
        >
          {/* MOBILE / TABLET */}
          <div
            className={`flex h-full flex-col items-center justify-center rounded-lg border p-6 text-center lg:hidden ${
              isDark
                ? "border-white/10 bg-[#1b241e]"
                : "border-black/10 bg-white"
            }`}
          >
            <p
              className={`font-mono text-sm font-semibold ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Resume PDF
            </p>

            <p
              className={`mt-2 max-w-xs text-sm leading-6 ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Open the resume in your browser for easier viewing and scrolling
              on mobile and tablet.
            </p>

            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 rounded-lg px-5 py-3 font-mono text-xs font-semibold text-white transition ${
                isDark
                  ? "bg-green-600 hover:bg-green-500"
                  : "bg-green-800 hover:bg-green-700"
              }`}
            >
              Open Resume ↗
            </a>
          </div>

          {/* DESKTOP */}
          <div
            className={`hidden h-full overflow-hidden rounded-lg border bg-white shadow-sm lg:block ${
              isDark ? "border-white/10" : "border-black/10"
            }`}
          >
            <iframe
              src={`${resumePath}#toolbar=1&navpanes=0&scrollbar=1&zoom=75`}
              title="Ram Kirsten Santos Resume"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* STATUS BAR */}
        <div
          className={`flex items-center justify-between border-t px-5 py-2 font-mono text-[10px] ${
            isDark
              ? "border-white/10 bg-[#1b241e] text-zinc-500"
              : "border-black/10 bg-[#f8f8f4] text-zinc-400"
          }`}
        >
          <span>resume.pdf</span>

          <span className="lg:hidden">
            Open resume for full viewing
          </span>

          <span className="hidden lg:inline">
            Use PDF controls to zoom and navigate
          </span>
        </div>
      </div>
    </AppWindow>
  );
}