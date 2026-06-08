"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const headerEl = document.getElementById("site-header");

    const detect = () => {
      const probeY = (headerEl?.getBoundingClientRect().bottom ?? 90) + 20;
      const probeX = 40;
      const prev = headerEl?.style.pointerEvents;
      if (headerEl) headerEl.style.pointerEvents = "none";
      const el = document.elementFromPoint(probeX, probeY);
      if (headerEl) headerEl.style.pointerEvents = prev ?? "";

      if (!el) return;
      const slab = (el as HTMLElement).closest(
        ".slab-light, .slab-dark, .slab-surface, [data-theme]"
      ) as HTMLElement | null;
      if (!slab) {
        setTheme("dark");
        return;
      }
      const dt = slab.dataset.theme as "light" | "dark" | undefined;
      if (dt === "light" || dt === "dark") {
        setTheme(dt);
        return;
      }
      if (slab.classList.contains("slab-light")) setTheme("light");
      else setTheme("dark");
    };

    detect();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(detect);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isLight = theme === "light";
  const textColor = isLight ? "#0c0c0c" : "#ffffff";
  const borderColor = isLight ? "rgba(12,12,12,0.55)" : "rgba(255,255,255,0.7)";

  return (
    <>
      {/* Top bar — logo always; actions only on md+ */}
      <header
        id="site-header"
        className="fixed left-0 right-0 top-0 z-50 flex h-[80px] items-center justify-between px-5 sm:px-8 md:left-4 md:right-4 md:top-3 md:h-[88px] md:rounded-[10px] md:px-8"
        style={{
          background: isLight
            ? "hsla(0,0%,100%,0.55)"
            : "hsla(0,0%,8%,0.55)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          color: textColor,
          transition: "background-color .35s ease, color .35s ease",
        }}
      >
        <Link
          href="/"
          className="flex items-center text-[18px] font-medium tracking-tight md:text-[22px]"
          style={{ color: textColor, transition: "color .35s ease" }}
        >
          <Image
            src="/logo.png"
            alt="AlbisWis"
            width={72}
            height={72}
            className="h-11 w-11 object-contain md:h-[56px] md:w-[56px]"
            style={{
              filter: isLight ? "invert(1) brightness(0.05)" : "none",
              transition: "filter .35s ease",
              transform: "scale(1.6)",
              transformOrigin: "center",
            }}
            priority
          />
          <span className="-ml-1 md:-ml-2">AlbisWis</span>
        </Link>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact/get-started"
            className="btn"
            style={{ color: textColor, borderColor }}
          >
            <span className="glyph up">↖</span>
            Get Started
          </Link>
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center border"
            style={{ color: textColor, borderColor }}
          >
            ⌕
          </button>
          <button
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center border"
            style={{ color: textColor, borderColor }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile bottom bar — menu/search on the left, Get Started on the right */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-center justify-between px-4 pb-4 md:hidden">
        <div
          className="pointer-events-auto flex items-center"
          style={{
            background: "#ffffff",
            color: "#0c0c0c",
            border: "1px solid rgba(12,12,12,0.15)",
          }}
        >
          <button
            aria-label="Menu"
            className="flex h-12 w-12 items-center justify-center text-[18px] transition hover:bg-black hover:text-white"
          >
            ☰
          </button>
          <div className="h-8 w-px bg-black/15" />
          <button
            aria-label="Search"
            className="flex h-12 w-12 items-center justify-center text-[18px] transition hover:bg-black hover:text-white"
          >
            ⌕
          </button>
        </div>
        <Link
          href="/contact/get-started"
          className="pointer-events-auto flex h-12 items-center justify-center px-6 text-[15px] font-medium transition hover:bg-black hover:text-white"
          style={{
            background: "#ffffff",
            color: "#0c0c0c",
            border: "1px solid rgba(12,12,12,0.15)",
          }}
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
