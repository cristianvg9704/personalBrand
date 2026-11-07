import { site } from "@/lib/site";
import { ButtonLink } from "./ui";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Motion";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Ideas / Code / Products</p>
            <p className="mt-6 text-lg font-medium text-muted">
              {site.name} <span className="text-faint">·</span> {site.role}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              I build software, experiment with ideas, and turn them into{" "}
              <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                products.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg text-muted text-pretty">
              I&rsquo;m a software engineer focused on building software, exploring new
              technologies and turning ideas into real products.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#products" variant="primary">
                Explore my products
              </ButtonLink>
              <ButtonLink href="#about">About me</ButtonLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="flex lg:justify-end">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
