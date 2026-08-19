import { useState } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import ResultDeck from "./components/ResultDeck";
import { GAMER_TYPES, SECONDARY_ADJECTIVE } from "./data/gamerTypes";
import type { GamerColorId } from "./data/types";

type Stage = "landing" | "quiz" | "result";

export default function App() {
  const [stage, setStage] = useState<Stage>("landing");
  const [resultId, setResultId] = useState<GamerColorId>("green");
  const [subtypeLabel, setSubtypeLabel] = useState<string>("The Explorer");

  const handleComplete = (scores: Record<GamerColorId, number>) => {
    const sorted = (Object.entries(scores) as [GamerColorId, number][]).sort(
      (a, b) => b[1] - a[1],
    );
    const primary = sorted[0][0];
    const secondary = sorted[1][0];
    const primaryType = GAMER_TYPES[primary];

    const label =
      primary === secondary || sorted[1][1] === 0
        ? `The Pure ${primaryType.name}`
        : `The ${SECONDARY_ADJECTIVE[secondary]} ${primaryType.name}`;

    setResultId(primary);
    setSubtypeLabel(label);
    setStage("result");
  };

  const resultType = GAMER_TYPES[resultId];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0c] relative">
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(239,68,68,0.12), transparent 35%), radial-gradient(circle at 85% 15%, rgba(168,85,247,0.12), transparent 35%), radial-gradient(circle at 20% 85%, rgba(234,179,8,0.1), transparent 35%), radial-gradient(circle at 85% 80%, rgba(34,197,94,0.12), transparent 35%)",
        }}
      />
      <div className="relative z-10">
        {stage === "landing" && <Landing onStart={() => setStage("quiz")} />}
        {stage === "quiz" && <Quiz onComplete={handleComplete} />}
        {stage === "result" && (
          <ResultDeck
            type={resultType}
            subtypeLabel={subtypeLabel}
            onRetake={() => setStage("landing")}
          />
        )}
      </div>
    </div>
  );
}
