import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const widgets = [
  { title: "Tasks",     description: "Daily tasks and to-dos",              icon: "✓",  iconBg: "#007AFF", href: "#",         tag: "Coming soon" },
  { title: "Journal",   description: "Write and reflect on your day",       icon: "📓", iconBg: "#AF52DE", href: "#",         tag: "Coming soon" },
  { title: "Goals",     description: "Long-term goals and habit tracking",  icon: "🎯", iconBg: "#34C759", href: "#",         tag: "Coming soon" },
  { title: "Finance",   description: "Budget monitoring and expenses",      icon: "💰", iconBg: "#FF9500", href: "#",         tag: "Coming soon" },
  { title: "Health",    description: "Workouts, sleep, and wellness logs",  icon: "❤️", iconBg: "#FF3B30", href: "#",         tag: "Coming soon" },
  { title: "Notes",     description: "Capture ideas and quick notes",       icon: "📝", iconBg: "#FF9F0A", href: "#",         tag: "Coming soon" },
  { title: "Destiny 2", description: "Armor set bonuses & synergies",       icon: "🎮", iconBg: "#FF6B00", href: "/destiny2", tag: "Live"        },
];

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const liveWidgets = widgets.filter((w) => w.tag === "Live");
  const comingWidgets = widgets.filter((w) => w.tag !== "Live");

  return (
    <main className="flex-1 min-h-screen" style={{ backgroundColor: "var(--ios-grouped-bg)" }}>

      {/* iOS Navigation Bar */}
      <nav
        className="sticky top-0 z-30 px-4"
        style={{
          backgroundColor: "var(--ios-grouped-bg)",
          borderBottom: "0.5px solid var(--ios-separator)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between h-[44px]">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #007AFF, #5856D6)" }}
            >
              L
            </div>
            <span className="font-semibold text-[17px]" style={{ color: "var(--ios-label)" }}>
              LifeDash
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 pt-6 pb-2">

        {/* Large Title */}
        <section className="mb-6">
          <p className="text-[13px] font-medium mb-1" style={{ color: "#007AFF" }}>{today}</p>
          <h1 className="text-[34px] font-bold leading-tight tracking-tight" style={{ color: "var(--ios-label)" }}>
            Good day 👋
          </h1>
          <p className="text-[15px] mt-1" style={{ color: "var(--ios-label3)" }}>
            Your personal life dashboard.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Total Modules", value: widgets.length, color: "#007AFF" },
              { label: "Live",          value: liveWidgets.length, color: "#34C759" },
              { label: "Coming Soon",   value: comingWidgets.length, color: "#FF9500" },
              { label: "In Progress",   value: 0,  color: "#FF3B30" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl px-4 py-3"
                style={{ backgroundColor: "var(--ios-grouped-bg2)" }}
              >
                <p className="text-[28px] font-bold leading-none" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[13px] mt-0.5" style={{ color: "var(--ios-label3)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live section */}
        {liveWidgets.length > 0 && (
          <section className="mb-8">
            <SectionHeader label="Live" />
            <div
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "var(--ios-grouped-bg2)" }}
            >
              {liveWidgets.map((w, i) => (
                <AppRow key={w.title} widget={w} last={i === liveWidgets.length - 1} />
              ))}
            </div>
          </section>
        )}

        {/* Coming soon section */}
        <section className="mb-8">
          <SectionHeader label="Coming Soon" />
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: "var(--ios-grouped-bg2)" }}
          >
            {comingWidgets.map((w, i) => (
              <AppRow key={w.title} widget={w} last={i === comingWidgets.length - 1} />
            ))}
          </div>
        </section>

        {/* Quick Note */}
        <section className="mb-8">
          <SectionHeader label="Quick Note" />
          <div
            className="rounded-2xl px-4 py-3"
            style={{ backgroundColor: "var(--ios-grouped-bg2)" }}
          >
            <textarea
              className="w-full h-28 text-[15px] bg-transparent resize-none outline-none placeholder:opacity-40"
              placeholder="Start typing a note…"
              style={{ color: "var(--ios-label)" }}
              disabled
            />
            <p className="text-[12px] mt-1" style={{ color: "var(--ios-label3)" }}>
              Coming soon
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <h2
      className="text-[13px] font-semibold uppercase tracking-wide px-1 mb-2"
      style={{ color: "var(--ios-label3)" }}
    >
      {label}
    </h2>
  );
}

function AppRow({ widget, last }: { widget: typeof widgets[0]; last: boolean }) {
  const isLive = widget.tag === "Live";
  const inner = (
    <div className="flex items-center gap-3 px-4 py-3">
      <div
        className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center text-[22px] shrink-0"
        style={{
          backgroundColor: widget.iconBg,
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      >
        {widget.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[17px] font-medium leading-tight" style={{ color: "var(--ios-label)" }}>
          {widget.title}
        </p>
        <p className="text-[13px] leading-tight mt-0.5 truncate" style={{ color: "var(--ios-label3)" }}>
          {widget.description}
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {isLive ? (
          <>
            <span
              className="text-[12px] font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "#34C75920", color: "#34C759" }}
            >
              Live
            </span>
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M1 1L7 6.5L1 12" stroke="var(--ios-label3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        ) : (
          <span
            className="text-[12px] font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "var(--ios-fill3)", color: "var(--ios-label3)" }}
          >
            Soon
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {isLive ? (
        <Link href={widget.href} className="block active:opacity-60 transition-opacity">
          {inner}
        </Link>
      ) : (
        <div className="opacity-60">{inner}</div>
      )}
      {!last && (
        <div
          className="ml-[72px] h-px"
          style={{ backgroundColor: "var(--ios-separator)" }}
        />
      )}
    </div>
  );
}
