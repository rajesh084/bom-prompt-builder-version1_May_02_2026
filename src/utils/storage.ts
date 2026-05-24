import type { CarouselDraft, NewsStory, PlannerItem, ReelDraft } from "../types";

const STORAGE_KEYS = {
  selectedStory: "ai-netmind:selected-story",
  reelDrafts: "ai-netmind:reel-drafts",
  carouselDrafts: "ai-netmind:carousel-drafts",
  plannerItems: "ai-netmind:planner-items",
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getStoredSelectedStory(): NewsStory | null {
  return readJson<NewsStory | null>(STORAGE_KEYS.selectedStory, null);
}

export function storeSelectedStory(story: NewsStory) {
  writeJson(STORAGE_KEYS.selectedStory, story);
}

export function getStoredReelDrafts(): Record<string, ReelDraft> {
  return readJson<Record<string, ReelDraft>>(STORAGE_KEYS.reelDrafts, {});
}

export function storeReelDraft(storyId: string, draft: ReelDraft) {
  writeJson(STORAGE_KEYS.reelDrafts, {
    ...getStoredReelDrafts(),
    [storyId]: draft,
  });
}

export function getStoredCarouselDrafts(): Record<string, CarouselDraft> {
  return readJson<Record<string, CarouselDraft>>(STORAGE_KEYS.carouselDrafts, {});
}

export function storeCarouselDraft(storyId: string, draft: CarouselDraft) {
  writeJson(STORAGE_KEYS.carouselDrafts, {
    ...getStoredCarouselDrafts(),
    [storyId]: draft,
  });
}

export function getStoredPlannerItems(fallback: PlannerItem[]): PlannerItem[] {
  return readJson<PlannerItem[]>(STORAGE_KEYS.plannerItems, fallback);
}

export function storePlannerItems(items: PlannerItem[]) {
  writeJson(STORAGE_KEYS.plannerItems, items);
}
