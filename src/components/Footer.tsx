const VERSION = "1.0.0";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-[var(--text-subtle)]">
        <span>LifeDash <span className="font-mono">v{VERSION}</span></span>
        <a
          href="https://github.com/trinathinturi/lifedash"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--text-muted)] transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
