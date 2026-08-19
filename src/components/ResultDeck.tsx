import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import type { GamerType } from "../data/types";
import QuadrantChart from "./QuadrantChart";
import GamerColorLogo from "./GamerColorLogo";
import { cn } from "../utils/cn";

interface ResultDeckProps {
  type: GamerType;
  subtypeLabel: string;
  onRetake: () => void;
}

const CARD_COUNT = 5;

export default function ResultDeck({ type, subtypeLabel, onRetake }: ResultDeckProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [copied, setCopied] = useState(false);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((i) => Math.min(CARD_COUNT - 1, Math.max(0, i + delta)));
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) go(1);
    else if (info.offset.x > 80) go(-1);
  };

  const shareText = `I'm a ${type.name} Gamer — ${subtypeLabel} 🎮 Find your gamer color!`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ text: shareText });
        return;
      }
    } catch {
      /* fall through to clipboard */
    }
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center justify-center px-4 py-10 gap-6">
      <div className="relative flex items-center justify-center w-full max-w-md gap-3 sm:gap-6">
        <NavButton dir="left" onClick={() => go(-1)} disabled={index === 0} />

        <div className="relative w-full aspect-[3/4.6] max-w-[360px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: direction * 60, rotate: direction * 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: direction * -60, rotate: direction * -3 }}
              transition={{ duration: 0.28 }}
              className="absolute inset-0 rounded-[28px] border border-white/10 bg-[#111114] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing flex flex-col"
              style={{
                boxShadow: `0 20px 60px -20px ${type.hex}55, 0 0 0 1px rgba(255,255,255,0.05)`,
              }}
            >
              {renderCard(index, type, subtypeLabel, { copied, handleShare, onRetake, go })}
            </motion.div>
          </AnimatePresence>
        </div>

        <NavButton dir="right" onClick={() => go(1)} disabled={index === CARD_COUNT - 1} />
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: CARD_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/25",
            )}
          />
        ))}
      </div>
      <p className="text-white/30 text-xs">Swipe or use the arrows to see your full profile</p>
    </div>
  );
}

function NavButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/15 hover:text-white transition-all",
        disabled && "opacity-20 pointer-events-none",
      )}
      aria-label={dir === "left" ? "Previous card" : "Next card"}
    >
      {dir === "left" ? "←" : "→"}
    </button>
  );
}

interface CardActions {
  copied: boolean;
  handleShare: () => void;
  onRetake: () => void;
  go: (delta: number) => void;
}

function renderCard(
  index: number,
  type: GamerType,
  subtypeLabel: string,
  actions: CardActions,
) {
  switch (index) {
    case 0:
      return <CoverCard type={type} subtypeLabel={subtypeLabel} onNext={() => actions.go(1)} />;
    case 1:
      return <ChartCard type={type} />;
    case 2:
      return <ChasingCard type={type} />;
    case 3:
      return <GamesCard type={type} onShare={actions.handleShare} copied={actions.copied} />;
    default:
      return (
        <ShareCard
          type={type}
          subtypeLabel={subtypeLabel}
          onShare={actions.handleShare}
          copied={actions.copied}
          onRetake={actions.onRetake}
        />
      );
  }
}

function CardHeader({ type: _type }: { type: GamerType }) {
  return (
    <div className="pt-6 px-6">
      <GamerColorLogo />
      <div className="mt-4 h-px w-full bg-white/10" />
    </div>
  );
}

