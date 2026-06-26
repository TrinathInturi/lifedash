"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
      className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[var(--bg-muted)] text-[var(--text-muted)] hover:text-[var(--text)]"
    >
      {theme === "dark" ? (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M7.5 1.5a6 6 0 1 0 6 6 4.5 4.5 0 0 1-6-6Z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="2.5" fill="currentColor" />
          <path d="M7.5 1v1M7.5 13v1M1 7.5h1M13 7.5h1M3.05 3.05l.7.7M11.25 11.25l.7.7M11.25 3.75l-.7.7M3.75 11.25l-.7.7" stroke="currentColor" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
