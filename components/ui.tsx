import type { ReactNode } from "react";
import { site, type LinkKey } from "@/lib/site";
import type { ProductStatus } from "@/data/products";
import { Reveal } from "./Motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98]";
const variants = {
  primary: "bg-fg text-bg hover:bg-white hover:shadow-[0_0_24px_-4px_rgba(110,231,200,0.45)]",
  secondary: "border border-line-strong text-fg hover:border-faint hover:bg-surface-2",
  ghost: "text-muted hover:text-fg",
} as const;

export function ButtonLink({
  href,
  variant = "secondary",
  children,
  className = "",
}: {
  /** null renders a non-interactive "coming soon" placeholder. */
  href: string | null;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Link coming soon"
        className={`${base} cursor-not-allowed border border-dashed border-line-strong text-faint ${className}`}
      >
        {children}
        <span className="font-mono text-[10px] uppercase tracking-wider">Soon</span>
      </span>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function siteLink(key: LinkKey): string | null {
  return site.links[key];
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted text-pretty">{subtitle}</p>}
    </Reveal>
  );
}

const statusStyles: Record<ProductStatus, { dot: string; text: string; ring: string }> = {
  Live: { dot: "bg-emerald-400", text: "text-emerald-300", ring: "border-emerald-400/30 bg-emerald-400/10" },
  Building: { dot: "bg-accent animate-pulse", text: "text-accent", ring: "border-accent/30 bg-accent/10" },
  Experiment: { dot: "bg-accent-2", text: "text-accent-2", ring: "border-accent-2/30 bg-accent-2/10" },
  Archived: { dot: "bg-faint", text: "text-muted", ring: "border-line-strong bg-surface-2" },
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${s.ring} ${s.text}`}
    >
      <span aria-hidden="true" className={`size-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
