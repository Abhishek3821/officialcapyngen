import Image from "next/image";

const stops = [
  { days: "Days 1 – 3", city: "Jaipur", description: "Palaces, forts and a royal welcome", image: "/images/application-solutions/jaipur.webp" },
  { days: "Days 4 – 6", city: "Varanasi", description: "Sacred rituals and ancient wisdom", image: "/images/moments/architecture.jpg" },
  { days: "Days 7 – 8", city: "Kerala", description: "Backwaters, beaches and calm", image: "/images/application-solutions/kerala.webp" },
  { days: "Days 9 – 10", city: "Himachal", description: "Mountains and fresh perspectives", image: "/images/application-solutions/hiker.webp" },
];

export function AppIndiaJourney() {
  return <section id="app-india-journey" aria-labelledby="app-india-title" className="relative overflow-hidden bg-[#082333] text-[#f7f2e8]"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,#1e46516b,transparent_48%)]" /><div className="relative mx-auto grid min-h-[760px] max-w-[1550px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.86fr_1.14fr] lg:items-center lg:px-14"><div className="max-w-[570px]"><p className="text-xs font-semibold tracking-[.38em] text-[#d1b779] uppercase">The journey <span className="ml-5 inline-block h-px w-24 align-middle bg-[#b99b63]" /></p><h2 id="app-india-title" className="mt-7 font-serif text-[clamp(55px,6.2vw,96px)] leading-none tracking-[-.05em]">10 DAYS</h2><p className="mt-2 font-serif text-[clamp(29px,3vw,48px)] leading-tight tracking-[.04em] uppercase">4 Incredible Destinations</p><p className="mt-7 max-w-[530px] text-base leading-[1.7] text-[#c8d4d4]">From royal palaces to sacred ghats, peaceful backwaters to snow-capped mountains — experience the many colours of India in one unforgettable journey.</p><a href="#app-about" className="mt-9 inline-flex rounded-full bg-gradient-to-b from-[#f2d69a] to-[#d7a655] px-8 py-3 text-sm font-semibold text-[#23313a] shadow-[0_12px_30px_#0003] hover:brightness-110">View detailed itinerary →</a><p className="mt-16 font-serif text-3xl italic leading-tight text-[#cfc0a7] sm:text-4xl">Same land.<br />A million emotions.</p></div>
    <div className="relative space-y-3 border-l border-[#c9a768]/50 pl-6 sm:pl-9">{stops.map((stop) => <article key={stop.city} className="relative grid min-h-[125px] grid-cols-[minmax(0,1fr)_minmax(130px,.9fr)] items-center gap-4 rounded-[14px] border border-white/10 bg-white/[.045] p-3 sm:min-h-[150px] sm:gap-6 sm:p-4"><span aria-hidden="true" className="absolute top-1/2 -left-[32px] size-3 -translate-y-1/2 rounded-full bg-[#e2be7b] ring-4 ring-[#0a2635] sm:-left-[42px]" /><div><p className="text-xs text-[#dfc48a]">{stop.days}</p><h3 className="mt-1 font-serif text-2xl sm:text-3xl">{stop.city}</h3><p className="mt-1 max-w-[210px] text-xs leading-[1.5] text-[#aebfc2] sm:text-sm">{stop.description}</p></div><div className="relative h-[105px] overflow-hidden rounded-[11px] sm:h-[130px]"><Image src={stop.image} alt={stop.city} fill sizes="(max-width: 768px) 40vw, 25vw" className="object-cover" /></div></article>)}</div>
  </div></section>;
}

const tourPoints = [
  { icon: "◉", label: "Curated itineraries" },
  { icon: "♧", label: "Local experts" },
  { icon: "◇", label: "Safe & hassle-free" },
  { icon: "♡", label: "Authentic experiences" },
];

export function AppTourAbout() {
  return <section id="app-about" aria-labelledby="app-about-title" className="relative overflow-hidden bg-[#f6f0e3] text-[#292a27]"><Image src="/images/application-solutions/jaipur.webp" alt="Warm sandstone palace in Jaipur" fill sizes="100vw" className="object-cover object-[72%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-[#f7f2e7] via-[#f7f2e7]/94 to-[#f7f2e7]/15" /><div className="relative mx-auto flex min-h-[610px] max-w-[1550px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-14"><div className="max-w-[720px]"><p className="text-xs font-semibold tracking-[.3em] text-[#87704c] uppercase">Our story <span className="ml-3 inline-block h-px w-20 align-middle bg-[#aa9063]" /></p><h2 id="app-about-title" className="mt-6 font-serif text-[clamp(50px,5.6vw,84px)] leading-[.98] tracking-[-.05em]">About<br />The Tour</h2><p className="mt-6 max-w-[650px] text-base leading-[1.7] text-[#5b5d56]">India is not just a destination, it&apos;s an emotion. This 10-day journey brings you a blend of royal heritage, spiritual depth, natural beauty and local experiences — crafted for curious travellers.</p><div className="mt-10 grid max-w-[680px] grid-cols-2 gap-4 sm:grid-cols-4">{tourPoints.map((point) => <div key={point.label} className="flex items-center gap-2 text-xs text-[#5e594c]"><span className="text-2xl text-[#a98a54]">{point.icon}</span>{point.label}</div>)}</div></div><blockquote className="mt-14 self-end border-l-2 border-[#ad9062] pl-5 font-serif text-2xl italic text-[#625444] sm:mt-0 sm:text-3xl">“Different landscapes.<br />One incredible India.”</blockquote></div>
  </section>;
}
