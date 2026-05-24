import { useMemo, useState } from "react";
import { AppShell } from "./components/AppShell";
import { defaultPlannerItems } from "./data/mockPlanner";
import { mockNewsStories } from "./data/mockNews";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { CarouselBuilderPage } from "./pages/CarouselBuilderPage";
import { DailyBriefPage } from "./pages/DailyBriefPage";
import { PlannerPage } from "./pages/PlannerPage";
import { ReelBuilderPage } from "./pages/ReelBuilderPage";
import { TopStoryPage } from "./pages/TopStoryPage";
import type {
  CarouselDraft,
  NewsStory,
  PlannerItem,
  ReelDraft,
  Screen,
} from "./types";
import {
  createPlannerItemFromDraft,
  generateCarouselSlides,
  generateInstagramReel,
  savePostToPlanner,
} from "./utils/generators";
import {
  getStoredCarouselDrafts,
  getStoredPlannerItems,
  getStoredReelDrafts,
  getStoredSelectedStory,
  storeCarouselDraft,
  storePlannerItems,
  storeReelDraft,
  storeSelectedStory,
} from "./utils/storage";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("daily");
  const [selectedStory, setSelectedStory] = useState<NewsStory>(() => {
    return getStoredSelectedStory() ?? mockNewsStories[0];
  });
  const [reelDrafts, setReelDrafts] = useState<Record<string, ReelDraft>>(() =>
    getStoredReelDrafts(),
  );
  const [carouselDrafts, setCarouselDrafts] = useState<
    Record<string, CarouselDraft>
  >(() => getStoredCarouselDrafts());
  const [plannerItems, setPlannerItems] = useState<PlannerItem[]>(() =>
    getStoredPlannerItems(defaultPlannerItems),
  );

  const currentReelDraft = reelDrafts[selectedStory.id] ?? null;
  const currentCarouselDraft = carouselDrafts[selectedStory.id] ?? null;

  function selectStory(story: NewsStory) {
    setSelectedStory(story);
    storeSelectedStory(story);
  }

  function navigateToTopStoryWithTopPick() {
    selectStory(mockNewsStories[0]);
    setActiveScreen("story");
  }

  async function buildReel() {
    const draft = await generateInstagramReel(selectedStory);
    setReelDrafts((current) => ({ ...current, [selectedStory.id]: draft }));
    storeReelDraft(selectedStory.id, draft);
  }

  async function buildCarousel() {
    const draft = await generateCarouselSlides(selectedStory);
    setCarouselDrafts((current) => ({ ...current, [selectedStory.id]: draft }));
    storeCarouselDraft(selectedStory.id, draft);
  }

  function updateReelDraft(draft: ReelDraft) {
    setReelDrafts((current) => ({ ...current, [selectedStory.id]: draft }));
    storeReelDraft(selectedStory.id, draft);
  }

  function updateCarouselDraft(draft: CarouselDraft) {
    setCarouselDrafts((current) => ({ ...current, [selectedStory.id]: draft }));
    storeCarouselDraft(selectedStory.id, draft);
  }

  async function addGeneratedPostToPlanner(type: PlannerItem["type"] = "Post") {
    const item = await savePostToPlanner(
      createPlannerItemFromDraft(selectedStory, type),
    );
    const nextItems = [item, ...plannerItems];
    setPlannerItems(nextItems);
    storePlannerItems(nextItems);
    setActiveScreen("planner");
  }

  function scheduleNextDraft() {
    const draftIndex = plannerItems.findIndex((item) => item.status === "Draft");

    const nextItems =
      draftIndex >= 0
        ? plannerItems.map((item, index) =>
            index === draftIndex ? { ...item, status: "Scheduled" as const } : item,
          )
        : [
            createPlannerItemFromDraft(
              selectedStory,
              currentCarouselDraft ? "Carousel" : currentReelDraft ? "Reel" : "Post",
            ),
            ...plannerItems,
          ];

    setPlannerItems(nextItems);
    storePlannerItems(nextItems);
  }

  const screen = useMemo(() => {
    switch (activeScreen) {
      case "story":
        return (
          <TopStoryPage
            story={selectedStory}
            onBuildReel={() => {
              void buildReel();
              setActiveScreen("reel");
            }}
            onBuildCarousel={() => {
              void buildCarousel();
              setActiveScreen("carousel");
            }}
            onSaveToPlanner={() => void addGeneratedPostToPlanner("Post")}
          />
        );
      case "reel":
        return (
          <ReelBuilderPage
            draft={currentReelDraft}
            story={selectedStory}
            onGenerate={() => void buildReel()}
            onSaveToPlanner={() => void addGeneratedPostToPlanner("Reel")}
            onUpdate={updateReelDraft}
          />
        );
      case "carousel":
        return (
          <CarouselBuilderPage
            draft={currentCarouselDraft}
            story={selectedStory}
            onGenerate={() => void buildCarousel()}
            onSaveToPlanner={() => void addGeneratedPostToPlanner("Carousel")}
            onUpdate={updateCarouselDraft}
          />
        );
      case "planner":
        return (
          <PlannerPage items={plannerItems} onSchedulePost={scheduleNextDraft} />
        );
      case "analytics":
        return <AnalyticsPage />;
      case "daily":
      default:
        return (
          <DailyBriefPage
            selectedStory={selectedStory}
            onCreateTodayPost={navigateToTopStoryWithTopPick}
            onSelectStory={(story) => {
              selectStory(story);
              setActiveScreen("story");
            }}
          />
        );
    }
  }, [
    activeScreen,
    currentCarouselDraft,
    currentReelDraft,
    plannerItems,
    selectedStory,
  ]);

  return (
    <AppShell activeScreen={activeScreen} onNavigate={setActiveScreen}>
      {screen}
    </AppShell>
  );
}