function CoverCard({
  type,
  subtypeLabel,
  onNext,
}: {
  type: GamerType;
  subtypeLabel: string;
  onNext: () => void;
}) {
  return (
    <div
      className="flex-1 min-h-0 flex flex-col"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${type.hex}33, transparent 60%)`,
      }}
    >
      <CardHeader type={type} />
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center px-6 text-center py-3">
        <div className="my-auto flex flex-col items-center text-center gap-3">
        <p className="text-xs tracking-[0.3em] text-white/50 uppercase">You are a</p>
        <h1 className="text-2xl font-black uppercase leading-tight" style={{ color: type.hex }}>
          {type.name} Gamer
        </h1>
        <div
          className="h-24 w-24 rounded-full flex items-center justify-center text-4xl border-4"
          style={{
            backgroundColor: `${type.hex}22`,
            borderColor: `${type.hex}66`,
            boxShadow: `0 0 40px 4px ${type.hex}44`,
          }}
        >
          {type.id === "red" && "⚔️"}
          {type.id === "blue" && "♟️"}
          {type.id === "orange" && "🎒"}
          {type.id === "purple" && "🧱"}
          {type.id === "yellow" && "🎉"}
          {type.id === "green" && "🧭"}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Your subtype</p>
          <p className="text-lg font-bold">{subtypeLabel}</p>
        </div>
        <p className="text-sm italic text-white/60 max-w-[24ch]">{type.tagline}</p>
        </div>
      </div>
      <button
        onClick={onNext}
        className="m-5 rounded-full py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95"
        style={{ backgroundColor: type.hex }}
      >
        Learn more about your color →
      </button>
    </div>
  );
}

function ChartCard({ type }: { type: GamerType }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <CardHeader type={type} />
      <div className="px-5 pt-4">
        <p className="text-xs tracking-[0.25em] text-white/40 uppercase text-center mb-2">
          Your Position
        </p>
        <QuadrantChart highlight={type.id} compact className="max-w-[170px]" />
      </div>
      <div className="px-6 py-4 flex-1 min-h-0 overflow-y-auto flex flex-col">
        <div className="my-auto flex flex-col justify-center">
          <p className="text-base font-bold mb-1" style={{ color: type.hex }}>
            {type.label}
          </p>
          <p className="text-sm text-white/65 leading-snug">{type.description}</p>
        </div>
      </div>
    </div>
  );
}

function ChasingCard({ type }: { type: GamerType }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col overflow-y-auto">
      <CardHeader type={type} />
      <div className="px-6 py-5">
        <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-4 text-center">
          What You're Chasing
        </p>
        <p className="italic text-white/75 text-center text-[15px] leading-relaxed mb-6">
          {type.chasing}
        </p>
        <div className="flex flex-col gap-4">
          {type.traits.map((t) => (
            <div key={t.title} className="flex gap-3 items-start">
              <div
                className="h-9 w-9 shrink-0 rounded-xl flex items-center justify-center text-base"
                style={{ backgroundColor: `${type.hex}22` }}
              >
                {t.icon}
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/45 mb-0.5">
                  {t.title}
                </p>
                <p className="text-sm text-white/75 leading-snug">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GamesCard({
  type,
  onShare,
  copied,
}: {
  type: GamerType;
  onShare: () => void;
  copied: boolean;
}) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <CardHeader type={type} />
      <div className="px-6 py-5 flex-1 min-h-0 overflow-y-auto">
        <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-2 text-center">
          Games You'll Probably Love
        </p>
        <p className="italic text-white/60 text-center text-sm mb-5 leading-relaxed">
          Your color, on a shelf. How many have you already played?
        </p>
        <ol className="flex flex-col gap-2.5">
          {type.games.map((g, i) => (
            <li key={g.title} className="flex items-baseline gap-3">
              <span
                className="text-xs font-bold w-4 shrink-0 text-right"
                style={{ color: type.hex }}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-white/90 leading-tight">{g.title}</p>
                <p className="text-xs text-white/40 leading-tight">{g.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <button
        onClick={onShare}
        className="m-5 rounded-full py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95"
        style={{ backgroundColor: type.hex }}
      >
        {copied ? "Copied to clipboard ✓" : "Share this card"}
      </button>
    </div>
  );
}

function ShareCard({
  type,
  subtypeLabel,
  onShare,
  copied,
  onRetake,
}: {
  type: GamerType;
  subtypeLabel: string;
  onShare: () => void;
  copied: boolean;
  onRetake: () => void;
}) {
  return (
    <div
      className="flex-1 min-h-0 flex flex-col"
      style={{
        background: `radial-gradient(circle at 50% 100%, ${type.hex}2e, transparent 60%)`,
      }}
    >
      <CardHeader type={type} />
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center px-6 text-center py-4">
        <div className="my-auto flex flex-col items-center text-center gap-3">
          <p className="text-xs tracking-[0.25em] text-white/40 uppercase">Your result</p>
          <p className="text-2xl font-black" style={{ color: type.hex }}>
            {type.name} · {type.label}
          </p>
          <p className="text-base font-semibold text-white/85">{subtypeLabel}</p>
          <p className="text-sm text-white/55 max-w-[26ch] leading-relaxed mt-1">
            Send this to a friend and see which color they land on.
          </p>
        </div>
      </div>
      <div className="m-5 flex flex-col gap-2.5">
        <button
          onClick={onShare}
          className="rounded-full py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95"
          style={{ backgroundColor: type.hex }}
        >
          {copied ? "Copied to clipboard ✓" : "Share your result"}
        </button>
        <button
          onClick={onRetake}
          className="rounded-full py-3.5 text-sm font-bold border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors"
        >
          Retake the quiz
        </button>
      </div>
    </div>
  );
}
