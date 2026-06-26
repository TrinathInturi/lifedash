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

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  });

  return (
    <main className="flex-1">
      <header className="border-b border-[var(--border)] sticky top-0 z-10 bg-[var(--bg)]/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight text-[var(--text)]">LifeDash</span>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">

        <section className="mb-10">
          <p className="text-xs text-[var(--text-subtle)] mb-3 font-mono">{today}</p>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] mb-2">Good day</h1>
          <p className="text-sm text-[var(--text-muted)] max-w-md">
            Your personal life dashboard. Everything in one place.
          </p>
        </section>

        <section className="mb-10 grid grid-cols-3 gap-px bg-[var(--border)] rounded-lg overflow-hidden border border-[var(--border)]">
          {[
            { n: modules.length,                       label: "Modules" },
            { n: modules.filter(m => m.live).length,   label: "Live" },
            { n: modules.filter(m => !m.live).length,  label: "Planned" },
          ].map(({ n, label }) => (
            <div key={label} className="bg-[var(--bg)] px-5 py-4">
              <p className="text-xl font-semibold text-[var(--text)]">{n}</p>
              <p className="text-xs text-[var(--text-subtle)] mt-0.5">{label}</p>
            </div>
          ))}
        </section>

        <section>
          <p className="text-xs font-medium text-[var(--text-subtle)] uppercase tracking-widest mb-3">Modules</p>
          <div className="border border-[var(--border)] rounded-lg divide-y divide-[var(--border)] overflow-hidden">
            {modules.map((mod) =>
              mod.live ? (
                <Link
                  key={mod.title}
                  href={mod.href}
                  className="group flex items-center gap-4 px-5 py-3.5 bg-[var(--bg)] hover:bg-[var(--bg-subtle)] transition-colors"
                >
                  <ModuleRow mod={mod} />
                </Link>
              ) : (
                <div key={mod.title} className="flex items-center gap-4 px-5 py-3.5 bg-[var(--bg)] opacity-50">
                  <ModuleRow mod={mod} />
                </div>
              )
            )}
          </div>
        </section>

        <section className="mt-8">
          <p className="text-xs font-medium text-[var(--text-subtle)] uppercase tracking-widest mb-3">Quick Note</p>
          <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--bg-subtle)]">
            <textarea
              disabled
              placeholder="Jot something down… (coming soon)"
              className="w-full h-24 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-subtle)] resize-none outline-none"
            />
          </div>
        </section>

      </div>
    </main>
  );
}

function ModuleRow({ mod }: { mod: typeof modules[0] }) {
  return (
    <>
      <span className="w-7 h-7 flex items-center justify-center rounded-md bg-[var(--bg-muted)] text-[var(--text-muted)] text-sm font-mono shrink-0 group-hover:bg-[var(--border)] transition-colors">
        {mod.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[var(--text)] leading-none">{mod.title}</p>
        <p className="text-xs text-[var(--text-subtle)] mt-0.5 truncate">{mod.desc}</p>
      </div>
      <div className="shrink-0 flex items-center gap-2">
        {mod.live ? (
          <>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Live
            </span>
            <svg className="text-[var(--text-subtle)]" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        ) : (
          <span className="text-xs text-[var(--text-subtle)]">Soon</span>
        )}
      </div>
    </>
  );
}
