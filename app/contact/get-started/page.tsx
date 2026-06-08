import Script from "next/script";

export const metadata = {
  title: "Get Started | AlbisWis",
  description:
    "Talk to the AlbisWis team — request a demo or start building on Triton, Forge, Atlas, or Voya.",
};

export default function GetStartedPage() {
  return (
    <section className="slab slab-light min-h-screen">
      <div className="container-x page-top pb-20">
        <div className="earmark text-text-muteddark">/ Get Started</div>
        <h1
          className="mt-4 max-w-3xl font-display font-normal leading-[1.02] text-bg-dark"
          style={{ fontSize: "clamp(36px, 7vw, 96px)", letterSpacing: "-0.03em" }}
        >
          Tell us about your operation.
        </h1>
        <p className="mt-6 max-w-xl text-[18px] text-text-muteddark">
          Whether you're requesting a demo or starting to build, a quick answer
          to the questions below puts you in front of the right team.
        </p>

        {/* Typeform inline embed */}
        <div className="mt-12 overflow-hidden border border-black/15 bg-white">
          <div
            data-tf-live="01KTHNNYQ7JYHMGT4E3KBSE34K"
            style={{ minHeight: "720px" }}
          />
        </div>
      </div>

      <Script
        src="//embed.typeform.com/next/embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
