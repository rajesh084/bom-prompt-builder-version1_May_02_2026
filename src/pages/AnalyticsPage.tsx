import { AnalyticsCard } from "../components/AnalyticsCard";
import { GradientButton } from "../components/GradientButton";
import { Header } from "../components/Header";

const reachData = [38, 54, 48, 68, 61, 87, 92];

export function AnalyticsPage() {
  return (
    <div>
      <Header
        eyebrow="Performance"
        title="Analytics"
        subtitle="Mock content performance metrics for planning future AI news posts."
      />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <AnalyticsCard label="Reach" value="12.4K" delta="+22%" accent="cyan" />
        <AnalyticsCard label="Followers" value="842" delta="+184" accent="blue" />
        <AnalyticsCard
          label="Engagement"
          value="1.6K"
          delta="+18%"
          accent="purple"
        />
        <AnalyticsCard label="Saves" value="320" delta="+26%" accent="teal" />
      </section>

      <section className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-white">Reach Over Time</h2>
            <p className="text-sm text-slate-400">Last seven content drops</p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
            +2.2K today
          </span>
        </div>

        <div className="flex h-56 items-end gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
          {reachData.map((value, index) => (
            <div key={value + index} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 via-cyan-400 to-teal-200 shadow-lg shadow-cyan-500/20 transition hover:opacity-80"
                style={{ height: `${value}%` }}
              />
              <span className="text-[10px] font-bold text-slate-500">
                D{index + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
            Best Post Today
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-center text-sm font-black">
              GPT-5.1
              <br />
              Is Here
            </div>
            <div>
              <h3 className="text-lg font-black text-white">AI News Reel</h3>
              <p className="text-sm text-slate-400">
                OpenAI unveils GPT-5.1
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-slate-300">
                <span>Reach 8.7K</span>
                <span>Likes 1.2K</span>
                <span>Saves 312</span>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
            Insight
          </p>
          <h3 className="mt-3 text-2xl font-black text-white">
            Today's top format: Reel
          </h3>
          <p className="mt-3 text-sm leading-6 text-cyan-50/80">
            Reels are getting 2.7x more reach than carousel posts in this mock
            dashboard.
          </p>
          <GradientButton className="mt-5 w-full" type="button">
            View Insights
          </GradientButton>
        </article>
      </section>
    </div>
  );
}
