import type { PlannerItem } from "../types";

export const defaultPlannerItems: PlannerItem[] = [
  {
    id: "monday-ai-news-reel",
    day: "Monday",
    title: "AI News Reel",
    type: "Reel",
    status: "Scheduled",
    time: "9:00 AM",
  },
  {
    id: "tuesday-carousel-post",
    day: "Tuesday",
    title: "Carousel Post",
    type: "Carousel",
    status: "Scheduled",
    time: "12:00 PM",
  },
  {
    id: "wednesday-tool-spotlight",
    day: "Wednesday",
    title: "Tool Spotlight",
    type: "Tool",
    status: "Draft",
    time: "3:00 PM",
  },
  {
    id: "friday-weekly-recap",
    day: "Friday",
    title: "Weekly Recap",
    type: "Recap",
    status: "Posted",
    time: "9:30 AM",
  },
];
