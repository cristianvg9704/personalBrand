import { MotionProvider } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CurrentProject } from "@/components/CurrentProject";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Experiments } from "@/components/Experiments";
import { BuildInPublic } from "@/components/BuildInPublic";
import { Content } from "@/components/Content";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  nationality: "Colombian",
  sameAs: [site.links.github, site.links.linkedin, site.links.youtube].filter(Boolean),
};

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <CurrentProject />
        <Products />
        <About />
        <TechStack />
        <Experiments />
        <BuildInPublic />
        <Content />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </MotionProvider>
  );
}
