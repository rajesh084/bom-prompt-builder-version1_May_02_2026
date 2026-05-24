import type { NewsStory } from "../types";

export const mockNewsStories: NewsStory[] = [
  {
    id: "openai-gpt-51",
    headline: "OpenAI unveils GPT-5.1 with sharper reasoning",
    source: "OpenAI",
    publishedTime: "Today, 9:00 AM",
    summary:
      "OpenAI announced a new model update focused on stronger reasoning, lower hallucination rates, and faster creator workflows.",
    simpleSummary:
      "GPT-5.1 improves reasoning, reduces hallucinations, and brings major gains in coding, math, and long-context understanding.",
    whyItMatters:
      "More reliable AI models help creators research faster, script better posts, and turn complex topics into clear content with less manual cleanup.",
    keyTakeaways: [
      "Better reasoning for multi-step tasks",
      "Improved long-context performance",
      "Lower hallucination rates in benchmarks",
      "Useful for coding, research, and creator workflows",
    ],
    instagramAngle:
      "Turn this into a reel explaining what GPT-5.1 changes for creators, freelancers, and small teams.",
    importanceScore: 96,
    trendingScore: 94,
    category: "Model Update",
  },
  {
    id: "google-creator-ai",
    headline: "Google introduces Veo 3 tools for creators",
    source: "Google DeepMind",
    publishedTime: "Today, 8:10 AM",
    summary:
      "Google expanded its AI video toolkit with new controls for short-form video generation and editing.",
    simpleSummary:
      "Google is giving creators more AI-powered tools to plan, generate, and refine video clips for social platforms.",
    whyItMatters:
      "Video generation is becoming more practical for everyday content creation, especially for teams that publish daily.",
    keyTakeaways: [
      "More control over AI-generated clips",
      "Designed for faster creative iteration",
      "Useful for reels, product demos, and explainers",
      "Signals growing competition in AI video",
    ],
    instagramAngle:
      "Frame it as the next wave of AI video tools creators should watch before planning their workflow.",
    importanceScore: 90,
    trendingScore: 89,
    category: "AI Video",
  },
  {
    id: "microsoft-copilot-workflows",
    headline: "Microsoft Copilot adds team workflow automations",
    source: "Microsoft",
    publishedTime: "Yesterday, 6:30 PM",
    summary:
      "Microsoft added more Copilot features for summarizing meetings, drafting updates, and connecting productivity apps.",
    simpleSummary:
      "Copilot is moving deeper into daily work by helping teams summarize, draft, and automate common business tasks.",
    whyItMatters:
      "Productivity assistants are becoming less like chatbots and more like workflow layers across the tools teams already use.",
    keyTakeaways: [
      "New automations for team updates",
      "Meeting summaries get more action-focused",
      "Integrations across Microsoft 365 apps",
      "Enterprise AI adoption keeps accelerating",
    ],
    instagramAngle:
      "Explain how AI assistants are shifting from answering questions to actually running parts of the workday.",
    importanceScore: 84,
    trendingScore: 80,
    category: "Productivity",
  },
  {
    id: "nvidia-blackwell-demand",
    headline: "NVIDIA reports surging demand for next-gen AI chips",
    source: "NVIDIA",
    publishedTime: "Yesterday, 4:45 PM",
    summary:
      "NVIDIA shared new momentum around advanced AI chips as cloud providers and startups scale model training and inference.",
    simpleSummary:
      "The AI chip race is still heating up, with demand growing for faster and more efficient hardware.",
    whyItMatters:
      "The cost and availability of AI infrastructure shape how quickly new tools reach creators and businesses.",
    keyTakeaways: [
      "AI infrastructure demand remains high",
      "Cloud providers continue scaling capacity",
      "Inference efficiency is becoming critical",
      "Hardware remains a bottleneck for AI growth",
    ],
    instagramAngle:
      "Use this as a simple explainer on why AI chips matter even if you never touch a data center.",
    importanceScore: 88,
    trendingScore: 86,
    category: "AI Hardware",
  },
  {
    id: "meta-open-source-ai",
    headline: "Meta releases open-source AI tools for developers",
    source: "Meta AI",
    publishedTime: "Yesterday, 1:20 PM",
    summary:
      "Meta introduced new open-source resources designed to help developers build, evaluate, and deploy AI features.",
    simpleSummary:
      "Meta is pushing open-source AI forward with new tools that make model development more accessible.",
    whyItMatters:
      "Open-source releases can lower the barrier for builders and increase the pace of AI experimentation.",
    keyTakeaways: [
      "New developer resources for AI projects",
      "More transparent model evaluation options",
      "Useful for startups and indie builders",
      "Keeps pressure on closed AI platforms",
    ],
    instagramAngle:
      "Position it as good news for builders who want powerful AI tools without being locked into one platform.",
    importanceScore: 82,
    trendingScore: 78,
    category: "Open Source",
  },
  {
    id: "anthropic-claude-collaboration",
    headline: "Anthropic improves Claude for collaborative writing",
    source: "Anthropic",
    publishedTime: "Two days ago",
    summary:
      "Anthropic updated Claude with stronger drafting, editing, and project-context features for knowledge workers.",
    simpleSummary:
      "Claude is getting better at helping teams write, edit, and manage long-form project context.",
    whyItMatters:
      "AI writing tools are becoming more useful for planning content systems, not just generating one-off posts.",
    keyTakeaways: [
      "Improved long-form writing support",
      "Better project context handling",
      "Helpful for content teams and researchers",
      "More competition in AI writing assistants",
    ],
    instagramAngle:
      "Compare AI writing assistants and explain which creator tasks benefit most from better project memory.",
    importanceScore: 80,
    trendingScore: 76,
    category: "AI Assistant",
  },
  {
    id: "ai-regulation-marketing",
    headline: "New AI regulation guidance targets transparency in marketing",
    source: "AI Policy Watch",
    publishedTime: "Two days ago",
    summary:
      "Regulators released guidance encouraging clearer disclosure when brands use AI-generated media in campaigns.",
    simpleSummary:
      "Brands may need to be clearer about when AI is used in ads, influencer posts, and generated visuals.",
    whyItMatters:
      "Creators and agencies need to understand disclosure expectations before scaling AI content production.",
    keyTakeaways: [
      "Transparency standards are becoming stricter",
      "AI-generated ads may need clearer disclosure",
      "Creators should document AI-assisted workflows",
      "Compliance can become a trust advantage",
    ],
    instagramAngle:
      "Create a carousel that helps creators understand what to disclose when using AI-generated content.",
    importanceScore: 78,
    trendingScore: 74,
    category: "AI Regulation",
  },
  {
    id: "ai-productivity-stack",
    headline: "New AI productivity tools promise one-click research briefs",
    source: "Future Tools",
    publishedTime: "This week",
    summary:
      "A wave of AI productivity apps is packaging search, summaries, captions, and scheduling into creator-friendly workflows.",
    simpleSummary:
      "AI productivity tools are bundling research and content creation into simpler daily dashboards.",
    whyItMatters:
      "Creators want fewer tabs and faster workflows, making integrated AI content systems more valuable.",
    keyTakeaways: [
      "Research and content tools are converging",
      "Creator dashboards are becoming more common",
      "Automation helps with daily posting consistency",
      "The best tools still need human taste",
    ],
    instagramAngle:
      "Use this as a meta story about how creators can build a daily AI-assisted content operating system.",
    importanceScore: 75,
    trendingScore: 72,
    category: "Productivity Tools",
  },
];
