import { useState } from "react";

interface CopyButtonProps {
  label: string;
  value: string;
  className?: string;
}

export function CopyButton({ label, value, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      onClick={handleCopy}
      className={`rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/20 ${className}`}
      type="button"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
