import Image from "next/image";

const bars = [
  { revenue: 25, profit: 15 },
  { revenue: 39, profit: 27 },
  { revenue: 53, profit: 39 },
  { revenue: 69, profit: 54 },
  { revenue: 88, profit: 71 },
];

const reasons = [
  "Deep Knowledge in AI & Machine Learning Customised Solutions.",
  "Generative AI & Copilot Development",
  "Seamless Low-Code/No-Code AI Integration",
  "Security Is Not a Product Feature; It's Our DNA.",
];

export function AiGrowthChart() {
  return (
    <section id="ai-growth" aria-labelledby="ai-growth-heading" className="bg-white text-[#15395f]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[620px] lg:px-12 lg:py-20">
        <p className="text-[11px] font-bold tracking-[.2em] text-[#2b7bc1] uppercase">Advantages of a Custom AI Solution</p>
        <h2 id="ai-growth-heading" className="mt-2 text-[clamp(42px,4.5vw,68px)] leading-none font-semibold tracking-[-.06em]">Why Should You Think About Custom AI Solutions?</h2>
        <p className="mt-3 max-w-[980px] text-base leading-[1.65] text-[#6b8094]">Advantages of a Custom AI Solution: There&apos;s nothing more exciting than how a custom AI solution can bring a revolution to your business, causing innovation and growth. If you partner with an AI software development company that has a custom AI software offering, you can get a tailor-made solution that automates your work, predicts the future, speeds up your work, and improves customer satisfaction.</p>
        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,.55fr)] lg:gap-12">
          <div className="rounded-[18px] border border-[#dce8f3] bg-white px-5 pt-7 pb-5 shadow-[0_12px_35px_#165da908] sm:px-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#60788e]"><span><i className="mr-2 inline-block size-2 rounded-full bg-[#156fc7]" />Automates your work</span><span><i className="mr-2 inline-block size-2 rounded-full bg-[#48a1e5]" />Predicts the future</span><span><i className="mr-2 inline-block size-2 rounded-full bg-[#9dd2f4]" />Improves customer satisfaction</span></div>
            <div aria-hidden="true" className="relative mt-6 h-[270px] border-b border-[#d4e3f0] bg-[repeating-linear-gradient(to_top,transparent_0,transparent_53px,#dceaf4_54px)] sm:h-[310px]">
              <svg viewBox="0 0 500 250" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" aria-hidden="true"><polyline points="50,204 150,175 250,147 350,108 450,55" fill="none" stroke="#125fae" strokeWidth="3" /><g fill="#125fae"><circle cx="50" cy="204" r="5" /><circle cx="150" cy="175" r="5" /><circle cx="250" cy="147" r="5" /><circle cx="350" cy="108" r="5" /><circle cx="450" cy="55" r="6" /></g></svg>
              <div className="absolute inset-0 grid grid-cols-5 items-end gap-2 px-2 sm:gap-5 sm:px-5">{bars.map((bar, index) => <div key={index} className="relative flex h-full items-end justify-center gap-1"><span className="w-[27%] rounded-t-[3px] bg-[#297fd0]" style={{ height: `${bar.revenue}%` }} /><span className="w-[27%] rounded-t-[3px] bg-[#83c6f2]" style={{ height: `${bar.profit}%` }} /></div>)}</div>
            </div>
          </div>
          <aside className="rounded-[18px] border border-[#dce8f3] bg-white shadow-[0_12px_35px_#165da908]"><h3 className="rounded-t-[18px] bg-[#deeffb] px-6 py-4 text-sm font-semibold">Why Beyond Key for Custom AI Solutions?</h3><div className="divide-y divide-[#e3edf5] px-6">{reasons.map((reason, index) => <div key={reason} className="py-5"><p className="text-3xl font-semibold tracking-[-.05em] text-[#1767ba]">{String(index + 1).padStart(2, "0")}</p><p className="mt-1 text-sm text-[#6b8094]">{reason}</p></div>)}</div></aside>
        </div>
      </div>
    </section>
  );
}

export function AiProcessCase() {
  return (
    <section id="ai-managed-services" aria-labelledby="ai-case-process-heading" className="relative overflow-hidden bg-[#d3e5f0] text-[#11345c]">
      <Image src="/images/custom-ai/blue-glass-office.webp" alt="Modern glass business campus" fill sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#d3e5f0] via-[#d3e5f0]/95 to-[#d3e5f0]/15" />
      <div className="relative mx-auto flex min-h-[630px] max-w-[1500px] flex-col justify-between gap-10 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-[610px]"><p className="text-[11px] font-bold tracking-[.2em] text-[#1b70bc] uppercase">Strategy to continuous optimisation</p><h2 id="ai-case-process-heading" className="mt-3 text-[clamp(42px,4.6vw,70px)] leading-[1] font-semibold tracking-[-.065em]">End-to-End AI Managed Services That Change Everything</h2><p className="mt-5 max-w-[510px] text-base leading-[1.65] text-[#5d748b]">We care about the little things in everything that we do, from strategy to continuous optimisation:</p></div>
        <div className="grid gap-3 sm:grid-cols-3">{[{ value: "01", label: "AI consulting & use case identification for custom AI solutions." }, { value: "02", label: "AI custom solutions - model training, fine-tuning, and deployment." }, { value: "03", label: "Custom AI application development, performance monitoring & continuous improvement." }].map((item) => <div key={item.value} className="rounded-[14px] bg-[#063e81]/95 p-6 text-white shadow-[0_12px_28px_#12365e28]"><p className="text-[clamp(29px,3.2vw,48px)] leading-none font-semibold tracking-[-.06em]">{item.value}</p><p className="mt-3 text-sm text-white/80">{item.label}</p></div>)}</div>
      </div>
    </section>
  );
}

export function AiCommerceCase() {
  return (
    <section id="ai-get-started" aria-labelledby="ai-case-commerce-heading" className="relative overflow-hidden bg-[#eadac4] text-[#11345c]">
      <Image src="/images/custom-ai/analytics-laptop.webp" alt="Laptop displaying a blue analytics dashboard" fill sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#eadac4] via-[#eadac4]/95 to-[#eadac4]/10" />
      <div className="relative mx-auto flex min-h-[610px] max-w-[1500px] flex-col justify-between gap-9 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-[590px]"><p className="text-[11px] font-bold tracking-[.2em] text-[#1b70bc] uppercase">Join us in creating something smart.</p><h2 id="ai-case-commerce-heading" className="mt-3 text-[clamp(42px,4.5vw,68px)] leading-[1] font-semibold tracking-[-.065em]">Interested in Improving Your Business with AI?</h2><p className="mt-5 max-w-[500px] text-base leading-[1.65] text-[#5d748b]">AI Development Solutions: We build solutions that are scalable, robust, and future-ready with Beyond Key&apos;s AI development experts, no matter if you are planning to implement a new product or boost an existing solution.</p></div>
        <div className="grid max-w-[900px] gap-3 sm:grid-cols-3">{[{ value: "Scalable", label: "Implement a new product" }, { value: "Robust", label: "Boost an existing solution" }, { value: "Future-ready", label: "AI development experts" }].map((item) => <div key={item.value} className="rounded-[14px] border border-[#d6e5f3] bg-white/90 p-6 shadow-[0_12px_30px_#163e6920] backdrop-blur-sm"><p className="text-[clamp(29px,3vw,46px)] leading-none font-semibold tracking-[-.06em] text-[#1768bc]">{item.value}</p><p className="mt-3 text-sm text-[#61778a]">{item.label}</p></div>)}</div>
      </div>
    </section>
  );
}
