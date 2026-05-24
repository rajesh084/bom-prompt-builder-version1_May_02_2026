import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function GradientButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: GradientButtonProps) {
  const styles =
    variant === "primary"
      ? "from-blue-500 via-indigo-500 to-cyan-400 text-white shadow-cyan-500/25"
      : "from-slate-900 via-slate-800 to-slate-900 text-slate-100 shadow-blue-900/20 ring-1 ring-white/10";

  return (
    <button
      className={`rounded-2xl bg-gradient-to-r ${styles} px-5 py-3 text-sm font-bold shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
