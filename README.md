# Cristian Vargas — personal site

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion. Static, content-driven, no database.

    npm run dev     # local dev
    npm run build   # production build
    npm run lint    # type check

## Editing content
- `lib/site.ts` — name, URLs, social links. A `null` link renders as a "Soon" placeholder. Set `NEXT_PUBLIC_SITE_URL` on Vercel for canonical/OG/sitemap.
- `data/products.ts` — add a product (status: Live | Building | Experiment | Archived); `currentProjectSlug` drives "Currently building".
- `data/experiments.ts`, `data/timeline.ts`, `data/technologies.ts`, `data/content.ts`, `data/experience.ts`.

To add a database later (e.g. Supabase), replace the arrays in `data/` with async fetchers; components only consume typed data.
