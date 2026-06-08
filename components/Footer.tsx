import Link from "next/link";
import Image from "next/image";

const iconCls = "h-[18px] w-[18px]";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/albiswis/about/?viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconCls}>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.5 8.5h4.37v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v8.38h-4.56v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23H8.5V8.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/albiswis.studio?igsh=dG0xa2dzcmhwNDIz&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={iconCls}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconCls}>
        <path d="M18.244 2H21.5l-7.5 8.59L23 22h-6.844l-5.36-7.027L4.6 22H1.343l8.052-9.22L1 2h7.02l4.844 6.43L18.244 2zm-2.4 18h1.808L7.27 4h-1.94l10.514 16z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconCls}>
        <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.6 4 12 4 12 4s-7.6 0-9.4.4A3 3 0 0 0 .5 6.5C0 8.3 0 12 0 12s0 3.7.5 5.5a3 3 0 0 0 2.1 2.1C4.4 20 12 20 12 20s7.6 0 9.4-.4a3 3 0 0 0 2.1-2.1C24 15.7 24 12 24 12s0-3.7-.5-5.5zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  },
];

const cols = [
  {
    title: "Products",
    items: [
      { label: "Triton — Healthcare", href: "/triton" },
      { label: "Forge — Manufacturing", href: "/warpspeed" },
      { label: "Atlas — Real Estate", href: "/atlas" },
      { label: "Voya — Logistics", href: "/voya" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact/get-started" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "/docs/foundry" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="slab slab-dark border-t border-white/15">
      <div className="container-x py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 font-display text-[22px]">
              <Image src="/logo.png" alt="AlbisWis" width={56} height={56} className="h-14 w-14 object-contain" />
              AlbisWis
            </Link>
            <p className="mt-5 max-w-xs text-[14px] text-text-soft/70">
              Software for the world's most important institutions.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href || "#"}
                  aria-label={s.label}
                  target={s.href ? "_blank" : undefined}
                  rel={s.href ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center border border-white/25 text-text-soft/80 transition hover:bg-white hover:text-bg-dark"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="earmark text-text-muted">{c.title}</div>
              <ul className="mt-4 space-y-3 text-[14px]">
                {c.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-text-soft/80 hover:text-white">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-[12px] text-text-muted md:flex-row">
          <div>© {new Date().getFullYear()} AlbisWis Technologies Inc.</div>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
