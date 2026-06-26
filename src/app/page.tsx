import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const widgets = [
  {
    title: "Tasks",
    description: "Manage your daily tasks and to-dos",
    icon: "✓",
    href: "#",
    gradient: "from-blue-500 to-blue-600",
    ring: "ring-blue-500/20",
    iconBg: "bg-blue-500",
    tag: "Coming soon",
  },
  {
    title: "Journal",
    description: "Write and reflect on your day",
    icon: "📓",
    href: "#",
    gradient: "from-purple-500 to-purple-600",
    ring: "ring-purple-500/20",
    iconBg: "bg-purple-500",
    tag: "Coming soon",
  },
  {
    title: "Goals",
    description: "Track long-term goals and habits",
    icon: "🎯",
    href: "#",
    gradient: "from-emerald-500 to-emerald-600",
    ring: "ring-emerald-500/20",
    iconBg: "bg-emerald-500",
    tag: "Coming soon",
  },
  {
    title: "Finance",
    description: "Monitor your budget and expenses",
    icon: "💰",
    href: "#",
    gradient: "from-yellow-500 to-orange-500",
    ring: "ring-yellow-500/20",
    iconBg: "bg-yellow-500",
    tag: "Coming soon",
  },
  {
    title: "Health",
    description: "Log workouts, sleep, and wellness",
    icon: "❤️",
    href: "#",
    gradient: "from-red-500 to-rose-600",
    ring: "ring-red-500/20",
    iconBg: "bg-red-500",
    tag: "Coming soon",
  },
  {
    title: "Notes",
    description: "Capture ideas and quick notes",
    icon: "📝",
    href: "#",
    gradient: "from-indigo-500 to-indigo-600",
    ring: "ring-indigo-500/20",
    iconBg: "bg-indigo-500",
    tag: "Coming soon",
  },
  {
    title: "Destiny 2",
    description: "Searchable armor set bonuses & synergies database",
    icon: "🎮",
    href: "/destiny2",
    gradient: "from-orange-500 to-red-500",
    ring: "ring-orange-500/20",
    iconBg: "bg-orange-500",
    tag: "Live",
  },
];

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const liveWidgets = widgets.filter((w) => w.tag === "Live");
  const comingWidgets = widgets.filter((w) => w.tag !== "Live");

  return (
    <main className="flex-1">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">L</span>
            </div>
            <span className="font-bold text-lg text-zinc-900 dark:text-white tracking-tight">LifeDash</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="px-4 py-1.5 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-80 transition-opacity shadow-sm">
              + New Block
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <p className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-2">{today}</p>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight mb-3">
            Good day 👋
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl">
            Your personal life dashboard. Stay organized, focused, and on track.
          </p>
        </section>

        {/* Stats bar */}
        <section className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Modules", value: widgets.length.toString() },
            { label: "Live", value: liveWidgets.length.toString() },
            { label: "In Progress", value: "0" },
            { label: "Coming Soon", value: comingWidgets.length.toString() },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-4"
            >
              <p className="text-2xl font-black text-zinc-900 dark:text-white">{stat.value}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Live modules */}
        {liveWidgets.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Live</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {liveWidgets.map((widget) => (
                <WidgetCard key={widget.title} widget={widget} />
              ))}
            </div>
          </section>
        )}

        {/* All modules */}
        <section className="mb-10">
          <h2 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">All Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comingWidgets.map((widget) => (
              <WidgetCard key={widget.title} widget={widget} />
            ))}
          </div>
        </section>

        {/* Quick Note */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Quick Note</h3>
            <span className="text-xs text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">Coming soon</span>
          </div>
          <textarea
            className="w-full h-28 text-sm text-zinc-700 dark:text-zinc-300 bg-transparent resize-none outline-none placeholder-zinc-400 dark:placeholder-zinc-600"
            placeholder="Start typing a note…"
            disabled
          />
        </section>
      </div>
    </main>
  );
}

function WidgetCard({ widget }: { widget: typeof widgets[0] }) {
  const isLive = widget.tag === "Live";
  return (
    <Link
      href={widget.href}
      className={`group relative flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200
        border-zinc-200 dark:border-zinc-800
        bg-white dark:bg-zinc-900
        hover:border-zinc-300 dark:hover:border-zinc-700
        hover:shadow-lg dark:hover:shadow-zinc-950/50
        ${!isLive ? "opacity-60 cursor-default pointer-events-none" : ""}
      `}
    >
      <div className={`${widget.iconBg} shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm`}>
        {widget.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-sm">
            {widget.title}
          </h3>
          <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${
            isLive
              ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
          }`}>
            {widget.tag}
          </span>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">{widget.description}</p>
      </div>
    </Link>
  );
}
