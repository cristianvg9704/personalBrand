import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Motion";
import { SectionHeading } from "./ui";

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          id="products-title"
          eyebrow="Products"
          title="Products"
          subtitle="Things I'm building, launching and experimenting with."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
