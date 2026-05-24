import type { ReactNode } from "react";
import type { Screen } from "../types";
import { BottomNav } from "./BottomNav";

interface AppShellProps {
  activeScreen: Screen;
  children: ReactNode;
  onNavigate: (screen: Screen) => void;
}

export function AppShell({ activeScreen, children, onNavigate }: AppShellProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-12rem] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-10rem] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-28 left-[-12rem] h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 pb-28 sm:px-6 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:pb-6">
        <aside className="mb-5 hidden lg:block">
          <div className="sticky top-6 space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <div className="mb-1 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                AI NetMind
              </div>
              <h2 className="text-2xl font-black tracking-tight">
                Daily
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Daily AI news turned into Instagram-ready content.
              </p>
            </div>
            <BottomNav activeScreen={activeScreen} onNavigate={onNavigate} />
          </div>
        </aside>

        <main className="mx-auto w-full max-w-5xl">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6 lg:min-h-[calc(100vh-3rem)]">
            {children}
          </div>
        </main>
      </div>

      <div className="lg:hidden">
        <BottomNav activeScreen={activeScreen} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
