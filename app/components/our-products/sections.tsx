import Link from "next/link";
import { ORINITE_URL, productFacts, products, reasons } from "./data";
import { ProductMockup, SuiteMockup } from "./mockups";

const external = { target: "_blank", rel: "noreferrer" } as const;

function Arrow({ className = "size-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Check({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`size-4 shrink-0 ${className}`}><path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ModuleIcon({ product, className = "size-6" }: { product: string; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {product === "hrms" && <g {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.3c2.3.1 4 1.6 4.5 4.2" /></g>}
      {product === "crm" && <g {...p}><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="11" r="2.5" /><path d="M5.8 17c.5-1.8 1.7-2.8 3.2-2.8s2.7 1 3.2 2.8M15 9.5h3.5M15 13h3.5" /></g>}
      {product === "bm" && <g {...p}><rect x="3" y="3.5" width="7" height="7" rx="2" /><rect x="14" y="13.5" width="7" height="7" rx="2" /><path d="M6.5 10.5v3.5a3 3 0 0 0 3 3H14M17.5 13.5V10a3 3 0 0 0-3-3H10" /></g>}
    </svg>
  );
}

function ReasonIcon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
      {name === "target" && <g {...p}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></g>}
      {name === "flow" && <g {...p}><path d="M4 7h9a3 3 0 0 1 0 6H11a3 3 0 0 0 0 6h9" /><path d="m17 16 3 3-3 3" /></g>}
      {name === "layers" && <g {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></g>}
      {name === "refresh" && <g {...p}><path d="M20 11a8 8 0 0 0-14.6-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.6 4.5L20 16m0 4v-4h-4" /></g>}
      {name === "bolt" && <g {...p}><path d="M13 2.5 5 13.5h6l-1 8 8-11h-6l1-8Z" /></g>}
    </svg>
  );
}

const eyebrow = "text-[11px] font-bold tracking-[.22em] uppercase";
const h2 = "text-[clamp(32px,4vw,56px)] leading-[1.05] font-semibold tracking-[-.05em]";

/* 1 ─ Hero */
export function ProductsHero() {
  return (
    <section aria-labelledby="products-hero-heading" className="relative isolate overflow-hidden bg-[#060c19] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_85%_20%,rgba(99,102,241,.28),transparent_60%),radial-gradient(50%_50%_at_10%_90%,rgba(45,212,191,.18),transparent_60%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 pt-4 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:pt-6 lg:pb-20">
        <div>
          <p className={`${eyebrow} inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[#5eead4]`}><span className="size-1.5 rounded-full bg-[#5eead4]" /> Our Products</p>
          <h1 id="products-hero-heading" className="mt-5 text-[clamp(38px,4.6vw,66px)] leading-[1.02] font-semibold tracking-[-.055em]">Innovative Software Products for <span className="bg-linear-to-r from-[#5eead4] via-[#a5b4fc] to-[#c4b5fd] bg-clip-text text-transparent">Modern Businesses</span></h1>
          <p className="mt-6 max-w-[580px] text-base leading-[1.75] text-white/70 sm:text-lg">At Capyngen Private Limited, we develop technology products that help businesses simplify their operations, improve productivity, and manage everyday activities more efficiently.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#orinite-products" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1530] transition-transform hover:-translate-y-0.5">Explore our products <Arrow /></a>
            <a href={ORINITE_URL} {...external} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Visit orinite.com <Arrow /></a>
          </div>
          <dl className="mt-12 grid max-w-[520px] grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6">
            {[["03", "Products"], ["01", "Unified brand"], ["SaaS", "Delivery model"]].map(([value, label]) => <div key={label} className="px-4 first:pl-0"><dt className="sr-only">{label}</dt><dd className="text-[clamp(26px,2.6vw,38px)] font-semibold tracking-[-.04em]">{value}</dd><dd className="mt-1 text-xs text-white/55">{label}</dd></div>)}
          </dl>
        </div>
        <div className="lg:pl-6"><SuiteMockup /></div>
      </div>
    </section>
  );
}

