import type { NewsStory } from "../types";

interface NewsCardProps {
  story: NewsStory;
  isSelected?: boolean;
  onSelect: (story: NewsStory) => void;
}

export function NewsCard({ story, isSelected = false, onSelect }: NewsCardProps) {
  return (
    <button
      onClick={() => onSelect(story)}
      className={`group w-full rounded-3xl border p-4 text-left transition duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.06] ${
        isSelected
          ? "border-cyan-300/60 bg-cyan-300/10 shadow-lg shadow-cyan-500/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
      type="button"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-purple-500/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-purple-200">
              {story.category}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              {story.source}
            </span>
          </div>
          <h3 className="text-base font-black leading-snug text-white">
            {story.headline}
          </h3>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-cyan-200 transition group-hover:bg-cyan-300/15">
          {story.importanceScore}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300">
        {story.summary}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <div className="mb-1 flex items-center justify-between text-slate-400">
            <span>Importance</span>
            <span>{story.importanceScore}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
              style={{ width: `${story.importanceScore}%` }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-slate-400">
            <span>Trending</span>
            <span>{story.trendingScore}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-300"
              style={{ width: `${story.trendingScore}%` }}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
