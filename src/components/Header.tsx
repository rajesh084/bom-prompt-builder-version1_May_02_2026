interface HeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function Header({ eyebrow, title, subtitle }: HeaderProps) {
  return (
    <header className="mb-6">
      {eyebrow ? (
        <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
