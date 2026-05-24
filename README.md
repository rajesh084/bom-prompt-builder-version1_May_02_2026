# AI NetMind Daily

Daily AI news turned into Instagram-ready content.

AI NetMind Daily is a modern React + Vite + TypeScript MVP for turning mock AI
news into Instagram reels, carousel posts, captions, hashtags, and weekly
planner items. It uses Tailwind CSS for a premium dark creator-dashboard UI and
browser localStorage for MVP persistence.

## Features

- Daily Brief with mock AI news cards and creator stats
- Top Story detail view with summary, why-it-matters, key takeaways, and angle
- Reel Builder with editable hook, summary, CTA, voiceover, caption, and hashtags
- Carousel Builder with editable 5-slide structure and preview
- Weekly Planner with Draft, Scheduled, and Posted statuses
- Analytics dashboard with mock metrics and CSS bar chart
- localStorage persistence for selected story, drafts, and planner items
- Built-in AI generation layer with AWS/backend endpoint support, optional
  OpenAI browser-key support, and mock fallback

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

Create a `.env` file from `.env.example` when you are ready to connect live AI
services.

```bash
VITE_OPENAI_API_KEY=
VITE_OPENAI_MODEL=gpt-4o-mini
VITE_AI_GENERATION_ENDPOINT=
```

Generation priority:

1. `VITE_AI_GENERATION_ENDPOINT` - recommended production path. Point this to an
   AWS Lambda, API Gateway, or Amplify backend function that calls OpenAI, Bedrock,
   or another AI provider securely.
2. `VITE_OPENAI_API_KEY` - quick local testing path. This makes the browser call
   OpenAI directly.
3. Mock fallback - if no live AI config is present, the app still generates
   usable sample content locally.

Do not commit real API keys. For production, avoid exposing OpenAI keys in a
frontend app. Use `VITE_AI_GENERATION_ENDPOINT` so your secret key stays on AWS.

## Future API Integration Points

Commented placeholders are available in `src/utils/generators.ts`, with live AI
client logic in `src/utils/aiClient.ts`:

- `fetchDailyAINews()`
- `summarizeStoryWithAI()`
- `generateInstagramReel()`
- `generateCarouselSlides()`
- `generateCaptionAndHashtags()`
- `savePostToPlanner()`

You can connect these to OpenAI, News API, RSS feeds, AWS Lambda, Amplify Data,
AppSync, DynamoDB, or Bedrock.

## AWS Amplify Deployment

Use these Amplify build settings:

- Build command: `npm run build`
- Output directory: `dist`

Recommended Amplify steps:

1. Push this repo to GitHub.
2. In AWS Amplify, choose "Host web app".
3. Connect your GitHub repository and branch.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Optional: add environment variables for AI generation.
7. Deploy.
