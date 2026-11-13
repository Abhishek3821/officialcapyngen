type Step = { number: string; title: string; description: string };

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

export function AiReimagined() {
  return <StepsSection id="ai-reimagined" headingId="ai-reimagined-heading" eyebrow="Custom AI App Development" heading="Custom AI App Development, Reimagined" intro="What sets our custom AI software development apart:" items={challenges} />;
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
