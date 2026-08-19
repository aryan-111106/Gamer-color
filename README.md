# 🎮 Gamer Color — Personality Quiz & Discovery Deck

An interactive, sleek web application that helps players discover their **Gamer Color** personality archetype, identify what they truly chase in gaming, and receive a curated stack of video game recommendations tailored to their playstyle.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Overview

The **Gamer Color Personality Quiz** is an 8-question assessment based on a 2D coordinate gaming motivation model (**Heart vs. Head** on the X-axis and **Architect vs. Adventurer** on the Y-axis).

Upon completing the quiz, players unlock a mobile-first, swipeable **Result Deck** revealing:
- **Primary Gamer Color Archetype** and dynamic **Subtype** (derived from secondary traits).
- **Quadrant Chart Positioning** on the gamer motivation matrix.
- **Core Motivations & Superpowers** ("What You're Chasing").
- **Top 10 Curated Game Recommendations** matching their profile.
- **Instant Result Sharing** (Native Web Share API + Clipboard copy).

---

## 🎨 The Six Gamer Colors

| Color | Archetype | Motivation / Tagline | Quadrant Position | Key Examples |
| :--- | :--- | :--- | :--- | :--- |
| 🔴 **Red** | **The Competitor** | *"You play to win. Every match, every time."* | Mid &bull; Heart | *Valorant, CS2, Street Fighter 6, Rocket League* |
| 🔵 **Blue** | **The Strategist** | *"You read the whole board before you make a move."* | Mid &bull; Head | *Civilization VI, Baldur's Gate 3, Slay the Spire, XCOM 2* |
| 🟠 **Orange** | **The Collector** | *"Side quest? Yes. Every side quest? Also yes."* | Architect &bull; Heart | *Pokémon, Stardew Valley, Destiny 2, Animal Crossing* |
| 🟣 **Purple** | **The Creator** | *"You'd rather build the castle than storm it."* | Architect &bull; Head | *Minecraft, The Sims 4, Cities: Skylines, Terraria* |
| 🟡 **Yellow** | **The Socializer** | *"It's better with a squad on voice chat."* | Adventurer &bull; Heart | *Among Us, Overcooked! 2, It Takes Two, Jackbox* |
| 🟢 **Green** | **The Explorer** | *"Why fast travel when you could find something instead?"* | Adventurer &bull; Head | *Zelda: Tears/BotW, Elden Ring, Outer Wilds, Subnautica* |

---

## 📐 The Motivation Matrix (Quadrant Model)

The app maps gamer psychology across two primary dimensions:

```
                      ARCHITECT (Systems & Building)
                                  ▲
            🟠 Orange (Collector) │ 🟣 Purple (Creator)
                                  │
  HEART ──────────────────────────┼────────────────────────── HEAD
  (Emotion / Action)              │              (Logic / Theory)
            🔴 Red (Competitor)   │ 🔵 Blue (Strategist)
                                  │
            🟡 Yellow (Socializer)│ 🟢 Green (Explorer)
                                  ▼
                      ADVENTURER (World & Discovery)
```

- **Dynamic Subtypes**: The scoring engine evaluates both primary and secondary color affinity to craft customized titles like *"The Fierce Competitor"*, *"The Curious Explorer"*, or *"The Pure Blue"*.

---

## 🚀 Features

- ⚡ **8-Question Focused Assessment**: Fast, engaging questions covering play habits, pet peeves, pride moments, and preferred rewards.
- 📱 **Swipeable Framer Motion Result Deck**: Touch/drag swipe gestures on mobile and navigation buttons on desktop to flip through 5 distinct result cards:
  1. **Cover Card**: Primary archetype, subtype, badge, and custom color glow.
  2. **Position Card**: Compact quadrant chart showing exact coordinates on the gamer spectrum.
  3. **Chasing Card**: Breakdown of playstyle, values, and player superpowers.
  4. **Games Card**: 10 curated game recommendations with contextual play notes.
  5. **Share Card**: Social sharing card with one-click sharing or retake quiz options.
- 🌐 **Web Share & Clipboard Integration**: Quick link and text sharing across Discord, Twitter/X, WhatsApp, and messaging apps.
- 📦 **Single-File Bundling Ready**: Powered by `vite-plugin-singlefile` for easy distribution and offline hosting.
- 🎨 **Modern Dark Aesthetic**: Tailwind CSS v4, custom ambient radial gradients, and typography using *Space Grotesk* and *Inter*.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animation & Gestures**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Bundler Plugins**: `@vitejs/plugin-react`, `vite-plugin-singlefile`
- **Class Utilities**: `clsx`, `tailwind-merge`

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (or `yarn` / `pnpm`)

### Installation

1. **Clone or navigate to the repository directory:**
   ```bash
   cd gamer-color-personality-app-v1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server with hot module replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Compile and bundle the application:

```bash
npm run build
```

The output will be generated in the `dist/` directory (bundled into a single, standalone distribution file).

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```
gamer-color-personality-app-v1/
├── index.html                # Main HTML entry point & font preloading
├── package.json              # Scripts and project dependencies
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration with Tailwind & Singlefile plugins
├── src/
│   ├── main.tsx              # Application bootstrap
│   ├── App.tsx               # Root component & stage orchestrator (Landing -> Quiz -> Result)
│   ├── index.css             # Global Tailwind v4 styles & typography configuration
│   ├── components/
│   │   ├── GamerColorLogo.tsx  # Multi-color brand logo component
│   │   ├── Landing.tsx         # Welcome hero section & color overview grid
│   │   ├── QuadrantChart.tsx   # Interactive 2D coordinate motivation chart
│   │   ├── Quiz.tsx            # Animated 8-step question runner with progress indicator
│   │   └── ResultDeck.tsx      # Swipeable 5-card result showcase with Framer Motion
│   ├── data/
│   │   ├── gamerTypes.ts       # Full profile data, traits, hex colors, and game lists
│   │   ├── questions.ts        # Quiz question prompts and scoring mappings
│   │   └── types.ts            # TypeScript interfaces & types (GamerType, QuizQuestion, etc.)
│   └── utils/
│       └── cn.ts               # Class name merging utility (clsx + tailwind-merge)
```

---

## ⚙️ Customization

- **Add or Modify Questions**: Edit [src/data/questions.ts](file:///d:/gamer-color-personality-app-v1/src/data/questions.ts) to adjust prompts, answer choices, or scoring weights.
- **Update Archetypes & Games**: Edit [src/data/gamerTypes.ts](file:///d:/gamer-color-personality-app-v1/src/data/gamerTypes.ts) to update descriptions, superpowers, color hexes, or recommended game titles.
- **Chart Adjustments**: Customize coordinates or axis labels in [src/components/QuadrantChart.tsx](file:///d:/gamer-color-personality-app-v1/src/components/QuadrantChart.tsx).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
