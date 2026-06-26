const VERSION = "1.0.0";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-2">
      <div className="max-w-4xl mx-auto">
        <div className="nm-inset-sm px-5 py-3 flex items-center justify-between text-xs">
          <span style={{ color: "var(--nm-text-subtle)" }}>
            LifeDash <span className="font-mono">v{VERSION}</span>
          </span>
          <a
            href="https://github.com/trinathinturi/lifedash"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--nm-text-subtle)" }}
            className="transition-colors hover:text-[var(--nm-accent)]"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
