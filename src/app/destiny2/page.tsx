"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ARMOR_SETS, SYNERGY_COLORS, ALL_ELEMENTS, ALL_SYNERGY_CATEGORIES, SOURCE_TYPE_STYLES, type ArmorSet, type Synergy, type SourceType } from "./data";

const ALL_SOURCE_TYPES: SourceType[] = [
  "Master Lost Sectors", "Vanguard", "Crucible", "Iron Banner",
  "Trials of Osiris", "Gambit", "Master Raid", "Master Dungeon",
  "Sparrow Racing", "Other",
];

const ELEMENT_ICONS: Record<string, string> = {
  Solar: "☀️",
  Void: "🌀",
  Arc: "⚡",
  Stasis: "❄️",
  Strand: "🌿",
  Prismatic: "💎",
  Kinetic: "⚫",
};

const ELEMENT_BG: Record<string, string> = {
  Solar: "bg-orange-500/20 border-orange-500/40 text-orange-300",
  Void: "bg-purple-600/20 border-purple-500/40 text-purple-300",
  Arc: "bg-blue-400/20 border-blue-400/40 text-blue-300",
  Stasis: "bg-cyan-400/20 border-cyan-400/40 text-cyan-300",
  Strand: "bg-emerald-400/20 border-emerald-400/40 text-emerald-300",
  Prismatic: "bg-pink-500/20 border-pink-400/40 text-pink-300",
  Kinetic: "bg-gray-400/20 border-gray-400/40 text-gray-300",
};

