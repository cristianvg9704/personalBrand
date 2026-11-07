import { experience } from "@/data/experience";
import { site } from "@/lib/site";
import { ButtonLink, Tag } from "./ui";
import { Reveal } from "./Motion";

export function Experience() {
  return (
    <section aria-labelledby="exp-pro-title" className="border-t border-line py-14 md:py-20">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Background</p>
          <h2 id="exp-pro-title" className="mt-3 text-2xl font-semibold tracking-tight">
            Professional experience
          </h2>
          <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                <p className="text-muted">{experience.company}</p>
              </div>
              <p className="font-mono text-sm text-faint">{experience.period}</p>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
              {experience.focus.map((f) => (
                <li key={f}>
                  <Tag>{f}</Tag>
                </li>
              ))}
            </ul>
            <div>
              <ButtonLink href={site.links.linkedin}>View LinkedIn</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
