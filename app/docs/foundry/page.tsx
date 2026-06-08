import Link from "next/link";

export const metadata = { title: "Foundry Docs | AlbisWis" };

const groups = [
  {
    title: "Architecture",
    items: [
      { label: "Ontology System", href: "/docs/foundry", blurb: "How objects, links, and actions form the backbone of every Foundry workflow." },
      { label: "Consumer Mode — Public Apps", href: "/docs/foundry", blurb: "Supported features and patterns for publishing Foundry-powered consumer applications." },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Peer Manager — File Peering", href: "/docs/foundry", blurb: "Configure peer-to-peer file replication across Foundry instances." },
      { label: "Recipes — Notifications", href: "/docs/foundry", blurb: "Wire up recipe notifications for failures, retries, and SLA breaches." },
    ],
  },
];

export default function FoundryDocs() {
  return (
    <section className="slab slab-light min-h-screen">
      <div className="container-x page-top pb-24 md:pb-32">
        <div className="earmark text-text-muteddark">/ Docs · Foundry</div>
        <h1
          className="mt-4 font-display font-normal leading-[1.02]"
          style={{ fontSize: "clamp(40px, 7vw, 100px)", letterSpacing: "-0.03em" }}
        >
          Foundry Documentation.
        </h1>
        <p className="mt-8 max-w-2xl text-[20px] text-text-muteddark">
          Reference material for architects, platform engineers, and developers building on
          AlbisWis Foundry.
        </p>

        <div className="mt-20 space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="earmark text-text-muteddark">/ {g.title}</div>
              <div className="mt-6 grid gap-px bg-black/15 md:grid-cols-2">
                {g.items.map((it) => (
                  <Link
                    key={it.label}
                    href={it.href}
                    className="group block bg-bg-light p-10 transition hover:bg-black hover:text-white"
                  >
                    <div className="font-display text-[28px] leading-tight">{it.label}</div>
                    <p className="mt-4 text-[16px] text-text-muteddark transition group-hover:text-white/70">
                      {it.blurb}
                    </p>
                    <div className="mt-8 text-[14px]">
                      Read <span className="inline-block transition group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
