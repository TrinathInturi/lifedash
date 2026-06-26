"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ARMOR_SETS, SYNERGY_COLORS, ALL_ELEMENTS, ALL_SYNERGY_CATEGORIES, SOURCE_TYPE_STYLES, type ArmorSet, type Synergy, type SourceType } from "./data";
import { ThemeToggle } from "@/components/ThemeToggle";

const ALL_SOURCE_TYPES: SourceType[] = [
  "Master Lost Sectors", "Vanguard", "Crucible", "Iron Banner",
  "Trials of Osiris", "Gambit", "Master Raid", "Master Dungeon",
  "Sparrow Racing", "Other",
];

const ELEMENT_ICONS: Record<string, string> = {
  Solar: "☀", Void: "◉", Arc: "⚡", Stasis: "❄", Strand: "∿", Prismatic: "◇", Kinetic: "●",
};

function Badge({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold text-white leading-none"
      style={{ backgroundColor: color ?? "#71717a" }}
    >
      {children}
    </span>
  );
}

function ArmorCard({ set }: { set: ArmorSet }) {
  const [open, setOpen] = useState(false);
  const src = SOURCE_TYPE_STYLES[set.sourceType];

  return (
    <div
      className={`nm-surface cursor-pointer transition-all ${open ? "shadow-[var(--shadow-inset)]" : "hover:shadow-[var(--shadow-raised-lg)]"}`}
      onClick={() => setOpen(!open)}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              {set.element && (
                <span className="text-xs" style={{ color: "var(--nm-accent)" }}>{ELEMENT_ICONS[set.element]}</span>
              )}
              <h3 className="text-sm font-semibold truncate" style={{ color: "var(--nm-text)" }}>{set.name}</h3>
              {set.notable && (
                <span className="text-xs shrink-0" style={{ color: "var(--nm-accent)" }}>★</span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]" style={{ color: "var(--nm-text-subtle)" }}>{src.icon}</span>
              <span className="text-[10px]" style={{ color: "var(--nm-text-subtle)" }}>{set.sourceType}</span>
            </div>
          </div>
          {set.element && (
            <span
              className="nm-inset-sm shrink-0 text-[10px] px-2 py-1 font-mono font-medium"
              style={{ color: "var(--nm-accent)", background: "var(--nm-accent-glow)" }}
            >
              {set.element}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {set.synergies.map((s) => (
            <Badge key={s} color={SYNERGY_COLORS[s]}>{s}</Badge>
          ))}
        </div>

        <p className="text-xs leading-relaxed" style={{ color: "var(--nm-text-muted)" }}>
          <span className="font-semibold mr-1" style={{ color: "var(--nm-text-subtle)" }}>2pc</span>
          {set.twoPiece}
        </p>

        {open && (
          <div className="mt-3 pt-3 space-y-2" style={{ borderTop: "1px solid rgba(128,128,160,0.1)" }}>
            <p className="text-xs leading-relaxed" style={{ color: "var(--nm-text-muted)" }}>
              <span className="font-semibold mr-1" style={{ color: "var(--nm-text-subtle)" }}>4pc</span>
              {set.fourPiece}
            </p>
            <p className="text-xs" style={{ color: "var(--nm-text-subtle)" }}>
              <span className="font-semibold mr-1">Source</span>
              {set.source}
            </p>
          </div>
        )}
      </div>
      <div className="px-5 py-2.5 rounded-b-[20px]" style={{ borderTop: "1px solid rgba(128,128,160,0.08)" }}>
        <span className="text-[10px] font-medium" style={{ color: "var(--nm-accent)" }}>{open ? "▲ collapse" : "▼ expand"}</span>
      </div>
    </div>
  );
}

export default function Destiny2Page() {
  const [search, setSearch] = useState("");
  const [element, setElement] = useState<string | null>(null);
  const [synergy, setSynergy] = useState<string | null>(null);
  const [sourceType, setSourceType] = useState<SourceType | null>(null);
  const [notable, setNotable] = useState(false);

  const filtered = useMemo(() => ARMOR_SETS.filter((s) => {
    if (notable && !s.notable) return false;
    if (element && s.element !== element) return false;
    if (synergy && !s.synergies.includes(synergy as Synergy)) return false;
    if (sourceType && s.sourceType !== sourceType) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.twoPiece.toLowerCase().includes(q) ||
        s.fourPiece.toLowerCase().includes(q) ||
        s.source.toLowerCase().includes(q) ||
        s.synergies.some((x) => x.toLowerCase().includes(q))
      );
    }
    return true;
  }), [search, element, synergy, sourceType, notable]);

  const clear = () => { setSearch(""); setElement(null); setSynergy(null); setSourceType(null); setNotable(false); };
  const hasFilters = search || element || synergy || sourceType || notable;

  return (
    <div className="flex-1 flex flex-col px-5 py-6" style={{ background: "var(--nm-bg)" }}>
      <div className="max-w-7xl mx-auto w-full space-y-5">

        {/* Header */}
        <div className="nm-surface px-5 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              className="nm-raised-sm px-3 py-1.5 text-xs font-medium transition-all active:shadow-[var(--shadow-inset-sm)] shrink-0"
              style={{ color: "var(--nm-text-muted)" }}
            >
              ← Back
            </Link>
            <span style={{ color: "var(--nm-text-subtle)", opacity: 0.3 }}>|</span>
            <span className="text-sm font-semibold truncate" style={{ color: "var(--nm-text)" }}>Destiny 2 — Armor Database</span>
            <span className="nm-accent-pill shrink-0">{filtered.length}/{ARMOR_SETS.length}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {hasFilters && (
              <button
                onClick={clear}
                className="text-xs font-medium transition-colors"
                style={{ color: "var(--nm-accent)" }}
              >
                Clear all
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* Search */}
        <div className="nm-inset px-4 py-1 flex items-center gap-3">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "var(--nm-text-subtle)", flexShrink: 0 }}>
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search armor sets, bonuses, sources…"
            className="w-full h-9 bg-transparent text-sm outline-none placeholder:opacity-30"
            style={{ color: "var(--nm-text)" }}
          />
        </div>

        <div className="flex gap-5 w-full">
          {/* Sidebar */}
          <aside className="w-44 shrink-0 space-y-5">
            <button
              onClick={() => setNotable(!notable)}
              className="w-full text-left text-xs px-3 py-2 rounded-xl font-semibold transition-all"
              style={notable
                ? { boxShadow: "var(--shadow-inset-sm)", background: "var(--nm-bg)", color: "var(--nm-accent)" }
                : { boxShadow: "var(--shadow-raised-sm)", background: "var(--nm-bg)", color: "var(--nm-text-muted)" }
              }
            >
              ★ Notable only
            </button>

            <FilterSection label="Element">
              {ALL_ELEMENTS.map((el) => (
                <FilterButton
                  key={el}
                  active={element === el}
                  onClick={() => setElement(element === el ? null : el)}
                >
                  {ELEMENT_ICONS[el]} {el}
                </FilterButton>
              ))}
            </FilterSection>

            <FilterSection label="Source">
              {ALL_SOURCE_TYPES.map((st) => {
                const s = SOURCE_TYPE_STYLES[st];
                return (
                  <FilterButton
                    key={st}
                    active={sourceType === st}
                    onClick={() => setSourceType(sourceType === st ? null : st)}
                  >
                    {s.icon} {st}
                  </FilterButton>
                );
              })}
            </FilterSection>

            {Object.entries(ALL_SYNERGY_CATEGORIES).map(([cat, syns]) => (
              <div key={cat}>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--nm-text-subtle)" }}>{cat}</p>
                <div className="flex flex-wrap gap-1">
                  {syns.map((s) => {
                    const isActive = synergy === s;
                    return (
                      <button
                        key={s}
                        onClick={() => setSynergy(isActive ? null : s)}
                        className="text-[10px] px-2 py-0.5 rounded-full font-semibold text-white transition-all"
                        style={{
                          backgroundColor: SYNERGY_COLORS[s] ?? "#71717a",
                          opacity: isActive ? 1 : 0.35,
                          transform: isActive ? "scale(1.05)" : "scale(1)",
                        }}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </aside>

          {/* Card grid */}
          <main className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="nm-inset text-center py-24">
                <p className="text-sm mb-2" style={{ color: "var(--nm-text-muted)" }}>No armor sets found.</p>
                <button onClick={clear} className="text-xs font-semibold" style={{ color: "var(--nm-accent)" }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((set) => <ArmorCard key={set.id} set={set} />)}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--nm-text-subtle)" }}>{label}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left text-xs px-3 py-1.5 rounded-xl font-medium transition-all"
      style={active
        ? { boxShadow: "var(--shadow-inset-sm)", background: "var(--nm-bg)", color: "var(--nm-accent)" }
        : { color: "var(--nm-text-muted)" }
      }
    >
      {children}
    </button>
  );
}
