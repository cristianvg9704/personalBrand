import { technologies } from "@/data/technologies";
import { Reveal, HoverCard } from "./Motion";
import { SectionHeading } from "./ui";

export function TechStack() {
  return (
    <section aria-labelledby="tech-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading id="tech-title" eyebrow="Stack" title="Tools I build with" />
        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {technologies.map((t) => (
              <li key={t}>
                <HoverCard>
                  <span className="block rounded-xl border border-line bg-surface px-4 py-2.5 font-mono text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg">
                    {t}
                  </span>
                </HoverCard>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