function SynergyBadge({ synergy }: { synergy: Synergy }) {
  const color = SYNERGY_COLORS[synergy] ?? "bg-gray-500";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white ${color}`}>
      {synergy}
    </span>
  );
}

function ArmorCard({ set }: { set: ArmorSet }) {
  const [expanded, setExpanded] = useState(false);
  const elementStyle = set.element ? ELEMENT_BG[set.element] : "bg-gray-700/20 border-gray-600/40 text-gray-300";

  return (
    <div
      className="bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition-colors cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            {set.element && (
              <span className="text-xl shrink-0">{ELEMENT_ICONS[set.element]}</span>
            )}
            <div className="min-w-0">
              <h3 className="font-bold text-white text-sm leading-tight truncate">{set.name}</h3>
              {set.notable && (
                <span className="text-xs text-yellow-400 font-medium">★ Notable Synergy</span>
              )}
            </div>
          </div>
          {set.element && (
            <span className={`shrink-0 px-2 py-0.5 rounded border text-xs font-medium ${elementStyle}`}>
              {set.element}
            </span>
          )}
        </div>

        {(() => {
          const st = SOURCE_TYPE_STYLES[set.sourceType];
          return (
            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium mb-2 ${st.bg} ${st.text}`}>
              {st.icon} {set.sourceType}
            </div>
          );
        })()}

        <div className="flex flex-wrap gap-1 mb-3">
          {set.synergies.map((s) => (
            <SynergyBadge key={s} synergy={s} />
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-xs text-gray-300">
            <span className="text-gray-500 font-semibold">2-PIECE  </span>
            {set.twoPiece}
          </div>
          {expanded && (
            <div className="text-xs text-gray-300">
              <span className="text-gray-500 font-semibold">4-PIECE  </span>
              {set.fourPiece}
            </div>
          )}
        </div>
      </div>

      {expanded && (
        <div className="px-4 py-2 bg-gray-900/50 border-t border-gray-700 space-y-1">
          <p className="text-xs text-gray-500">
            <span className="text-gray-400 font-semibold">SOURCE  </span>
            {set.source}
          </p>
        </div>
      )}

      <div className="px-4 py-1.5 bg-gray-900/30 border-t border-gray-700/50">
        <span className="text-xs text-gray-600">{expanded ? "▲ collapse" : "▼ show 4-piece & source"}</span>
      </div>
    </div>
  );
}

export default function Destiny2Page() {
  const [search, setSearch] = useState("");
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [selectedSynergy, setSelectedSynergy] = useState<string | null>(null);
  const [selectedSourceType, setSelectedSourceType] = useState<SourceType | null>(null);
  const [notableOnly, setNotableOnly] = useState(false);

  const filtered = useMemo(() => {
    return ARMOR_SETS.filter((set) => {
      if (notableOnly && !set.notable) return false;
      if (selectedElement && set.element !== selectedElement) return false;
      if (selectedSynergy && !set.synergies.includes(selectedSynergy as Synergy)) return false;
      if (selectedSourceType && set.sourceType !== selectedSourceType) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          set.name.toLowerCase().includes(q) ||
          set.twoPiece.toLowerCase().includes(q) ||
          set.fourPiece.toLowerCase().includes(q) ||
          set.source.toLowerCase().includes(q) ||
          set.synergies.some((s) => s.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [search, selectedElement, selectedSynergy, selectedSourceType, notableOnly]);

  const clearFilters = () => {
    setSearch("");
    setSelectedElement(null);
    setSelectedSynergy(null);
    setSelectedSourceType(null);
    setNotableOnly(false);
  };

  const hasFilters = search || selectedElement || selectedSynergy || selectedSourceType || notableOnly;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur border-b border-gray-800 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              ← LifeDash
            </Link>
            <span className="text-gray-700">/</span>
            <span className="text-gray-300 text-sm font-medium">Destiny 2</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">
                <span className="text-orange-400">DESTINY 2</span> ARMOR DATABASE
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">
                {filtered.length} of {ARMOR_SETS.length} armor sets — click any card to expand
              </p>
            </div>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-gray-400 border border-gray-700 px-3 py-1.5 rounded-lg hover:border-gray-500 hover:text-gray-200 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Search */}
          <div className="mt-3 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sets, bonuses, sources, synergies…"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 shrink-0 space-y-5">
            {/* Notable toggle */}
            <div>
              <button
                onClick={() => setNotableOnly(!notableOnly)}
                className={`w-full text-left px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  notableOnly
                    ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-300"
                    : "border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300"
                }`}
              >
                ★ Notable Synergies Only
              </button>
            </div>

            {/* Element filter */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Element</h3>
              <div className="space-y-1">
                {ALL_ELEMENTS.map((el) => (
                  <button
                    key={el}
                    onClick={() => setSelectedElement(selectedElement === el ? null : el)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                      selectedElement === el
                        ? `${ELEMENT_BG[el]} border font-medium`
                        : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                    }`}
                  >
                    <span>{ELEMENT_ICONS[el]}</span>
                    {el}
                  </button>
                ))}
              </div>
            </div>

            {/* Source Type filter */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Source / Destination</h3>
              <div className="space-y-1">
                {ALL_SOURCE_TYPES.map((st) => {
                  const style = SOURCE_TYPE_STYLES[st];
                  const isSelected = selectedSourceType === st;
                  return (
                    <button
                      key={st}
                      onClick={() => setSelectedSourceType(isSelected ? null : st)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-2 ${
                        isSelected
                          ? `${style.bg} ${style.text} font-medium`
                          : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                      }`}
                    >
                      <span>{style.icon}</span>
                      {st}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Synergy filter */}
            {Object.entries(ALL_SYNERGY_CATEGORIES).map(([category, synergies]) => (
              <div key={category}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{category}</h3>
                <div className="flex flex-wrap gap-1">
                  {synergies.map((s) => {
                    const color = SYNERGY_COLORS[s] ?? "bg-gray-500";
                    const isSelected = selectedSynergy === s;
                    return (
                      <button
                        key={s}
                        onClick={() => setSelectedSynergy(isSelected ? null : s)}
                        className={`px-2 py-0.5 rounded text-xs font-medium text-white transition-opacity ${color} ${
                          isSelected ? "ring-2 ring-white opacity-100" : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </aside>

          {/* Grid */}
          <main className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-600">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-lg font-medium text-gray-500">No armor sets found</p>
                <p className="text-sm mt-1">Try adjusting your search or filters</p>
                <button onClick={clearFilters} className="mt-4 text-orange-400 hover:text-orange-300 text-sm underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {filtered.map((set) => (
                  <ArmorCard key={set.id} set={set} />
                ))}
              </div>
            )}
          </main>
        </div>

        {/* Notable Synergies Legend */}
        <section className="mt-10 bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Notable Synergy Groups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-gray-400">
            {[
              { element: "Solar", sets: ["Seventh Seraph", "Apostate's Blade", "Collective Psyche"], icon: "☀️" },
              { element: "Void", sets: ["Luminopotent", "Circuit", "Taken King"], icon: "🌀" },
              { element: "Arc", sets: ["Veritas", "Eutechnology", "Nezarec's Nightmares", "Oryx's Memory", "Kentarch 3"], icon: "⚡" },
              { element: "Stasis", sets: ["Crystocrene", "Techsun's Regalia", "Yearning Echo"], icon: "❄️" },
              { element: "Strand", sets: ["Thunderhead", "Flain", "Dark Age", "Sage Protector", "Thriving Survivor"], icon: "🌿" },
              { element: "Prismatic", sets: ["Aion Adapter", "Aion Renewal", "Wayward Psyche"], icon: "💎" },
            ].map(({ element, sets, icon }) => (
              <div key={element} className="space-y-1">
                <div className={`font-semibold text-sm ${ELEMENT_BG[element]} inline-flex items-center gap-1 px-2 py-0.5 rounded border`}>
                  {icon} {element}
                </div>
                <ul className="space-y-0.5 pl-1">
                  {sets.map((s) => (
                    <li key={s} className="text-gray-500">• {s} Set</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
