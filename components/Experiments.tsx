import { experiments } from "@/data/experiments";
import { ExperimentCard } from "./ExperimentCard";
import { Reveal } from "./Motion";
import { SectionHeading } from "./ui";

export function Experiments() {
  return (
    <section id="experiments" aria-labelledby="exp-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          id="exp-title"
          eyebrow="Lab"
          title="Experiments"
          subtitle="Not every idea needs to become a startup. Some are simply worth building."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiments.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <ExperimentCard experiment={e} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
