import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | AlbisWis",
  description:
    "How AlbisWis collects, uses, shares, and protects personal information across our website and platforms (Triton, Forge, Atlas, Voya).",
};

const effective = "June 7, 2026";

const sections = [
  {
    id: "scope",
    h: "1. Scope of this Policy",
    body: [
      "This Privacy Policy (\"Policy\") describes how AlbisWis Technologies Inc. (\"AlbisWis\", \"we\", \"our\", or \"us\") collects, uses, shares, and protects personal information when you visit our websites, interact with our marketing materials, or use any of our products — including Triton, Forge, Atlas, and Voya (collectively, the \"Services\").",
      "This Policy applies to personal information processed by AlbisWis as an independent controller. When AlbisWis processes data on behalf of an enterprise customer in connection with their use of our Services, we act as a processor and the customer's own privacy policy governs that processing. In those cases, please review your organization's privacy notice.",
    ],
  },
  {
    id: "info-we-collect",
    h: "2. Information We Collect",
    body: [
      "Information you provide directly. When you fill out a form, request a demo, subscribe to communications, attend an event, or otherwise contact us, we collect the information you choose to share — for example your name, business email address, employer, job title, country, and the contents of your message.",
      "Information collected automatically. When you visit our websites we automatically receive certain technical information from your device and browser — including IP address, user-agent string, referring URL, pages viewed, links clicked, language preference, and approximate location derived from IP. We use cookies, pixels, and similar technologies to collect this information (see Section 8).",
      "Information from third parties. We may receive information about you from our business partners, event organizers, social-media platforms when you interact with our presence on them, security vendors, and publicly available sources. We combine this with other information we hold about you.",
    ],
  },
  {
    id: "how-we-use",
    h: "3. How We Use Information",
    body: [
      "We use personal information to: (a) operate, maintain, and improve our websites and Services; (b) respond to inquiries and provide customer support; (c) communicate with you about products, events, security advisories, and policy updates; (d) personalize and measure our marketing; (e) detect, investigate, and prevent fraud, abuse, and security incidents; (f) comply with legal obligations and enforce our agreements; and (g) carry out any other purpose disclosed to you at the point of collection.",
      "Our legal bases for processing under GDPR are: your consent, performance of a contract with you, our legitimate interests (e.g., running and securing our business), and compliance with legal obligations.",
    ],
  },
  {
    id: "sharing",
    h: "4. How We Share Information",
    body: [
      "Service providers. We share personal information with vendors who process it on our behalf under contractual obligations of confidentiality and data protection (e.g., hosting, analytics, CRM, email delivery, support tooling).",
      "Affiliates. We share information within the AlbisWis corporate family for the purposes described in this Policy.",
      "Business transfers. In a merger, acquisition, financing, reorganization, or sale of assets, personal information may be transferred subject to standard confidentiality obligations.",
      "Legal and safety. We may disclose information when required by law, court order, or governmental request, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, the safety of others, or to investigate fraud.",
      "We do not sell personal information for monetary consideration. Sharing for cross-context behavioral advertising may qualify as a \"sale\" or \"sharing\" under certain U.S. state laws — see Section 7 for your rights.",
    ],
  },
  {
    id: "retention",
    h: "5. Data Retention",
    body: [
      "We retain personal information for as long as needed to fulfill the purposes described in this Policy, including to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary by category of data and the context in which it was collected.",
    ],
  },
  {
    id: "security",
    h: "6. Security",
    body: [
      "We maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, disclosure, alteration, and destruction. These include encryption in transit, access controls, logging and monitoring, vulnerability management, and personnel training. No system is perfectly secure; we cannot guarantee absolute security.",
    ],
  },
  {
    id: "rights",
    h: "7. Your Rights and Choices",
    body: [
      "Depending on where you live, you may have the right to (i) access the personal information we hold about you; (ii) request correction or deletion; (iii) object to or restrict certain processing; (iv) withdraw consent where processing is based on consent; (v) port your data; and (vi) opt out of certain sharing or targeted advertising.",
      "To exercise any of these rights, contact us at founders@albiswis.com. We will verify your request and respond within the time required by applicable law. You may also lodge a complaint with your local supervisory authority.",
    ],
  },
  {
    id: "cookies",
    h: "8. Cookies and Tracking Technologies",
    body: [
      "We use first- and third-party cookies and similar technologies to remember preferences, measure performance, secure our sites, and support marketing. You can control cookies through your browser settings and, where required, through our cookie banner. Disabling certain cookies may affect site functionality.",
    ],
  },
  {
    id: "international",
    h: "9. International Data Transfers",
    body: [
      "AlbisWis operates globally. Personal information may be transferred to and processed in countries other than the one in which it was collected, including the United States. When we transfer personal data outside the EEA, UK, or Switzerland, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses.",
    ],
  },
  {
    id: "children",
    h: "10. Children's Privacy",
    body: [
      "Our Services are intended for business use and are not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact founders@albiswis.com and we will take appropriate steps to delete it.",
    ],
  },
  {
    id: "changes",
    h: "11. Changes to this Policy",
    body: [
      "We may update this Policy from time to time. When we do, we will revise the \"Effective Date\" above and, where required by law, provide notice or obtain consent. Continued use of our Services after an update means you accept the revised Policy.",
    ],
  },
  {
    id: "contact",
    h: "12. Contact Us",
    body: [
      "If you have questions about this Policy or our privacy practices, contact us at founders@albiswis.com or write to: AlbisWis Technologies Inc., Attn: Privacy Office.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <article className="slab slab-light min-h-screen">
      <div className="container-x page-top pb-24 md:pb-32">
        <div className="mx-auto max-w-[760px]">
          <header className="border-b border-black/15 pb-10">
            <div className="earmark text-text-muteddark">/ Legal — Privacy</div>
            <h1
              className="mt-4 font-display font-normal leading-[1.02] text-bg-dark"
              style={{ fontSize: "clamp(40px, 7vw, 96px)", letterSpacing: "-0.03em" }}
            >
              Privacy Policy
            </h1>
            <div className="mt-6 text-[14px] text-text-muteddark">
              Effective: {effective}
            </div>
          </header>

          {/* Table of contents */}
          <nav className="mt-12 border-b border-black/15 pb-10" aria-label="Table of contents">
            <div className="earmark text-text-muteddark">/ Contents</div>
            <ol className="mt-4 grid gap-2 md:grid-cols-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="text-[14px] text-bg-dark hover:underline"
                  >
                    {s.h}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-14 scroll-mt-32">
              <h2 className="font-display text-[24px] font-normal leading-snug text-bg-dark md:text-[28px]">
                {s.h}
              </h2>
              <div className="mt-5 space-y-5 text-[16px] leading-[1.7] text-bg-dark/90">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <footer className="mt-20 border-t border-black/15 pt-8 text-[14px] text-text-muteddark">
            <div>© {new Date().getFullYear()} AlbisWis Technologies Inc. All rights reserved.</div>
            <div className="mt-2">
              See also our{" "}
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>
              .
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
