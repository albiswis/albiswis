import Link from "next/link";
import Image from "next/image";

export function SolutionPage({
  tag,
  title,
  lede,
  image,
  bullets,
}: {
  tag: string;
  title: string;
  lede: string;
  image: string;
  bullets: { h: string; p: string }[];
}) {
  return (
    <>
      <section className="slab slab-dark">
        <div className="container-x page-top grid min-h-[80vh] items-end gap-12 pb-20 md:grid-cols-2 md:pb-32">
          <div>
            <div className="earmark text-text-muted">{tag}</div>
            <h1
              className="mt-4 font-display font-normal leading-[1.02] text-white"
              style={{ fontSize: "clamp(36px, 7vw, 100px)", letterSpacing: "-0.03em" }}
            >
              {title}
            </h1>
            <p className="mt-8 max-w-xl text-[20px] text-text-soft/80">{lede}</p>
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
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="slab slab-light">
        <div className="container-x py-28">
          <div className="grid gap-px bg-black/15 md:grid-cols-3">
            {bullets.map((b, i) => (
              <div key={i} className="bg-bg-light p-10">
                <div className="earmark text-text-muteddark">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 font-display text-[28px] leading-tight">{b.h}</div>
                <p className="mt-4 text-[16px] text-text-muteddark">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
