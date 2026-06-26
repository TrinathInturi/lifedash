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
      className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium text-white leading-none"
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
      className="border border-[var(--border)] rounded-lg bg-[var(--bg)] hover:border-[var(--text-subtle)] transition-colors cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              {set.element && (
                <span className="text-[var(--text-subtle)] text-xs">{ELEMENT_ICONS[set.element]}</span>
              )}
              <h3 className="text-sm font-medium text-[var(--text)] truncate">{set.name}</h3>
              {set.notable && (
                <span className="text-[10px] text-amber-500 font-medium shrink-0">★</span>
              )}
            </div>
            <span className="text-[10px] text-[var(--text-subtle)]">{src.icon} {set.sourceType}</span>
          </div>
          {set.element && (
            <span className="shrink-0 text-[10px] text-[var(--text-subtle)] border border-[var(--border)] px-1.5 py-0.5 rounded font-mono">
              {set.element}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {set.synergies.map((s) => (
            <Badge key={s} color={SYNERGY_COLORS[s]}>{s}</Badge>
          ))}
        </div>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          <span className="text-[var(--text-subtle)] font-medium mr-1">2pc</span>
          {set.twoPiece}
        </p>

        {open && (
          <div className="mt-2 pt-2 border-t border-[var(--border)] space-y-1.5">
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              <span className="text-[var(--text-subtle)] font-medium mr-1">4pc</span>
              {set.fourPiece}
            </p>
            <p className="text-xs text-[var(--text-subtle)]">
              <span className="font-medium mr-1">Source</span>
              {set.source}
            </p>
          </div>
        )}
      </div>
      <div className="px-4 py-2 border-t border-[var(--border)] bg-[var(--bg-subtle)] rounded-b-lg">
        <span className="text-[10px] text-[var(--text-subtle)]">{open ? "▲ collapse" : "▼ expand"}</span>
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
    <div className="flex-1 flex flex-col">
      <header className="border-b border-[var(--border)] sticky top-0 z-10 bg-[var(--bg)]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="text-xs text-[var(--text-subtle)] hover:text-[var(--text-muted)] transition-colors shrink-0">
              ← Back
            </Link>
            <span className="text-[var(--border)]">|</span>
            <span className="text-sm font-medium text-[var(--text)] truncate">Destiny 2 — Armor Database</span>
            <span className="text-xs text-[var(--text-subtle)] shrink-0">
              {filtered.length}/{ARMOR_SETS.length}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {hasFilters && (
              <button
                onClick={clear}
                className="text-xs text-[var(--text-subtle)] hover:text-[var(--text-muted)] transition-colors"
              >
                Clear
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search armor sets, bonuses, sources…"
            className="w-full h-8 rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] px-3 text-sm text-[var(--text)] placeholder:text-[var(--text-subtle)] outline-none focus:border-[var(--text-subtle)] transition-colors"
          />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6 w-full">
        <aside className="w-44 shrink-0 space-y-5">
          <div>
            <button
              onClick={() => setNotable(!notable)}
              className={`w-full text-left text-xs px-2 py-1.5 rounded border transition-colors ${
                notable
                  ? "border-amber-400 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-subtle)]"
              }`}
            >
              ★ Notable only
            </button>
          </div>

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
              <p className="text-[10px] font-medium text-[var(--text-subtle)] uppercase tracking-widest mb-1.5">{cat}</p>
              <div className="flex flex-wrap gap-1">
                {syns.map((s) => {
                  const isActive = synergy === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSynergy(isActive ? null : s)}
                      className="text-[10px] px-1.5 py-0.5 rounded font-medium text-white transition-opacity"
                      style={{
                        backgroundColor: SYNERGY_COLORS[s] ?? "#71717a",
                        opacity: isActive ? 1 : 0.45,
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

        <main className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-sm text-[var(--text-muted)]">No armor sets found.</p>
              <button onClick={clear} className="mt-2 text-xs text-[var(--text-subtle)] hover:text-[var(--text-muted)] underline transition-colors">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
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
      <p className="text-[10px] font-medium text-[var(--text-subtle)] uppercase tracking-widest mb-1.5">{label}</p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left text-xs px-2 py-1 rounded transition-colors ${
        active
          ? "bg-[var(--text)] text-[var(--bg)] font-medium"
          : "text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)]"
      }`}
    >
      {children}
    </button>
  );
}
