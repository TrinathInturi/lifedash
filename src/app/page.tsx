"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const modules = [
  { title: "Tasks",     desc: "Manage your daily tasks and to-dos",         icon: "✓",  href: "#",         live: false },
  { title: "Journal",   desc: "Write and reflect on your day",              icon: "◎",  href: "#",         live: false },
  { title: "Goals",     desc: "Track long-term goals and habits",           icon: "◈",  href: "#",         live: false },
  { title: "Finance",   desc: "Monitor your budget and expenses",           icon: "$",  href: "#",         live: false },
  { title: "Health",    desc: "Log workouts, sleep, and wellness",          icon: "♥",  href: "#",         live: false },
  { title: "Notes",     desc: "Capture ideas and quick notes",              icon: "≡",  href: "#",         live: false },
  { title: "Destiny 2", desc: "Armor set bonuses & synergies database",     icon: "⬡",  href: "/destiny2", live: true  },
];

const stats = [
  { value: modules.length,                      label: "Modules",  accent: false },
  { value: modules.filter(m => m.live).length,  label: "Live",     accent: true  },
  { value: modules.filter(m => !m.live).length, label: "Planned",  accent: false },
];

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });

  return (
    <main className="flex-1 px-5 pt-8 pb-4" style={{ background: "var(--nm-bg)" }}>
      <div className="max-w-md mx-auto space-y-6">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase mb-0.5" style={{ color: "var(--nm-text-subtle)" }}>{today}</p>
            <h1 className="text-xl font-semibold tracking-tight" style={{ color: "var(--nm-text)" }}>LifeDash</h1>
          </div>
          <ThemeToggle />
        </div>

        {/* Hero card */}
        <div className="nm-surface px-6 py-6 relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ background: "radial-gradient(circle, var(--nm-accent), transparent 70%)" }} />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10" style={{ background: "radial-gradient(circle, var(--nm-accent2), transparent 70%)" }} />

          <p className="text-xs mb-1" style={{ color: "var(--nm-text-subtle)" }}>Welcome back</p>
          <p className="text-2xl font-bold mb-1" style={{ color: "var(--nm-text)" }}>Good day 👋</p>
          <p className="text-sm" style={{ color: "var(--nm-text-muted)" }}>Your personal life dashboard.<br/>Everything in one place.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map(({ value, label, accent }) => (
            <div key={label} className="nm-raised px-4 py-4 text-center">
              <p className="text-2xl font-bold mb-0.5" style={{ color: accent ? "var(--nm-accent)" : "var(--nm-text)" }}>{value}</p>
              <p className="text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--nm-text-subtle)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div>
          <p className="text-[10px] font-medium uppercase tracking-widest mb-3 px-1" style={{ color: "var(--nm-text-subtle)" }}>Modules</p>
          <div className="nm-raised overflow-hidden">
            {modules.map((mod, i) =>
              mod.live ? (
                <Link
                  key={mod.title}
                  href={mod.href}
                  className="group flex items-center gap-4 px-5 py-4 transition-all"
                  style={{ borderBottom: i < modules.length - 1 ? "1px solid rgba(128,128,160,0.08)" : "none" }}
                >
                  <ModuleRow mod={mod} />
                </Link>
              ) : (
                <div
                  key={mod.title}
                  className="flex items-center gap-4 px-5 py-4 opacity-35"
                  style={{ borderBottom: i < modules.length - 1 ? "1px solid rgba(128,128,160,0.08)" : "none" }}
                >
                  <ModuleRow mod={mod} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick note */}
        <div>
          <p className="text-[10px] font-medium uppercase tracking-widest mb-3 px-1" style={{ color: "var(--nm-text-subtle)" }}>Quick Note</p>
          <div className="nm-inset px-5 py-4">
            <textarea
              disabled
              placeholder="Jot something down… (coming soon)"
              className="w-full h-20 bg-transparent text-sm resize-none outline-none placeholder:opacity-40"
              style={{ color: "var(--nm-text)", caretColor: "var(--nm-accent)" }}
            />
          </div>
        </div>

      </div>
    </main>
  );
}

function ModuleRow({ mod }: { mod: typeof modules[0] }) {
  return (
    <>
      <span
        className="nm-raised-sm w-9 h-9 flex items-center justify-center text-base font-mono shrink-0"
        style={{ color: mod.live ? "var(--nm-accent)" : "var(--nm-text-muted)" }}
      >
        {mod.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-none mb-0.5" style={{ color: "var(--nm-text)" }}>{mod.title}</p>
        <p className="text-xs truncate" style={{ color: "var(--nm-text-muted)" }}>{mod.desc}</p>
      </div>
      <div className="shrink-0 flex items-center gap-2">
        {mod.live ? (
          <>
            <span className="nm-accent-pill">Live</span>
            <svg style={{ color: "var(--nm-text-subtle)" }} width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        ) : (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(128,128,160,0.1)", color: "var(--nm-text-subtle)" }}>Soon</span>
        )}
      </div>
    </>
  );
}
