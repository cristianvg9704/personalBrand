import { Reveal } from "./Motion";

const paragraphs = [
  "I'm a software engineer with a passion for building software and solving problems through technology.",
  "My professional experience is focused on software development, automation, APIs, testing and modern engineering practices.",
  "Outside of my professional work, I enjoy creating my own products, experimenting with new technologies and learning by building.",
  "This website is my space to document those projects, experiments and ideas.",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-line">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A developer who likes to build
          </h2>
          <p className="mt-4 text-faint">Software engineer from Colombia.</p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg text-muted text-pretty">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
