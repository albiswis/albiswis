const line1 = ["AI-Powered", "Automation"];
const line2 = ["for", "Every", "Decision"];

export function Hero() {
  return (
    <>
      {/* Fixed full-bleed video */}
      <div
        aria-hidden
        className="fixed inset-0 z-0"
        style={{ background: "var(--hero-video-bg)" }}
      >
        <video
          className="h-full w-full object-cover"
          style={{ objectPosition: "center center", filter: "brightness(.7) saturate(.85)" }}
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Hero content layer */}
      <header
        className="relative z-[5] grid min-h-screen place-items-center px-5 py-24 text-center md:px-10 md:py-[100px]"
      >
        <div className="overflow-hidden">
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(40px, 7.2vw, 80px)",
              lineHeight: "1.05",
              letterSpacing: "-0.04em",
              fontWeight: 500,
              fontFeatureSettings: '"ss04" on',
              padding: "5vh 0",
            }}
          >
            <span className="block">
              {line1.map((w, i) => (
                <span
                  key={i}
                  className="hero-word"
                  style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                >
                  {w}
                </span>
              ))}
            </span>
            <span className="block">
              {line2.map((w, i) => (
                <span
                  key={i}
                  className="hero-word"
                  style={{ animationDelay: `${0.5 + i * 0.05}s` }}
                >
                  {w}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <a
          href="#explore"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/90"
          aria-label="Scroll to explore"
        >
          <svg
            className="hero-arrow mx-auto block"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="21" cy="21" r="20.5" stroke="currentColor" opacity=".4" />
            <path
              d="M21 13v15M15 22l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="hero-scroll mt-3 text-[14px] tracking-wide text-white/85">
            Scroll to Explore
          </p>
        </a>
      </header>
    </>
  );
}
