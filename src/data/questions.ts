import type { QuizQuestion } from "./types";

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    prompt: "It's Friday night and you finally have a few hours to game. What are you doing?",
    options: [
      { text: "Queuing ranked. Tonight's the night I climb.", type: "red" },
      { text: "Opening a strategy game I've been theory-crafting for days.", type: "blue" },
      { text: "Grinding for the one rare drop I still don't have.", type: "orange" },
      { text: "Booting up a sandbox to build something ridiculous.", type: "purple" },
      { text: "Hopping on a call to game with friends, doesn't matter what.", type: "yellow" },
      { text: "Loading an open-world save just to wander for a while.", type: "green" },
    ],
  },
  {
    id: 2,
    prompt: "A new game just dropped. What's the first thing you check?",
    options: [
      { text: "The competitive scene and ranked modes.", type: "red" },
      { text: "The build paths and how deep the systems go.", type: "blue" },
      { text: "The collectibles, achievements, and completion list.", type: "orange" },
      { text: "The creative tools and how much you can customize.", type: "purple" },
      { text: "Whether my friends are already playing it.", type: "yellow" },
      { text: "The size of the map and how much there is to find.", type: "green" },
    ],
  },
  {
    id: 3,
    prompt: "Your proudest gaming moment involves...",
    options: [
      { text: "A 1v5 clutch that had the whole lobby typing 'gg'.", type: "red" },
      { text: "Solving a build or puzzle no guide had figured out yet.", type: "blue" },
      { text: "Hitting 100% completion on a massive game.", type: "orange" },
      { text: "Something you built that other players asked to visit.", type: "purple" },
      { text: "A night of games with friends you still talk about.", type: "yellow" },
      { text: "Finding a secret area completely by accident.", type: "green" },
    ],
  },
  {
    id: 4,
    prompt: "What's your biggest gaming pet peeve?",
    options: [
      { text: "Throwing a game you should've easily won.", type: "red" },
      { text: "Randomness that overrides skill and planning.", type: "blue" },
      { text: "Missable content with no way to go back for it.", type: "orange" },
      { text: "Games that don't let you customize or express anything.", type: "purple" },
      { text: "Playing something great with nobody to share it with.", type: "yellow" },
      { text: "Being funneled down a hallway with no room to wander.", type: "green" },
    ],
  },
  {
    id: 5,
    prompt: "Pick a genre you could play forever.",
    options: [
      { text: "Competitive shooters or fighting games.", type: "red" },
      { text: "Strategy games, tactics, or deckbuilders.", type: "blue" },
      { text: "Looter RPGs or collect-em-up games.", type: "orange" },
      { text: "Sandbox, city-builders, or life sims.", type: "purple" },
      { text: "Party games or co-op adventures.", type: "yellow" },
      { text: "Open-world RPGs or survival exploration.", type: "green" },
    ],
  },
  {
    id: 6,
    prompt: "How do you feel about a game's story and lore?",
    options: [
      { text: "Skip to gameplay, I'm here to compete.", type: "red" },
      { text: "I care more about systems, but a good structure is nice.", type: "blue" },
      { text: "I'll read every codex entry to unlock full lore completion.", type: "orange" },
      { text: "I love lore that inspires my own creations.", type: "purple" },
      { text: "I mostly experience it by talking about it with friends.", type: "yellow" },
      { text: "I'll stop mid-mission just to read an item description.", type: "green" },
    ],
  },
  {
    id: 7,
    prompt: "Your friends would describe your gaming style as...",
    options: [
      { text: "Intense. You want to win more than anyone in the room.", type: "red" },
      { text: "Calculated. You always have a plan.", type: "blue" },
      { text: "Thorough. Nothing gets left unfinished.", type: "orange" },
      { text: "Imaginative. You always build something unexpected.", type: "purple" },
      { text: "The glue. Games are better because you're there.", type: "yellow" },
      { text: "Curious. You wander off to go look at something shiny.", type: "green" },
    ],
  },
  {
    id: 8,
    prompt: "Choose a reward that would make you happiest in a game.",
    options: [
      { text: "A #1 rank and a shiny leaderboard badge.", type: "red" },
      { text: "A perfectly optimized, unbeatable build.", type: "blue" },
      { text: "A rare item that completes your whole collection.", type: "orange" },
      { text: "A new tool that unlocks fresh creative options.", type: "purple" },
      { text: "A co-op achievement you could only get with friends.", type: "yellow" },
      { text: "A hidden area or secret ending nobody told you about.", type: "green" },
    ],
  },
];
