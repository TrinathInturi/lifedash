export function SolarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function VoidIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path d="M12 3C12 3 8 7 8 12s4 9 4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 3C12 3 16 7 16 12s-4 9-4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ArcIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l2-8z" fill="currentColor" />
    </svg>
  );
}

export function StasisIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v20M2 12h20M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function StrandIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 18C4 18 6 14 9 12C12 10 12 6 12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 18C20 18 18 14 15 12C12 10 12 6 12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <path d="M4 18C6 20 10 21 12 19C14 21 18 20 20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PrismaticIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 8v8l8 6 8-6V8L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 2v20M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

export function KineticIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export const ELEMENT_SVG_ICONS: Record<string, React.FC<{ size?: number }>> = {
  Solar: SolarIcon,
  Void: VoidIcon,
  Arc: ArcIcon,
  Stasis: StasisIcon,
  Strand: StrandIcon,
  Prismatic: PrismaticIcon,
  Kinetic: KineticIcon,
};

export const ELEMENT_COLORS: Record<string, string> = {
  Solar: "#f97316",
  Void: "#9333ea",
  Arc: "#60a5fa",
  Stasis: "#22d3ee",
  Strand: "#34d399",
  Prismatic: "#e879f9",
  Kinetic: "#9ca3af",
};
