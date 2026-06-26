"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative inline-flex h-[31px] w-[51px] shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none"
      style={{ backgroundColor: theme === "dark" ? "#34C759" : "#E5E5EA" }}
    >
      <span
        className="inline-flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white transition-transform duration-300"
        style={{
          transform: theme === "dark" ? "translateX(22px)" : "translateX(2px)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.15)",
        }}
      >
        <span className="text-[11px] leading-none">{theme === "dark" ? "🌙" : "☀️"}</span>
      </span>
    </button>
  );
}
