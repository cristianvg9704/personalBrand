export type ProductStatus = "Live" | "Building" | "Experiment" | "Archived";

export interface Product {
  slug: string;
  name: string;
  description: string;
  status: ProductStatus;
  category: string;
  technologies: string[];
  /** Optional path under /public. When absent, an abstract preview is drawn. */
  image?: string;
  /** null = no public URL yet. */
  href: string | null;
}

export const products: Product[] = [
  {
    slug: "newmycar",
    name: "NewMyCar",
    description:
      "A platform for managing your car, expenses, maintenance and income.",
    status: "Building",
    category: "Mobile app",
    technologies: ["Flutter", "Supabase"],
    href: null,
  },
];

/** The project shown in the "Currently building" section. */
export const currentProjectSlug = "newmycar";
