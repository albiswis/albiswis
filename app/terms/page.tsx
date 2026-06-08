import Link from "next/link";

export const metadata = {
  title: "Terms of Service | AlbisWis",
  description:
    "Terms of Service for AlbisWis Technologies Inc. — governing your access to our websites and the use of Triton, Forge, Atlas, and Voya.",
};

const effective = "June 7, 2026";

const sections = [
  {
    id: "acceptance",
    h: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") form a binding agreement between you (\"you\", \"your\", or \"Customer\") and AlbisWis Technologies Inc. (\"AlbisWis\", \"we\", \"our\", or \"us\") and govern your access to our websites, marketing pages, demos, documentation, and the AlbisWis products — including Triton, Forge, Atlas, and Voya (collectively, the \"Services\").",
      "By accessing or using the Services you agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization, and \"you\" refers to that organization.",
    ],
  },
  {
    id: "definitions",
    h: "2. Definitions",
    body: [
      "\"Customer Data\" means data that you or your authorized users submit to or generate through the Services, excluding usage data and feedback. \"Order Form\" means a written or electronic order signed or accepted by both parties that references these Terms. \"Authorized User\" means an employee or contractor you permit to use the Services under your account. \"Documentation\" means our then-current user guides and technical documentation made generally available.",
    ],
  },
  {
    id: "use",
    h: "3. Use of the Services",
    body: [
      "Subject to these Terms and any applicable Order Form, AlbisWis grants you a non-exclusive, non-transferable, non-sublicensable right during the subscription term to access and use the Services solely for your internal business purposes.",
      "You may permit Authorized Users to use the Services on your behalf. You are responsible for their acts and omissions and for ensuring they comply with these Terms.",
    ],
  },
  {
    id: "accounts",
    h: "4. Accounts and Security",
    body: [
      "You are responsible for safeguarding credentials used to access the Services and for all activity that occurs under your account. Notify us promptly at founders@albiswis.com if you suspect unauthorized access. You must provide accurate registration information and keep it current.",
    ],
  },
  {
    id: "fees",
    h: "5. Fees and Payment",
    body: [
      "Fees for paid Services are set out in the applicable Order Form. Unless stated otherwise, fees are quoted and payable in U.S. dollars, due net thirty (30) days from the invoice date, non-cancellable, and non-refundable. Late amounts accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law. Fees are exclusive of taxes; you are responsible for all sales, use, VAT, and similar taxes other than taxes on our net income.",
    ],
  },
  {
    id: "acceptable-use",
    h: "6. Acceptable Use",
    body: [
      "You will not, and will not permit anyone to: (a) use the Services in violation of law or third-party rights; (b) reverse engineer, decompile, or attempt to derive source code or underlying models, except to the extent expressly permitted by law; (c) interfere with or disrupt the integrity or performance of the Services; (d) attempt to gain unauthorized access to the Services or related systems; (e) use the Services to build a competing product or to benchmark without our written consent; (f) submit Customer Data containing viruses or other malicious code; or (g) submit personal data of children under sixteen (16) or other protected categories except as expressly permitted in an Order Form.",
    ],
  },
  {
    id: "data",
    h: "7. Customer Data and Privacy",
    body: [
      "As between the parties, you retain all right, title, and interest in and to your Customer Data. You grant AlbisWis a worldwide, royalty-free license to process Customer Data solely as necessary to provide and improve the Services and as otherwise permitted under the Order Form.",
      "We will process personal data in Customer Data in accordance with our Data Processing Addendum, available on request. Our Privacy Policy describes how we process personal information collected from visitors to our websites.",
    ],
  },
  {
    id: "ip",
    h: "8. Intellectual Property",
    body: [
      "AlbisWis and its licensors retain all right, title, and interest in and to the Services, Documentation, and all related intellectual property. Other than the limited rights expressly granted in these Terms, no rights are granted to you by implication, estoppel, or otherwise.",
      "Feedback you provide is given on a non-confidential basis, and AlbisWis may use it for any purpose without compensation or attribution.",
    ],
  },
  {
    id: "confidentiality",
    h: "9. Confidentiality",
    body: [
      "Each party agrees to protect the other's Confidential Information using the same care it uses to protect its own confidential information of like importance, but no less than reasonable care. Confidential Information may be used only to perform under these Terms and disclosed only to personnel and advisors who need to know and are bound by similar obligations. Confidential Information excludes information that is or becomes public through no fault of the receiving party, was rightfully known without restriction, was independently developed without use of the disclosing party's information, or was rightfully obtained from a third party without restriction.",
    ],
  },
  {
    id: "warranties",
    h: "10. Warranties and Disclaimers",
    body: [
      "Each party represents that it has the authority to enter into these Terms. AlbisWis warrants that during a paid subscription term the Services will perform materially in accordance with the Documentation. As your sole remedy for breach of this warranty, AlbisWis will use commercially reasonable efforts to correct the non-conformity or, failing that, refund prepaid fees for the affected period.",
      "EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE.\" ALBISWIS DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. AlbisWis does not warrant that the Services will be uninterrupted or error-free, or that AI-generated outputs will be accurate, complete, or suitable for your purposes.",
    ],
  },
  {
    id: "liability",
    h: "11. Limitation of Liability",
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, REGARDLESS OF THE BASIS OF THE CLAIM.",
      "EACH PARTY'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS WILL NOT EXCEED THE AMOUNTS PAID OR PAYABLE BY YOU TO ALBISWIS UNDER THE APPLICABLE ORDER FORM IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM. These limitations apply even if a remedy fails of its essential purpose.",
    ],
  },
  {
    id: "indemnification",
    h: "12. Indemnification",
    body: [
      "AlbisWis will defend you against any third-party claim alleging that the Services, as provided and used in accordance with these Terms, infringe such third party's intellectual property rights, and will pay damages finally awarded against you (or amounts in a settlement we approve), subject to standard procedural conditions.",
      "You will defend AlbisWis against any third-party claim arising from (a) Customer Data, (b) your use of the Services in breach of these Terms or applicable law, or (c) your violation of a third party's rights, and will pay damages finally awarded (or amounts in a settlement we approve), subject to the same procedural conditions.",
    ],
  },
  {
    id: "term",
    h: "13. Term, Suspension, and Termination",
    body: [
      "These Terms remain in effect for as long as you access or use the Services. Subscriptions to paid Services are governed by the term stated in the Order Form. Either party may terminate for material breach if the other party fails to cure the breach within thirty (30) days after written notice.",
      "We may suspend access to the Services if we reasonably believe your use poses a security risk, may subject us to liability, or violates these Terms. Sections that by their nature should survive (including IP, Confidentiality, Disclaimers, Liability, and Governing Law) will survive termination.",
    ],
  },
  {
    id: "law",
    h: "14. Governing Law and Disputes",
    body: [
      "These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict-of-laws rules. The parties consent to the exclusive jurisdiction of the state and federal courts located in Wilmington, Delaware, except that either party may seek injunctive relief in any court of competent jurisdiction to protect its intellectual property or Confidential Information.",
    ],
  },
  {
    id: "changes",
    h: "15. Changes to these Terms",
    body: [
      "We may update these Terms from time to time. When we do, we will revise the \"Effective Date\" above. For material changes affecting paid subscriptions, we will provide notice through the Services or by email. Continued use of the Services after an update means you accept the revised Terms.",
    ],
  },
  {
    id: "general",
    h: "16. General",
    body: [
      "These Terms, together with any Order Form, constitute the entire agreement between the parties on this subject and supersede all prior or contemporaneous agreements. If any provision is held unenforceable, the remaining provisions remain in effect. Neither party may assign these Terms without the other's written consent, except to a successor in connection with a merger, acquisition, or sale of substantially all assets. A waiver must be in writing to be effective. These Terms create no third-party beneficiaries.",
    ],
  },
  {
    id: "contact",
    h: "17. Contact",
    body: [
      "Questions about these Terms? Contact founders@albiswis.com or write to AlbisWis Technologies Inc., Attn: Legal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <article className="slab slab-light min-h-screen">
      <div className="container-x page-top pb-24 md:pb-32">
        <div className="mx-auto max-w-[760px]">
          <header className="border-b border-black/15 pb-10">
            <div className="earmark text-text-muteddark">/ Legal — Terms</div>
            <h1
              className="mt-4 font-display font-normal leading-[1.02] text-bg-dark"
              style={{ fontSize: "clamp(40px, 7vw, 96px)", letterSpacing: "-0.03em" }}
            >
              Terms of Service
            </h1>
            <div className="mt-6 text-[14px] text-text-muteddark">
              Effective: {effective}
            </div>
          </header>

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
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
