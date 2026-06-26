const VERSION = "1.0.0";
const BUILD_DATE = "2026-06-26";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 dark:text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-zinc-700 dark:text-zinc-300 text-sm">LifeDash</span>
          <span className="px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-mono font-medium">
            v{VERSION}
          </span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
          <span className="hidden sm:inline">Released {BUILD_DATE}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Personal dashboard — all data stays local</span>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <a
            href="https://github.com/trinathinturi/lifedash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
