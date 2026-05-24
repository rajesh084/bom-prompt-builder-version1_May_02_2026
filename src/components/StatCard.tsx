interface StatCardProps {
  label: string;
  value: string;
  accent?: "cyan" | "purple" | "blue" | "teal";
}

const accentClasses = {
  cyan: "from-cyan-500/20 to-cyan-500/5 text-cyan-200 border-cyan-400/20",
  purple: "from-purple-500/20 to-purple-500/5 text-purple-200 border-purple-400/20",
  blue: "from-blue-500/20 to-blue-500/5 text-blue-200 border-blue-400/20",
  teal: "from-teal-500/20 to-teal-500/5 text-teal-200 border-teal-400/20",
};

export function StatCard({ label, value, accent = "cyan" }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br p-4 shadow-lg shadow-black/20 ${accentClasses[accent]}`}
    >
      <p className="text-2xl font-black tracking-tight">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
    </div>
  );
}
