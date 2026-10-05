import Image from "next/image";
import AppWindow from "./AppWindow";

const projects = [
  {
    id: "01",
    title: "Basic Filipino Sign Language Translation System",
    type: "AI / Embedded System",
    description:
      "A real-time system that recognizes basic Filipino Sign Language gestures and converts them into text and speech.",
    technologies: ["Raspberry Pi", "Python", "MediaPipe", "TensorFlow Lite"],
    image: "/projects/fsl.png",
  },
  {
    id: "02",
    title: "Smart Web-Based Healthcare Management System",
    type: "Web System",
    description:
      "A healthcare management system developed for Barangay Ilaya Alabang with patient registration, consultation management, QR functionality, reports, and administrative tools.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    image: "/projects/healthcare.png",
  },
  {
    id: "03",
    title: "Micro-Lesson Generator",
    type: "E-Learning Platform",
    description:
      "An e-learning platform with lesson management, quizzes, student progress tracking, and adaptive micro-learning features.",
    technologies: ["PHP", "MySQL", "JavaScript", "AJAX"],
    image: "/projects/microlesson.png",
  },
  {
    id: "04",
    title: "DraftFun",
    type: "Mobile Application",
    description:
      "An interactive game-based learning application designed to improve students' visualization skills in technical drawing.",
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "/projects/draftfun.png",
  },
];

export default function ProjectsWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  onOpenHealthcare,
  onOpenFSL,
  onOpenMicroLesson,
  onOpenDraftFun,
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <AppWindow
      title="projects.exe"
      path="/projects"
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
            ? "h-[calc(100vh-44px)] overflow-y-auto p-6 pb-10 md:p-8 md:pb-10"
            : "h-[calc(100vh-124px)] overflow-y-auto px-8 pt-5 pb-28 md:px-10 md:pt-6 md:pb-28"
        } ${
          isDark
            ? "bg-[#151c17] text-[#f3f4ee]"
            : "bg-[#fbfbf8] text-[#172019]"
        }`}
      >
        {/* HEADER */}
        <div className="mb-3">
          <p
            className={`w-full text-right font-mono text-sm ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            ~/projects
          </p>

          <h2
            className={`mt-0 text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? "text-[#f3f4ee]" : "text-[#172019]"
            }`}
          >
            Things I&apos;ve Built
          </h2>

          <p
            className={`mt-3 max-w-2xl text-sm leading-6 ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            School, thesis, freelance, and client work — from PHP/MySQL web
            systems to a Flutter mobile application.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col rounded-xl border p-4 transition hover:-translate-y-1 hover:shadow-lg ${
                isDark
                  ? "border-white/10 bg-[#1b241e] hover:border-green-400/30"
                  : "border-black/10 bg-[#f8f8f4] hover:border-green-800/30"
              }`}
            >
              {/* PROJECT NUMBER + TYPE */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-semibold ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  {project.id}
                </span>

                <span
                  className={`rounded-md border px-2 py-1 font-mono text-[10px] ${
                    isDark
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-green-800/15 bg-green-50 text-green-900"
                  }`}
                >
                  {project.type}
                </span>
              </div>

              {/* PROJECT PREVIEW */}
              <div
                className={`relative mt-3 aspect-video overflow-hidden rounded-lg border ${
                  isDark
                    ? "border-white/10 bg-[#151c17]"
                    : "border-black/10 bg-white"
                }`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span
                      className={`font-mono text-xs ${
                        isDark ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      project_preview.png
                    </span>
                  </div>
                )}
              </div>

              {/* PROJECT DETAILS */}
              <h3
                className={`mt-5 text-lg font-bold leading-snug ${
                  isDark ? "text-[#f3f4ee]" : "text-[#172019]"
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`mt-3 flex-1 text-sm leading-6 ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-md border px-2 py-1 font-mono text-[10px] ${
                      isDark
                        ? "border-white/10 bg-[#151c17] text-zinc-300"
                        : "border-black/10 bg-white text-zinc-600"
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* PROJECT BUTTON */}
              <button
                onClick={() => {
                  if (project.id === "01") {
                    onOpenFSL();
                  }

                  if (project.id === "02") {
                    onOpenHealthcare();
                  }

                  if (project.id === "03") {
                    onOpenMicroLesson();
                  }

                  if (project.id === "04") {
                    onOpenDraftFun();
                  }
                }}
                className={`mt-5 flex items-center justify-between border-t pt-4 font-mono text-xs font-semibold ${
                  isDark
                    ? "border-white/10 text-green-400"
                    : "border-black/10 text-green-800"
                }`}
              >
                <span>View Project</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </AppWindow>
  );
}