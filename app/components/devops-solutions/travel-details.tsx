import Image from "next/image";
import Link from "next/link";

function Picture({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#e3e4e0] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

const destinationTiles = [
  { title: "Pakistan", subtitle: "Historic architecture", image: "/images/moments/architecture.jpg", style: "sm:row-span-2", overlay: "from-[#aa5cb2]/80 via-transparent to-transparent" },
  { title: "Türkiye", subtitle: "Cappadocia", image: "/images/destinations/goreme.webp", style: "", overlay: "from-[#9b57a8]/75 via-transparent to-transparent" },
  { title: "France", subtitle: "A city of stories", image: "/images/moments/travel.jpg", style: "sm:row-span-2", overlay: "from-[#425bb0]/80 via-transparent to-transparent" },
  { title: "Canada", subtitle: "Open landscapes", image: "/images/destinations/yosemite.webp", style: "", overlay: "from-[#9260ae]/75 via-transparent to-transparent" },
  { title: "Italy", subtitle: "Colorful moments", image: "/images/moments/cafe.jpg", style: "", overlay: "from-[#8c58ae]/80 via-transparent to-transparent" },
  { title: "Spain", subtitle: "The coast awaits", image: "/images/destinations/los-lances.webp", style: "", overlay: "from-[#8c58ae]/80 via-transparent to-transparent" },
];

export function TopDestination() {
  return <section id="devops-top-destination" aria-labelledby="devops-top-destination-title" className="bg-[#fffdfd] text-[#26222c]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[720px] lg:px-12 lg:py-20"><div className="text-center"><p className="text-xs font-semibold tracking-[.2em] text-[#a75ea8] uppercase">Explore beyond the ordinary</p><h2 id="devops-top-destination-title" className="mt-2 text-[clamp(42px,4.8vw,70px)] leading-none font-bold tracking-[-.055em] text-[#9d4da3] uppercase">Top Destination</h2><p className="mt-4 text-sm text-[#9a9299]">Explore the places that keep us curious.</p></div>
    <div className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 lg:auto-rows-[220px]">{destinationTiles.map((tile) => <article key={tile.title} className={`group relative min-w-0 overflow-hidden rounded-[18px] ${tile.style}`}><Picture src={tile.image} alt={`${tile.title} destination`} className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" /><div className={`absolute inset-0 bg-gradient-to-t ${tile.overlay}`} /><div className="absolute right-4 bottom-4 left-4 text-white"><h3 className="text-xl leading-none font-bold uppercase sm:text-2xl">{tile.title}</h3><p className="mt-1 text-xs text-white/85">{tile.subtitle}</p></div></article>)}</div>
  </div></section>;
}

export function MoreThanProperty() {
  const benefits = ["Thoughtfully designed digital spaces", "A smooth experience from idea to launch", "Reliable systems behind every interaction", "A partner that grows with your business"];
  return <section id="devops-more" aria-labelledby="devops-more-title" className="bg-[#fbfbff] text-[#18143a]"><div className="mx-auto grid min-h-[650px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:px-12"><div className="max-w-[540px]"><p className="text-xs font-bold tracking-[.18em] text-[#8a72df] uppercase">Why choose Capyngen</p><h2 id="devops-more-title" className="mt-3 text-[clamp(48px,5vw,76px)] leading-[.98] font-bold tracking-[-.065em]">More Than Just<br />A Property</h2><p className="mt-6 text-base leading-[1.7] text-[#6f6d82]">We offer more than just spaces. We deliver experiences built to feel considered, dependable, and easy to use.</p><ul className="mt-8 space-y-3">{benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm text-[#51516b]"><span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#9c6bee] text-xs text-white">✓</span>{benefit}</li>)}</ul><Link href="/contact-us" className="mt-9 inline-flex rounded-full bg-[#201655] px-7 py-3 text-sm font-semibold text-white hover:bg-[#39237a] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#39237a]">Learn more ↗</Link></div><Picture src="/images/agenda/photo-1600210492486-724fe5c67fb0.jpg" alt="Bright modern living room" className="h-[410px] rounded-[30px] shadow-[0_20px_60px_#33335a15] sm:h-[520px]" /></div></section>;
}

const properties = [
  { image: "/images/agenda/photo-1449158743715-0a90ebb6d2d8.jpg", name: "Forest House", detail: "A home framed by nature", number: "01" },
  { image: "/images/agenda/photo-1600607687920-4e2a09cf159d.jpg", name: "Open Living", detail: "Space for a slower pace", number: "02" },
  { image: "/images/agenda/photo-1497366754035-f200968a6e72.jpg", name: "City Retreat", detail: "Modern comfort, considered", number: "03" },
];

export function OurProperties() {
  return <section id="devops-properties" aria-labelledby="devops-properties-title" className="bg-[#e9ebdf] text-[#30372a]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[760px] lg:px-12 lg:py-20"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-semibold tracking-[.18em] text-[#7d8b6f] uppercase">Spaces to explore</p><h2 id="devops-properties-title" className="mt-3 font-serif text-[clamp(52px,5.4vw,86px)] leading-none tracking-[-.065em]">Our Properties</h2></div><div className="flex max-w-[510px] items-center gap-5"><p className="text-sm leading-[1.6] text-[#788074]">A curated collection of spaces with room to live, connect, and feel at home.</p><Link href="/contact-us" className="shrink-0 rounded-full border border-[#aeb7a5] px-5 py-2.5 text-xs font-semibold hover:bg-white/50">Enquire ↗</Link></div></div>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{properties.map((property) => <article key={property.name} className="grid min-h-[390px] grid-rows-[.9fr_1.1fr] overflow-hidden rounded-[22px] bg-[#d5dcc9]"><div className="flex flex-col justify-between p-6 sm:p-7"><div><span className="text-xs font-semibold tracking-[.12em] text-[#7e8a74]">{property.number} / COLLECTION</span><h3 className="mt-3 font-serif text-3xl leading-none">{property.name}</h3><p className="mt-3 text-sm text-[#768371]">{property.detail}</p></div><p className="text-xs font-medium tracking-[.12em] text-[#63715d] uppercase">Explore the possibilities →</p></div><Picture src={property.image} alt={property.name} className="min-h-[210px]" /></article>)}</div>
  </div></section>;
}
