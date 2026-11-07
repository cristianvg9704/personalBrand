export interface TimelineEntry {
  date: string;
  text: string;
  upcoming?: boolean;
}

// Newest first or last is up to you; entries render in array order.
export const timeline: TimelineEntry[] = [
  { date: "October 2026", text: "Started building NewMyCar." },
  { date: "October 2026", text: "Started experimenting with AI-assisted development." },
  {
    date: "Coming soon",
    text: "Starting technical content about software development and the process of building products.",
    upcoming: true,
  },
];
