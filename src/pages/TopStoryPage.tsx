import { GradientButton } from "../components/GradientButton";
import { Header } from "../components/Header";
import { StoryDetailCard } from "../components/StoryDetailCard";
import type { NewsStory } from "../types";

interface TopStoryPageProps {
  story: NewsStory;
  onBuildCarousel: () => void;
  onBuildReel: () => void;
  onSaveToPlanner: () => void;
}

export function TopStoryPage({
  story,
  onBuildCarousel,
  onBuildReel,
  onSaveToPlanner,
}: TopStoryPageProps) {
  return (
    <div>
      <Header
        eyebrow="Selected Story"
        title="Top Story"
        subtitle="Review the story details and choose the Instagram content format you want to build."
      />

      <StoryDetailCard story={story} />

      <div className="mt-5 flex flex-wrap gap-3">
        <GradientButton onClick={onBuildReel} type="button">
          Build Reel
        </GradientButton>
        <GradientButton onClick={onBuildCarousel} type="button">
          Build Carousel
        </GradientButton>
        <GradientButton onClick={onSaveToPlanner} type="button" variant="secondary">
          Save to Planner
        </GradientButton>
      </div>
    </div>
  );
}
