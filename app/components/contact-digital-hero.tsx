import Image from "next/image";

function Starburst() {
  return (
    <svg aria-hidden="true" viewBox="0 0 150 150" fill="none" className="pointer-events-none absolute right-[2%] bottom-[10%] hidden w-[24%] max-w-[155px] text-[#c8a990] lg:block">
      {Array.from({ length: 24 }, (_, index) => <path key={index} d="M75 75V8" stroke="currentColor" strokeWidth={index % 3 === 0 ? 1.2 : .8} transform={`rotate(${index * 15} 75 75)`} />)}
      <circle cx="75" cy="75" r="3.5" fill="#ed8050" />
    </svg>
  );
}

function BalanceCard() {
  return (
    <div className="absolute right-[3%] bottom-[5%] w-[60%] max-w-[300px] rounded-[18px] bg-white px-4 pt-4 pb-3 shadow-[0_14px_35px_#161b1b30] sm:right-[4%] sm:bottom-[6%] sm:px-5 sm:pt-5">
      <div className="flex items-end justify-between gap-2">
        <div><p className="text-[9px] text-[#96939a] sm:text-[11px]">From first hello</p><p className="mt-1 text-[clamp(16px,1.7vw,24px)] leading-tight font-semibold tracking-[-.05em] text-[#17191b]">to what comes next.</p></div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 250 105" className="mt-2 w-full"><path d="M5 91C29 85 35 47 57 48S87 73 106 66 131 42 151 52 169 20 192 16 229 29 246 40" fill="none" stroke="#202524" strokeWidth="2.3" strokeLinecap="round" /><path d="M137 67V101" stroke="#d8d6d3" strokeDasharray="3 4" /><circle cx="137" cy="54" r="5.5" fill="#ff895a" stroke="white" strokeWidth="2" /></svg>
    </div>
  );
}

function ThreeCircles() {
  return <svg aria-hidden="true" viewBox="0 0 54 54" fill="none" className="size-10 text-white/90 sm:size-12">{[0, 1, 2].map((index) => <ellipse key={index} cx="27" cy="27" rx="13" ry="22" stroke="currentColor" strokeWidth="1.3" transform={`rotate(${index * 60} 27 27)`} />)}</svg>;
}

export default function ContactDigitalHero() {
  return (
    <section id="contact-hero" aria-labelledby="contact-heading" className="bg-[#fffefd] px-5 pt-5 pb-8 text-[#212523] sm:px-8 sm:pt-7 sm:pb-10 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-7 lg:gap-10">
          <div className="relative flex min-w-0 flex-col justify-center py-3 sm:py-5 md:py-0">
            <h1 id="contact-heading" className="text-[clamp(43px,5.2vw,82px)] leading-[1.04] font-semibold tracking-[-.065em]">
              <span className="block">Fueling Businesses</span>
              <span className="block">for the <span className="relative inline-block text-[#ff8151]">Digital<span aria-hidden="true" className="absolute -right-1 -bottom-1 left-0 h-[13px] rounded-[50%] border-b border-[#ca8e6c] -rotate-3" /></span></span>
              <span className="block">Age.</span>
            </h1>
            <p className="mt-5 max-w-[490px] text-sm leading-[1.55] tracking-[-.02em] text-[#555b57] sm:text-[15px] lg:mt-7 lg:text-[17px]">We craft impactful digital experiences through strategy, design, and technology to help your business grow, engage, and lead.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-7"><a href="#quote" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#ff895c] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#ed7040] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff895c]">Get in touch</a><a href="#office-map" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cbd0cb] bg-white px-7 py-2.5 text-sm font-medium text-[#202523] transition-colors hover:bg-[#f7f6f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff895c]">Find our office</a></div>
            <Starburst />
          </div>
          <div className="relative aspect-[1.22] min-w-0 overflow-hidden rounded-[24px] bg-[#e8ded1] sm:aspect-[1.3] md:aspect-auto md:min-h-[350px] lg:min-h-[min(55svh,450px)]">
            <Image src="/images/contact-hero-portrait.webp" alt="A woman in a blue hoodie looking at her smartphone" fill priority sizes="(max-width: 767px) 100vw, 50vw" className="object-cover object-[center_18%]" />
            <BalanceCard />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-[minmax(0,1.75fr)_minmax(0,.8fr)_minmax(0,.85fr)] sm:gap-4 lg:mt-6 lg:gap-6">
          <div style={{ background: "radial-gradient(circle at 95% 20%, #ff824e 0%, transparent 40%), #302b29" }} className="col-span-2 flex min-h-[142px] items-center gap-4 overflow-hidden rounded-[22px] px-5 py-5 text-white sm:col-span-1 sm:gap-5 sm:px-6 lg:min-h-[168px] lg:px-8">
            <div className="flex shrink-0 -space-x-3">{[1, 2, 3, 4].map((person) => <Image key={person} src={`/images/client-${person}.jpg`} alt="" width={46} height={46} className="size-9 rounded-full border-2 border-[#302b29] object-cover sm:size-10 lg:size-12" />)}</div>
            <div><p className="text-[clamp(26px,2.6vw,42px)] leading-none font-semibold tracking-[-.05em]">Great minds.</p><p className="mt-2 max-w-52 text-[10px] leading-[1.45] text-white/85 sm:text-xs">Better outcomes. Your next chapter, built together.</p></div>
          </div>
          <div className="flex min-h-[142px] flex-col items-center justify-center rounded-[22px] bg-[#fff0ea] px-3 py-5 text-center sm:min-h-0"><p className="text-[clamp(34px,3.2vw,54px)] leading-none font-semibold tracking-[-.05em] text-[#ff895c]">03</p><p className="mt-2 text-base text-[#1f2220] lg:text-xl">Listen. Explore. Create.</p></div>
          <div className="relative flex min-h-[142px] flex-col items-center justify-center rounded-[22px] bg-[#ff895c] px-3 py-5 text-center text-white sm:min-h-0"><span className="absolute top-3 left-4"><ThreeCircles /></span><span aria-hidden="true" className="absolute top-3 right-4 text-xl font-light">↗</span><p className="mt-4 text-[clamp(26px,2.6vw,42px)] leading-none font-semibold tracking-[-.05em]">Let&apos;s talk</p><p className="mt-2 max-w-32 text-[10px] leading-[1.45] text-white/90 sm:text-xs">Some conversations move faster by voice.</p></div>
        </div>
      </div>
    </section>
  );
}
