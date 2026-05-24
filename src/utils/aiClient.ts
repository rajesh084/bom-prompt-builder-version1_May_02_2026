import type { CarouselSlide, NewsStory, ReelDraft } from "../types";

type AiTask = "reel" | "carousel" | "summary";

interface OpenAiMessage {
  role: "system" | "user";
  content: string;
}

const apiEndpoint = import.meta.env.VITE_AI_GENERATION_ENDPOINT?.trim();
const openAiKey = import.meta.env.VITE_OPENAI_API_KEY?.trim();
const openAiModel = import.meta.env.VITE_OPENAI_MODEL?.trim() || "gpt-4o-mini";

export function getAiGenerationMode() {
  if (apiEndpoint) {
    return {
      label: "Live AI backend enabled",
      description: "Using your configured AWS/API endpoint for generation.",
    };
  }

  if (openAiKey) {
    return {
      label: "OpenAI generation enabled",
      description:
        "Using VITE_OPENAI_API_KEY in the browser. Move this behind AWS Lambda before production.",
    };
  }

  return {
    label: "Mock AI fallback",
    description:
      "Add VITE_AI_GENERATION_ENDPOINT or VITE_OPENAI_API_KEY to generate with live AI.",
  };
}

function storyContext(story: NewsStory) {
  return {
    headline: story.headline,
    source: story.source,
    publishedTime: story.publishedTime,
    category: story.category,
    summary: story.summary,
    simpleSummary: story.simpleSummary,
    whyItMatters: story.whyItMatters,
    keyTakeaways: story.keyTakeaways,
    instagramAngle: story.instagramAngle,
    importanceScore: story.importanceScore,
    trendingScore: story.trendingScore,
  };
}

function extractJson<T>(content: string): T {
  try {
    return JSON.parse(content) as T;
  } catch {
    const jsonStart = content.indexOf("{");
    const jsonEnd = content.lastIndexOf("}");

    if (jsonStart >= 0 && jsonEnd > jsonStart) {
      return JSON.parse(content.slice(jsonStart, jsonEnd + 1)) as T;
    }

    throw new Error("AI response did not include valid JSON.");
  }
}

async function callBackend<T>(task: AiTask, story: NewsStory): Promise<T | null> {
  if (!apiEndpoint) return null;

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task,
      story: storyContext(story),
    }),
  });

  if (!response.ok) {
    throw new Error(`AI backend request failed with ${response.status}.`);
  }

  const data = (await response.json()) as unknown;

  if (
    data &&
    typeof data === "object" &&
    "data" in data &&
    (data as { data?: T }).data
  ) {
    return (data as { data: T }).data;
  }

  return data as T;
}

async function callOpenAi<T>(messages: OpenAiMessage[]): Promise<T | null> {
  if (!openAiKey) return null;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openAiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: openAiModel,
      messages,
      temperature: 0.7,
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed with ${response.status}.`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("OpenAI response did not include content.");
  }

  return extractJson<T>(content);
}

export async function generateAiReelDraft(
  story: NewsStory,
): Promise<Omit<ReelDraft, "storyId" | "updatedAt"> | null> {
  const backendDraft = await callBackend<
    Omit<ReelDraft, "storyId" | "updatedAt">
  >("reel", story).catch((error) => {
    console.warn("Configured AI backend failed. Trying OpenAI next.", error);
    return null;
  });

  if (backendDraft) return backendDraft;

  return callOpenAi<Omit<ReelDraft, "storyId" | "updatedAt">>([
    {
      role: "system",
      content:
        "You are an expert Instagram content strategist for AI news. Return only valid JSON.",
    },
    {
      role: "user",
      content: `Create an Instagram reel package for this AI news story.

Return JSON with exactly these keys:
{
  "hook": "short scroll-stopping hook",
  "summary": "30-second summary",
  "whyItMatters": "creator-focused explanation",
  "cta": "short CTA",
  "voiceover": "complete voiceover script with line breaks",
  "caption": "Instagram caption",
  "hashtags": ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5", "#tag6"]
}

Story:
${JSON.stringify(storyContext(story), null, 2)}`,
    },
  ]);
}

export async function generateAiCarouselDraft(
  story: NewsStory,
): Promise<{ slides: CarouselSlide[] } | null> {
  const backendDraft = await callBackend<{ slides: CarouselSlide[] }>(
    "carousel",
    story,
  ).catch((error) => {
    console.warn("Configured AI backend failed. Trying OpenAI next.", error);
    return null;
  });

  if (backendDraft) return backendDraft;

  return callOpenAi<{ slides: CarouselSlide[] }>([
    {
      role: "system",
      content:
        "You are an expert Instagram carousel writer for AI news. Return only valid JSON.",
    },
    {
      role: "user",
      content: `Create a 5-slide Instagram carousel for this AI news story.

Return JSON with this exact shape:
{
  "slides": [
    { "title": "Hook", "body": "slide body" },
    { "title": "What Happened", "body": "slide body" },
    { "title": "Why It Matters", "body": "slide body" },
    { "title": "Key Takeaway", "body": "slide body" },
    { "title": "CTA", "body": "slide body" }
  ]
}

Story:
${JSON.stringify(storyContext(story), null, 2)}`,
    },
  ]);
}

export async function summarizeWithAi(story: NewsStory): Promise<string | null> {
  const backendSummary = await callBackend<{ summary: string }>(
    "summary",
    story,
  ).catch((error) => {
    console.warn("Configured AI backend failed. Trying OpenAI next.", error);
    return null;
  });

  if (backendSummary?.summary) return backendSummary.summary;

  const openAiSummary = await callOpenAi<{ summary: string }>([
    {
      role: "system",
      content:
        "You summarize AI news for busy creators. Return only valid JSON.",
    },
    {
      role: "user",
      content: `Summarize this story in one concise paragraph. Return {"summary":"..."}.

Story:
${JSON.stringify(storyContext(story), null, 2)}`,
    },
  ]);

  return openAiSummary?.summary ?? null;
}
