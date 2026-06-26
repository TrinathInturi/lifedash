const VERSION = "1.0.0";
const BUILD_DATE = "2026-06-26";

export function Footer() {
  return (
    <footer className="mt-4 px-4 pb-10">
      <div
        className="rounded-2xl px-5 py-4 text-center space-y-1"
        style={{ backgroundColor: "var(--ios-grouped-bg2)" }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--ios-label)" }}>
          LifeDash{" "}
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "var(--ios-fill3)", color: "#007AFF" }}
          >
            v{VERSION}
          </span>
        </p>
        <p className="text-xs" style={{ color: "var(--ios-label3)" }}>
          Released {BUILD_DATE} · All data stays on-device
        </p>
        <a
          href="https://github.com/trinathinturi/lifedash"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs transition-opacity hover:opacity-70"
          style={{ color: "#007AFF" }}
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
