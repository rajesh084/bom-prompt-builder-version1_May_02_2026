import type { NewsStory } from "../types";

interface StoryDetailCardProps {
  story: NewsStory;
}

export function StoryDetailCard({ story }: StoryDetailCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-200">
          Source: {story.source}
        </span>
        <span>{story.publishedTime}</span>
        <span className="rounded-full bg-purple-400/10 px-3 py-1 text-purple-200">
          {story.category}
        </span>
      </div>

      <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
        {story.headline}
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-300">
        {story.simpleSummary}
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
            Summary
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{story.summary}</p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-purple-300">
            Why It Matters
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {story.whyItMatters}
          </p>
        </section>
      </div>

      <section className="mt-4 rounded-3xl border border-white/10 bg-slate-900/70 p-4">
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">
          Key Takeaways
        </h3>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300 sm:grid-cols-2">
          {story.keyTakeaways.map((takeaway) => (
            <li key={takeaway} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">
          Suggested Instagram Angle
        </h3>
        <p className="mt-3 text-sm leading-6 text-cyan-50">
          {story.instagramAngle}
        </p>
      </section>
    </article>
  );
}
