import Image from "next/image";
import type { Product } from "@/data/products";

/** Uses the product image when provided; otherwise an abstract, clearly non-literal placeholder. */
export function ProductPreview({ product }: { product: Product }) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={`${product.name} preview`}
        width={960}
        height={600}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Abstract preview placeholder for ${product.name}`}
      className="relative flex h-full w-full flex-col gap-2 bg-gradient-to-br from-surface-2 to-surface p-4"
    >
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-line-strong" />
        <span className="size-1.5 rounded-full bg-line-strong" />
        <span className="size-1.5 rounded-full bg-line-strong" />
      </div>
      <div aria-hidden="true" className="mt-2 grid flex-1 grid-cols-3 gap-2">
        <div className="col-span-1 space-y-2 rounded-md border border-line p-2">
          <div className="h-1.5 w-2/3 rounded bg-line-strong" />
          <div className="h-1.5 w-full rounded bg-line" />
          <div className="h-1.5 w-4/5 rounded bg-line" />
        </div>
        <div className="col-span-2 flex flex-col justify-between rounded-md border border-line p-2">
          <div className="h-1.5 w-1/3 rounded bg-accent/50" />
          <div className="flex items-end gap-1.5">
            {[40, 65, 30, 80, 55, 70].map((h, i) => (
              <span key={i} className="w-full rounded-sm bg-accent/20" style={{ height: `${h * 0.5}px` }} />
            ))}
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-widest text-faint">
        Preview soon
      </span>
    </div>
  );
}
