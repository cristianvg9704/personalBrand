import { timeline } from "@/data/timeline";
import { Reveal } from "./Motion";
import { SectionHeading } from "./ui";

export function BuildInPublic() {
  return (
    <section aria-labelledby="bip-title" className="section border-t border-line">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div>
          <SectionHeading
            id="bip-title"
            eyebrow="Journal"
            title="Build in public"
            subtitle="I'm documenting what I build, what I learn, what works and what doesn't."
          />
        </div>
        <ol className="relative border-l border-line-strong">
          {timeline.map((t, i) => (
            <li key={`${t.date}-${i}`} className="pb-10 pl-8 last:pb-0">
              <Reveal delay={i * 0.06}>
                <span
                  aria-hidden="true"
                  className={`absolute -left-[5px] mt-1.5 size-2.5 rounded-full border ${
                    t.upcoming ? "border-line-strong bg-bg" : "border-accent bg-accent"
                  }`}
                />
                <p className={`font-mono text-xs uppercase tracking-wider ${t.upcoming ? "text-faint" : "text-accent"}`}>
                  {t.date}
                </p>
                <p className="mt-2 text-lg text-fg text-pretty">{t.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
