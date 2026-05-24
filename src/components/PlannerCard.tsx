import type { PlannerItem } from "../types";

interface PlannerCardProps {
  item: PlannerItem;
}

const statusStyles = {
  Draft: "border-slate-400/20 bg-slate-400/10 text-slate-200",
  Scheduled: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  Posted: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
};

export function PlannerCard({ item }: PlannerCardProps) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.06]">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            {item.day}
          </p>
          <span className="text-xs text-slate-500">{item.time}</span>
        </div>
        <h3 className="mt-2 text-base font-black text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{item.type}</p>
      </div>

      <span
        className={`rounded-full border px-3 py-1 text-xs font-black ${statusStyles[item.status]}`}
      >
        {item.status}
      </span>
    </article>
  );
}
