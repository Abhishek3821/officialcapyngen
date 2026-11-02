const accolades = [
  { publication: "TIME", title: "TIME’s World’s Most Sustainable Companies 2026", wordmark: "font-serif text-[clamp(48px,4.8vw,70px)] font-normal tracking-[-.065em]" },
  { publication: "Newsweek", title: "Newsweek America’s Most Responsible Companies 2026", wordmark: "font-serif text-[clamp(38px,4.1vw,61px)] font-black tracking-[-.065em]" },
  { publication: "Forbes", title: "Forbes Most Trusted Companies in America 2025", wordmark: "font-serif text-[clamp(48px,4.8vw,70px)] font-bold tracking-[-.065em]" },
  { publication: "USA TODAY", title: "USA Today America’s Climate Leaders 2026", wordmark: "text-[clamp(24px,2.7vw,40px)] font-black tracking-[-.055em]" },
  { publication: "FINANCIAL TIMES", title: "The Financial Times Best Employers Asia-Pacific 2026", wordmark: "font-serif text-[clamp(18px,2vw,31px)] font-bold tracking-[-.045em]" },
];

function LightTrails() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1500 720" preserveAspectRatio="xMinYMax slice" className="pointer-events-none absolute inset-0 h-full w-full opacity-75">
      <defs>
        <linearGradient id="accolades-light" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffb629" /><stop offset=".35" stopColor="#ff6a00" /><stop offset=".7" stopColor="#196b9f" stopOpacity=".45" /><stop offset="1" stopColor="#00132c" stopOpacity="0" />
        </linearGradient>
        <filter id="accolades-glow"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      <path d="M-90 180 Q80 605 740 830" fill="none" stroke="url(#accolades-light)" strokeWidth="15" filter="url(#accolades-glow)" />
      {Array.from({ length: 24 }, (_, i) => (
        <path key={i} d={`M${-135 + i * 5} ${190 + i * 13} Q${60 + i * 4} ${630 + i * 8} ${760 + i * 22} ${755 + i * 6}`} fill="none" stroke="url(#accolades-light)" strokeWidth={i % 5 === 0 ? 2 : .7} opacity={i % 5 === 0 ? .8 : .35} />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => <circle key={i} cx={25 + i * 45} cy={540 + i * 27} r={i % 2 ? 3 : 4} fill={i % 2 ? "#72c5e8" : "#ffb548"} />)}
    </svg>
  );
}

export default function RecentAccolades() {
  return (
    <section id="recent-accolades" aria-labelledby="recent-accolades-heading" className="overflow-hidden bg-[#03172f] p-3 text-white sm:p-4">
      <div className="relative isolate overflow-hidden rounded-[18px] border border-[#718291]/80 bg-[linear-gradient(115deg,#03172f_20%,#0e2542_100%)] px-5 py-10 sm:px-8 sm:py-14 lg:px-[6%] lg:py-[clamp(50px,5.8vw,90px)]">
        <LightTrails />
        <div id="recent-accolades-list" className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col items-start justify-center pb-5 sm:col-span-2 lg:col-span-1 lg:pb-8">
            <h2 id="recent-accolades-heading" className="text-[clamp(28px,2.8vw,42px)] leading-[1.12] font-bold tracking-[-.045em]">RECENT ACCOLADES</h2>
            <p className="mt-6 max-w-[350px] text-[clamp(18px,1.65vw,24px)] leading-[1.35] tracking-[-.025em] text-[#b8c8d2]">Reinforcing our commitment to excellence and innovation.</p>
            <a href="#accolades-complete-list" className="mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-[#ff5400] transition-colors hover:text-[#ff9b51] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8c40]">VIEW ALL <svg aria-hidden="true" width="9" height="20" viewBox="0 0 9 20"><path d="M1 0 8 10 1 20Z" fill="currentColor" /></svg></a>
          </div>
          {accolades.map((award, index) => (
            <article key={award.publication} id={index === 2 ? "accolades-complete-list" : undefined} className="flex min-h-[230px] flex-col justify-between border border-[#d3e0e5]/70 bg-[#b8c6ce] px-7 py-8 text-[#071c31] sm:min-h-[250px] lg:aspect-[1.65/1] lg:min-h-0 lg:px-8 lg:py-9">
              <h3 className={`flex min-h-20 items-center whitespace-nowrap leading-none text-black ${award.wordmark}`}>
                {award.publication === "USA TODAY" && <span aria-hidden="true" className="mr-2.5 inline-block size-[clamp(36px,3.7vw,56px)] shrink-0 rounded-full bg-black" />}
                {award.publication}
              </h3>
              <p className="mt-6 max-w-[350px] text-[17px] leading-[1.4] font-normal tracking-[-.015em] lg:text-[clamp(16px,1.3vw,20px)]">{award.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
