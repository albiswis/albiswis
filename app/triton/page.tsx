import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Triton | AlbisWis",
  description:
    "Triton is an AI operating system that automates healthcare document processing, patient administration, compliance workflows, and operational tasks.",
};

const useCases = [
  "Medical document processing",
  "Patient administration workflows",
  "Compliance reporting",
  "Meeting intelligence",
  "Healthcare knowledge management",
  "Operational automation",
];

const outcomes = [
  { h: "Reduced administrative workload", p: "Free clinical and operational teams from repetitive paperwork." },
  { h: "Faster document processing", p: "Process intake forms, claims, and reports in minutes, not days." },
  { h: "Improved operational efficiency", p: "Unify systems and surface bottlenecks before they cost you." },
  { h: "Better compliance visibility", p: "Audit-ready trails for every action and decision the system takes." },
];

export default function Triton() {
  return (
    <>
      <section className="slab slab-dark">
        <div className="container-x page-top grid min-h-[80vh] items-end gap-12 pb-20 md:grid-cols-2 md:pb-32">
          <div>
            <div className="earmark text-text-muted">Triton</div>
            <h1
              className="mt-4 font-display font-normal leading-[1.02] text-white"
              style={{ fontSize: "clamp(36px, 7vw, 100px)", letterSpacing: "-0.03em" }}
            >
              Automate Healthcare Operations, Documentation & Workflows.
            </h1>
            <p className="mt-8 max-w-xl text-[20px] text-text-soft/80">
              Triton helps healthcare organizations automate document processing, patient
              administration, reporting, compliance workflows, and operational tasks through a
              unified AI operating system.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact/get-started" className="btn btn-on-dark">
                Request a Demo <span className="glyph">→</span>
              </Link>
              <Link href="/newsroom" className="btn btn-on-dark">
                Read More <span className="glyph">→</span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/15">
            <Image
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80"
              alt="Triton — AI for healthcare operations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale contrast-110"
            />
          </div>
        </div>
      </section>

      {/* Description / value */}
      <section className="slab slab-light">
        <div className="container-x grid gap-8 py-20 md:grid-cols-[1fr,2fr] md:gap-16 md:py-28">
          <div className="earmark text-text-muteddark">/01 — What it does</div>
          <p className="font-display text-[clamp(22px,3.5vw,50px)] font-normal leading-[1.2]">
            Connect healthcare systems, records, emails, documents, and workspaces into one
            intelligent platform that reduces manual work and accelerates decision-making.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="slab slab-dark">
        <div className="container-x py-20 md:py-28">
          <div className="earmark text-text-muted">/02 — Use Cases</div>
          <h2
            className="mt-4 max-w-3xl font-display font-normal leading-[1.05] text-white"
            style={{ fontSize: "clamp(30px, 5vw, 72px)", letterSpacing: "-0.03em" }}
          >
            Where Triton goes to work.
          </h2>
          <ul className="mt-10 border-t border-white/20">
            {useCases.map((c, i) => (
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

      {/* Outcomes */}
      <section className="slab slab-light">
        <div className="container-x py-20 md:py-28">
          <div className="earmark text-text-muteddark">/03 — Business Outcomes</div>
          <h2
            className="mt-4 max-w-3xl font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(30px, 5vw, 72px)", letterSpacing: "-0.03em" }}
          >
            What you can expect.
          </h2>
          <div className="mt-12 grid gap-px bg-black/15 md:grid-cols-2">
            {outcomes.map((o, i) => (
              <div key={i} className="bg-bg-light p-8 md:p-10">
                <div className="earmark text-text-muteddark">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 font-display text-[24px] leading-tight md:text-[28px]">
                  {o.h}
                </div>
                <p className="mt-3 text-[16px] text-text-muteddark">{o.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="slab slab-dark">
        <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-24">
          <h3 className="font-display text-[clamp(28px,5vw,60px)] font-normal leading-[1.05] text-white">
            See Triton inside your organization.
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/get-started" className="btn btn-on-dark">
              Request a Demo <span className="glyph">→</span>
            </Link>
            <Link href="/developers" className="btn btn-on-dark">
              Talk to Sales <span className="glyph">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
