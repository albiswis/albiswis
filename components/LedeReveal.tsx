"use client";

import { useEffect, useRef, useState } from "react";

type Token =
  | { kind: "text"; value: string }
  | { kind: "muted"; value: string }
  | { kind: "space" };

export function LedeReveal({ tokens }: { tokens: Token[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      // Start when the top of the element reaches 90% down the viewport,
      // finish when the bottom of the element passes 25% from the top.
      const startTop = wh * 0.9;
      const endTop = wh * 0.2 - rect.height * 0.5;
      const range = startTop - endTop;
      const p = range > 0 ? (startTop - rect.top) / range : 0;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Flatten tokens into per-word spans (preserving spaces inline)
  const words: { value: string; muted: boolean }[] = [];
  for (const t of tokens) {
    if (t.kind === "space") {
      words.push({ value: " ", muted: false });
      continue;
    }
    const parts = t.value.split(/(\s+)/);
    for (const p of parts) {
      if (!p) continue;
      words.push({ value: p, muted: t.kind === "muted" });
    }
  }

  // Drop pure-whitespace tokens for counting, but keep them in render
  const wordCount = words.filter((w) => w.value.trim().length > 0).length;
  let nonSpaceIdx = -1;

  return (
    <p
      ref={ref}
      className="font-display font-normal leading-[1.15] tracking-[-0.02em] text-[clamp(28px,5vw,64px)]"
    >
      {words.map((w, i) => {
        const isWord = w.value.trim().length > 0;
        if (isWord) nonSpaceIdx += 1;
        // Threshold at which this word fully reveals — earlier words first.
        const t = wordCount > 1 ? nonSpaceIdx / (wordCount - 1) : 0;
        // Soft window per word so multiple darken simultaneously, but in order.
        const local = Math.max(0, Math.min(1, (progress - t * 0.7) * 3));
        const baseInk = 0.18 + 0.82 * local; // dark text
        const mutedInk = 0.25 + 0.55 * local; // muted text
        const color = w.muted
          ? `rgba(120, 120, 120, ${mutedInk})`
          : `rgba(12, 12, 12, ${baseInk})`;
        return (
          <span
            key={i}
            style={{
              color,
              transition: "color 60ms linear",
              whiteSpace: w.value === " " ? "pre" : undefined,
            }}
          >
            {w.value}
          </span>
        );
      })}
    </p>
  );
}
