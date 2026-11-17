import Image from "next/image";

type Step ={ number: string; title: string; description: string };

// Shared with the e-commerce design page.
export function StepsSection({ id, headingId, eyebrow, heading, intro, items }: { id: string; headingId: string; eyebrow: string; heading: string; intro?: string; items: Step[] }) {
  return (
    <section id={id} aria-labelledby={headingId} className="bg-[#d3e5f0] text-[#15395f]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[590px] lg:px-12 lg:py-20">
        <p className="text-[11px] font-bold tracking-[.2em] text-[#2b7bc1] uppercase">{eyebrow}</p>
        <h2 id={headingId} className="mt-2 text-[clamp(42px,4.5vw,68px)] leading-none font-semibold tracking-[-.06em]">{heading}</h2>
        {intro && <p className="mt-3 text-base text-[#6b8094]">{intro}</p>}
        <div className="relative mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          <div aria-hidden="true" className="absolute top-[42px] right-[10%] left-[10%] hidden h-px bg-[#9cc8ed] lg:block" />
          {items.map((step, index) => <article key={step.number} className="relative z-10"><div className="flex items-center gap-4"><span className="flex size-[84px] shrink-0 items-center justify-center rounded-full bg-[#207ccd] text-2xl font-semibold text-white shadow-[0_9px_22px_#176bbb35]">{step.number}</span>{index < items.length - 1 && <span aria-hidden="true" className="hidden text-3xl text-[#247ccc] lg:block">→</span>}</div><h3 className="mt-7 max-w-[245px] text-xl leading-tight font-semibold tracking-[-.03em]">{step.title}</h3><p className="mt-3 max-w-[250px] text-sm leading-[1.65] text-[#6c8094]">{step.description}</p></article>)}
        </div>
      </div>
    </section>
  );
}

const challenges = [
  { number: "01", title: "Data Silos", description: "Clean, low-code solutions with applications for AI." },
  { number: "02", title: "Manual Tasks", description: "Semantic algorithms that interpret data like human language." },
  { number: "03", title: "Security Concerns", description: "Must-have predictive analytics that avert needs before they emerge." },
  { number: "04", title: "Scalability challenges", description: "Rapidly deploy AI-powered enterprise applications with our custom AI solutions." },
];

function ChallengeIcon({ index }: { index: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
      {index === 0 && <g {...common}><ellipse cx="12" cy="5.5" rx="7" ry="2.5" /><path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" /></g>}
      {index === 1 && <g {...common}><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3m0 13v3M2.5 12h3m13 0h3M5.3 5.3l2.1 2.1m9.2 9.2 2.1 2.1M5.3 18.7l2.1-2.1m9.2-9.2 2.1-2.1" /></g>}
      {index === 2 && <g {...common}><path d="M12 3 5 6v5c0 4.6 3 8.4 7 10 4-1.6 7-5.4 7-10V6Z" /><path d="m9 12 2 2 4-4" /></g>}
      {index === 3 && <g {...common}><path d="M3 20h18M6 16l4-5 3 3 6-8" /><path d="M15 6h4v4" /></g>}
    </svg>
  );
}

export function AiReimagined() {
  return (
    <section id="ai-reimagined" aria-labelledby="ai-reimagined-heading" className="relative overflow-hidden bg-[#d3e5f0] text-[#12345c]">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-56 -left-48 size-[520px] rounded-full border-[70px] border-[#3a98df]/10" />
      <div className="relative mx-auto grid max-w-[1540px] gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-10 lg:px-12 lg:py-20 xl:gap-14">
        <div className="flex min-h-0 min-w-0 flex-col">
          <p className="text-[11px] font-bold tracking-[.2em] text-[#2777bd] uppercase">Custom AI App Development</p>
          <h2 id="ai-reimagined-heading" className="mt-3 text-[clamp(36px,4vw,64px)] leading-[1.02] font-semibold tracking-[-.065em]">Custom AI App Development, <span className="text-[#1267ba]">Reimagined</span></h2>
          <p className="mt-4 max-w-[520px] text-base leading-[1.7] text-[#60758c]">What sets our custom AI software development apart: we start from the problem that slows you down, then build the AI that removes it.</p>

          <div className="relative mt-8 flex min-h-[220px] flex-1 flex-col justify-end overflow-hidden rounded-[22px] bg-[#073d79] p-6 text-white shadow-[0_22px_55px_#0a35602e] sm:p-8 lg:mt-10 lg:min-h-0">
            <Image src="/images/custom-ai/blue-glass-office.webp" alt="" fill sizes="(max-width: 1023px) 100vw, 42vw" className="object-cover object-[70%_center] opacity-35" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#062f5e] via-[#073d79]/80 to-[#073d79]/20" />
            <div className="relative">
              <span aria-hidden="true" className="block h-px w-9 bg-[#c1e8ff]" />
              <p className="mt-5 max-w-[380px] text-[clamp(20px,1.9vw,28px)] leading-[1.2] font-medium uppercase">Four blockers. One custom AI answer.</p>
              <dl className="mt-6 grid max-w-[420px] grid-cols-2 divide-x divide-white/15 border-t border-white/15 pt-5">
                <div className="pr-4"><dt className="text-xs text-white/65">Problems solved</dt><dd className="mt-1 text-3xl font-semibold tracking-[-.05em]">04</dd></div>
                <div className="pl-4"><dt className="text-xs text-white/65">Approach</dt><dd className="mt-1 text-sm leading-snug font-medium">Problem first,<br />model second</dd></div>
              </dl>
            </div>
          </div>
        </div>

        <ol className="grid min-h-0 min-w-0 gap-4 sm:grid-cols-2 sm:auto-rows-fr lg:gap-5">
          {challenges.map((step, index) => (
            <li key={step.number} className="group relative flex min-h-0 flex-col overflow-hidden rounded-[20px] border border-[#dce8f3] bg-white p-6 shadow-[0_12px_32px_#165da90d] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_#165da91f] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#e3f0fb] text-[#1c70c1] transition-colors group-hover:bg-[#1267ba] group-hover:text-white"><ChallengeIcon index={index} /></span>
                <span className="text-[clamp(34px,3.2vw,52px)] leading-none font-semibold tracking-[-.06em] text-[#cfe3f4] transition-colors group-hover:text-[#9cc8ed]">{step.number}</span>
              </div>
              <h3 className="mt-6 text-xl leading-tight font-semibold tracking-[-.03em] lg:mt-auto lg:pt-6">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.65] text-[#6c8094]">{step.description}</p>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#1267ba] to-[#45a7ec] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const services = [
  { number: "01", title: "AI Opportunity Mapping", description: "We audit your process to discover where AI solutions can save you time, money, and even bring in revenue using your own data.", type: "bars" },
  { number: "02", title: "Custom AI Strategy & Architecture", description: "A plan that guides your AI project and maps how it is tied to your business goals, constraints, and a reasonable budget.", type: "target" },
  { number: "03", title: "Intelligent Process Automation", description: "We automate repetitive manual tasks with our AI development services in Gurugram, so that your team has more bandwidth for the important choices.", type: "gear" },
  { number: "04", title: "Enterprise AI Solutions & Support", description: "AI development partner. We integrate the solution into your stack and support it as you grow.", type: "building" },
];

function ServiceVisual({ type }: { type: string }) {
  if (type === "bars") return <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true"><path d="M20 104h180" stroke="#c8eaff" strokeWidth="3" /><rect x="38" y="65" width="30" height="39" rx="3" fill="#1e7bd0" /><rect x="82" y="43" width="30" height="61" rx="3" fill="#45a7ec" /><rect x="126" y="22" width="30" height="82" rx="3" fill="#0d5eb4" /><rect x="170" y="8" width="30" height="96" rx="3" fill="#8ccdf5" /></svg>;
  if (type === "target") return <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true"><circle cx="110" cy="60" r="49" stroke="#8bc9f0" strokeWidth="8" /><circle cx="110" cy="60" r="32" stroke="#348fdb" strokeWidth="8" /><circle cx="110" cy="60" r="15" fill="#0d5eb4" /><path d="m110 60 70-42-15 33" stroke="#123c7a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "gear") return <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true"><circle cx="109" cy="60" r="44" fill="#2784ce" /><circle cx="109" cy="60" r="25" fill="#cee9fa" /><circle cx="109" cy="60" r="10" fill="#0c4d97" /><path d="M109 5v17m0 76v17M54 60h-17m145 0h-17M70 20l12 14m56 52 12 14M150 20l-12 14M82 86l-12 14" stroke="#0b5aa9" strokeWidth="12" strokeLinecap="round" /></svg>;
  return <svg viewBox="0 0 220 120" fill="none" className="h-full w-full" aria-hidden="true"><path d="M20 108V46l42-20 37 18v64M99 108V22l48-16 53 20v82" fill="#d1ebfa" stroke="#156bb8" strokeWidth="4" /><path d="M33 63h13m-13 18h13m21-28h13m-13 25h13m34-43h18m-18 23h18m-18 23h18m14-48h18m-18 23h18m-18 23h18" stroke="#2a92d9" strokeWidth="6" strokeLinecap="round" /></svg>;
}

export function AiServices() {
  return (
    <section id="ai-services" aria-labelledby="ai-services-heading" className="bg-white text-[#15395f]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-20">
        <p className="text-[11px] font-bold tracking-[.2em] text-[#2b7bc1] uppercase">Capability, not just code</p>
        <h2 id="ai-services-heading" className="mt-2 text-[clamp(42px,4.5vw,68px)] leading-none font-semibold tracking-[-.06em]">Our Role as a Custom AI Services Provider</h2>
        <p className="mt-3 text-base text-[#6b8094]">We are a top custom AI solutions company in India; we deliver capability, not just code. Here&apos;s what that means.</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 xl:gap-5">
          {services.map((service) => <article key={service.number} className="overflow-hidden rounded-[18px] border border-[#dbe7f2] bg-white shadow-[0_13px_35px_#155da70c]"><div className="h-[155px] bg-[linear-gradient(125deg,#d9efff,#75b7e8,#e7f5ff)] p-3"><ServiceVisual type={service.type} /></div><div className="p-6"><span className="text-xs font-bold text-[#297cc1]">{service.number}</span><h3 className="mt-3 text-xl leading-tight font-semibold tracking-[-.03em]">{service.title}</h3><p className="mt-3 text-sm leading-[1.65] text-[#6b7f93]">{service.description}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: "▥", value: "01", label: "AI Applications Made for You:", description: "Uniquely tailored to your business and your needs." },
  { icon: "≋", value: "02", label: "Easier Processes:", description: "Reduces tasks that you need to do again and again and decreases the time required for each." },
  { icon: "◴", value: "03", label: "Better Predictions:", description: "Equips you to make better-informed, data-driven decisions." },
  { icon: "♧", value: "04", label: "AI That Grows With You:", description: "Scalable solutions that grow with your business." },
  { icon: "◇", value: "05", label: "Always Getting Better:", description: "We continue to support and update your AI tools so they keep performing well." },
  { icon: "▥", value: "06", label: "Happy Customers:", description: "Use AI to bring more humanity to your business and boost customer service." },
];

export function AiResults() {
  return (
    <section id="ai-results" aria-labelledby="ai-results-heading" className="bg-[#d3e5f0] text-[#15395f]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[540px] lg:px-12 lg:py-20">
        <p className="text-[11px] font-bold tracking-[.2em] text-[#2b7bc1] uppercase">AI Software Development Services</p>
        <h2 id="ai-results-heading" className="mt-2 text-[clamp(42px,4.5vw,68px)] leading-none font-semibold tracking-[-.06em]">What&apos;s Great About Our AI Software Development Services</h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => <article key={item.value} className="min-h-[205px] rounded-[18px] border border-[#dce8f3] bg-white p-6 shadow-[0_12px_32px_#165da90a]"><div className="flex items-start gap-3 text-[#1c70c1]"><span aria-hidden="true" className="text-3xl leading-none">{item.icon}</span><span className="text-[clamp(31px,3vw,47px)] leading-none font-semibold tracking-[-.06em]">{item.value}</span></div><h3 className="mt-6 text-base font-semibold">{item.label}</h3><p className="mt-2 text-sm leading-[1.5] text-[#6e8194]">{item.description}</p></article>)}
        </div>
      </div>
    </section>
  );
}
