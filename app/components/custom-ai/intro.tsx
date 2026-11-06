import Image from "next/image";
import Link from "next/link";

const contents = [
  { number: "01", label: "Overview", href: "#ai-home" },
  { number: "02", label: "About us", href: "#ai-about" },
  { number: "03", label: "Contents", href: "#ai-contents" },
  { number: "04", label: "Our approach", href: "#ai-approach" },
  { number: "05", label: "Services", href: "#ai-services" },
  { number: "06", label: "Results", href: "#ai-results" },
  { number: "07", label: "Growth model", href: "#ai-growth" },
  { number: "08", label: "Process case", href: "#ai-case-process" },
  { number: "09", label: "Commerce case", href: "#ai-case-commerce" },
  { number: "10", label: "Contact", href: "/contact-us" },
];

export function AiHero() {
  return (
    <section id="ai-home" aria-labelledby="ai-hero-heading" className="relative overflow-hidden bg-[#eff6fd] text-[#0d2b50]">
      <Image src="/images/custom-ai/blue-glass-office.webp" alt="Blue glass office tower reflecting the sky" fill priority sizes="100vw" className="object-cover object-[72%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f9fcff] via-[#f9fcff]/95 to-[#f9fcff]/25 lg:via-[#f9fcff]/85 lg:to-transparent" />
      <div className="relative mx-auto grid min-h-[640px] max-w-[1600px] items-center gap-10 px-5 py-20 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,1.45fr)_minmax(0,.55fr)] lg:px-12 lg:py-10">
        <div className="max-w-[820px]">
          <p className="mb-5 text-[11px] font-bold tracking-[.22em] text-[#1765ae] uppercase">Capyngen / Custom AI Solution</p>
          <h1 id="ai-hero-heading" className="text-[clamp(42px,5.4vw,88px)] leading-[.96] font-bold tracking-[-.07em] uppercase">Solutions that move <span className="text-[#1267ba]">business forward</span></h1>
          <p className="mt-6 max-w-[630px] text-base leading-[1.6] text-[#405874] sm:text-lg">Data, strategy, and practical AI implementation for smarter decisions and sustainable growth.</p>
          <div className="mt-10 grid max-w-[650px] grid-cols-3 divide-x divide-[#a9c5df] border-t border-[#a9c5df] pt-6">
            {[{ value: "01", label: "Discover the opportunity" }, { value: "02", label: "Build the solution" }, { value: "03", label: "Scale with confidence" }].map((item) => <div key={item.value} className="px-3 first:pl-0 sm:px-6"><p className="text-[clamp(30px,3vw,50px)] leading-none font-bold tracking-[-.06em] text-[#125ca7]">{item.value}</p><p className="mt-2 text-[11px] leading-[1.35] text-[#49627a] sm:text-sm">{item.label}</p></div>)}
          </div>
        </div>
        <div className="max-w-[310px] justify-self-start rounded-[20px] border border-white/20 bg-[#073d79]/90 p-7 text-white shadow-[0_22px_65px_#0a356050] backdrop-blur-sm lg:justify-self-end lg:p-9">
          <span className="block h-px w-9 bg-[#c1e8ff]" aria-hidden="true" />
          <p className="mt-8 text-[clamp(20px,1.8vw,28px)] leading-[1.25] font-medium uppercase">Your partner in business growth</p>
          <p className="mt-5 text-sm leading-[1.6] text-white/70">AI designed for your people, processes, and goals.</p>
        </div>
      </div>
    </section>
  );
}

export function AiAbout() {
  return (
    <section id="ai-about" aria-labelledby="ai-about-heading" className="bg-[#d3e5f0] text-[#12345c]">
      <div className="mx-auto grid max-w-[1540px] items-center gap-9 px-5 py-16 sm:px-8 lg:min-h-[620px] lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-12">
        <div>
          <p className="text-[11px] font-bold tracking-[.2em] text-[#2777bd] uppercase">Built around useful outcomes</p>
          <h2 id="ai-about-heading" className="mt-3 text-[clamp(42px,4.8vw,72px)] leading-[1.02] font-semibold tracking-[-.065em]">About our AI approach</h2>
          <p className="mt-5 max-w-[590px] text-base leading-[1.7] text-[#60758c]">We help teams find practical ways to use data and AI. Every solution begins with a clear business challenge and a thoughtful plan for the people it serves.</p>
          <div className="mt-10 grid grid-cols-3 divide-x divide-[#d6e3f0] border-t border-[#d6e3f0] pt-7">
            {[{ icon: "▥", value: "01", label: "Understand the challenge" }, { icon: "♧", value: "02", label: "Build with your team" }, { icon: "◇", value: "03", label: "Measure what matters" }].map((item) => <div key={item.value} className="px-3 first:pl-0 sm:px-5"><span aria-hidden="true" className="text-2xl text-[#1975c3]">{item.icon}</span><p className="mt-3 text-[clamp(30px,3vw,47px)] leading-none font-bold text-[#175fae]">{item.value}</p><p className="mt-2 text-[11px] leading-[1.45] text-[#60758c] sm:text-sm">{item.label}</p></div>)}
          </div>
        </div>
        <div className="relative min-h-[350px] overflow-hidden rounded-[24px] bg-[#d7e9f8] sm:min-h-[480px] lg:min-h-[520px]"><Image src="/images/custom-ai/blue-glass-office.webp" alt="Modern blue glass building" fill sizes="(max-width: 1023px) 100vw, 52vw" className="object-cover object-[68%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-[#f9fbfe]/50 to-transparent" /></div>
      </div>
    </section>
  );
}

export function AiContents() {
  return (
    <section id="ai-contents" aria-labelledby="ai-contents-heading" className="relative overflow-hidden bg-white text-[#12345c]">
      <div aria-hidden="true" className="absolute -top-44 -right-48 size-[600px] rounded-full border-[75px] border-[#3a98df]/20" />
      <div aria-hidden="true" className="absolute top-6 -right-32 size-[470px] rounded-full border-[60px] border-[#176ac4]/15" />
      <div className="relative mx-auto max-w-[1510px] px-5 py-16 sm:px-8 lg:min-h-[620px] lg:px-12 lg:py-20">
        <p className="text-[11px] font-bold tracking-[.2em] text-[#2575b9] uppercase">Explore the page</p>
        <h2 id="ai-contents-heading" className="mt-2 text-[clamp(42px,4.6vw,70px)] leading-none font-bold tracking-[-.06em]">Contents</h2>
        <p className="mt-3 text-base text-[#667b90]">The key parts of our AI solution story.</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {contents.map((item) => <Link key={item.number} href={item.href} className="group flex min-h-[116px] flex-col justify-between rounded-[16px] border border-[#dce8f4] bg-white/85 p-4 shadow-[0_8px_22px_#165a9b0b] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_14px_30px_#165a9b20] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#176ac4] sm:min-h-[132px] sm:p-5"><span className="text-2xl font-semibold tracking-[-.05em] text-[#176ac4] sm:text-3xl">{item.number}</span><span className="text-xs font-medium text-[#4f6780] group-hover:text-[#0c5cae] sm:text-sm">{item.label}</span></Link>)}
        </div>
      </div>
    </section>
  );
}
