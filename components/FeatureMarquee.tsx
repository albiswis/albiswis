import Link from "next/link";
import { featured } from "@/lib/content";

export function FeatureMarquee() {
  const items = [...featured, ...featured];
  return (
    <section className="overflow-hidden border-y border-black/10 bg-white py-6">
      <div className="marquee gap-6 px-6">
        {items.map((f, i) => (
          <Link
            key={i}
            href={f.href}
            className="group flex w-[360px] shrink-0 flex-col rounded-2xl border border-black/10 bg-paper p-4 transition hover:border-ink/30 hover:shadow-sm"
          >
            <div
              className="h-40 w-full rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${f.image})` }}
            />
            <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-ink/50">
              {f.tag}
            </div>
            <div className="mt-1 text-sm font-medium leading-snug group-hover:text-accent">
              {f.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
