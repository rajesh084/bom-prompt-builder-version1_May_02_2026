import type {
  CarouselDraft,
  CarouselSlide,
  NewsStory,
  PlannerItem,
  ReelDraft,
} from "../types";
import {
  generateAiCarouselDraft,
  generateAiReelDraft,
  summarizeWithAi,
} from "./aiClient";

// Future integration placeholder: replace this mock with News API, RSS feeds,
// or an AWS Lambda/API Gateway endpoint that aggregates daily AI headlines.
export async function fetchDailyAINews(): Promise<NewsStory[]> {
  throw new Error("Connect News API, RSS feeds, or AWS services here.");
}

// Future integration placeholder: call OpenAI or another model to summarize
// raw article text and normalize it into the NewsStory shape.
export async function summarizeStoryWithAI(story: NewsStory): Promise<string> {
  try {
    return (await summarizeWithAi(story)) ?? story.simpleSummary;
  } catch (error) {
    console.warn("AI summarization failed. Falling back to mock summary.", error);
    return story.simpleSummary;
  }
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
  try {
    const aiDraft = await generateAiReelDraft(story);

    if (aiDraft) {
      return {
        storyId: story.id,
        hook: aiDraft.hook,
        summary: aiDraft.summary,
        whyItMatters: aiDraft.whyItMatters,
        cta: aiDraft.cta,
        voiceover: aiDraft.voiceover,
        caption: aiDraft.caption,
        hashtags: aiDraft.hashtags,
        updatedAt: new Date().toISOString(),
      };
    }
  } catch (error) {
    console.warn("AI reel generation failed. Falling back to mock reel.", error);
  }

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
  try {
    const aiDraft = await generateAiCarouselDraft(story);

    if (aiDraft?.slides?.length) {
      return {
        storyId: story.id,
        slides: normalizeCarouselSlides(aiDraft.slides, story),
        updatedAt: new Date().toISOString(),
      };
    }
  } catch (error) {
    console.warn(
      "AI carousel generation failed. Falling back to mock carousel.",
      error,
    );
  }

  return createMockCarousel(story);
}

// Future integration placeholder: split caption and hashtag generation into a
// dedicated model prompt when live AI generation is added.
export async function generateCaptionAndHashtags(
  story: NewsStory,
): Promise<Pick<ReelDraft, "caption" | "hashtags">> {
  const draft = await generateInstagramReel(story);
  return {
    caption: draft.caption,
    hashtags: draft.hashtags,
  };
}

function normalizeCarouselSlides(
  slides: CarouselSlide[],
  story: NewsStory,
): CarouselSlide[] {
  const fallbackSlides = createMockCarousel(story).slides;

  return fallbackSlides.map((fallback, index) => {
    const slide = slides[index];

    return {
      title: slide?.title?.trim() || fallback.title,
      body: slide?.body?.trim() || fallback.body,
    };
  });
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
