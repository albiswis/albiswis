import Link from "next/link";
import { pressReleases } from "@/lib/content";

export const metadata = { title: "Newsroom | AlbisWis" };

export default function NewsroomPage() {
  return (
    <section className="slab slab-dark min-h-screen">
      <div className="container-x page-top pb-24">
        <div className="earmark text-text-muted">/ Newsroom</div>
        <h1
          className="mt-4 font-display font-normal leading-[1.02] text-white"
          style={{ fontSize: "clamp(36px, 8vw, 100px)", letterSpacing: "-0.03em" }}
        >
          Press releases<br />& announcements.
        </h1>
        <ul
          className="mt-12 border-t border-white/20 md:mt-20"
          style={{ ["--col1" as any]: "140px" }}
        >
          {pressReleases.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="row-3 group items-baseline border-b border-white/20 py-6 transition hover:bg-white/[0.03] md:py-7"
              >
                <div className="earmark text-text-muted">{p.date}</div>
                <div className="font-display text-[clamp(18px,2.2vw,28px)] leading-snug text-white">
                  {p.title}
                </div>
                <span className="row-3-arrow text-[22px] text-white/30 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
