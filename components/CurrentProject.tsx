import { currentProjectSlug, products } from "@/data/products";
import { ButtonLink, StatusBadge, Tag } from "./ui";
import { Reveal } from "./Motion";

export function CurrentProject() {
  const project = products.find((p) => p.slug === currentProjectSlug);
  if (!project) return null;
  return (
    <section aria-labelledby="current-title" className="border-t border-line py-14 md:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2 to-surface p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/10 blur-[90px]"
            />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow" id="current-title">Currently building</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-3 text-lg text-muted text-pretty">{project.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <StatusBadge status={project.status} />
                  {project.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <ButtonLink href={project.href} variant="primary" className="self-start md:self-auto">
                View project
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
