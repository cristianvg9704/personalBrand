import type { Experiment } from "@/data/experiments";
import { HoverCard } from "./Motion";

export function ExperimentCard({ experiment, index }: { experiment: Experiment; index: number }) {
  return (
    <HoverCard className="h-full">
      <article className="flex h-full flex-col rounded-2xl border border-dashed border-line-strong bg-surface/50 p-6 transition-colors hover:border-accent-2/50">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-faint">EXP-{String(index + 1).padStart(2, "0")}</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-2">
            {experiment.tag}
          </span>
        </div>
        <h3 className="mt-6 text-lg font-semibold tracking-tight">{experiment.title}</h3>
        <p className="mt-2 text-muted text-pretty">{experiment.description}</p>
      </article>
    </HoverCard>
  );
}
