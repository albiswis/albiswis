import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { LedeReveal } from "@/components/LedeReveal";
import { platforms, quotes, pressReleases } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="explore" />
      <FeatureCarousel />

      {/* Heading — moved BELOW the carousel */}
      <section className="slab slab-light">
        <div className="container-x pt-20 md:pt-28">
          <div className="earmark text-text-muteddark">/01 — Latest</div>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(34px,5vw,72px)] font-normal leading-[1.05]">
            The AI automation platform for modern enterprise.
          </h2>
        </div>
      </section>

      {/* Big lede paragraph — scroll-reveal */}
      <section className="slab slab-light">
        <div className="container-x py-24 md:py-36">
          <LedeReveal
            tokens={[
              { kind: "text", value: "Our software powers real-time," },
              { kind: "space" },
              { kind: "muted", value: "AI-driven" },
              { kind: "space" },
              {
                kind: "text",
                value:
                  "decisions across critical enterprises and institutions — from the factory floor to the front line.",
              },
            ]}
          />
        </div>
      </section>

      {/* Our Software — redesigned platforms list */}
      <section className="slab slab-light">
        <div className="container-x">
          <h3 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-tight text-bg-dark">
            Our Software
          </h3>

          <div className="mt-10 md:mt-14">
            {platforms.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="group block py-12 transition hover:bg-black/[0.02] md:py-[96px]"
              >
                {/* Mobile layout: name top-left + earmark top-right, description below */}
                <div className="md:hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="font-display font-normal leading-[0.95] tracking-[-0.04em] text-bg-dark"
                      style={{ fontSize: "clamp(48px, 14vw, 88px)" }}
                    >
                      {p.name}
                    </div>
                    <div className="earmark shrink-0 pt-2 text-text-muteddark">
                      /{p.id}
                    </div>
                  </div>
                  <p className="mt-6 max-w-[420px] text-[15px] leading-[1.4] text-bg-dark">
                    {p.blurb}
                  </p>
                </div>

                {/* Desktop layout: description+earmark left, icon middle, huge name right */}
                <div className="hidden md:grid md:grid-cols-[minmax(220px,1fr),minmax(120px,180px),3fr] md:items-center md:gap-8">
                  <div className="flex flex-col">
                    <p className="max-w-[260px] text-[16px] leading-[1.4] text-bg-dark">
                      {p.blurb}
                    </p>
                    <div className="earmark mt-12 text-text-muteddark">
                      /{p.id}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={180}
                      height={180}
                      className="h-32 w-32 object-contain opacity-[0.06] lg:h-40 lg:w-40"
                    />
                  </div>
                  <div
                    className="font-display font-normal leading-[0.95] tracking-[-0.04em] text-bg-dark pl-24 lg:pl-40"
                    style={{
                      fontSize: "clamp(56px, 13vw, 200px)",
                      textAlign: "left",
                    }}
                  >
                    {p.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statement / Careers */}
      <section className="slab slab-light">
        <div className="container-x py-28 md:py-40">
          <div className="earmark text-text-muteddark">/03 — Careers</div>
          <h3 className="mt-6 max-w-5xl font-display text-[clamp(40px,7vw,100px)] font-normal leading-[1.02] text-bg-dark">
            There is so much left to build.
          </h3>
          <p className="mt-8 max-w-2xl text-[20px] text-text-muteddark">
            Our team delivers mission-critical outcomes for the West's most important
            institutions — from the factory floors to the front lines.
          </p>
          <Link href="/careers" className="btn btn-on-light mt-10">
            Learn More <span className="glyph">→</span>
          </Link>
        </div>
      </section>

      {/* Quotes */}
      <section className="slab slab-light">
        <div className="container-x border-t border-black/15 pt-16 md:pt-24">
          <h2 className="font-display text-[clamp(34px,5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em] text-bg-dark">
            What we're hearing from early operators
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] text-text-muteddark md:text-[18px]">
            We're early. Talking to operators across healthcare, manufacturing,
            real estate, and logistics — building from real conversations, not
            assumptions. A few of the things we keep hearing.
          </p>
        </div>
        <div className="container-x py-12 md:py-20">
          <div className="-mx-5 flex gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {quotes.slice(0, 12).map((q, i) => (
              <figure
                key={i}
                className="flex shrink-0 flex-col justify-between p-6 md:p-7"
                style={{
                  width: "clamp(260px, 22vw, 320px)",
                  minHeight: 420,
                  background: "#ececec",
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                }}
              >
                <div className="earmark text-text-muteddark">{q.company}</div>
                <div className="mt-auto pt-12">
                  <blockquote className="text-[15px] leading-[1.55] text-bg-dark md:text-[16px]">
                    "{q.text}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-black/15 pt-4 text-[12px] text-text-muteddark">
                    — {q.who}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="slab slab-light">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="earmark text-text-muteddark">/05 — Latest News</div>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(34px,5vw,72px)] font-normal leading-[1.05]">
                From the newsroom.
              </h2>
            </div>
            <Link href="/newsroom" className="btn btn-on-light">
              See All <span className="glyph">→</span>
            </Link>
          </div>
          <ul
            className="mt-12 divide-y divide-black/15 border-y border-black/15 md:mt-14"
            style={{ ["--col1" as any]: "140px" }}
          >
            {pressReleases.slice(0, 5).map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="row-3 group items-baseline py-6 transition hover:bg-black/[0.03]"
                >
                  <div className="earmark text-text-muteddark">{p.date}</div>
                  <div className="font-display text-[clamp(20px,2.2vw,28px)] leading-snug">
                    {p.title}
                  </div>
                  <span className="row-3-arrow text-[22px] text-black/30 transition group-hover:translate-x-1 group-hover:text-black">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — two big side-by-side action cards */}
      <section className="slab slab-light">
        <div className="container-x border-t border-black/15 py-10 md:py-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <Link
              href="/contact/get-started"
              className="group flex items-center justify-between gap-6 px-8 py-10 transition md:px-10 md:py-14"
              style={{ background: "#ececec", color: "#0c0c0c" }}
            >
              <span className="font-display text-[clamp(28px,3.6vw,48px)] font-normal leading-none tracking-[-0.02em]">
                Request a Demo
              </span>
              <span className="text-[28px] transition-transform duration-300 group-hover:translate-x-1 md:text-[32px]">
                →
              </span>
            </Link>
            <Link
              href="/contact/get-started"
              className="group flex items-center justify-between gap-6 px-8 py-10 transition md:px-10 md:py-14"
              style={{ background: "#0c0c0c", color: "#ffffff" }}
            >
              <span className="font-display text-[clamp(28px,3.6vw,48px)] font-normal leading-none tracking-[-0.02em]">
                Start Building
              </span>
              <span className="text-[28px] transition-transform duration-300 group-hover:translate-x-1 md:text-[32px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