/* 2 ─ Suite at a glance */
export function SuiteOverview() {
  return (
    <section aria-labelledby="suite-heading" className="relative bg-[#f6f8fc]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            <p className={`${eyebrow} text-[#4f46e5]`}>The product suite</p>
            <h2 id="suite-heading" className={`${h2} mt-3 text-[#0b1530]`}>One brand. Three ways to run your business better.</h2>
          </div>
          <p className="max-w-[460px] text-base leading-[1.7] text-slate-600">Our product portfolio includes proprietary software brands and technology platforms developed and commercially operated by Capyngen Private Limited.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <a key={product.key} href={`#orinite-${product.key}`} className="group relative overflow-hidden rounded-3xl border border-[#e3e8f0] bg-white p-7 shadow-[0_14px_40px_-18px_rgba(15,23,42,.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="flex items-start justify-between">
                <span className={`flex size-13 items-center justify-center rounded-2xl ${product.accent.soft} ${product.accent.text}`}><ModuleIcon product={product.key} /></span>
                <span className="text-sm font-semibold text-slate-300">{product.number}</span>
              </div>
              <p className={`mt-8 text-xs font-semibold tracking-wider uppercase ${product.accent.text}`}>{product.short}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-.03em] text-[#0b1530]">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{product.tagline}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0b1530]">Learn more <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${product.accent.solid}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3 ─ About Orinite */
export function OriniteBrand() {
  return (
    <section aria-labelledby="orinite-heading" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[480px]">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#c7d2fe]" />
          <div className="absolute inset-[16%] rounded-full border border-[#e0e7ff]" />
          <div className="absolute inset-[32%] flex flex-col items-center justify-center rounded-full bg-linear-to-br from-[#0b1530] to-[#1e2a5a] text-white shadow-[0_30px_70px_-20px_rgba(30,42,90,.6)]">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#2dd4bf] to-[#6366f1] text-xl font-bold">O</span>
            <span className="mt-3 text-xl font-semibold tracking-[-.03em]">Orinite</span>
            <span className="text-[10px] tracking-[.2em] text-white/50 uppercase">SaaS Platform</span>
          </div>
          {products.map((product, i) => {
            const pos = ["top-[2%] left-1/2 -translate-x-1/2", "bottom-[12%] left-[-2%]", "bottom-[12%] right-[-2%]"][i];
            return <div key={product.key} className={`absolute ${pos} flex items-center gap-2.5 rounded-2xl border border-[#e8ecf3] bg-white px-3.5 py-2.5 shadow-[0_14px_34px_-14px_rgba(15,23,42,.3)]`}><span className={`flex size-9 items-center justify-center rounded-xl ${product.accent.soft} ${product.accent.text}`}><ModuleIcon product={product.key} className="size-5" /></span><span className="text-sm font-semibold whitespace-nowrap text-[#0b1530]">{product.name.replace("Orinite ", "")}</span></div>;
          })}
        </div>
        <div>
          <p className={`${eyebrow} text-[#0f9f8f]`}>Meet Orinite</p>
          <h2 id="orinite-heading" className={`${h2} mt-3 text-[#0b1530]`}>Orinite – Business Management &amp; HRMS SaaS Platform</h2>
          <div className="mt-6 space-y-4 text-base leading-[1.75] text-slate-600">
            <p>Orinite is a proprietary SaaS product brand of Capyngen Private Limited, designed to help businesses manage their workforce, customers, and day-to-day business operations through intelligent software solutions.</p>
            <p>Developed with a focus on business efficiency and digital management, Orinite brings together solutions for different business functions. It helps organisations adopt a more structured approach to managing employee information, customer relationships, and business activities.</p>
            <p>Orinite is developed, owned, and operated by Capyngen Private Limited. Through this product brand, we aim to provide businesses with software solutions that support better organisation, improved visibility, and efficient workflows.</p>
          </div>
          <a href={ORINITE_URL} {...external} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1530] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e2a5a]">Explore Orinite <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

/* 4 ─ Product deep dives */
export function ProductDetails() {
  return (
    <section id="orinite-products" aria-labelledby="portfolio-heading" className="scroll-mt-[var(--site-header-height)] bg-[#f6f8fc]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className={`${eyebrow} text-[#4f46e5]`}>Product portfolio</p>
          <h2 id="portfolio-heading" className={`${h2} mt-3 text-[#0b1530]`}>Our Orinite Products</h2>
          <p className="mt-4 text-base leading-[1.7] text-slate-600">Practical software for the three areas every organisation runs on: people, customers and operations.</p>
        </div>

        <div className="mt-14 space-y-8 lg:mt-20 lg:space-y-10">
          {products.map((product, index) => (
            <article key={product.key} id={`orinite-${product.key}`} aria-labelledby={`${product.key}-heading`} className="scroll-mt-[calc(var(--site-header-height)+16px)] overflow-hidden rounded-[32px] border border-[#e3e8f0] bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,.25)]">
              <div className={`grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className={`rounded-3xl p-4 sm:p-8 ${product.accent.soft}`}><ProductMockup product={product.key} /></div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`flex size-12 items-center justify-center rounded-2xl ${product.accent.solid} text-white shadow-lg`}><ModuleIcon product={product.key} /></span>
                    <span className={`text-sm font-bold ${product.accent.text}`}>{product.number} / 03</span>
                  </div>
                  <h3 id={`${product.key}-heading`} className="mt-6 text-[clamp(28px,3vw,42px)] leading-[1.08] font-semibold tracking-[-.045em] text-[#0b1530]">{product.name}</h3>
                  <p className={`mt-2 text-base font-medium ${product.accent.text}`}>{product.tagline}</p>
                  <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-slate-600">{product.paragraphs.map((text) => <p key={text}>{text}</p>)}</div>
                  <h4 className="mt-7 text-sm font-semibold text-[#0b1530]">Key Focus Areas</h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {product.focus.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700"><span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${product.accent.soft} ${product.accent.text}`}><Check className="size-3" /></span>{item}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5 ─ Compare modules */
export function CompareModules() {
  const rows = [0, 1, 2, 3, 4];
  return (
    <section aria-labelledby="compare-heading" className="bg-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-[680px]">
          <p className={`${eyebrow} text-[#c2410c]`}>At a glance</p>
          <h2 id="compare-heading" className={`${h2} mt-3 text-[#0b1530]`}>Which Orinite product fits your need?</h2>
          <p className="mt-4 text-base leading-[1.7] text-slate-600">Each product covers a different business function — together they bring HRMS, CRM and business management under one product brand.</p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-[#e3e8f0]">
          <table className="w-full min-w-[720px] text-left text-sm">
            <caption className="sr-only">Key focus areas of each Orinite product</caption>
            <thead>
              <tr className="bg-[#f6f8fc]">
                <th scope="col" className="w-[160px] px-6 py-5 text-xs font-semibold tracking-wider text-slate-400 uppercase">Focus area</th>
                {products.map((product) => <th key={product.key} scope="col" className="px-6 py-5"><span className="flex items-center gap-3"><span className={`flex size-9 items-center justify-center rounded-xl ${product.accent.soft} ${product.accent.text}`}><ModuleIcon product={product.key} className="size-5" /></span><span><span className="block font-semibold text-[#0b1530]">{product.name}</span><span className="block text-xs font-normal text-slate-500">{product.short}</span></span></span></th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row} className="border-t border-[#eef1f6]">
                  <th scope="row" className="px-6 py-4 text-xs font-semibold text-slate-400">{String(row + 1).padStart(2, "0")}</th>
                  {products.map((product) => <td key={product.key} className="px-6 py-4 text-slate-700"><span className="flex items-start gap-2"><Check className={`mt-0.5 ${product.accent.text}`} />{product.focus[row]}</span></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* 6 ─ Why choose Orinite */
export function WhyOrinite() {
  return (
    <section aria-labelledby="why-heading" className="relative isolate overflow-hidden bg-[#060c19] text-white">
      <div aria-hidden="true" className="absolute -top-40 -left-40 -z-10 size-[520px] rounded-full bg-[#6366f1]/20 blur-[120px]" />
      <div aria-hidden="true" className="absolute -right-40 -bottom-40 -z-10 size-[520px] rounded-full bg-[#14b8a6]/15 blur-[120px]" />
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-24">
        <div className="lg:sticky lg:top-[calc(var(--site-header-height)+32px)] lg:self-start">
          <p className={`${eyebrow} text-[#5eead4]`}>Why Orinite</p>
          <h2 id="why-heading" className={`${h2} mt-3`}>Why Choose Orinite?</h2>
          <p className="mt-5 text-base leading-[1.75] text-white/65">Businesses need technology that is practical, easy to understand, and aligned with their operational requirements. Orinite is developed with these needs in mind.</p>
          <p className="mt-4 text-base leading-[1.75] text-white/65">Here are some important aspects of the Orinite product approach.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <li key={reason.title} className={`group rounded-3xl border border-white/10 bg-white/[.04] p-7 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[.07] ${index === reasons.length - 1 ? "sm:col-span-2" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#2dd4bf]/25 to-[#6366f1]/25 text-[#a5f3fc] ring-1 ring-white/10"><ReasonIcon name={reason.icon} /></span>
                <span className="text-sm font-semibold text-white/25">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-.02em]">{reason.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-white/60">{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 7 ─ Ownership */
export function Ownership() {
  return (
    <section aria-labelledby="ownership-heading" className="bg-[#f6f8fc]">
      <div className="mx-auto grid max-w-[1320px] items-start gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-16 lg:py-24">
        <div>
          <p className={`${eyebrow} text-[#4f46e5]`}>Ownership</p>
          <h2 id="ownership-heading" className={`${h2} mt-3 text-[#0b1530]`}>Developed and Operated by Capyngen Private Limited</h2>
          <div className="mt-6 space-y-4 text-base leading-[1.75] text-slate-600">
            <p>Orinite is a proprietary SaaS product brand of Capyngen Private Limited. The company is responsible for its product development, ownership, technology management, and commercial operations, subject to applicable third-party licences.</p>
            <p>Capyngen Private Limited continues to focus on developing software products and digital solutions that address practical business requirements. Orinite represents this commitment through its business management, HRMS, and CRM offerings.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Product development", "Brand ownership", "Technology management", "Commercial operations"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[#dfe5ef] bg-white px-4 py-2 text-sm text-slate-700"><Check className="text-[#4f46e5]" />{item}</span>)}
          </div>
        </div>
        <div className="rounded-[28px] border border-[#e3e8f0] bg-white p-7 shadow-[0_20px_60px_-30px_rgba(15,23,42,.3)] sm:p-9">
          <div className="flex items-center gap-3 border-b border-[#eef1f6] pb-6">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#2dd4bf] to-[#6366f1] text-lg font-bold text-white">O</span>
            <div><p className="text-lg font-semibold text-[#0b1530]">Product fact sheet</p><p className="text-sm text-slate-500">Orinite by Capyngen</p></div>
          </div>
          <dl className="divide-y divide-[#eef1f6]">
            {productFacts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-4">
                <dt className="text-sm text-slate-500">{fact.label}</dt>
                <dd className="text-sm font-semibold text-[#0b1530]">{fact.href ? <a href={fact.href} {...external} className="inline-flex items-center gap-1 text-[#4f46e5] hover:underline">{fact.value} <Arrow className="size-3.5" /></a> : fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 8 ─ Explore CTA */
export function ExploreOrinite() {
  return (
    <section aria-labelledby="explore-heading" className="bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[36px] bg-linear-to-br from-[#0b1530] via-[#1e2a5a] to-[#0f3b46] px-6 py-14 text-center text-white sm:px-12 lg:py-20">
        <div aria-hidden="true" className="absolute -top-24 left-1/2 -z-10 size-[460px] -translate-x-1/2 rounded-full bg-[#6366f1]/30 blur-[100px]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <p className={`${eyebrow} text-[#5eead4]`}>Explore Orinite</p>
        <h2 id="explore-heading" className="mx-auto mt-4 max-w-[760px] text-[clamp(30px,4.2vw,56px)] leading-[1.06] font-semibold tracking-[-.05em]">Discover how Orinite can support your organisation.</h2>
        <p className="mx-auto mt-5 max-w-[600px] text-base leading-[1.7] text-white/70">Workforce management, customer relationships and business operations — explore the full Orinite product suite.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={ORINITE_URL} {...external} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0b1530] transition-transform hover:-translate-y-0.5">Visit orinite.com <Arrow /></a>
          <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10">Talk to our team</Link>
        </div>
      </div>
    </section>
  );
}
