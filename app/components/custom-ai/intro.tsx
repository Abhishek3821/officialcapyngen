import Image from "next/image";

const advantages = [
  { number: "01", label: "Designed With Your Workflow in Mind." },
  { number: "02", label: "No Payment for Features You Do Not Use." },
  { number: "03", label: "Comprehensive Data Control" },
  { number: "04", label: "Because It Works With Any Stack." },
  { number: "05", label: "Achievable Business Results" },
  { number: "06", label: "It Grows With Your Business" },
  { number: "07", label: "Competitive Advantage You Have" },
  { number: "08", label: "Lower Cost Over the Long Term." },
  { number: "09", label: "Ensuring Compliance and Designing for Security." },
  { number: "10", label: "Closer to Real Issues in Less Time." },
];

export function AiHero() {
  return (
    <section id="ai-home" aria-labelledby="ai-hero-heading" className="relative overflow-hidden bg-[#eff6fd] text-[#0d2b50]">
      <Image src="/images/custom-ai/blue-glass-office.webp" alt="Blue glass office tower reflecting the sky" fill priority sizes="100vw" className="object-cover object-[72%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f9fcff] via-[#f9fcff]/95 to-[#f9fcff]/25 lg:via-[#f9fcff]/85 lg:to-transparent" />
      <div className="relative mx-auto grid min-h-[640px] max-w-[1600px] items-center gap-10 px-5 py-20 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,1.45fr)_minmax(0,.55fr)] lg:px-12 lg:py-10">
        <div className="max-w-[820px]">
          <p className="mb-5 text-[11px] font-bold tracking-[.22em] text-[#1765ae] uppercase">Capyngen / Custom AI Solution</p>
          <h1 id="ai-hero-heading" className="text-[clamp(42px,5.4vw,88px)] leading-[.96] font-bold tracking-[-.07em] uppercase">Custom AI Solutions <span className="text-[#1267ba]">That Transform Business</span></h1>
          <p className="mt-6 max-w-[630px] text-base leading-[1.6] text-[#405874] sm:text-lg">Why do most AI projects fail? They begin with the solution, not the problem. We reverse the process. The top custom AI solution company in India focuses on your operational pain point as our first step, then creates the minimum viable platform that demonstrates value, and then expands from there.</p>
          <div className="mt-10 grid max-w-[650px] grid-cols-3 divide-x divide-[#a9c5df] border-t border-[#a9c5df] pt-6">
            {[{ value: "01", label: "Pinpoint the Bottleneck" }, { value: "02", label: "Build the Proof" }, { value: "03", label: "Scale What Works" }].map((item) => <div key={item.value} className="px-3 first:pl-0 sm:px-6"><p className="text-[clamp(30px,3vw,50px)] leading-none font-bold tracking-[-.06em] text-[#125ca7]">{item.value}</p><p className="mt-2 text-[11px] leading-[1.35] text-[#49627a] sm:text-sm">{item.label}</p></div>)}
          </div>
        </div>
        <div className="max-w-[310px] justify-self-start rounded-[20px] border border-white/20 bg-[#073d79]/90 p-7 text-white shadow-[0_22px_65px_#0a356050] backdrop-blur-sm lg:justify-self-end lg:p-9">
          <span className="block h-px w-9 bg-[#c1e8ff]" aria-hidden="true" />
          <p className="mt-8 text-[clamp(20px,1.8vw,28px)] leading-[1.25] font-medium uppercase">We reverse the process.</p>
          <p className="mt-5 text-sm leading-[1.6] text-white/70">The top custom AI solution company in India.</p>
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
          <p className="text-[11px] font-bold tracking-[.2em] text-[#2777bd] uppercase">Demo to system</p>
          <h2 id="ai-about-heading" className="mt-3 text-[clamp(42px,4.8vw,72px)] leading-[1.02] font-semibold tracking-[-.065em]">How We Think About AI</h2>
          <p className="mt-5 max-w-[590px] text-base leading-[1.7] text-[#60758c]">The &quot;demo to system&quot; gap is huge. We bridge that chasm as a leading custom AI solution provider in India by always approaching every engagement as an engineering problem first and a technology problem second. Only if the solution makes a difference to a number that matters to you does it matter.</p>
          <div className="mt-10 grid grid-cols-3 divide-x divide-[#d6e3f0] border-t border-[#d6e3f0] pt-7">
            {[{ icon: "▥", value: "01", label: "Identify the true cause of Breakage" }, { icon: "♧", value: "02", label: "Collaborate with the users of the Product." }, { icon: "◇", value: "03", label: "Measure What Changed, Not Just What Was Delivered." }].map((item) => <div key={item.value} className="px-3 first:pl-0 sm:px-5"><span aria-hidden="true" className="text-2xl text-[#1975c3]">{item.icon}</span><p className="mt-3 text-[clamp(30px,3vw,47px)] leading-none font-bold text-[#175fae]">{item.value}</p><p className="mt-2 text-[11px] leading-[1.45] text-[#60758c] sm:text-sm">{item.label}</p></div>)}
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
      <div className="relative mx-auto grid max-w-[1540px] gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-stretch lg:gap-10 lg:px-12 lg:py-20 xl:gap-14">
        <div className="flex min-h-0 min-w-0 flex-col">
          <p className="text-[11px] font-bold tracking-[.2em] text-[#2575b9] uppercase">Custom AI software</p>
          <h2 id="ai-contents-heading" className="mt-3 text-[clamp(36px,4vw,64px)] leading-[1.02] font-bold tracking-[-.06em]">Main advantages of <span className="text-[#1267ba]">Custom AI Solutions</span></h2>
          <p className="mt-4 max-w-[500px] text-base leading-[1.7] text-[#667b90]">Custom AI software offers 10 key benefits: built around your workflow, your data and the results you actually need.</p>

          <div className="relative mt-8 flex min-h-[220px] flex-1 flex-col justify-between overflow-hidden rounded-[22px] bg-[#073d79] p-6 text-white shadow-[0_22px_55px_#0a35602e] sm:p-8 lg:mt-10 lg:min-h-0">
            <div aria-hidden="true" className="absolute -top-24 -right-24 size-[260px] rounded-full border-[40px] border-[#45a7ec]/20" />
            <div aria-hidden="true" className="absolute -right-6 -bottom-16 size-[180px] rounded-full border-[28px] border-[#c1e8ff]/10" />
            <span aria-hidden="true" className="relative block h-px w-9 bg-[#c1e8ff]" />
            <div className="relative mt-8">
              <p className="text-[clamp(64px,7vw,112px)] leading-[.85] font-bold tracking-[-.08em] text-[#c1e8ff]">10</p>
              <p className="mt-4 max-w-[340px] text-[clamp(18px,1.6vw,24px)] leading-[1.25] font-medium uppercase">Reasons custom beats off-the-shelf.</p>
              <p className="mt-3 max-w-[360px] text-sm leading-[1.6] text-white/65">Pay only for what you use, keep control of your data and scale on your own terms.</p>
            </div>
          </div>
        </div>

        <ol className="grid min-h-0 min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-fr lg:gap-4">
          {advantages.map((item) => (
            <li key={item.number} className="group relative flex min-h-[84px] items-center gap-4 overflow-hidden rounded-[16px] border border-[#dce8f4] bg-white/90 px-5 py-4 shadow-[0_8px_22px_#165a9b0b] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#9cc8ed] hover:shadow-[0_14px_30px_#165a9b1f] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:min-h-0">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#e3f0fb] text-lg font-semibold tracking-[-.04em] text-[#176ac4] transition-colors group-hover:bg-[#1267ba] group-hover:text-white">{item.number}</span>
              <span className="text-sm leading-snug font-medium text-[#3f5872] group-hover:text-[#0c5cae] sm:text-[15px]">{item.label}</span>
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-linear-to-b from-[#1267ba] to-[#45a7ec] transition-transform duration-300 group-hover:scale-y-100 motion-reduce:transition-none" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
