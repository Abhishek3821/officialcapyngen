import Image from "next/image";

const years = [
  { label: "2021", revenue: 25, profit: 15 },
  { label: "2022", revenue: 39, profit: 27 },
  { label: "2023", revenue: 53, profit: 39 },
  { label: "2024", revenue: 69, profit: 54 },
  { label: "2025", revenue: 88, profit: 71 },
];

export function AiGrowthChart() {
  return (
    <section id="ai-growth" aria-labelledby="ai-growth-heading" className="bg-white text-[#15395f]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[620px] lg:px-12 lg:py-20">
        <p className="text-[11px] font-bold tracking-[.2em] text-[#2b7bc1] uppercase">Illustrative project model</p>
        <h2 id="ai-growth-heading" className="mt-2 text-[clamp(42px,4.5vw,68px)] leading-none font-semibold tracking-[-.06em]">Growth dynamics</h2>
        <p className="mt-3 text-base text-[#6b8094]">An example of how a data-led roadmap can make progress visible.</p>
        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,.55fr)] lg:gap-12">
          <div className="rounded-[18px] border border-[#dce8f3] bg-white px-5 pt-7 pb-5 shadow-[0_12px_35px_#165da908] sm:px-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#60788e]"><span><i className="mr-2 inline-block size-2 rounded-full bg-[#156fc7]" />Revenue</span><span><i className="mr-2 inline-block size-2 rounded-full bg-[#48a1e5]" />Profit</span><span><i className="mr-2 inline-block size-2 rounded-full bg-[#9dd2f4]" />Customers</span></div>
            <div role="img" aria-label="Illustrative upward trend from 2021 to 2025" className="relative mt-6 h-[270px] border-b border-[#d4e3f0] bg-[repeating-linear-gradient(to_top,transparent_0,transparent_53px,#dceaf4_54px)] sm:h-[310px]">
              <svg viewBox="0 0 500 250" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" aria-hidden="true"><polyline points="50,204 150,175 250,147 350,108 450,55" fill="none" stroke="#125fae" strokeWidth="3" /><g fill="#125fae"><circle cx="50" cy="204" r="5" /><circle cx="150" cy="175" r="5" /><circle cx="250" cy="147" r="5" /><circle cx="350" cy="108" r="5" /><circle cx="450" cy="55" r="6" /></g></svg>
              <div className="absolute inset-0 grid grid-cols-5 items-end gap-2 px-2 sm:gap-5 sm:px-5">{years.map((year) => <div key={year.label} className="relative flex h-full items-end justify-center gap-1"><span className="w-[27%] rounded-t-[3px] bg-[#297fd0]" style={{ height: `${year.revenue}%` }} /><span className="w-[27%] rounded-t-[3px] bg-[#83c6f2]" style={{ height: `${year.profit}%` }} /></div>)}</div>
            </div>
            <div className="mt-3 grid grid-cols-5 text-center text-xs font-semibold text-[#637c94]">{years.map((year) => <span key={year.label}>{year.label}</span>)}</div>
          </div>
          <aside className="rounded-[18px] border border-[#dce8f3] bg-white shadow-[0_12px_35px_#165da908]"><h3 className="rounded-t-[18px] bg-[#deeffb] px-6 py-4 text-sm font-semibold">Key example outcomes</h3><div className="divide-y divide-[#e3edf5] px-6">{[{ value: "2.5×", label: "Profit growth" }, { value: "+120%", label: "New customers" }, { value: "6 months", label: "Time to first result" }].map((item) => <div key={item.label} className="py-5"><p className="text-3xl font-semibold tracking-[-.05em] text-[#1767ba]">{item.value}</p><p className="mt-1 text-sm text-[#6b8094]">{item.label}</p></div>)}</div></aside>
        </div>
      </div>
    </section>
  );
}

export function AiProcessCase() {
  return (
    <section id="ai-case-process" aria-labelledby="ai-case-process-heading" className="relative overflow-hidden bg-[#d3e5f0] text-[#11345c]">
      <Image src="/images/custom-ai/blue-glass-office.webp" alt="Modern glass business campus" fill sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#d3e5f0] via-[#d3e5f0]/95 to-[#d3e5f0]/15" />
      <div className="relative mx-auto flex min-h-[630px] max-w-[1500px] flex-col justify-between gap-10 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-[610px]"><p className="text-[11px] font-bold tracking-[.2em] text-[#1b70bc] uppercase">Illustrative case study</p><h2 id="ai-case-process-heading" className="mt-3 text-[clamp(42px,4.6vw,70px)] leading-[1] font-semibold tracking-[-.065em]">Business process optimization</h2><p className="mt-5 max-w-[510px] text-base leading-[1.65] text-[#5d748b]">A sample scenario showing how AI can reduce manual steps and give a team more time for important decisions.</p></div>
        <div className="grid gap-3 sm:grid-cols-3">{[{ value: "−40%", label: "Operating costs" }, { value: "+75%", label: "Productivity" }, { value: "−50%", label: "Order turnaround" }].map((item) => <div key={item.label} className="rounded-[14px] bg-[#063e81]/95 p-6 text-white shadow-[0_12px_28px_#12365e28]"><p className="text-[clamp(29px,3.2vw,48px)] leading-none font-semibold tracking-[-.06em]">{item.value}</p><p className="mt-3 text-sm text-white/80">{item.label}</p></div>)}</div>
      </div>
    </section>
  );
}

export function AiCommerceCase() {
  return (
    <section id="ai-case-commerce" aria-labelledby="ai-case-commerce-heading" className="relative overflow-hidden bg-[#eadac4] text-[#11345c]">
      <Image src="/images/custom-ai/analytics-laptop.webp" alt="Laptop displaying a blue analytics dashboard" fill sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#eadac4] via-[#eadac4]/95 to-[#eadac4]/10" />
      <div className="relative mx-auto flex min-h-[610px] max-w-[1500px] flex-col justify-between gap-9 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-[590px]"><p className="text-[11px] font-bold tracking-[.2em] text-[#1b70bc] uppercase">Illustrative case study</p><h2 id="ai-case-commerce-heading" className="mt-3 text-[clamp(42px,4.5vw,68px)] leading-[1] font-semibold tracking-[-.065em]">E-commerce sales growth</h2><p className="mt-5 max-w-[500px] text-base leading-[1.65] text-[#5d748b]">A sample commerce scenario where connected data and smarter recommendations help customers find the right products.</p></div>
        <div className="grid max-w-[900px] gap-3 sm:grid-cols-3">{[{ value: "2.8×", label: "Revenue potential" }, { value: "+120%", label: "New customers" }, { value: "6 months", label: "Time to first result" }].map((item) => <div key={item.label} className="rounded-[14px] border border-[#d6e5f3] bg-white/90 p-6 shadow-[0_12px_30px_#163e6920] backdrop-blur-sm"><p className="text-[clamp(29px,3vw,46px)] leading-none font-semibold tracking-[-.06em] text-[#1768bc]">{item.value}</p><p className="mt-3 text-sm text-[#61778a]">{item.label}</p></div>)}</div>
      </div>
    </section>
  );
}
