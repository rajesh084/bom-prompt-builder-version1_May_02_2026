import type {
  CarouselDraft,
  CarouselSlide,
  NewsStory,
  PlannerItem,
  ReelDraft,
} from "../types";

// Future integration placeholder: replace this mock with News API, RSS feeds,
// or an AWS Lambda/API Gateway endpoint that aggregates daily AI headlines.
export async function fetchDailyAINews(): Promise<NewsStory[]> {
  throw new Error("Connect News API, RSS feeds, or AWS services here.");
}

// Future integration placeholder: call OpenAI or another model to summarize
// raw article text and normalize it into the NewsStory shape.
export async function summarizeStoryWithAI(_story: NewsStory): Promise<string> {
  throw new Error("Connect VITE_OPENAI_API_KEY-backed summarization here.");
}

export function createMockReel(story: NewsStory): ReelDraft {
  return {
    storyId: story.id,
    hook: `This AI update could change how creators work: ${story.headline}.`,
    summary: `${story.simpleSummary} In plain English, this means creators can move from research to posting faster without losing context.`,
    whyItMatters: story.whyItMatters,
    cta: "Would you use this in your content workflow? Comment 'AI' and follow for tomorrow's update.",
    voiceover: [
      `Big AI news today: ${story.headline}.`,
      story.simpleSummary,
      `Why it matters: ${story.whyItMatters}`,
      `The creator angle is simple: ${story.instagramAngle}`,
      "Follow AI NetMind Daily for one useful AI update every day.",
    ].join("\n\n"),
    caption: `${story.headline}\n\n${story.simpleSummary}\n\nCreator takeaway: ${story.instagramAngle}\n\nSave this if you track AI tools for content creation.`,
    hashtags: [
      "#AINews",
      "#ArtificialIntelligence",
      "#ContentCreator",
      "#InstagramReels",
      "#CreatorTools",
      `#${story.category.replace(/\s+/g, "")}`,
    ],
    updatedAt: new Date().toISOString(),
  };
}

// Future integration placeholder: replace createMockReel with a model call that
// creates platform-specific hooks, voiceovers, captions, and CTAs.
export async function generateInstagramReel(
  story: NewsStory,
): Promise<ReelDraft> {
  return createMockReel(story);
}

export function createMockCarousel(story: NewsStory): CarouselDraft {
  const slides: CarouselSlide[] = [
    {
      title: "Hook",
      body: `${story.headline} - here is what creators need to know.`,
    },
    {
      title: "What Happened",
      body: story.simpleSummary,
    },
    {
      title: "Why It Matters",
      body: story.whyItMatters,
    },
    {
      title: "Key Takeaway",
      body: story.keyTakeaways[0] ?? "This update can help creators work faster.",
    },
    {
      title: "CTA",
      body: "Save this post and follow AI NetMind Daily for tomorrow's AI brief.",
    },
  ];

  return {
    storyId: story.id,
    slides,
    updatedAt: new Date().toISOString(),
  };
}

// Future integration placeholder: connect this to OpenAI, Claude, or an AWS Bedrock
// workflow for richer multi-slide Instagram carousel generation.
export async function generateCarouselSlides(
  story: NewsStory,
): Promise<CarouselDraft> {
  return createMockCarousel(story);
}

// Future integration placeholder: split caption and hashtag generation into a
// dedicated model prompt when live AI generation is added.
export async function generateCaptionAndHashtags(
  story: NewsStory,
): Promise<Pick<ReelDraft, "caption" | "hashtags">> {
  const draft = createMockReel(story);
  return {
    caption: draft.caption,
    hashtags: draft.hashtags,
  };
}

export function createPlannerItemFromDraft(
  story: NewsStory,
  type: PlannerItem["type"],
): PlannerItem {
  return {
    id: `${type.toLowerCase()}-${story.id}-${Date.now()}`,
    day: "Today",
    title: `${story.category} ${type}`,
    type,
    status: "Draft",
    time: "5:30 PM",
    sourceStoryId: story.id,
  };
}

// Future integration placeholder: send generated post metadata to DynamoDB,
// Amplify Data, AppSync, or another planner persistence service.
export async function savePostToPlanner(item: PlannerItem): Promise<PlannerItem> {
  return item;
}
