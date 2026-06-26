export type Synergy =
  | "Solar" | "Void" | "Arc" | "Stasis" | "Strand" | "Prismatic" | "Kinetic"
  | "Super" | "Grenade" | "Melee" | "Class Ability" | "All Abilities"
  | "Orbs of Power" | "Elemental Pickups" | "All Ammo" | "Special Ammo" | "Heavy Ammo"
  | "Finishers" | "Disorient" | "Exhaust"
  | "Healing" | "Survivability" | "Light" | "Darkness" | "Armor Charge"
  | "Health Stat" | "Weapon Stat" | "Mobility"
  | "Weapons" | "Swords" | "Glaives" | "Rockets" | "Grenade Launchers"
  | "Auto Rifles" | "Sidearms" | "Scout Rifles"
  | "SMGs" | "Hand Cannons" | "Bows" | "Fusion Rifles" | "Linear Fusion Rifles"
  | "Shotguns" | "Heat Weapons" | "Micro Missiles";

export type SourceType =
  | "Master Lost Sectors"
  | "Vanguard"
  | "Crucible"
  | "Iron Banner"
  | "Trials of Osiris"
  | "Gambit"
  | "Master Raid"
  | "Master Dungeon"
  | "Sparrow Racing"
  | "Other";

export type ArmorSet = {
  id: string;
  name: string;
  element?: "Solar" | "Void" | "Arc" | "Stasis" | "Strand" | "Prismatic" | "Kinetic";
  twoPiece: string;
  fourPiece: string;
  source: string;
  sourceType: SourceType;
  synergies: Synergy[];
  notable?: boolean;
};

export const SOURCE_TYPE_STYLES: Record<SourceType, { bg: string; text: string; icon: string }> = {
  "Master Lost Sectors": { bg: "bg-amber-900/40", text: "text-amber-300", icon: "🗺️" },
  "Vanguard":            { bg: "bg-blue-900/40",  text: "text-blue-300",  icon: "🔵" },
  "Crucible":            { bg: "bg-red-900/40",   text: "text-red-300",   icon: "⚔️" },
  "Iron Banner":         { bg: "bg-orange-900/40",text: "text-orange-300",icon: "🏴" },
  "Trials of Osiris":    { bg: "bg-yellow-900/40",text: "text-yellow-300",icon: "🏆" },
  "Gambit":              { bg: "bg-green-900/40", text: "text-green-300", icon: "🎲" },
  "Master Raid":         { bg: "bg-purple-900/40",text: "text-purple-300",icon: "👑" },
  "Master Dungeon":      { bg: "bg-violet-900/40",text: "text-violet-300",icon: "🏛️" },
  "Sparrow Racing":      { bg: "bg-pink-900/40",  text: "text-pink-300",  icon: "🏀" },
  "Other":               { bg: "bg-gray-800/40",  text: "text-gray-400",  icon: "📦" },
};

export const SYNERGY_COLORS: Record<string, string> = {
  Solar: "#f97316",
  Void: "#9333ea",
  Arc: "#60a5fa",
  Stasis: "#22d3ee",
  Strand: "#34d399",
  Prismatic: "#ec4899",
  Kinetic: "#9ca3af",
  Super: "#facc15",
  Grenade: "#22c55e",
  Melee: "#ef4444",
  "Class Ability": "#2dd4bf",
  "All Abilities": "#818cf8",
  "Orbs of Power": "#fde047",
  "Elemental Pickups": "#fb923c",
  "All Ammo": "#94a3b8",
  "Special Ammo": "#93c5fd",
  "Heavy Ammo": "#d97706",
  Finishers: "#f43f5e",
  Disorient: "#a78bfa",
  Exhaust: "#64748b",
  Healing: "#4ade80",
  Survivability: "#059669",
  Light: "#fef08a",
  Darkness: "#374151",
  "Armor Charge": "#fbbf24",
  "Health Stat": "#f87171",
  "Weapon Stat": "#3b82f6",
  Mobility: "#67e8f9",
  Weapons: "#6b7280",
  Swords: "#dc2626",
  Glaives: "#ea580c",
  Rockets: "#b91c1c",
  "Grenade Launchers": "#16a34a",
  "Auto Rifles": "#2563eb",
  Sidearms: "#c084fc",
  "Scout Rifles": "#14b8a6",
  SMGs: "#f472b6",
  "Hand Cannons": "#f59e0b",
  Bows: "#84cc16",
  "Fusion Rifles": "#6366f1",
  "Linear Fusion Rifles": "#4f46e5",
  Shotguns: "#c2410c",
  "Heat Weapons": "#ef4444",
  "Micro Missiles": "#ca8a04",
};

