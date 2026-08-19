import { motion } from "framer-motion";
import QuadrantChart from "./QuadrantChart";
import { GAMER_TYPE_LIST } from "../data/gamerTypes";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-24 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-white/60">
            🎮 A quiz for people who game
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
            Which{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #a855f7)",
              }}
            >
              Gamer Color
            </span>{" "}
            are you?
          </h1>
          <p className="max-w-xl text-white/60 text-base sm:text-lg leading-relaxed">
            8 quick questions. No wrong answers. Find out which of the six gamer
            colors matches how you actually play — and get a personalized stack
            of games to add to your backlog.
          </p>
          <button
            onClick={onStart}
            className="mt-2 group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-transform hover:scale-105 active:scale-95"
          >
            Take the quiz
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <p className="text-xs text-white/35 tracking-wide">Takes about 2 minutes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 sm:mt-20"
        >
          <QuadrantChart />
        </motion.div>

        <div className="mt-20">
          <h2 className="text-center text-sm tracking-[0.3em] uppercase text-white/40 mb-8">
            The Six Colors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {GAMER_TYPE_LIST.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-3"
              >
                <div
                  className="h-9 w-9 rounded-full border-2 border-black/40"
                  style={{ backgroundColor: t.hex, boxShadow: `0 0 16px 0 ${t.hex}66` }}
                />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-white/45">
                    {t.label}
                  </p>
                </div>
                <p className="text-sm text-white/55 leading-snug">{t.tagline}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={onStart}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/80 hover:text-white hover:border-white/40 transition-colors"
          >
            Discover your gamer color →
          </button>
        </div>
      </div>
    </div>
  );
}
