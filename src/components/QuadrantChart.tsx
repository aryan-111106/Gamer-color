import { GAMER_TYPE_LIST } from "../data/gamerTypes";
import type { GamerColorId } from "../data/types";
import { cn } from "../utils/cn";

const ROW_Y: Record<string, string> = {
  top: "18%",
  mid: "50%",
  bottom: "82%",
};

const COL_X: Record<string, string> = {
  left: "26%",
  right: "74%",
};

interface QuadrantChartProps {
  highlight?: GamerColorId;
  className?: string;
  compact?: boolean;
  interactive?: boolean;
  onSelect?: (id: GamerColorId) => void;
}

export default function QuadrantChart({
  highlight,
  className,
  compact = false,
  interactive = false,
  onSelect,
}: QuadrantChartProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-md mx-auto aspect-square rounded-3xl border border-white/10 bg-black/40",
        className,
      )}
    >
      {/* axis lines */}
      <div className="absolute left-1/2 top-[8%] bottom-[8%] w-px -translate-x-1/2 bg-white/15" />
      <div className="absolute top-1/2 left-[6%] right-[6%] h-px -translate-y-1/2 bg-white/15" />

      {/* axis labels */}
      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs tracking-[0.2em] text-white/50 font-semibold">
        ARCHITECT
      </span>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs tracking-[0.2em] text-white/50 font-semibold">
        ADVENTURER
      </span>
      <span
        className={cn(
          "absolute top-1/2 -translate-y-1/2 text-[10px] sm:text-xs tracking-[0.2em] text-white/50 font-semibold",
          compact
            ? "left-0.5 [writing-mode:vertical-lr] tracking-[0.3em]"
            : "left-2",
        )}
      >
        HEART
      </span>
      <span
        className={cn(
          "absolute top-1/2 -translate-y-1/2 text-[10px] sm:text-xs tracking-[0.2em] text-white/50 font-semibold",
          compact
            ? "right-0.5 [writing-mode:vertical-rl] tracking-[0.3em]"
            : "right-2",
        )}
      >
        HEAD
      </span>

      {GAMER_TYPE_LIST.map((t) => {
        const isActive = highlight === t.id;
        const dim = highlight && !isActive;
        return (
          <button
            key={t.id}
            type="button"
            disabled={!interactive}
            onClick={() => onSelect?.(t.id)}
            style={{
              top: ROW_Y[t.position.row],
              left: COL_X[t.position.col],
            }}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 group",
              interactive && "cursor-pointer",
              !interactive && "cursor-default",
            )}
          >
            <span
              className={cn(
                "rounded-full shadow-lg transition-all duration-300 border-2 border-black/40",
                compact ? "h-8 w-8 sm:h-10 sm:w-10" : "h-11 w-11 sm:h-16 sm:w-16",
                isActive && "scale-125 ring-4 ring-white/30",
                dim && "opacity-25 scale-90",
                interactive && "group-hover:scale-110",
              )}
              style={{
                backgroundColor: t.hex,
                boxShadow: isActive ? `0 0 30px 6px ${t.hex}88` : `0 0 12px 0 ${t.hex}55`,
              }}
            />
            {!compact && (
              <div className={cn("text-center transition-opacity", dim && "opacity-30")}>
                <p className="text-[11px] sm:text-sm font-bold text-white leading-tight">
                  {t.name}
                </p>
                <p className="text-[9px] sm:text-[11px] tracking-wider text-white/50 uppercase leading-tight">
                  {t.label.replace("The ", "")}
                </p>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
