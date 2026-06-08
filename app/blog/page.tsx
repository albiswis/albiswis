import Link from "next/link";

export const metadata = {
  title: "Blog | AlbisWis",
  description:
    "Notes, deep-dives, and field reports from the AlbisWis team — building Triton, Forge, Atlas, and Voya.",
};

const posts = [
  {
    date: "Coming soon",
    title: "Why we built Triton — and what it means for healthcare operations.",
    excerpt:
      "A walkthrough of the operational problems that pushed us to build a healthcare-native AI operating system.",
    href: "#",
  },
  {
    date: "Coming soon",
    title: "Predictive maintenance, in production: lessons from Forge customers.",
    excerpt:
      "Real numbers, real failure modes, and what it takes to move from \"we tried it\" to \"it runs the line.\"",
    href: "#",
  },
  {
    date: "Coming soon",
    title: "Atlas, six months in: portfolio intelligence for real estate operators.",
    excerpt:
      "How three AlbisWis customers consolidated property, financial, and project data into one place — and what changed downstream.",
    href: "#",
  },
];

export default function BlogIndex() {
  return (
    <section className="slab slab-light min-h-screen">
      <div className="container-x page-top pb-24 md:pb-32">
        <div className="earmark text-text-muteddark">/ Blog</div>
        <h1
          className="mt-4 max-w-4xl font-display font-normal leading-[1.02] text-bg-dark"
          style={{ fontSize: "clamp(40px, 8vw, 100px)", letterSpacing: "-0.03em" }}
        >
          Notes from the team.
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] text-text-muteddark md:text-[20px]">
          Field reports, product deep-dives, and the engineering and design
          decisions behind Triton, Forge, Atlas, and Voya. Long-form stories
          land here — first posts coming soon.
        </p>

        <ul className="mt-16 border-t border-black/15 md:mt-20">
          {posts.map((p, i) => (
            <li key={i}>
              <Link
                href={p.href}
                className="row-3 group items-baseline border-b border-black/15 py-8 transition hover:bg-black/[0.03] md:py-10"
                aria-disabled={p.href === "#"}
              >
                <div className="earmark text-text-muteddark">{p.date}</div>
                <div>
                  <div className="font-display text-[clamp(22px,2.6vw,32px)] leading-snug text-bg-dark">
                    {p.title}
                  </div>
                  <p className="mt-3 max-w-3xl text-[15px] leading-[1.55] text-text-muteddark md:text-[16px]">
                    {p.excerpt}
                  </p>
                </div>
                <span className="row-3-arrow text-[22px] text-black/30 transition group-hover:translate-x-1 group-hover:text-black">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Subscribe / stay-in-touch */}
        <div className="mt-20 grid gap-4 md:grid-cols-2 md:gap-5">
          <div
            className="flex items-center justify-between gap-6 px-8 py-10 md:px-10 md:py-14"
            style={{ background: "#ececec", color: "#0c0c0c" }}
          >
            <span className="font-display text-[clamp(22px,3vw,40px)] font-normal leading-none tracking-[-0.02em]">
              First post: coming soon
            </span>
            <span className="text-[26px] md:text-[30px]">✦</span>
          </div>
          <Link
            href="/contact/get-started"
            className="group flex items-center justify-between gap-6 px-8 py-10 transition md:px-10 md:py-14"
            style={{ background: "#0c0c0c", color: "#ffffff" }}
          >
            <span className="font-display text-[clamp(22px,3vw,40px)] font-normal leading-none tracking-[-0.02em]">
              Stay in touch
            </span>
            <span className="text-[26px] transition-transform duration-300 group-hover:translate-x-1 md:text-[30px]">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
