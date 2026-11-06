import Image from "next/image";
import Link from "next/link";

const imageRoot = "/images/application-solutions";

function Photo({ name, alt, className = "", position = "object-center" }: { name: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#183044] ${className}`}><Image src={name.startsWith("/") ? name : `${imageRoot}/${name}.webp`} alt={alt} fill sizes="(max-width: 1023px) 100vw, 55vw" className={`object-cover ${position}`} /></div>;
}

const amenityItems = ["Mountain", "Lake View", "Fireplace", "Hot Tub"];
const benefits = [
  { icon: "♧", label: "Guest management" },
  { icon: "◧", label: "High occupancy" },
  { icon: "✧", label: "Property care" },
  { icon: "♢", label: "Secure payments" },
  { icon: "◷", label: "24/7 support" },
  { icon: "▤", label: "Detailed reports" },
];

export function AppLuxuryHero() {
  return <section id="app-luxury-home" aria-labelledby="app-luxury-title" className="relative min-h-[690px] overflow-hidden bg-[#071b2c] text-white lg:min-h-[calc(100svh_-_var(--site-header-height))]">
    <Image src={`${imageRoot}/lake-cabin.webp`} alt="Luxury lakeside chalet at twilight" fill priority sizes="100vw" className="object-cover object-[65%_center]" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#061827]/95 via-[#061827]/72 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/45 via-transparent to-transparent" />
    <div className="relative mx-auto flex min-h-[690px] max-w-[1550px] flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:px-14">
      <div className="max-w-[670px]"><p className="flex items-center gap-2 text-xs font-semibold tracking-[.12em] text-[#f2d18c] uppercase"><span aria-hidden="true">⌖</span> Pacific Northwest, USA <span className="ml-3 text-white/50">· Concept experience</span></p><h1 id="app-luxury-title" className="mt-7 font-serif text-[clamp(50px,5.6vw,88px)] leading-[1.02] tracking-[-.05em]">Luxury Living<br />in <span className="text-[#e9bc69]">Perfect Places</span></h1><p className="mt-6 max-w-[530px] text-base leading-[1.7] text-[#d7dfdf]">Discover breathtaking stays and exceptional property experiences across remarkable destinations.</p><div className="mt-8 flex flex-wrap gap-2">{amenityItems.map((item) => <span key={item} className="rounded-md border border-[#d5b479]/40 bg-[#061e2b]/60 px-3 py-2 text-xs text-[#e7d3aa]">{item}</span>)}</div><div className="mt-9 flex flex-wrap items-center gap-6"><a href="#app-getaway" className="inline-flex rounded-md bg-[#e8bb67] px-7 py-3.5 text-sm font-semibold text-[#12222a] hover:bg-[#f2cc85] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f2cc85]">Explore the stay →</a><p className="text-sm text-[#d7dfdf]">Made for memorable escapes</p></div><p className="mt-8 text-sm tracking-[.18em] text-[#e8bb67]">★★★★★ <span className="ml-2 tracking-normal text-white/75">A concept travel experience</span></p></div>
    </div>
  </section>;
}

export function AppWhyUs() {
  return <section id="app-why-us" aria-labelledby="app-why-title" className="overflow-hidden bg-[#071d31] text-[#f4f2ea]"><div className="mx-auto grid min-h-[700px] max-w-[1550px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-14">
    <div className="max-w-[620px]"><p className="flex items-center gap-4 text-xs font-semibold tracking-[.16em] text-[#e5be75] uppercase"><span className="h-px w-10 bg-[#e5be75]" /> Why manage with us</p><h2 id="app-why-title" className="mt-5 font-serif text-[clamp(42px,4.6vw,72px)] leading-[1.06] tracking-[-.05em]">We Handle Everything<br />You Can Relax</h2><p className="mt-6 max-w-[510px] text-base leading-[1.7] text-[#a7b6c0]">From planning to the small details, every part of the experience is cared for so you can enjoy peace of mind.</p><div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-5">{benefits.map((item) => <div key={item.label} className="flex items-center gap-3 text-sm text-[#d7e1e3]"><span className="text-xl text-[#e4bb70]">{item.icon}</span>{item.label}</div>)}</div><a href="#app-about" className="mt-10 inline-flex rounded-md border border-[#c49a54] px-6 py-3 text-sm font-semibold text-[#f1ca81] hover:bg-[#e1b469]/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f1ca81]">Learn more about us →</a></div>
    <div className="relative grid min-h-[470px] grid-cols-2 gap-3 sm:min-h-[580px]"><Photo name="lake-cabin" alt="Lakeside chalet and mountains" className="h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><Photo name="/images/agenda/photo-1600210492486-724fe5c67fb0.jpg" alt="Contemporary luxury interior" className="mt-20 h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><Photo name="/images/agenda/photo-1449844908441-8829872d2607.jpg" alt="Warm modern cabin" className="-mt-20 h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><Photo name="/images/agenda/photo-1600607687920-4e2a09cf159d.jpg" alt="Light filled property" className="h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><div aria-hidden="true" className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border-4 border-[#e8bf73] bg-[#071d31]"><span className="-rotate-45 text-3xl text-[#e8bf73]">⌂</span></div></div>
  </div></section>;
}

export function AppFeaturedGetaway() {
  return <section id="app-getaway" aria-labelledby="app-getaway-title" className="relative min-h-[610px] overflow-hidden bg-[#071b2c] text-white"><Image src={`${imageRoot}/lake-cabin.webp`} alt="Evening at a chalet beside an alpine lake" fill sizes="100vw" className="object-cover object-[55%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-[#061a2b]/95 via-[#061a2b]/60 to-[#061a2b]/35" /><div className="relative mx-auto grid min-h-[610px] max-w-[1550px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.7fr] lg:px-14"><div className="max-w-[610px]"><p className="flex items-center gap-4 text-xs font-semibold tracking-[.16em] text-[#e8bd73] uppercase"><span className="h-px w-10 bg-[#e8bd73]" /> Featured getaway</p><h2 id="app-getaway-title" className="mt-5 font-serif text-[clamp(45px,5vw,76px)] leading-[1.04] tracking-[-.05em]">Your Next Getaway<br />is Closer Than You Think</h2><ul className="mt-7 space-y-3 text-sm text-[#e2e6e4]"><li>◇ Cozy cabins and modern villas</li><li>◇ Perfect for families and groups</li><li>◇ Flexible stays and easy planning</li></ul></div><div className="w-full max-w-[390px] justify-self-start rounded-[18px] border border-[#d3bc8b]/30 bg-[#082439]/90 p-7 shadow-[0_25px_60px_#0005] backdrop-blur-md lg:justify-self-end"><p className="text-xs tracking-[.15em] text-[#c7d0cd] uppercase">Concept stay</p><p className="mt-2 font-serif text-3xl text-[#e9be72]">Mountain escape</p><div className="mt-7 grid grid-cols-3 gap-4 border-y border-white/15 py-5 text-center text-xs text-[#d4dfdf]"><span>♧<br />4 Guests</span><span>▣<br />2 Bedrooms</span><span>◈<br />2 Baths</span></div><Link href="/contact-us" className="mt-6 block rounded-md bg-[#e9bd6c] px-5 py-3 text-center text-sm font-semibold text-[#1c2d31] hover:bg-[#f5d18b]">Ask about availability →</Link></div></div>
  </section>;
}
