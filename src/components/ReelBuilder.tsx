import type { ReelDraft } from "../types";
import { CopyButton } from "./CopyButton";
import { GradientButton } from "./GradientButton";

interface ReelBuilderProps {
  isGenerating?: boolean;
  draft: ReelDraft | null;
  onGenerate: () => void;
  onUpdate: (draft: ReelDraft) => void;
}

function Field({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <label className="block rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/80 p-3 text-sm leading-6 text-slate-100 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20"
      />
    </label>
  );
}

export function ReelBuilder({
  isGenerating = false,
  draft,
  onGenerate,
  onUpdate,
}: ReelBuilderProps) {
  const captionValue = draft
    ? `${draft.caption}\n\n${draft.hashtags.join(" ")}`
    : "";

  function update<K extends keyof ReelDraft>(key: K, value: ReelDraft[K]) {
    if (!draft) return;
    onUpdate({ ...draft, [key]: value, updatedAt: new Date().toISOString() });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <GradientButton disabled={isGenerating} onClick={onGenerate} type="button">
          {isGenerating ? "Generating..." : "Generate Reel with AI"}
        </GradientButton>
        <GradientButton
          disabled={isGenerating}
          onClick={onGenerate}
          type="button"
          variant="secondary"
        >
          {isGenerating ? "Working..." : "Regenerate"}
        </GradientButton>
        {draft ? (
          <>
            <CopyButton label="Copy Caption" value={captionValue} />
            <CopyButton label="Copy Voiceover" value={draft.voiceover} />
          </>
        ) : null}
      </div>

      {draft ? (
        <div className="grid gap-4 lg:grid-cols-2">
          <Field
            label="Hook"
            value={draft.hook}
            onChange={(value) => update("hook", value)}
          />
          <Field
            label="30-sec Summary"
            value={draft.summary}
            onChange={(value) => update("summary", value)}
          />
          <Field
            label="Why It Matters"
            value={draft.whyItMatters}
            onChange={(value) => update("whyItMatters", value)}
          />
          <Field
            label="CTA"
            value={draft.cta}
            onChange={(value) => update("cta", value)}
          />
          <Field
            label="Voiceover Script"
            value={draft.voiceover}
            onChange={(value) => update("voiceover", value)}
            rows={7}
          />
          <div className="space-y-4">
            <Field
              label="Caption"
              value={draft.caption}
              onChange={(value) => update("caption", value)}
              rows={5}
            />
            <label className="block rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
                Hashtags
              </span>
              <textarea
                value={draft.hashtags.join(" ")}
                onChange={(event) =>
                  update(
                    "hashtags",
                    event.target.value
                      .split(/\s+/)
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  )
                }
                rows={4}
                className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/80 p-3 text-sm leading-6 text-slate-100 outline-none transition focus:border-purple-300/60 focus:ring-2 focus:ring-purple-400/20"
              />
            </label>
          </div>
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center text-slate-400">
          Generate a reel script from the selected AI story to start editing.
        </div>
      )}
    </div>
  );
}
