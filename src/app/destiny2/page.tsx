"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ARMOR_SETS, SYNERGY_COLORS, ALL_ELEMENTS, ALL_SYNERGY_CATEGORIES, SOURCE_TYPE_STYLES, type ArmorSet, type Synergy, type SourceType } from "./data";
import { ELEMENT_SVG_ICONS, ELEMENT_COLORS } from "./icons";
import { ThemeToggle } from "@/components/ThemeToggle";

const ALL_SOURCE_TYPES: SourceType[] = [
  "Master Lost Sectors", "Vanguard", "Crucible", "Iron Banner",
  "Trials of Osiris", "Gambit", "Master Raid", "Master Dungeon",
  "Sparrow Racing", "Other",
];

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

function ElementBadge({ element }: { element: string }) {
  const Icon = ELEMENT_SVG_ICONS[element];
  const color = ELEMENT_COLORS[element] ?? "#9ca3af";
  if (!Icon) return null;
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold"
      style={{ background: `${color}18`, color }}
    >
      <Icon size={11} />
      {element}
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
        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <h3 className="text-sm font-semibold" style={{ color: "var(--nm-text)" }}>{set.name}</h3>
              {set.notable && (
                <span className="text-xs shrink-0" style={{ color: "var(--nm-accent)" }}>★</span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {set.element && <ElementBadge element={set.element} />}
              <span className="text-[10px]" style={{ color: "var(--nm-text-subtle)" }}>{src.icon} {set.sourceType}</span>
            </div>
          </div>
        </div>

        {/* Synergy badges */}
        <div className="flex flex-wrap gap-1 mb-3">
          {set.synergies.map((s) => (
            <Badge key={s} color={SYNERGY_COLORS[s]}>{s}</Badge>
          ))}
        </div>

        {/* 2pc bonus */}
        <p className="text-xs leading-relaxed" style={{ color: "var(--nm-text-muted)" }}>
          <span className="font-semibold mr-1" style={{ color: "var(--nm-text-subtle)" }}>2pc</span>
          {set.twoPiece}
        </p>

        {/* Expanded 4pc + source */}
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
      <div className="px-5 py-2.5 rounded-b-[20px] flex items-center justify-between" style={{ borderTop: "1px solid rgba(128,128,160,0.08)" }}>
        <span className="text-[10px] font-medium" style={{ color: "var(--nm-accent)" }}>{open ? "▲ collapse" : "▼ expand"}</span>
        {set.notable && <span className="text-[10px]" style={{ color: "var(--nm-accent)" }}>Notable</span>}
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
    <div className="flex-1 flex flex-col" style={{ background: "var(--nm-bg)" }}>

      {/* Top nav */}
      <nav className="nm-surface mx-5 mt-5 px-5 py-3 flex items-center justify-between gap-4" style={{ borderRadius: "16px" }}>
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="nm-raised-sm px-3 py-1.5 text-xs font-medium transition-all active:shadow-[var(--shadow-inset-sm)] shrink-0 flex items-center gap-1.5"
            style={{ color: "var(--nm-text-muted)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            LifeDash
          </Link>
          <span style={{ color: "var(--nm-text-subtle)", opacity: 0.3 }}>/</span>

          <div className="flex items-center gap-2">
            <div className="nm-raised-sm w-7 h-7 flex items-center justify-center text-sm" style={{ color: "var(--nm-accent)" }}>⬡</div>
            <span className="text-sm font-semibold hidden sm:block" style={{ color: "var(--nm-text)" }}>Destiny 2 — Armor Database</span>
            <span className="text-sm font-semibold sm:hidden" style={{ color: "var(--nm-text)" }}>Armor DB</span>
          </div>

          <span className="nm-accent-pill shrink-0">{filtered.length}/{ARMOR_SETS.length}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {hasFilters && (
            <button onClick={clear} className="text-xs font-semibold transition-colors" style={{ color: "var(--nm-accent)" }}>
              Clear all
            </button>
          )}
          <ThemeToggle />
        </div>
      </nav>

      <div className="flex-1 flex gap-0 px-5 py-5">

        {/* Sidebar */}
        <aside className="w-52 shrink-0 mr-5 space-y-5">

          {/* Search */}
          <div className="nm-inset px-3 py-1 flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ color: "var(--nm-text-subtle)", flexShrink: 0 }}>
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="w-full h-8 bg-transparent text-xs outline-none placeholder:opacity-30"
              style={{ color: "var(--nm-text)" }}
            />
          </div>

          {/* Notable toggle */}
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

          {/* Element filter */}
          <FilterSection label="Element">
            {ALL_ELEMENTS.map((el) => {
              const Icon = ELEMENT_SVG_ICONS[el];
              const color = ELEMENT_COLORS[el];
              const isActive = element === el;
              return (
                <button
                  key={el}
                  onClick={() => setElement(isActive ? null : el)}
                  className="w-full text-left text-xs px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-2"
                  style={isActive
                    ? { boxShadow: "var(--shadow-inset-sm)", background: "var(--nm-bg)", color }
                    : { color: "var(--nm-text-muted)" }
                  }
                >
                  {Icon && <span style={{ color: isActive ? color : "var(--nm-text-subtle)" }}><Icon size={12} /></span>}
                  {el}
                </button>
              );
            })}
          </FilterSection>

          {/* Source filter */}
          <FilterSection label="Source">
            {ALL_SOURCE_TYPES.map((st) => {
              const s = SOURCE_TYPE_STYLES[st];
              return (
                <FilterButton
                  key={st}
                  active={sourceType === st}
                  onClick={() => setSourceType(sourceType === st ? null : st)}
                >
                  <span className="shrink-0">{s.icon}</span> {st}
                </FilterButton>
              );
            })}
          </FilterSection>

          {/* Synergy filters */}
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
            <div className="nm-inset flex flex-col items-center justify-center py-32">
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
      className="w-full text-left text-xs px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5"
      style={active
        ? { boxShadow: "var(--shadow-inset-sm)", background: "var(--nm-bg)", color: "var(--nm-accent)" }
        : { color: "var(--nm-text-muted)" }
      }
    >
      {children}
    </button>
  );
}
