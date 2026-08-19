import type { GamerType, GamerColorId } from "./types";

export const GAMER_TYPES: Record<GamerColorId, GamerType> = {
  red: {
    id: "red",
    name: "Red",
    label: "The Competitor",
    hex: "#ef4444",
    hexSoft: "#7f1d1d",
    gradient: "from-red-500 to-rose-700",
    tagline: "You play to win. Every match, every time.",
    description:
      "Red gamers are wired for competition. Leaderboards aren't background noise, they're the whole point. You don't just want to finish the game, you want to be the best one playing it.",
    chasing:
      "Red gamers chase the feeling of victory. What matters most isn't just winning, it's knowing you earned it against someone who almost had you.",
    traits: [
      {
        icon: "⚔️",
        title: "How You Play",
        description:
          "You queue up to climb, not to chill. Ranked ladders, tournaments and rivalries get your heart rate up in the best way.",
      },
      {
        icon: "🔥",
        title: "What You Value",
        description:
          "Skill, speed, and the thrill of a clutch play. You measure a game by how hard it makes you sweat.",
      },
      {
        icon: "🏆",
        title: "Your Superpower",
        description:
          "Under pressure you get sharper, not shakier. Comebacks are basically your love language.",
      },
    ],
    games: [
      { title: "Valorant", note: "Precision aim, ranked grind" },
      { title: "League of Legends", note: "Climb or nothing" },
      { title: "Street Fighter 6", note: "Read your opponent, punish everything" },
      { title: "Counter-Strike 2", note: "The purest competitive test" },
      { title: "Rocket League", note: "Aerial clutches, tiny margins" },
      { title: "Apex Legends", note: "Fast, brutal, no mercy" },
      { title: "Tekken 8", note: "Frame data is scripture" },
      { title: "Overwatch 2", note: "Team fights you refuse to lose" },
      { title: "Call of Duty: Warzone", note: "Last squad standing" },
      { title: "Super Smash Bros. Ultimate", note: "Couch rivalries, forever" },
    ],
    position: { row: "mid", col: "left" },
  },
  blue: {
    id: "blue",
    name: "Blue",
    label: "The Strategist",
    hex: "#3b82f6",
    hexSoft: "#1e3a8a",
    gradient: "from-blue-500 to-indigo-700",
    tagline: "You read the whole board before you make a move.",
    description:
      "Blue gamers think in systems. You're happiest untangling a mechanic, min-maxing a build, or finding the line of play nobody else saw coming. Patience beats panic, every single time.",
    chasing:
      "Blue gamers chase the feeling of mastery. What matters most is understanding a system so completely that outcomes stop feeling like luck.",
    traits: [
      {
        icon: "♟️",
        title: "How You Play",
        description:
          "You read the whole board before you make a move. Ten seconds of thinking beats ten fast, wrong ones.",
      },
      {
        icon: "🧠",
        title: "What You Value",
        description:
          "Systems, math, and the perfect build. A game's depth matters more to you than its graphics.",
      },
      {
        icon: "📈",
        title: "Your Superpower",
        description:
          "You spot the meta before the patch notes do, and you're already three moves ahead of everyone else.",
      },
    ],
    games: [
      { title: "Civilization VI", note: "One more turn, forever" },
      { title: "Baldur's Gate 3", note: "Every build is a puzzle" },
      { title: "XCOM 2", note: "Plan for the worst, always" },
      { title: "Slay the Spire", note: "Deck optimization, run after run" },
      { title: "StarCraft II", note: "Economy, timing, execution" },
      { title: "Into the Breach", note: "Perfect information, perfect plays" },
      { title: "Total War: Warhammer III", note: "Grand strategy, bigger armies" },
      { title: "Advance Wars", note: "Tidy tactics, tight maps" },
      { title: "Frostpunk", note: "Every decision has a cost" },
      { title: "Chess.com", note: "The original strategy game" },
    ],
    position: { row: "mid", col: "right" },
  },
  orange: {
    id: "orange",
    name: "Orange",
    label: "The Collector",
    hex: "#f97316",
    hexSoft: "#7c2d12",
    gradient: "from-orange-400 to-amber-600",
    tagline: "Side quest? Yes. Every side quest? Also yes.",
    description:
      "Orange gamers can't leave a stone unturned. Completion percentage, shiny drop rates, achievement lists — if there's a bar that can fill up, you will fill it. All the way. No exceptions.",
    chasing:
      "Orange gamers chase the feeling of completion. What matters most is knowing there's nothing left on the map, in the menu, or in the world you haven't touched.",
    traits: [
      {
        icon: "🎒",
        title: "How You Play",
        description:
          "100% completion isn't a bonus goal, it's the only real ending. You'll clear every checklist before the credits roll.",
      },
      {
        icon: "💎",
        title: "What You Value",
        description:
          "Progress you can see: bars filling up, shinies unlocked, a trophy shelf that proves it all happened.",
      },
      {
        icon: "🗂️",
        title: "Your Superpower",
        description:
          "You have the patience of a saint and the memory of a spreadsheet. Nothing gets left behind, ever.",
      },
    ],
    games: [
      { title: "Pokémon Scarlet & Violet", note: "Gotta catch every last one" },
      { title: "Stardew Valley", note: "Museum bundles, fully donated" },
      { title: "Animal Crossing: New Horizons", note: "Full catalog, no exceptions" },
      { title: "Destiny 2", note: "Loot chase never really ends" },
      { title: "Diablo IV", note: "One more legendary drop" },
      { title: "Monster Hunter: World", note: "Full armor sets, every monster" },
      { title: "Hades", note: "Every weapon aspect, maxed" },
      { title: "Marvel Snap", note: "Full card collection incoming" },
      { title: "Genshin Impact", note: "Daily commissions, always done" },
      { title: "Cookie Clicker", note: "Numbers go up, you watch them" },
    ],
    position: { row: "top", col: "left" },
  },
  purple: {
    id: "purple",
    name: "Purple",
    label: "The Creator",
    hex: "#a855f7",
    hexSoft: "#4c1d95",
    gradient: "from-purple-500 to-fuchsia-700",
    tagline: "You'd rather build the castle than storm it.",
    description:
      "Purple gamers see a pile of blocks and picture a cathedral. Sandbox mode is your happy place — the game is just a set of tools, and the real fun starts when you start making something of your own.",
    chasing:
      "Purple gamers chase the feeling of creation. What matters most is turning an empty world into something that didn't exist before you touched it.",
    traits: [
      {
        icon: "🧱",
        title: "How You Play",
        description:
          "Sandbox mode is your happy place. You'd rather design the level than speedrun it.",
      },
      {
        icon: "🎨",
        title: "What You Value",
        description:
          "Tools, freedom, and blank canvases. The best games are the ones that let you make something new.",
      },
      {
        icon: "🏗️",
        title: "Your Superpower",
        description:
          "You see a pile of blocks and picture a cathedral. Other players just see your builds and ask 'how?'",
      },
    ],
    games: [
      { title: "Minecraft", note: "Infinite canvas, infinite time" },
      { title: "The Sims 4", note: "Build the house, then the drama" },
      { title: "Roblox Studio", note: "Making the game, not just playing it" },
      { title: "Cities: Skylines", note: "Zoning is a love language" },
      { title: "Terraria", note: "Dig, build, decorate, repeat" },
      { title: "Garry's Mod", note: "Chaos, but you made the chaos" },
      { title: "Kerbal Space Program", note: "Engineering by explosion" },
      { title: "Dreams", note: "A whole studio in a controller" },
      { title: "LittleBigPlanet", note: "Levels made for other people" },
      { title: "Besiege", note: "Contraptions nobody asked for" },
    ],
    position: { row: "top", col: "right" },
  },
  yellow: {
    id: "yellow",
    name: "Yellow",
    label: "The Socializer",
    hex: "#eab308",
    hexSoft: "#713f12",
    gradient: "from-yellow-400 to-amber-500",
    tagline: "It's better with a squad on voice chat.",
    description:
      "Yellow gamers play for the people, not just the points. A mediocre game with the right friends beats a masterpiece played alone. You're the reason the group chat never dies.",
    chasing:
      "Yellow gamers chase the feeling of connection. What matters most is the people in the room with you, not just the score on the screen.",
    traits: [
      {
        icon: "🎤",
        title: "How You Play",
        description:
          "Solo queue is fine, but it's better with a squad on voice chat and someone yelling with laughter.",
      },
      {
        icon: "💛",
        title: "What You Value",
        description:
          "Inside jokes, party chat chaos, and games that are more fun because someone else is there.",
      },
      {
        icon: "🎉",
        title: "Your Superpower",
        description:
          "You could turn a spreadsheet into a party. You're the reason the group finally shows up on time.",
      },
    ],
    games: [
      { title: "Among Us", note: "Trust nobody, love everybody" },
      { title: "Overcooked! 2", note: "Friendships tested, orders burned" },
      { title: "Jackbox Party Pack", note: "One controller, whole room laughing" },
      { title: "It Takes Two", note: "Co-op or it doesn't count" },
      { title: "Fall Guys", note: "Chaos with your best friends" },
      { title: "Phasmophobia", note: "Screaming together, on comms" },
      { title: "Human: Fall Flat", note: "Physics comedy, best in a group" },
      { title: "Mario Kart 8 Deluxe", note: "Couch rivalries stay forever" },
      { title: "Valheim", note: "Building a base with the crew" },
      { title: "Fortnite", note: "Squad up, drop in" },
    ],
    position: { row: "bottom", col: "left" },
  },
  green: {
    id: "green",
    name: "Green",
    label: "The Explorer",
    hex: "#22c55e",
    hexSoft: "#14532d",
    gradient: "from-green-500 to-emerald-700",
    tagline: "Why fast travel when you could find something instead?",
    description:
      "Green gamers wander. Fast travel is a last resort, not a first instinct, because the whole point is finding the thing the game never told you was there. Big worlds were basically made for you.",
    chasing:
      "Green gamers chase the feeling of wonder. What matters most is discovering something the game never explicitly told you to look for.",
    traits: [
      {
        icon: "🧭",
        title: "How You Play",
        description:
          "Why fast travel when you could walk the long way and find something nobody told you about?",
      },
      {
        icon: "🌌",
        title: "What You Value",
        description:
          "Mystery, scale, and worlds that reward curiosity over efficiency. Getting lost is the goal, not the mistake.",
      },
      {
        icon: "🔎",
        title: "Your Superpower",
        description:
          "You remember lore that NPCs themselves forgot they wrote. If it's hidden, you will eventually find it.",
      },
    ],
    games: [
      { title: "The Legend of Zelda: Breath of the Wild", note: "That hill is calling you" },
      { title: "Elden Ring", note: "No map marker, no problem" },
      { title: "Red Dead Redemption 2", note: "Slow travel, on purpose" },
      { title: "No Man's Sky", note: "Infinite horizons, literally" },
      { title: "Outer Wilds", note: "Curiosity is the whole game" },
      { title: "Subnautica", note: "What's down there? You'll find out" },
      { title: "The Witcher 3", note: "Every road leads somewhere" },
      { title: "Horizon Forbidden West", note: "Vistas worth the detour" },
      { title: "Journey", note: "Wonder, wordlessly" },
      { title: "Death Stranding", note: "The walk is the point" },
    ],
    position: { row: "bottom", col: "right" },
  },
};

export const GAMER_TYPE_LIST = Object.values(GAMER_TYPES);

// Adjective applied to the primary type based on the secondary-highest score,
// used to build a more specific "subtype" name, e.g. "The Reflective Green".
export const SECONDARY_ADJECTIVE: Record<GamerColorId, string> = {
  red: "Fierce",
  blue: "Reflective",
  orange: "Meticulous",
  purple: "Visionary",
  yellow: "Social",
  green: "Curious",
};
