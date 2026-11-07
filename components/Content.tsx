import { contentChannels } from "@/data/content";
import { site } from "@/lib/site";
import { ButtonLink, SectionHeading } from "./ui";
import { HoverCard, Reveal } from "./Motion";

export function Content() {
  return (
    <section id="content" aria-labelledby="content-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          id="content-title"
          eyebrow="Content"
          title="Content"
          subtitle="Things I'm learning, building and sharing."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contentChannels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <HoverCard className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-muted text-pretty">{c.description}</p>
                  <div className="mt-auto pt-6">
                    <ButtonLink href={site.links[c.link]}>{c.button}</ButtonLink>
                  </div>
                </article>
              </HoverCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
