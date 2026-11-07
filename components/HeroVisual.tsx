"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";

const stages = [
  { key: "IDEA", caption: "A problem worth solving" },
  { key: "CODE", caption: "Build, test, iterate" },
  { key: "PRODUCT", caption: "Something people can use" },
];

export function HeroVisual() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % stages.length), 2600);
    return () => clearInterval(t);
  }, [reduce, paused]);

  return (
    <div
      className="relative w-full max-w-sm rounded-2xl border border-line bg-surface/70 p-6 shadow-[0_0_80px_-30px_rgba(110,231,200,0.35)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-label="Ideas to code to products"
    >
      <div className="mb-5 flex items-center gap-1.5" aria-hidden="true">
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-faint">
          pipeline
        </span>
      </div>

      <ol className="relative">
        {stages.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.key} className="relative pb-8 last:pb-0">
              {i < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-line-strong"
                >
                  <m.span
                    className="block w-full origin-top bg-accent"
                    animate={{ height: i < active ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </span>
              )}
              <button
                type="button"
                onClick={() => setActive(i)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                aria-pressed={on}
                className="flex w-full items-center gap-4 text-left"
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full border font-mono text-xs transition-all duration-500 ${
                    on
                      ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_-4px_rgba(110,231,200,0.6)]"
                      : i < active
                        ? "border-accent/40 text-accent/70"
                        : "border-line-strong text-faint"
                  }`}
                >
                  0{i + 1}
                </span>
                <span>
                  <span
                    className={`block font-mono text-sm tracking-widest transition-colors duration-500 ${
                      on ? "text-fg" : "text-muted"
                    }`}
                  >
                    {s.key}
                  </span>
                  <span className="block text-xs text-faint">{s.caption}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
