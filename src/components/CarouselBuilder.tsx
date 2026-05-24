import type { CarouselDraft } from "../types";
import { CopyButton } from "./CopyButton";
import { GradientButton } from "./GradientButton";

interface CarouselBuilderProps {
  draft: CarouselDraft | null;
  onGenerate: () => void;
  onUpdate: (draft: CarouselDraft) => void;
}

export function CarouselBuilder({
  draft,
  onGenerate,
  onUpdate,
}: CarouselBuilderProps) {
  const slideText =
    draft?.slides
      .map((slide, index) => `Slide ${index + 1}: ${slide.title}\n${slide.body}`)
      .join("\n\n") ?? "";

  function updateSlide(index: number, field: "title" | "body", value: string) {
    if (!draft) return;

    const slides = draft.slides.map((slide, slideIndex) =>
      slideIndex === index ? { ...slide, [field]: value } : slide,
    );

    onUpdate({ ...draft, slides, updatedAt: new Date().toISOString() });
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        <GradientButton onClick={onGenerate} type="button">
          Generate Carousel
        </GradientButton>
        <GradientButton onClick={onGenerate} type="button" variant="secondary">
          Regenerate
        </GradientButton>
        {draft ? <CopyButton label="Copy Slides" value={slideText} /> : null}
      </div>

      {draft ? (
        <>
          <div className="grid gap-4 lg:grid-cols-5">
            {draft.slides.map((slide, index) => (
              <article
                key={`${slide.title}-${index}`}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Slide {index + 1}
                </p>
                <input
                  value={slide.title}
                  onChange={(event) =>
                    updateSlide(index, "title", event.target.value)
                  }
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm font-bold text-white outline-none focus:border-cyan-300/60"
                />
                <textarea
                  value={slide.body}
                  onChange={(event) =>
                    updateSlide(index, "body", event.target.value)
                  }
                  rows={6}
                  className="mt-3 w-full resize-none rounded-xl border border-white/10 bg-slate-950/80 p-3 text-sm leading-6 text-slate-200 outline-none focus:border-cyan-300/60"
                />
              </article>
            ))}
          </div>

          <section className="rounded-[2rem] border border-purple-300/20 bg-purple-300/10 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-white">
                  Carousel Preview
                </h3>
                <p className="text-sm text-slate-400">
                  A quick mobile-style preview of the generated 5-slide post.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              {draft.slides.map((slide, index) => (
                <div
                  key={`preview-${slide.title}-${index}`}
                  className="min-h-40 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950/70 to-purple-950/80 p-4 shadow-xl shadow-black/20"
                >
                  <p className="text-xs font-bold text-cyan-200">
                    {index + 1}/5
                  </p>
                  <h4 className="mt-8 text-lg font-black leading-tight text-white">
                    {slide.title}
                  </h4>
                  <p className="mt-3 text-xs leading-5 text-slate-300">
                    {slide.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center text-slate-400">
          Generate a five-slide Instagram carousel from the selected AI story.
        </div>
      )}
    </div>
  );
}
