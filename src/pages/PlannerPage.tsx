import { GradientButton } from "../components/GradientButton";
import { Header } from "../components/Header";
import { PlannerCard } from "../components/PlannerCard";
import type { PlannerItem } from "../types";

interface PlannerPageProps {
  items: PlannerItem[];
  onSchedulePost: () => void;
}

export function PlannerPage({ items, onSchedulePost }: PlannerPageProps) {
  const groupedDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Today"];

  return (
    <div>
      <Header
        eyebrow="Content Calendar"
        title="Planner"
        subtitle="Plan, schedule, and track generated Instagram content for the week."
      />

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
        <div>
          <h2 className="text-xl font-black text-white">Weekly content planner</h2>
          <p className="mt-1 text-sm leading-6 text-cyan-100/80">
            Add generated reels or carousel posts to your local content calendar.
          </p>
        </div>
        <GradientButton onClick={onSchedulePost} type="button">
          Schedule Post
        </GradientButton>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {groupedDays.map((day) => {
          const dayItems = items.filter((item) => item.day === day);

          if (dayItems.length === 0) {
            return (
              <section
                key={day}
                className="rounded-[2rem] border border-dashed border-white/10 bg-white/[0.02] p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  {day}
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  No post scheduled yet.
                </p>
              </section>
            );
          }

          return (
            <section key={day} className="space-y-3">
              <p className="px-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                {day}
              </p>
              {dayItems.map((item) => (
                <PlannerCard key={item.id} item={item} />
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}
