import { CarouselBuilder } from "../components/CarouselBuilder";
import { GradientButton } from "../components/GradientButton";
import { Header } from "../components/Header";
import type { CarouselDraft, NewsStory } from "../types";

interface CarouselBuilderPageProps {
  draft: CarouselDraft | null;
  story: NewsStory;
  onGenerate: () => void;
  onSaveToPlanner: () => void;
  onUpdate: (draft: CarouselDraft) => void;
}

export function CarouselBuilderPage({
  draft,
  story,
  onGenerate,
  onSaveToPlanner,
  onUpdate,
}: CarouselBuilderPageProps) {
  return (
    <div>
      <Header
        eyebrow="Instagram Carousel"
        title="Carousel Builder"
        subtitle="Create a polished five-slide carousel from today's selected AI story."
      />

      <section className="mb-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
          Source Story
        </p>
        <h2 className="mt-2 text-lg font-black text-white">{story.headline}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {story.instagramAngle}
        </p>
      </section>

      <CarouselBuilder
        draft={draft}
        onGenerate={onGenerate}
        onUpdate={onUpdate}
      />

      {draft ? (
        <div className="mt-5">
          <GradientButton onClick={onSaveToPlanner} type="button">
            Save Carousel to Planner
          </GradientButton>
        </div>
      ) : null}
    </div>
  );
}
