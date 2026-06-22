import Link from "next/link";

const widgets = [
  { title: "Tasks", description: "Manage your daily tasks and to-dos", icon: "✓", href: "#", color: "bg-blue-500" },
  { title: "Journal", description: "Write and reflect on your day", icon: "📓", href: "#", color: "bg-purple-500" },
  { title: "Goals", description: "Track your long-term goals and habits", icon: "🎯", href: "#", color: "bg-green-500" },
  { title: "Finance", description: "Monitor your budget and expenses", icon: "💰", href: "#", color: "bg-yellow-500" },
  { title: "Health", description: "Log workouts, sleep, and wellness", icon: "❤️", href: "#", color: "bg-red-500" },
  { title: "Notes", description: "Capture ideas and quick notes", icon: "📝", href: "#", color: "bg-indigo-500" },
];

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">LifeDash</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{today}</p>
          </div>
          <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
            + New Block
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Good day! 👋</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Your personal life dashboard. Stay organized, focused, and on track.</p>
        </section>

        <section className="mb-10">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Dashboard</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {widgets.map((widget) => (
              <Link key={widget.title} href={widget.href}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className={`${widget.color} text-white rounded-lg w-10 h-10 flex items-center justify-center text-lg shrink-0`}>
                  {widget.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {widget.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{widget.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Note</h3>
          <textarea
            className="w-full h-32 text-sm text-gray-700 dark:text-gray-300 bg-transparent resize-none outline-none placeholder-gray-400"
            placeholder="Start typing a note… (coming soon)"
            disabled
          />
        </section>
      </div>
    </main>
  );
}
