interface AnalyticsCardProps {
  label: string;
  value: string;
  delta: string;
  accent?: "cyan" | "purple" | "teal" | "blue";
}

const accentStyles = {
  cyan: "text-cyan-200 bg-cyan-400/10 border-cyan-400/20",
  purple: "text-purple-200 bg-purple-400/10 border-purple-400/20",
  teal: "text-teal-200 bg-teal-400/10 border-teal-400/20",
  blue: "text-blue-200 bg-blue-400/10 border-blue-400/20",
};

export function AnalyticsCard({
  label,
  value,
  delta,
  accent = "cyan",
}: AnalyticsCardProps) {
  return (
    <div
      className={`rounded-3xl border p-4 shadow-xl shadow-black/20 ${accentStyles[accent]}`}
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black tracking-tight text-white">
        {value}
      </p>
      <p className="mt-1 text-xs font-bold">{delta}</p>
    </div>
  );
}
