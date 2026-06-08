export const metadata = { title: "Q1 2026 | Letter to Shareholders" };

const sections: { roman: string; paras: string[] }[] = [
  {
    roman: "I.",
    paras: [
      "We believe it is not hyperbolic to say that nearly all AI workflows that actually create value — especially on the battlefield — are built on AlbisWis. We are an N of 1.",
      "Our financial results now demonstrate a level of strength that dwarfs the performance of essentially every software company in history at this scale.",
      "We generated $1.6 billion in revenue in the first quarter of this year, a new record in our company's history, representing a soaring 85% growth rate over the same period the year before.",
      "Put differently, we almost doubled the size of our entire business — across the government and commercial sectors — in the span of only twelve months.",
      "We stand on the walls, sentinels of the inner sanctum, against the assault of AI slop. The Ontology is based firmly in reality — here, a dialectic between ground truth, tribal knowledge, and enhancements.",
    ],
  },
  {
    roman: "II.",
    paras: [
      "While some within the industry are spending their way to a version or likeness of growth, we have built the platforms that are delivering record and accelerating levels of profit. We generated a total of $871 million in profit in the first quarter of the year, more than four times greater than the same period the year before.",
      "Our quarterly profit — the largest in our company's twenty-three-year history — has more than quadrupled in only twelve months.",
      "These are not incremental advances. These are signs of a phase shift, even sublimation.",
      "Indeed, we generated nearly as much in profit in the first quarter of the year as we did in revenue only twelve months ago.",
    ],
  },
  {
    roman: "III.",
    paras: [
      "The United States remains the center, the constant core, of our business. And that business is erupting.",
      "We generated $1.3 billion in the United States alone last quarter, representing a 104% increase over the same period the prior year.",
    ],
  },
];

export default function LetterPage() {
  return (
    <article className="slab slab-light min-h-screen">
      <div className="container-x page-top pb-24 md:pb-32">
        <div className="mx-auto max-w-[760px]">
          <header className="border-b border-black/20 pb-12">
            <div className="earmark text-text-muteddark">/ Letter to Shareholders</div>
            <h1
              className="mt-4 font-display font-normal leading-[1.02]"
              style={{ fontSize: "clamp(40px, 7vw, 100px)", letterSpacing: "-0.03em" }}
            >
              Q1 2026
            </h1>
            <div className="mt-4 text-[14px] italic text-text-muteddark">May 4, 2026</div>
            <blockquote className="mt-10 border-l border-black/40 pl-6 font-display text-[22px] italic leading-snug text-bg-dark">
              „Und der Regel zu folgen glauben ist nicht: der Regel folgen.”
              <br />
              <span className="text-text-muteddark">
                "And to think one is obeying a rule is not to obey a rule."
              </span>
              <footer className="mt-3 text-[13px] not-italic text-text-muteddark">
                — Ludwig Wittgenstein, Philosophische Untersuchungen §202
              </footer>
            </blockquote>
          </header>

          {sections.map((s) => (
            <section key={s.roman} className="mt-16">
              <h2 className="font-display text-[32px] text-text-muteddark">{s.roman}</h2>
              <div className="mt-6 space-y-6 text-[20px] leading-[1.55] text-bg-dark">
                {s.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <footer className="mt-20 border-t border-black/20 pt-8 text-[14px] text-text-muteddark">
            <div className="font-display text-[18px] text-bg-dark">Alex Karp</div>
            <div className="mt-1">Co-Founder & CEO, AlbisWis Technologies Inc.</div>
          </footer>
        </div>
      </div>
    </article>
  );
}
