import type { LinkKey } from "@/lib/site";

export const contentChannels: {
  title: string;
  description: string;
  button: string;
  link: LinkKey;
}[] = [
  {
    title: "YouTube",
    description: "Programming, software development, AI and personal projects.",
    button: "YouTube",
    link: "youtube",
  },
  {
    title: "Articles",
    description: "Technical notes, lessons learned and development experiments.",
    button: "Articles",
    link: "articles",
  },
  {
    title: "Social",
    description: "Updates about products, technology and things I'm building.",
    button: "Social",
    link: "social",
  },
];
