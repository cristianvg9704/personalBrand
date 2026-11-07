import type { Product } from "@/data/products";
import { ButtonLink, StatusBadge, Tag } from "./ui";
import { HoverCard } from "./Motion";
import { ProductPreview } from "./ProductPreview";

export function ProductCard({ product }: { product: Product }) {
  return (
    <HoverCard className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
        <div className="aspect-[16/9] border-b border-line">
          <ProductPreview product={product} />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-faint">
              {product.category}
            </span>
            <StatusBadge status={product.status} />
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight">{product.name}</h3>
          <p className="mt-2 text-muted text-pretty">{product.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {product.technologies.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <ButtonLink href={product.href}>View project</ButtonLink>
          </div>
        </div>
      </article>
    </HoverCard>
  );
}
