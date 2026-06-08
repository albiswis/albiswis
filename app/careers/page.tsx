import Link from "next/link";

export const metadata = {
  title: "Careers | AlbisWis",
  description:
    "We're not hiring publicly yet — but if you want to build the AI operating system for the world's most critical operations, get in touch.",
};

export default function CareersPage() {
  return (
    <section className="slab slab-light min-h-screen">
      <div className="container-x page-top pb-24 md:pb-32">
        <div className="earmark text-text-muteddark">/ Careers</div>
        <h1
          className="mt-4 max-w-4xl font-display font-normal leading-[1.02] text-bg-dark"
          style={{ fontSize: "clamp(40px, 8vw, 100px)", letterSpacing: "-0.03em" }}
        >
          No open roles right now.
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] text-text-muteddark md:text-[20px]">
          We're heads down building Triton, Forge, Atlas, and Voya. There aren't
          any public job listings yet — but if you think you should be on the
          team, we'd still like to hear from you.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
          <Link
            href="mailto:founders@albiswis.com?subject=Careers%20%E2%80%94%20I%20want%20to%20build%20at%20AlbisWis"
            className="group flex items-center justify-between gap-6 px-8 py-10 transition md:px-10 md:py-14"
            style={{ background: "#0c0c0c", color: "#ffffff" }}
          >
            <span className="font-display text-[clamp(24px,3.4vw,44px)] font-normal leading-none tracking-[-0.02em]">
              Get in touch
            </span>
            <span className="text-[26px] transition-transform duration-300 group-hover:translate-x-1 md:text-[32px]">
              →
            </span>
          </Link>
          <Link
            href="/blog"
            className="group flex items-center justify-between gap-6 px-8 py-10 transition md:px-10 md:py-14"
            style={{ background: "#ececec", color: "#0c0c0c" }}
          >
            <span className="font-display text-[clamp(24px,3.4vw,44px)] font-normal leading-none tracking-[-0.02em]">
              Follow the blog
            </span>
            <span className="text-[26px] transition-transform duration-300 group-hover:translate-x-1 md:text-[32px]">
              →
            </span>
          </Link>
        </div>

        <div className="mt-20 max-w-2xl border-t border-black/15 pt-8 text-[14px] text-text-muteddark">
          Direct: <a href="mailto:founders@albiswis.com" className="text-bg-dark underline">founders@albiswis.com</a>
        </div>
      </div>
    </section>
  );
}
