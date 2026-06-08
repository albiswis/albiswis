"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { featured } from "@/lib/content";

const DURATION_MS = 6000;
const SLIDE_PCT = 0.95;   // each card = 95% of carousel width
const EDGE_PCT = 0.025;   // ~2.5% peek on each side
const GAP_PX = 16;        // gap between cards

export function FeatureCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stageW, setStageW] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const n = featured.length;

  // Measure stage width
  useEffect(() => {
    if (!stageRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      setStageW(w);
    });
    ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => setI((p) => (p + 1) % n), DURATION_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [i, paused, n]);

  const jump = (idx: number) => setI(((idx % n) + n) % n);
  const go = (delta: number) => jump(i + delta);

  const slideW = stageW * SLIDE_PCT;
  const edgePx = stageW * EDGE_PCT;
  const translatePx = edgePx - i * (slideW + GAP_PX);

  return (
    <section
      className="slab slab-light"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="py-20 md:py-28 px-3 md:px-5">
        {/* Tab pills + See All */}
        <div className="flex items-start justify-between gap-6">
          <div className="-mx-1 flex flex-1 flex-nowrap gap-2 overflow-x-auto pb-2 px-1 scrollbar-thin [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {featured.map((f, idx) => {
              const active = idx === i;
              return (
                <button
                  key={f.tag + idx}
                  onClick={() => jump(idx)}
                  className="relative whitespace-nowrap overflow-hidden px-4 py-2 text-[13px] transition-colors duration-300"
                  style={{
                    background: active ? "#1e2124" : "#ffffff",
                    color: active ? "#ffffff" : "#aaaaaa",
                    border: active ? "1px solid #1e2124" : "1px solid rgba(12,12,12,0.10)",
                    borderRadius: "2px",
                  }}
                >
                  <span className="relative z-10">{f.tag}</span>
                  {active && (
                    <span
                      key={`pb-${i}-${paused ? "p" : "r"}`}
                      aria-hidden
                      className="absolute bottom-0 left-0 h-[2px] bg-white"
                      style={{
                        animation: paused
                          ? "none"
                          : `pillFill ${DURATION_MS}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <Link href="/newsroom" className="btn btn-on-light shrink-0">
            See All <span className="glyph">→</span>
          </Link>
        </div>

        {/* Stage — horizontal slide with peek */}
        <div
          ref={stageRef}
          className="group/stage relative mt-8 overflow-hidden md:mt-12"
        >
          <div
            className="flex"
            style={{
              gap: `${GAP_PX}px`,
              transform: `translateX(${translatePx}px)`,
              transition: stageW
                ? "transform 800ms cubic-bezier(.22,.61,.36,1)"
                : "none",
              willChange: "transform",
            }}
          >
            {featured.map((f, idx) => (
              <Link
                key={f.href}
                href={f.href}
                className="relative shrink-0 overflow-hidden bg-black rounded-md"
                style={{
                  width: stageW ? `${slideW}px` : `${SLIDE_PCT * 100}%`,
                  aspectRatio: "16 / 8.5",
                }}
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="94vw"
                  className="object-cover grayscale contrast-110"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/10 to-transparent" />
                <div
                  className="absolute left-4 top-4 max-w-[min(540px,85%)] p-5 text-white md:left-8 md:top-8 md:p-7"
                  style={{
                    background: "rgba(12,14,16,0.78)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <div className="earmark text-white/70">{f.tag}</div>
                  <div className="mt-3 font-display text-[clamp(22px,3vw,40px)] leading-[1.1]">
                    {f.title}
                    <span className="ml-2 inline-block align-baseline">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Hover arrows — inside the card, bottom corners */}
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.preventDefault();
              go(-1);
            }}
            className="absolute left-[3%] top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/55 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-black hover:opacity-100 group-hover/stage:opacity-100 md:flex"
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.preventDefault();
              go(1);
            }}
            className="absolute right-[3%] top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/55 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-black hover:opacity-100 group-hover/stage:opacity-100 md:flex"
          >
            →
          </button>

          {/* Mobile arrows */}
          <div className="mt-3 flex gap-3 md:hidden">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="flex h-11 flex-1 items-center justify-center border border-black/20 bg-white text-[18px] transition-colors duration-300 hover:bg-black hover:text-white"
            >
              ←
            </button>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="flex h-11 flex-1 items-center justify-center border border-black/20 bg-white text-[18px] transition-colors duration-300 hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pillFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
