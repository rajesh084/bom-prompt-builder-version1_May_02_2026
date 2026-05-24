import { Header } from "../components/Header";
import { ReelBuilder } from "../components/ReelBuilder";
import { GradientButton } from "../components/GradientButton";
import type { NewsStory, ReelDraft } from "../types";

interface ReelBuilderPageProps {
  aiMode: {
    label: string;
    description: string;
  };
  draft: ReelDraft | null;
  isGenerating: boolean;
  story: NewsStory;
  onGenerate: () => void;
  onSaveToPlanner: () => void;
  onUpdate: (draft: ReelDraft) => void;
}

export function ReelBuilderPage({
  aiMode,
  draft,
  isGenerating,
  story,
  onGenerate,
  onSaveToPlanner,
  onUpdate,
}: ReelBuilderPageProps) {
  return (
    <div>
      <Header
        eyebrow="AI Content Generator"
        title="Reel Builder"
        subtitle="Generate editable hooks, captions, hashtags, and voiceover scripts from your selected AI news story."
      />

      <section className="mb-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
          Source Story
        </p>
        <h2 className="mt-2 text-lg font-black text-white">{story.headline}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {story.simpleSummary}
        </p>
      </section>

      <section className="mb-5 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
          AI Mode
        </p>
        <h2 className="mt-2 text-lg font-black text-white">{aiMode.label}</h2>
        <p className="mt-2 text-sm leading-6 text-cyan-50/80">
          {isGenerating ? "AI is building your Instagram reel now..." : aiMode.description}
        </p>
      </section>

      <ReelBuilder
        draft={draft}
        isGenerating={isGenerating}
        onGenerate={onGenerate}
        onUpdate={onUpdate}
      />

      {draft ? (
        <div className="mt-5">
          <GradientButton onClick={onSaveToPlanner} type="button">
            Save Reel to Planner
          </GradientButton>
        </div>
      ) : null}
    </div>
  );
}
