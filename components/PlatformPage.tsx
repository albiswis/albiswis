import Link from "next/link";

export function PlatformPage({
  name,
  id,
  tagline,
  description,
  capabilities,
}: {
  name: string;
  id: string;
  tagline: string;
  description: string;
  capabilities: string[];
}) {
  return (
    <>
      <section className="slab slab-dark min-h-[80vh]">
        <div className="container-x page-top flex min-h-[80vh] flex-col justify-end pb-20 md:pb-32">
          <div className="earmark text-text-muted">/{id}</div>
          <h1
            className="mt-4 font-display font-normal leading-[1.0] text-white"
            style={{ fontSize: "clamp(56px, 14vw, 200px)", letterSpacing: "-0.04em" }}
          >
            {name}
          </h1>
          <p className="mt-8 max-w-2xl text-[24px] text-text-soft/80">{tagline}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact/get-started" className="btn btn-on-dark">
              Request a Demo <span className="glyph">→</span>
            </Link>
            <Link href="/developers" className="btn btn-on-dark">
              Start Building <span className="glyph">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="slab slab-light">
        <div className="container-x grid gap-8 py-20 md:grid-cols-[1fr,2fr] md:gap-16 md:py-28">
          <div className="earmark text-text-muteddark">/01 — What it does</div>
          <p className="font-display text-[clamp(22px,3.5vw,50px)] font-normal leading-[1.2]">
            {description}
          </p>
        </div>
      </section>
      <section className="slab slab-dark">
        <div className="container-x py-20 md:py-28">
          <div className="earmark text-text-muted">/02 — Capabilities</div>
          <ul className="mt-8 border-t border-white/20">
            {capabilities.map((c, i) => (
              <li
                key={i}
                className="row-3 items-baseline border-b border-white/20 py-6 md:py-8"
              >
                <div className="earmark text-text-muted">/{String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-[clamp(18px,2.2vw,28px)] leading-snug text-white">
                  {c}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
