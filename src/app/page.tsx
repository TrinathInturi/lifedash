"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const modules = [
  { title: "Tasks",     desc: "Manage your daily tasks and to-dos",         icon: "✓",  href: "#",         live: false, color: "#818cf8" },
  { title: "Journal",   desc: "Write and reflect on your day",              icon: "◎",  href: "#",         live: false, color: "#f472b6" },
  { title: "Goals",     desc: "Track long-term goals and habits",           icon: "◈",  href: "#",         live: false, color: "#facc15" },
  { title: "Finance",   desc: "Monitor your budget and expenses",           icon: "$",  href: "#",         live: false, color: "#34d399" },
  { title: "Health",    desc: "Log workouts, sleep, and wellness",          icon: "♥",  href: "#",         live: false, color: "#f43f5e" },
  { title: "Notes",     desc: "Capture ideas and quick notes",              icon: "≡",  href: "#",         live: false, color: "#fb923c" },
  { title: "Destiny 2", desc: "Armor set bonuses & synergies database",     icon: "⬡",  href: "/destiny2", live: true,  color: "#00d68f" },
];

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  const liveCount = modules.filter(m => m.live).length;
  const plannedCount = modules.filter(m => !m.live).length;

  return (
    <div className="flex-1 flex flex-col" style={{ background: "var(--nm-bg)" }}>

      {/* Top nav bar */}
      <nav className="nm-surface mx-5 mt-5 px-6 py-3 flex items-center justify-between" style={{ borderRadius: "16px" }}>
        <div className="flex items-center gap-6">
          <span className="text-base font-bold tracking-tight" style={{ color: "var(--nm-text)" }}>LifeDash</span>
          <div className="hidden md:flex items-center gap-1">
            {["Dashboard", "Settings", "About"].map((item) => (
              <button key={item} className="text-xs px-3 py-1.5 rounded-lg transition-all" style={{ color: "var(--nm-text-muted)" }}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs hidden sm:block" style={{ color: "var(--nm-text-subtle)" }}>{today}</span>
          <ThemeToggle />
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 px-5 py-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-5 h-full">

          {/* Left sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-4">

            {/* Hero / greeting */}
            <div className="nm-surface px-6 py-6 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle, var(--nm-accent), transparent 70%)", opacity: 0.2 }} />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full" style={{ background: "radial-gradient(circle, var(--nm-accent2), transparent 70%)", opacity: 0.15 }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--nm-text-subtle)" }}>Welcome back</p>
              <p className="text-xl font-bold mb-1" style={{ color: "var(--nm-text)" }}>{greeting} 👋</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--nm-text-muted)" }}>Your personal life dashboard. Everything in one place.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              {[
                { label: "Total Modules",   value: modules.length, accent: false },
                { label: "Live Now",        value: liveCount,      accent: true  },
                { label: "Coming Soon",     value: plannedCount,   accent: false },
              ].map(({ label, value, accent }) => (
                <div key={label} className="nm-raised px-4 py-4 flex lg:flex-row items-center justify-between gap-2">
                  <p className="text-[10px] font-medium uppercase tracking-widest leading-tight" style={{ color: "var(--nm-text-subtle)" }}>{label}</p>
                  <p className="text-2xl font-bold shrink-0" style={{ color: accent ? "var(--nm-accent)" : "var(--nm-text)" }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Quick note */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 px-1" style={{ color: "var(--nm-text-subtle)" }}>Quick Note</p>
              <div className="nm-inset px-4 py-4">
                <textarea
                  disabled
                  placeholder="Jot something down… (coming soon)"
                  className="w-full h-28 bg-transparent text-sm resize-none outline-none placeholder:opacity-30"
                  style={{ color: "var(--nm-text)" }}
                />
              </div>
            </div>

          </aside>

          {/* Main module grid */}
          <main className="col-span-12 lg:col-span-9">
            <div className="flex items-center justify-between mb-4 px-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--nm-text-subtle)" }}>Modules</p>
              <span className="nm-accent-pill">{liveCount} live</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {modules.map((mod) => (
                mod.live ? (
                  <Link key={mod.title} href={mod.href} className="group block">
                    <ModuleCard mod={mod} />
                  </Link>
                ) : (
                  <div key={mod.title} className="opacity-40 cursor-not-allowed">
                    <ModuleCard mod={mod} />
                  </div>
                )
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}

function ModuleCard({ mod }: { mod: typeof modules[0] }) {
  return (
    <div
      className="nm-surface p-5 transition-all group-hover:shadow-[var(--shadow-raised-lg)] h-full"
    >
      {/* Icon */}
      <div className="nm-raised-sm w-12 h-12 flex items-center justify-center text-xl mb-4" style={{ color: mod.color }}>
        {mod.icon}
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-bold" style={{ color: "var(--nm-text)" }}>{mod.title}</h3>
        {mod.live ? (
          <span className="nm-accent-pill shrink-0">Live</span>
        ) : (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0" style={{ background: "rgba(128,128,160,0.1)", color: "var(--nm-text-subtle)" }}>Soon</span>
        )}
      </div>

      <p className="text-xs leading-relaxed" style={{ color: "var(--nm-text-muted)" }}>{mod.desc}</p>

      {mod.live && (
        <div className="mt-4 flex items-center gap-1" style={{ color: "var(--nm-accent)" }}>
          <span className="text-xs font-semibold">Open</span>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}
