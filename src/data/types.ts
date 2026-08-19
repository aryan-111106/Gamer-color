export type GamerColorId =
  | "red"
  | "blue"
  | "orange"
  | "purple"
  | "yellow"
  | "green";

export interface Trait {
  icon: string;
  title: string;
  description: string;
}

export interface GamerType {
  id: GamerColorId;
  name: string;
  label: string; // e.g. COMPETITOR
  hex: string;
  hexSoft: string;
  gradient: string;
  tagline: string;
  description: string;
  chasing: string;
  traits: Trait[];
  games: { title: string; note: string }[];
  position: { row: "top" | "mid" | "bottom"; col: "left" | "right" };
}

export interface QuizOption {
  text: string;
  type: GamerColorId;
}

export interface QuizQuestion {
  id: number;
  prompt: string;
  options: QuizOption[];
}
