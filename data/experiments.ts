export interface Experiment {
  title: string;
  description: string;
  tag: string;
}

export const experiments: Experiment[] = [
  {
    title: "AI Development",
    description:
      "Exploring how AI-assisted development can change the way software is built.",
    tag: "Exploring",
  },
  {
    title: "Developer Tools",
    description:
      "Small tools created to solve problems encountered during development.",
    tag: "Prototyping",
  },
  {
    title: "Product Ideas",
    description:
      "Early ideas and prototypes being explored before becoming full products.",
    tag: "Early stage",
  },
];
