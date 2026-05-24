import type { Screen } from "../types";

interface NavItem {
  id: Screen;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: "daily", label: "Daily Brief", icon: "⌂" },
  { id: "story", label: "Top Story", icon: "★" },
  { id: "reel", label: "Reel Builder", icon: "▶" },
  { id: "carousel", label: "Carousel", icon: "▦" },
  { id: "planner", label: "Planner", icon: "□" },
  { id: "analytics", label: "Analytics", icon: "↗" },
];

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 px-2 py-2 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:static lg:rounded-3xl lg:border lg:bg-white/[0.04]">
      <div className="mx-auto grid max-w-4xl grid-cols-6 gap-1">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`rounded-2xl px-2 py-2 text-center text-[10px] font-bold transition sm:text-xs ${
                isActive
                  ? "bg-cyan-400/15 text-cyan-200 shadow-lg shadow-cyan-500/10"
                  : "text-slate-500 hover:bg-white/5 hover:text-slate-200"
              }`}
              type="button"
            >
              <span className="mx-auto mb-1 block text-lg leading-none">
                {item.icon}
              </span>
              <span className="hidden sm:inline lg:hidden xl:inline">
                {item.label}
              </span>
              <span className="sm:hidden">{item.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
