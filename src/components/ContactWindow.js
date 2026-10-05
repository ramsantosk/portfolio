"use client";

import { useState } from "react";
import AppWindow from "./AppWindow";

export default function ContactWindow({
  onClose,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  theme = "light",
}) {
  const isDark = theme === "dark";

  const email = "ramkirstensantos@gmail.com";

  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormMessage("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setFormMessage("Please complete all fields.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormMessage("Message sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setFormMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <AppWindow
      title="contact.exe"
      path="/contact"
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
        {/* HEADER */}
        <div className="w-full">
          <p
            className={`text-right font-mono text-sm ${
              isDark ? "text-green-400" : "text-green-800"
            }`}
          >
            ~/contact
          </p>

          <div className="mt-1 max-w-3xl">
            <h1
              className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Let&apos;s build something.
            </h1>

            <p
              className={`mt-4 text-sm leading-7 sm:text-base ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              I&apos;m currently open to junior developer opportunities,
              freelance projects, and roles involving web, front-end, or
              software development.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* LEFT */}
          <section
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
              &gt; contact_info
            </p>

            <div className="mt-6 space-y-6">
              {/* EMAIL */}
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className={`mt-2 block break-all font-mono text-sm transition ${
                    isDark
                      ? "text-zinc-200 hover:text-green-400"
                      : "text-[#172019] hover:text-green-800"
                  }`}
                >
                  {email}
                </a>

                <button
                  onClick={copyEmail}
                  className={`mt-3 rounded-md border px-3 py-2 font-mono text-xs transition ${
                    isDark
                      ? "border-white/10 bg-[#151c17] text-zinc-300 hover:bg-[#243028]"
                      : "border-black/10 bg-white text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  {copied ? "Copied ✓" : "Copy Email"}
                </button>
              </div>

              <div
                className={`border-t ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}
              />

              {/* LINKEDIN */}
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/ramkirstensantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block font-mono text-sm transition hover:underline ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  View LinkedIn ↗
                </a>
              </div>

              {/* GITHUB */}
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  GitHub
                </p>

                <a
                  href="https://github.com/ramsantosk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block font-mono text-sm transition hover:underline ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  View GitHub ↗
                </a>
              </div>

              {/* VIBER */}
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  Viber
                </p>

                <a
                  href="viber://chat?number=%2B639957353245"
                  className={`mt-2 inline-block font-mono text-sm transition hover:underline ${
                    isDark ? "text-green-400" : "text-green-800"
                  }`}
                >
                  Message on Viber ↗
                </a>
              </div>

              <div
                className={`border-t ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}
              />

              {/* STATUS */}
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  Status
                </p>

                <div
                  className={`mt-2 flex items-center gap-2 font-mono text-sm ${
                    isDark ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Open to opportunities
                </div>
              </div>

              {/* FOCUS */}
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    isDark ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  Focus
                </p>

                <div
                  className={`mt-2 space-y-1 font-mono text-xs ${
                    isDark ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  <p>&gt; Web Development</p>
                  <p>&gt; Front-End Development</p>
                  <p>&gt; Software Development</p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section
            className={`rounded-xl border p-6 ${
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
              &gt; send_message
            </p>

            <h2
              className={`mt-3 text-2xl font-bold ${
                isDark ? "text-[#f3f4ee]" : "text-[#172019]"
              }`}
            >
              Send me a message
            </h2>

            <p
              className={`mt-2 text-sm leading-6 ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Use the form below and I&apos;ll get back to you as soon as I can.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className={`mb-2 block font-mono text-xs ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#151c17] text-zinc-200 placeholder:text-zinc-600 focus:border-green-400/40"
                      : "border-black/10 bg-white text-[#172019] placeholder:text-zinc-400 focus:border-green-800/40"
                  }`}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className={`mb-2 block font-mono text-xs ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#151c17] text-zinc-200 placeholder:text-zinc-600 focus:border-green-400/40"
                      : "border-black/10 bg-white text-[#172019] placeholder:text-zinc-400 focus:border-green-800/40"
                  }`}
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className={`mb-2 block font-mono text-xs ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#151c17] text-zinc-200 placeholder:text-zinc-600 focus:border-green-400/40"
                      : "border-black/10 bg-white text-[#172019] placeholder:text-zinc-400 focus:border-green-800/40"
                  }`}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block font-mono text-xs ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#151c17] text-zinc-200 placeholder:text-zinc-600 focus:border-green-400/40"
                      : "border-black/10 bg-white text-[#172019] placeholder:text-zinc-400 focus:border-green-800/40"
                  }`}
                />
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${
                  isDark
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-green-800 hover:bg-green-700"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent ✓"
                    : "Send Message →"}
              </button>

              {/* STATUS MESSAGE */}
              {formMessage && (
                <p
                  className={`font-mono text-xs ${
                    status === "success"
                      ? isDark
                        ? "text-green-400"
                        : "text-green-700"
                      : isDark
                        ? "text-red-400"
                        : "text-red-600"
                  }`}
                >
                  {status === "success" ? "✓ " : "! "}
                  {formMessage}
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </AppWindow>
  );
}