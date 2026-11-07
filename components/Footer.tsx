import { site } from "@/lib/site";

const items = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "YouTube", href: site.links.youtube },
  { label: "Email", href: site.links.email },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
        </div>
        <nav aria-label="Social">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {items.map((i) => (
              <li key={i.label}>
                {i.href ? (
                  <a
                    href={i.href}
                    className="text-muted transition-colors hover:text-fg"
                    {...(/^https?:/.test(i.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {i.label}
                  </a>
                ) : (
                  <span className="text-faint" title="Link coming soon">{i.label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="container-x mt-8 text-xs text-faint">&copy; {site.year} {site.name}</p>
    </footer>
  );
}
