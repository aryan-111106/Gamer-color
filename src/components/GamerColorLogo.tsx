const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"];

export default function GamerColorLogo({ className = "" }: { className?: string }) {
  const text = "GAMER COLOR";
  let colorIdx = 0;
  return (
    <div className={className}>
      <p className="text-center text-sm font-black tracking-[0.25em]">
        {text.split("").map((ch, i) => {
          if (ch === " ") return <span key={i}> </span>;
          const c = COLORS[colorIdx % COLORS.length];
          colorIdx++;
          return (
            <span key={i} style={{ color: c }}>
              {ch}
            </span>
          );
        })}
      </p>
      <div className="mx-auto mt-1 flex items-center justify-center gap-1">
        {COLORS.map((c) => (
          <span key={c} className="h-1 w-4 rounded-full" style={{ backgroundColor: c }} />
        ))}
      </div>
    </div>
  );
}