export const ARMOR_SETS: ArmorSet[] = [
  {
    id: "wildwood",
    name: "Wildwood Set",
    element: "Solar",
    twoPiece: "Matchbower: Precision kills with Solar weapons generate Orbs of Power.",
    fourPiece: "Dappler Effect: Defeating enemies affected by Solar debuffs increases weapon damage briefly.",
    source: "Destinations — Master Lost Sectors", sourceType: "Master Lost Sectors",
    synergies: ["Solar", "Orbs of Power", "Weapons"], notable: false,
  },
  {
    id: "techsec", name: "TechSec Set", element: "Arc",
    twoPiece: "Monitors: Picking up an Ionic Trace grants a temporary boost to Arc weapon damage.",
    fourPiece: "Overclock Swords: Defeating enemies with Arc abilities extends the duration of Amplified.",
    source: "Vanguard — Focusing", sourceType: "Vanguard",
    synergies: ["Arc", "Elemental Pickups", "Swords"], notable: false,
  },
  {
    id: "last-discipline", name: "Last Discipline Set", element: "Void",
    twoPiece: "Tattered Worlds: Void ability kills grant Void Overshield briefly.",
    fourPiece: "Power Ladder: Defeating Volatile enemies extends duration of Devour.",
    source: "Crucible — Focusing", sourceType: "Crucible",
    synergies: ["Void", "Grenade", "Survivability"], notable: true,
  },
  {
    id: "techsuns-regalia", name: "Techsun's Regalia Set", element: "Solar",
    twoPiece: "Sunsteel Burst: Scorched enemies explode and release a Solar Elemental Pickup on death.",
    fourPiece: "Codis in Power: Picking up Solar Elemental Pickups activates Restoration briefly.",
    source: "Featured Dungeon — Spire of the Watcher", sourceType: "Master Dungeon",
    synergies: ["Solar", "Elemental Pickups", "Healing"], notable: true,
  },
  {
    id: "great-hunt", name: "Great Hunt Set", element: "Kinetic",
    twoPiece: "Taken Rounds: Precision kills generate Heavy Ammo for the squad.",
    fourPiece: "Divine Armaments: Heavy ammo pickups briefly increase all weapon damage.",
    source: "Featured on Master Raid — Last Wish", sourceType: "Master Raid",
    synergies: ["Heavy Ammo", "Weapons"], notable: false,
  },
  {
    id: "exodus-down", name: "Exodus Down Set", element: "Arc",
    twoPiece: "Resourced Up: Finisher kills grant Special Ammo to the squad.",
    fourPiece: "Reappointed: Picking up Special Ammo briefly boosts weapon handling and reload.",
    source: "Destinations — Master Lost Sectors: Relic", sourceType: "Master Lost Sectors",
    synergies: ["Arc", "Finishers", "Special Ammo"], notable: true,
  },
  {
    id: "smoke-jumper", name: "Smoke Jumper Set", element: "Void",
    twoPiece: "One Up for the Tie: Defeating Weakened enemies grants class ability energy.",
    fourPiece: "I'm One for This: Activating your class ability Weakens nearby enemies.",
    source: "Vanguard — Focusing", sourceType: "Vanguard",
    synergies: ["Void", "Class Ability", "Disorient"], notable: false,
  },
  {
    id: "disaster-corps", name: "Disaster Corps Set", element: "Solar",
    twoPiece: "Pure Heart: Healing abilities restore more health and grant Radiant briefly.",
    fourPiece: "Magnificent Duty: Radiant kills extend Radiant and restore a portion of health.",
    source: "Crucible — Focusing", sourceType: "Crucible",
    synergies: ["Solar", "Healing", "Weapons"], notable: false,
  },
  {
    id: "apostates-blade", name: "Apostate's Blade Set", element: "Solar",
    twoPiece: "Debtor Detector: Melee kills with Solar have a chance to create a Solar Elemental Pickup.",
    fourPiece: "Melee Conviction: Picking up Solar Elemental Pickups enhances your next Solar melee.",
    source: "Featured Dungeon — Pit of Heresy", sourceType: "Master Dungeon",
    synergies: ["Solar", "Melee", "Elemental Pickups"], notable: true,
  },
  {
    id: "kentarch-3", name: "Kentarch 3 Set", element: "Arc",
    twoPiece: "Rightening Touch: Throwing Touch grenades leaves an Arc trail that damages enemies.",
    fourPiece: "Heightening Touch: Arc grenade kills grant a burst of class ability energy.",
    source: "Featured on Master Raid — Garden of Salvation", sourceType: "Master Raid",
    synergies: ["Arc", "Grenade", "Class Ability"], notable: true,
  },
  {
    id: "reverie-dawn", name: "Reverie Dawn Set", element: "Solar",
    twoPiece: "Wait for Protection: Activating Restoration increases armor against incoming damage.",
    fourPiece: "Veil Protection: Being healed by Restoration also briefly boosts weapon damage.",
    source: "Destinations — Master Lost Sectors: Dreaming City", sourceType: "Master Lost Sectors",
    synergies: ["Solar", "Healing", "Survivability"], notable: false,
  },
  {
    id: "ferropotent", name: "Ferropotent Set", element: "Void",
    twoPiece: "Rapid Flush: Finisher kills instantly reload your equipped weapon.",
    fourPiece: "Skull Thruster: Reloading after a finisher kill briefly boosts weapon damage.",
    source: "Vanguard — Focusing", sourceType: "Vanguard",
    synergies: ["Void", "Finishers", "Weapons"], notable: true,
  },
  {
    id: "wild-anthem", name: "Wild Anthem Set", element: "Arc",
    twoPiece: "Fanfare: Becoming Amplified also boosts your Grenade Launcher damage.",
    fourPiece: "Roar Harmony: Grenade Launcher kills extend Amplified duration.",
    source: "Crucible — Focusing", sourceType: "Crucible",
    synergies: ["Arc", "Grenade Launchers"], notable: false,
  },
  {
    id: "coda", name: "Coda Set", element: "Void",
    twoPiece: "Belores Polarity: Grenade kills grant a surge of melee energy.",
    fourPiece: "Belores Harmony: Melee kills briefly increase grenade damage.",
    source: "Featured Dungeon — Prophecy", sourceType: "Master Dungeon",
    synergies: ["Void", "Grenade", "Melee"], notable: true,
  },
  {
    id: "legacys-oath", name: "Legacy's Oath Set", element: "Kinetic",
    twoPiece: "Augmented Karma: Precision hits with Scout Rifles have a chance to create Orbs of Power.",
    fourPiece: "Augmented Destiny: Orbs of Power you create also grant a brief Scout Rifle damage boost.",
    source: "Featured on Master Raid — Deep Stone Crypt", sourceType: "Master Raid",
    synergies: ["Scout Rifles", "Orbs of Power"], notable: true,
  },
  {
    id: "dreambane", name: "Dreambane Set", element: "Void",
    twoPiece: "Nightmare's Power: Nightmare kills grant a brief burst of all ability energy.",
    fourPiece: "Nightmare Residue: Activating any ability leaves a Void field that weakens enemies.",
    source: "Destinations — Master Lost Sectors: Moon", sourceType: "Master Lost Sectors",
    synergies: ["Void", "All Abilities", "Disorient"], notable: false,
  },
  {
    id: "luminopotent", name: "Luminopotent Set", element: "Void",
    twoPiece: "Invo Overstock: Activating your Super generates Special Ammo for the fireteam.",
    fourPiece: "Blank and Chin: Picking up Special Ammo reduces your Super cooldown.",
    source: "Vanguard — Focusing", sourceType: "Vanguard",
    synergies: ["Void", "Super", "Special Ammo"], notable: true,
  },
  {
    id: "triumphal-anthem", name: "Triumphal Anthem Set", element: "Arc",
    twoPiece: "Scout in Last: Precision kills with Scout Rifles generate Orbs.",
    fourPiece: "Pursuit: Picking up Orbs of Power grants a burst of Arc ability energy.",
    source: "Crucible — Focusing", sourceType: "Crucible",
    synergies: ["Arc", "Scout Rifles", "Orbs of Power"], notable: false,
  },
  {
    id: "yearning-echo", name: "Yearning Echo Set", element: "Stasis",
    twoPiece: "Solid Good: Shattering a Frozen enemy generates a Stasis Elemental Pickup.",
    fourPiece: "Shivering Cliffside: Picking up Stasis Elemental Pickups extends the duration of Frost Armor.",
    source: "Featured Dungeon — Warlord's Ruin", sourceType: "Master Dungeon",
    synergies: ["Stasis", "Elemental Pickups", "Survivability"], notable: true,
  },
  {
    id: "atheons-memory", name: "Atheon's Memory Set", element: "Void",
    twoPiece: "Deliberate Breath: Void weapon kills extend the duration of Volatile rounds.",
    fourPiece: "Void's Sight: Volatile explosions create a Void detonation that weakens nearby enemies.",
    source: "Featured on Master Raid — Vault of Glass", sourceType: "Master Raid",
    synergies: ["Void", "Weapons", "Disorient"], notable: false,
  },
  {
    id: "crystocrene", name: "Crystocrene Set", element: "Stasis",
    twoPiece: "Revenge: Shattering Frozen enemies creates Stasis crystals that slow nearby enemies.",
    fourPiece: "Plus De Stress: Stasis crystals you create explode when destroyed, dealing extra damage.",
    source: "Destinations — Master Lost Sectors: Europa", sourceType: "Master Lost Sectors",
    synergies: ["Stasis", "Weapons"], notable: true,
  },
  {
    id: "bushido", name: "Bushido Set", element: "Void",
    twoPiece: "Itto: Sword kills extend the duration of your class ability and grant class ability energy.",
    fourPiece: "Sidestepping Force: Activating your class ability grants a brief Sword damage boost.",
    source: "Vanguard — Focusing", sourceType: "Vanguard",
    synergies: ["Void", "Swords", "Class Ability"], notable: false,
  },
  {
    id: "iron-panoply", name: "Iron Panoply Set", element: "Solar",
    twoPiece: "Highest Watch: Kills with Solar weapons near allies generate Orbs of Power for them.",
    fourPiece: "Iron Cavalcade: Picking up Orbs of Power grants a burst of Solar weapon damage.",
    source: "Iron Banner", sourceType: "Iron Banner",
    synergies: ["Solar", "Weapons", "Orbs of Power"], notable: false,
  },
  {
    id: "deep-explorer", name: "Deep Explorer Set", element: "Strand",
    twoPiece: "Blot Kilns: Unraveling rounds on enemies boost Glaive damage against them.",
    fourPiece: "Bioluminescence: Killing Unraveled enemies with a Glaive creates a Tangle.",
    source: "Featured on Master Dungeon — Spire of the Disciple", sourceType: "Master Dungeon",
    synergies: ["Strand", "Glaives"], notable: false,
  },
  {
    id: "resonant-fury", name: "Resonant Fury Set", element: "Strand",
    twoPiece: "Resonant Pitting: SMG precision kills Sever targets.",
    fourPiece: "Slighting Touch: Severed enemies take increased SMG damage.",
    source: "Featured on Master Raid — Root of Nightmares", sourceType: "Master Raid",
    synergies: ["Strand", "SMGs", "Disorient"], notable: false,
  },
  {
    id: "seventh-seraph", name: "Seventh Seraph Set", element: "Solar",
    twoPiece: "Seraph's Mark: Solar weapon kills have a chance to generate Warmind Cells.",
    fourPiece: "Seraph's Reprisal: Warmind Cells emit a burst of Solar energy when destroyed.",
    source: "Destinations — Master Lost Sectors: Cosmodrome", sourceType: "Master Lost Sectors",
    synergies: ["Solar", "Weapons", "Orbs of Power"], notable: true,
  },
  {
    id: "swordmaster", name: "Swordmaster Set", element: "Void",
    twoPiece: "Divine Tempo: Sword kills grant melee energy.",
    fourPiece: "Slower Tempo: Melee kills grant a burst of Sword damage.",
    source: "Vanguard — Focusing", sourceType: "Vanguard",
    synergies: ["Void", "Swords", "Melee"], notable: true,
  },
  {
    id: "iron-battalion", name: "Iron Battalion Set", element: "Solar",
    twoPiece: "Grizzly Skirmish: Machine Gun kills extend your Super energy duration.",
    fourPiece: "Scavengery Bread: Activating your Super grants a burst of Machine Gun damage.",
    source: "Iron Banner", sourceType: "Iron Banner",
    synergies: ["Solar", "Super", "Heavy Ammo"], notable: true,
  },
  {
    id: "tm-custom", name: "TM Custom Set", element: "Arc",
    twoPiece: "Diplomatic Thermite: Hand Cannon precision kills grant grenade energy.",
    fourPiece: "High Noon: Grenades create a Chain Lightning effect that bounces to nearby enemies.",
    source: "Featured on Master Dungeon — Spire of the Batterie", sourceType: "Master Dungeon",
    synergies: ["Arc", "Hand Cannons", "Grenade"], notable: false,
  },
  {
    id: "crotas-memory", name: "Crota's Memory Set", element: "Void",
    twoPiece: "Strength of Crota: Finisher kills grant Heavy Ammo to the fireteam.",
    fourPiece: "Power of the Hive: Heavy weapon kills grant Overshield to nearby allies.",
    source: "Featured on Master Raid — Crota's End", sourceType: "Master Raid",
    synergies: ["Void", "Finishers", "Heavy Ammo", "Survivability"], notable: false,
  },
  {
    id: "veritas", name: "Veritas Set", element: "Arc",
    twoPiece: "Laurel Transmissions: Arc precision kills create an Ionic Trace.",
    fourPiece: "Laurel Ether: Picking up Ionic Traces reduces all ability cooldowns briefly.",
    source: "Destinations — Master Lost Sectors: Throne World", sourceType: "Master Lost Sectors",
    synergies: ["Arc", "Elemental Pickups", "All Abilities"], notable: true,
  },
  {
    id: "eutechnology", name: "Eutechnology Set", element: "Arc",
    twoPiece: "Gift of the Ley Lines: Fusion Rifle kills generate Special Ammo.",
    fourPiece: "Technocrat's Foresight: Picking up Special Ammo boosts Fusion Rifle handling and damage.",
    source: "Vanguard — Focusing", sourceType: "Vanguard",
    synergies: ["Arc", "Fusion Rifles", "Special Ammo"], notable: true,
  },
  {
    id: "twofold-crown", name: "Twofold Crown Set", element: "Void",
    twoPiece: "Cloak and Fall: Defeating enemies while invisible generates Orbs of Power.",
    fourPiece: "Gift of Sight: Orbs of Power you collect extend the duration of invisibility.",
    source: "Trials of Osiris", sourceType: "Trials of Osiris",
    synergies: ["Void", "Orbs of Power"], notable: false,
  },
  {
    id: "taken-king", name: "Taken King Set", element: "Void",
    twoPiece: "The Damnancy: Void grenade kills grant Super energy.",
    fourPiece: "Lucent Swarm: Activating your Void Super creates a field that applies Volatile to enemies.",
    source: "Featured on Master Dungeon — Ghosts of the Deep", sourceType: "Master Dungeon",
    synergies: ["Void", "Grenade", "Super"], notable: true,
  },
  {
    id: "nezarecs-nightmares", name: "Nezarec's Nightmares Set", element: "Arc",
    twoPiece: "Bad Dreams: Arc ability kills generate Special Ammo.",
    fourPiece: "Unique Becomes: Picking up Special Ammo briefly increases Arc ability damage.",
    source: "Featured on Master Raid — Root of Nightmares", sourceType: "Master Raid",
    synergies: ["Arc", "All Abilities", "Special Ammo"], notable: true,
  },
  {
    id: "thunderhead", name: "Thunderhead Set", element: "Strand",
    twoPiece: "Cannon to Thrill: Rocket Launcher kills Suspend nearby enemies.",
    fourPiece: "Lethal Moan: Suspended enemies take increased Rocket Launcher damage.",
    source: "Master Lost Sectors: Exodus — Neomuna", sourceType: "Master Lost Sectors",
    synergies: ["Strand", "Rockets", "Disorient"], notable: true,
  },
  {
    id: "new-demonic", name: "New Demonic Set", element: "Void",
    twoPiece: "Feeds: Picking up Void Elemental Pickups grants melee energy.",
    fourPiece: "Birthright: Melee kills create a Void Elemental Pickup.",
    source: "Trials of Osiris", sourceType: "Trials of Osiris",
    synergies: ["Void", "Elemental Pickups", "Melee"], notable: false,
  },
  {
    id: "dark-age", name: "Dark Age Set", element: "Strand",
    twoPiece: "Strong Abilities: Ability kills with Strand create Threadlings.",
    fourPiece: "Healing Solution: Threadlings returning to you restore a portion of health.",
    source: "Featured on Master Dungeon — Warlord's Run", sourceType: "Master Dungeon",
    synergies: ["Strand", "All Abilities", "Healing"], notable: true,
  },
  {
    id: "oryxs-memory", name: "Oryx's Memory Set", element: "Arc",
    twoPiece: "The Damnancy's Will: Finisher kills create an Arc shockwave damaging nearby enemies.",
    fourPiece: "Accumulated Escape: Arc shockwaves have a chance to spawn Lightning Surge.",
    source: "Featured on Master Raid — King's Fall", sourceType: "Master Raid",
    synergies: ["Arc", "Finishers"], notable: true,
  },
  {
    id: "first-ascent", name: "First Ascent Set", element: "Strand",
    twoPiece: "Back Up: Strand weapon precision kills have a chance to Suspend the target.",
    fourPiece: "Back Up Again: Suspended enemies take bonus damage from all Strand sources.",
    source: "Master Lost Sectors — Neomuna/Pale Heart", sourceType: "Master Lost Sectors",
    synergies: ["Strand", "Weapons", "Disorient"], notable: false,
  },
  {
    id: "cruel-electrum", name: "Cruel Electrum Set", element: "Arc",
    twoPiece: "Primary Visitor: Arc weapon kills grant a stacking damage buff (max 3x).",
    fourPiece: "Primary Phantom: Maximum stacks of the buff also increase ability regeneration.",
    source: "Trials of Osiris", sourceType: "Trials of Osiris",
    synergies: ["Arc", "Weapons", "All Abilities"], notable: false,
  },
  {
    id: "spacewalk", name: "Spacewalk Set", element: "Void",
    twoPiece: "Augmented Survivor: Picking up Orbs of Power while at full Super energy grants Overshield.",
    fourPiece: "Incremental Survival: Overshield from this set also increases weapon reload speed.",
    source: "Featured on Master Dungeon — Spire's Host", sourceType: "Master Dungeon",
    synergies: ["Void", "Orbs of Power", "Survivability"], notable: false,
  },
  {
    id: "promised", name: "Promised Set", element: "Stasis",
    twoPiece: "Stable Resonance: Stasis ability kills reduce the cooldown of your next Stasis ability.",
    fourPiece: "Dissonant Reflection: Reducing cooldowns via this perk eventually triggers an automatic Stasis crystal burst.",
    source: "Featured on Master Raid — Salvation's Edge", sourceType: "Master Raid",
    synergies: ["Stasis", "All Abilities"], notable: false,
  },
  {
    id: "aion-adapter", name: "Aion Adapter Set", element: "Prismatic",
    twoPiece: "Pure Disruption: Ability kills with any element generate Orbs of Power.",
    fourPiece: "Fearless Assault: Collecting Orbs of Power grants stacking bonus damage across all elements.",
    source: "The Pale Heart — Focusing", sourceType: "Other",
    synergies: ["Prismatic", "All Abilities", "Orbs of Power"], notable: false,
  },
  {
    id: "cyberserpent-nul", name: "Cyberserpent Nul Set", element: "Void",
    twoPiece: "Bashful Wellness: Finisher kills restore Health to you and nearby allies.",
    fourPiece: "Wonderful Wellness: Restored health converts into temporary Overshield.",
    source: "Gambit", sourceType: "Gambit",
    synergies: ["Void", "Finishers", "Healing", "Survivability"], notable: true,
  },
  {
    id: "flain", name: "Flain Set", element: "Strand",
    twoPiece: "Tilt Together: Strand Tangles you create also Sever nearby enemies when they explode.",
    fourPiece: "Fast Put Together: Severed enemies have reduced resistance, taking more damage from all sources.",
    source: "Featured on Master Dungeon — Sundered Doctrine Echoes", sourceType: "Master Dungeon",
    synergies: ["Strand", "Weapons", "Disorient"], notable: true,
  },
  {
    id: "collective-psyche", name: "Collective Psyche Set", element: "Solar",
    twoPiece: "Dappler Effect: Solar ability kills create a Solar Elemental Pickup.",
    fourPiece: "Singular Effect: Collecting Solar Elemental Pickups briefly boosts Solar ability damage.",
    source: "Master Raid — Desert Perpetual", sourceType: "Master Raid",
    synergies: ["Solar", "All Abilities", "Elemental Pickups"], notable: true,
  },
  {
    id: "aion-renewal", name: "Aion Renewal Set", element: "Prismatic",
    twoPiece: "Force Cassette: Transcendence activation extends all active ability buffs.",
    fourPiece: "Damion Session: Killing enemies while Transcendent resets the duration of ability buffs.",
    source: "The Pale Heart — Focusing", sourceType: "Other",
    synergies: ["Prismatic", "Super", "All Abilities"], notable: false,
  },
  {
    id: "circuit", name: "Circuit Set", element: "Void",
    twoPiece: "Driving Up: Shotgun kills grant grenade energy.",
    fourPiece: "Dielectric Drill: Grenades create a short-range Void pulse that suppresses targets.",
    source: "Sparrow Racing", sourceType: "Sparrow Racing",
    synergies: ["Void", "Shotguns", "Grenade", "Disorient"], notable: true,
  },
  {
    id: "sage-protector", name: "Sage Protector Set", element: "Strand",
    twoPiece: "Combat Meditation: Melee kills extend the duration of your Super.",
    fourPiece: "Defensive Drill: Activating your Super creates a protective barrier that absorbs incoming damage.",
    source: "Solo Endgame — Master Raid", sourceType: "Master Raid",
    synergies: ["Strand", "Super", "Melee", "Survivability"], notable: true,
  },
  {
    id: "wayward-psyche", name: "Wayward Psyche Set", element: "Prismatic",
    twoPiece: "Special Stability: Picking up Special Ammo while Transcendent resets Transcendence cooldown.",
    fourPiece: "Departured Rifter: Reaching max Transcendence energy generates Special Ammo for the fireteam.",
    source: "Master Raid — Desert Perpetual", sourceType: "Master Raid",
    synergies: ["Prismatic", "Special Ammo", "Super"], notable: false,
  },
  {
    id: "thriving-survivor", name: "Thriving Survivor Set", element: "Strand",
    twoPiece: "Opening Act: Strand weapon kills on Suspended enemies generate Orbs of Power.",
    fourPiece: "Room Closing: Collecting Orbs of Power while near a Suspended enemy releases a Strand burst.",
    source: "Master Dungeon — Lancers Prestige", sourceType: "Master Dungeon",
    synergies: ["Strand", "Weapons", "Orbs of Power"], notable: true,
  },
  {
    id: "pantheos-resplendent", name: "Pantheos Resplendent Set", element: "Solar",
    twoPiece: "Well Pleased: Solar Supers grant Radiant to you and nearby allies on cast.",
    fourPiece: "Squared Order: Radiant allies deal bonus damage and generate Orbs of Power on kills.",
    source: "Featured Dungeon — Pantheon", sourceType: "Master Dungeon",
    synergies: ["Solar", "Super", "Weapons", "Orbs of Power"], notable: false,
  },
  {
    id: "shrewd-survivor", name: "Shrewd Survivor Set", element: "Strand",
    twoPiece: "Riffing Killers: Finisher kills on Strand-debuffed enemies generate Heavy Ammo.",
    fourPiece: "Ambushers: Heavy weapon kills on Strand-debuffed enemies grant ability energy.",
    source: "Master Dungeon — Lancers Prestige", sourceType: "Master Dungeon",
    synergies: ["Strand", "Finishers", "Heavy Ammo", "All Abilities"], notable: false,
  },
];

export const ALL_ELEMENTS = ["Solar", "Void", "Arc", "Stasis", "Strand", "Prismatic", "Kinetic"] as const;
export const ALL_SYNERGY_CATEGORIES = {
  "Damage Types": ["Solar", "Void", "Arc", "Stasis", "Strand", "Prismatic", "Kinetic"],
  "Abilities": ["Super", "Grenade", "Melee", "Class Ability", "All Abilities"],
  "Ammo & Pickups": ["Orbs of Power", "Elemental Pickups", "All Ammo", "Special Ammo", "Heavy Ammo", "Finishers"],
  "Utility": ["Healing", "Survivability", "Armor Charge", "Health Stat", "Weapon Stat", "Mobility", "Disorient", "Exhaust"],
  "Weapons": ["Weapons", "Swords", "Glaives", "Rockets", "Grenade Launchers", "Auto Rifles", "Sidearms", "Scout Rifles", "SMGs", "Hand Cannons", "Bows", "Fusion Rifles", "Linear Fusion Rifles", "Shotguns"],
} as const;
