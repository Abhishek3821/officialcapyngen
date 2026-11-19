import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import CleaningCta from "./cleaning-cta";

export type InfoSection = { id: string; title: string; body: ReactNode };

const legalPages = [
  { label: "Our Products", href: "/our-products" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Data Safety Declaration", href: "/data-safety-declaration" },
];

/**
 * Shared layout for Our Products, Privacy Policy, Terms & Conditions and the
 * Data Safety Declaration. Pass `sections` to fill the page; with none, a
 * "content coming soon" placeholder is shown.
 */
export default function InfoPage({ eyebrow, title, intro, updated, current, sections = [] }: { eyebrow: string; title: string; intro: string; updated?: string; current: string; sections?: InfoSection[] }) {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 bg-[#f6f9fa] outline-none">
        <section aria-labelledby="info-heading" className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_10%,#13505c_0%,transparent_45%),linear-gradient(135deg,#0c2023_0%,#123a42_60%,#0e2b31_100%)] text-white">
          <div aria-hidden="true" className="absolute -right-40 -bottom-40 size-[520px] rounded-full border-[60px] border-[#a8edff]/5" />
          <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:pt-24">
            <nav aria-label="Breadcrumb" className="text-xs text-white/60">
              <ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="hover:text-white">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-white/90">{title}</li></ol>
            </nav>
            <p className="mt-8 text-[11px] font-bold tracking-[.22em] text-[#a8edff] uppercase">{eyebrow}</p>
            <h1 id="info-heading" className="mt-3 max-w-[820px] text-[clamp(38px,5vw,72px)] leading-[1.02] font-semibold tracking-[-.055em]">{title}</h1>
            <p className="mt-5 max-w-[640px] text-base leading-[1.7] text-white/75 sm:text-lg">{intro}</p>
            {updated && <p className="mt-6 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-white/80">Last updated: {updated}</p>}
          </div>
        </section>

        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:py-20">
          <aside className="lg:sticky lg:top-[calc(var(--site-header-height)+24px)] lg:self-start">
            {sections.length > 1 && (
              <nav aria-label="On this page" className="mb-8 hidden lg:block">
                <p className="mb-3 text-xs font-bold tracking-[.16em] text-[#168bb6] uppercase">On this page</p>
                <ul className="space-y-2 border-l border-[#d6e4e8] text-sm">
                  {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-[#4c6168] hover:border-[#168bb6] hover:text-[#0c2023]">{section.title}</a></li>)}
                </ul>
              </nav>
            )}
            <nav aria-label="Related pages">
              <p className="mb-3 text-xs font-bold tracking-[.16em] text-[#168bb6] uppercase">Related</p>
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {legalPages.map((page) => <li key={page.href}><Link href={page.href} aria-current={page.href === current ? "page" : undefined} className={`block rounded-lg px-3 py-2 text-sm transition-colors ${page.href === current ? "bg-[#0c2023] text-white" : "bg-white text-[#2e454c] hover:bg-[#e6f1f4] lg:bg-transparent"}`}>{page.label}</Link></li>)}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 rounded-3xl border border-[#e1ebee] bg-white p-6 shadow-[0_18px_50px_#0c20230a] sm:p-10">
            {sections.length === 0 ? (
              <div className="py-12 text-center">
                <span aria-hidden="true" className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#e6f1f4] text-2xl text-[#168bb6]">✎</span>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-.03em] text-[#0c2023]">Content coming soon</h2>
                <p className="mx-auto mt-3 max-w-[420px] text-sm leading-relaxed text-[#5b6f75]">We&apos;re finalising this page. For any questions in the meantime, please reach us at <a href="mailto:query@capyngen.com" className="font-medium text-[#168bb6] underline-offset-4 hover:underline">query@capyngen.com</a>.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-[calc(var(--site-header-height)+24px)]">
                    <h2 id={`${section.id}-heading`} className="flex items-baseline gap-3 text-2xl font-semibold tracking-[-.03em] text-[#0c2023]"><span className="text-sm font-bold text-[#168bb6]">{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>
                    <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-[#425a61] [&_a]:text-[#168bb6] [&_a]:underline-offset-4 [&_a:hover]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-[#0c2023] [&_ul]:space-y-2">{section.body}</div>
                  </section>
                ))}
              </div>
            )}
          </article>
        </div>
      </main>
      <CleaningCta />
      <Footer />
    </>
  );
}
