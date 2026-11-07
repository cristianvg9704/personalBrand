import { site } from "@/lib/site";
import { ButtonLink } from "./ui";
import { Reveal } from "./Motion";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden section border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]"
      />
      <div className="container-x relative text-center">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Have an idea?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted text-pretty">
            I&rsquo;m always interested in interesting problems, products and technology.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={site.links.email} variant="primary">
              Get in touch
            </ButtonLink>
            <div className="flex gap-2">
              <ButtonLink href={site.links.github} variant="ghost">GitHub</ButtonLink>
              <ButtonLink href={site.links.linkedin} variant="ghost">LinkedIn</ButtonLink>
              <ButtonLink href={site.links.youtube} variant="ghost">YouTube</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
