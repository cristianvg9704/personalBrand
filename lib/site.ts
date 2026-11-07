/**
 * Central site configuration.
 * Links set to `null` are placeholders: the UI renders them as "coming soon"
 * instead of linking anywhere. Fill them in as the real URLs exist.
 */
export const site = {
  name: "Cristian Vargas",
  role: "Software Engineer & Product Builder",
  title: "Cristian Vargas — Software Engineer & Product Builder",
  description:
    "Cristian Vargas is a software engineer and product builder creating software, experimenting with technology and turning ideas into products.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is final.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  year: 2026,
  links: {
    github: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
    articles: null as string | null,
    social: null as string | null,
    email: null as string | null, // e.g. "mailto:you@domain.com"
  },
};

export type LinkKey = keyof typeof site.links;
