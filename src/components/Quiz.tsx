import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QUESTIONS } from "../data/questions";
import type { GamerColorId } from "../data/types";

interface QuizProps {
  onComplete: (scores: Record<GamerColorId, number>) => void;
}

const EMPTY_SCORES: Record<GamerColorId, number> = {
  red: 0,
  blue: 0,
  orange: 0,
  purple: 0,
  yellow: 0,
  green: 0,
};

export default function Quiz({ onComplete }: QuizProps) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<GamerColorId, number>>({
    ...EMPTY_SCORES,
  });
  const [direction, setDirection] = useState(1);

  const question = QUESTIONS[step];
  const progress = ((step) / QUESTIONS.length) * 100;

  const handleAnswer = (type: GamerColorId) => {
    const next = { ...scores, [type]: scores[type] + 1 };
    setScores(next);
    setDirection(1);
    if (step + 1 >= QUESTIONS.length) {
      onComplete(next);
    } else {
      setTimeout(() => setStep((s) => s + 1), 180);
    }
  };

  const goBack = () => {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
  };

  return (
    <div className="min-h-screen w-full text-white flex flex-col">
      <div className="mx-auto w-full max-w-2xl px-6 pt-10 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={goBack}
            disabled={step === 0}
            className="text-white/40 hover:text-white disabled:opacity-0 transition-colors text-sm"
          >
            ← Back
          </button>
          <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-white"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-xs text-white/40 tabular-nums w-14 text-right">
            {step + 1} / {QUESTIONS.length}
          </span>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col"
          >
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-8">
              {question.prompt}
            </h2>
            <div className="flex flex-col gap-3 pb-16">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.type)}
                  className="group text-left rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 hover:bg-white/[0.09] hover:border-white/25 transition-all active:scale-[0.98]"
                >
                  <span className="text-sm sm:text-base text-white/85 group-hover:text-white">
                    {opt.text}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
