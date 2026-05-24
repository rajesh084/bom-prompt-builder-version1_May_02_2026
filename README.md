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
- Placeholder functions for future OpenAI, News API, RSS, and AWS integration

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
```

Do not commit real API keys. The current MVP does not call paid or live APIs.

## Future API Integration Points

Commented placeholders are available in `src/utils/generators.ts`:

- `fetchDailyAINews()`
- `summarizeStoryWithAI()`
- `generateInstagramReel()`
- `generateCarouselSlides()`
- `generateCaptionAndHashtags()`
- `savePostToPlanner()`

You can later connect these to OpenAI, News API, RSS feeds, AWS Lambda,
Amplify Data, AppSync, DynamoDB, or Bedrock.

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
6. Deploy.
