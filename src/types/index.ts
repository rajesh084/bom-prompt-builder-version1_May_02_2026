export type Screen =
  | "daily"
  | "story"
  | "reel"
  | "carousel"
  | "planner"
  | "analytics";

export type PlannerStatus = "Draft" | "Scheduled" | "Posted";

export interface NewsStory {
  id: string;
  headline: string;
  source: string;
  publishedTime: string;
  summary: string;
  simpleSummary: string;
  whyItMatters: string;
  keyTakeaways: string[];
  instagramAngle: string;
  importanceScore: number;
  trendingScore: number;
  category: string;
}

export interface ReelDraft {
  storyId: string;
  hook: string;
  summary: string;
  whyItMatters: string;
  cta: string;
  voiceover: string;
  caption: string;
  hashtags: string[];
  updatedAt: string;
}

export interface CarouselSlide {
  title: string;
  body: string;
}

export interface CarouselDraft {
  storyId: string;
  slides: CarouselSlide[];
  updatedAt: string;
}

export interface PlannerItem {
  id: string;
  day: string;
  title: string;
  type: "Reel" | "Carousel" | "Post" | "Recap" | "Tool";
  status: PlannerStatus;
  time: string;
  sourceStoryId?: string;
}
