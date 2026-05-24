import { GradientButton } from "../components/GradientButton";
import { Header } from "../components/Header";
import { NewsCard } from "../components/NewsCard";
import { StatCard } from "../components/StatCard";
import { mockNewsStories } from "../data/mockNews";
import type { NewsStory } from "../types";

interface DailyBriefPageProps {
  selectedStory: NewsStory;
  onCreateTodayPost: () => void;
  onSelectStory: (story: NewsStory) => void;
}

export function DailyBriefPage({
  selectedStory,
  onCreateTodayPost,
  onSelectStory,
}: DailyBriefPageProps) {
  return (
    <div>
      <Header
        eyebrow="Creator News OS"
        title="AI NetMind Daily"
        subtitle="Daily AI news for creators"
      />

      <section className="mb-6 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-cyan-200">
              Daily AI news turned into Instagram-ready content.
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Turn today's top story into a reel, carousel, and planner item.
            </h2>
          </div>
          <GradientButton onClick={onCreateTodayPost} type="button">
            Create Today's Post
          </GradientButton>
        </div>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-3">
        <StatCard label="Stories Found" value="8" accent="teal" />
        <StatCard label="Posts Drafted" value="2" accent="purple" />
        <StatCard label="Posts Scheduled" value="3" accent="blue" />
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-white">
              Today's Top AI Stories
            </h2>
            <p className="text-sm text-slate-400">
              Mock data for now. Replace this layer with live feeds later.
            </p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-cyan-200">
            Top 5
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {mockNewsStories.slice(0, 5).map((story) => (
            <NewsCard
              key={story.id}
              story={story}
              isSelected={selectedStory.id === story.id}
              onSelect={onSelectStory}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
