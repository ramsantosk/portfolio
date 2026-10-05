export default function AppWindow({
  title,
  path,
  children,
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  fullScreenOnMaximize = false,
  largeByDefault = false,
  wideByDefault = false,
  largeHeightClass = "h-[calc(100vh-80px)]",
}) {
 let windowClassName = wideByDefault
  ? "w-full max-w-6xl overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md"
  : "w-full max-w-4xl overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md";

  // ABOUT / PROJECTS DEFAULT LARGE WINDOW
  if (largeByDefault && !isMaximized) {
  windowClassName =
    `${largeHeightClass} w-full max-w-none overflow-hidden rounded-xl border shadow-2xl backdrop-blur-md`;
}

  // TRUE FULL SCREEN FOR ABOUT / PROJECTS
  if (isMaximized && fullScreenOnMaximize) {
  windowClassName =
    "fixed inset-0 z-[100] h-screen w-screen overflow-hidden";
}

  // HOME'S EXISTING MAXIMIZE BEHAVIOR
  else if (isMaximized) {
  windowClassName =
    "h-[calc(100vh-80px)] w-full max-w-none overflow-hidden rounded-xl border shadow-2xl backdrop-blur-md";
}

  return (
    <div
  className={windowClassName}
  style={{
    backgroundColor: "var(--window-bg)",
    borderColor: "var(--window-border)",
    color: "var(--window-text)",
  }}
>
      {/* WINDOW TITLE BAR */}
     <div
  className="flex h-11 items-center justify-between border-b"
  style={{
    backgroundColor: "var(--window-titlebar)",
    borderColor: "var(--window-border)",
  }}
>
        <div className="flex items-center px-4">
          <span
  className="font-mono text-xs"
  style={{ color: "var(--window-text)" }}
>
  {title}
</span>

          {path && (
           <span
  className="ml-4 hidden font-mono text-xs opacity-50 sm:block"
  style={{ color: "var(--window-text)" }}
>
  {path}
</span>
          )}
        </div>

       {/* WINDOW CONTROLS */}
      <div className="flex h-full">
        <button
          onClick={onMinimize}
          aria-label={`Minimize ${title}`}
          title="Minimize"
          className="flex h-full w-12 items-center justify-center opacity-70 transition hover:bg-black/5 hover:opacity-100"
          style={{ color: "var(--window-text)" }}
        >
          —
        </button>

        <button
          onClick={onToggleMaximize}
          aria-label={isMaximized ? `Restore ${title}` : `Maximize ${title}`}
          title={isMaximized ? "Restore" : "Maximize"}
          className="flex h-full w-12 items-center justify-center opacity-70 transition hover:bg-black/5 hover:opacity-100"
          style={{ color: "var(--window-text)" }}
        >
          {isMaximized ? "❐" : "□"}
        </button>

        <button
          onClick={onClose}
          aria-label={`Close ${title}`}
          title="Close"
          className="flex h-full w-12 items-center justify-center text-lg opacity-70 transition hover:bg-red-500 hover:text-white hover:opacity-100"
          style={{ color: "var(--window-text)" }}
        >
          ×
        </button>
      </div>
    </div>

    {/* WINDOW CONTENT */}
    {children}
  </div>
);
}