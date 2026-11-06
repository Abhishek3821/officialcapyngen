import Image from "next/image";
import Link from "next/link";

function Picture({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#dce8e9] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

const blogCards = [
  { title: "20 Packing Tips for a Lighter Journey", category: "Travel tips", image: "/images/application-solutions/hiking-gear.webp" },
  { title: "Beautiful Places in Thailand", category: "Destinations", image: "/images/destinations/los-lances.webp" },
  { title: "7 Days in Bali: The Perfect Itinerary", category: "Travel guides", image: "/images/app-development/resort-pool.webp" },
  { title: "Travel Photography Tips for Beginners", category: "Photography", image: "/images/moments/photographer.jpg" },
];

export function AppBlog() {
  return <section id="app-blog" aria-labelledby="app-blog-title" className="bg-[#fafafa] text-[#202827]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[700px] lg:px-12 lg:py-20"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold tracking-[.17em] text-[#5b928b] uppercase">Stories &amp; inspiration</p><h2 id="app-blog-title" className="mt-2 text-[clamp(42px,4.6vw,70px)] leading-none font-semibold tracking-[-.06em]">Latest from the blog</h2></div><a href="#app-mission" className="text-sm font-semibold text-[#4b8c81] hover:underline">View all posts ↗</a></div><div className="mt-9 grid gap-4 lg:grid-cols-[1.08fr_.92fr]"><article className="relative min-h-[420px] overflow-hidden rounded-[18px] sm:min-h-[520px]"><Picture src="/images/destinations/los-lances.webp" alt="Coastal landscape at sunset" className="absolute inset-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#061a20]/90 via-[#061a20]/10 to-transparent" /><span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-[#315f58] uppercase">Destinations</span><div className="absolute right-7 bottom-7 left-7 text-white"><h3 className="max-w-[550px] font-serif text-3xl leading-tight sm:text-4xl">The Ultimate Coastal Travel Guide</h3><p className="mt-3 max-w-[510px] text-sm leading-[1.6] text-white/80">Everything you need to know before exploring a beautiful shoreline.</p></div></article><div className="grid gap-4 sm:grid-cols-2">{blogCards.map((card) => <article key={card.title} className="relative min-h-[240px] overflow-hidden rounded-[16px]"><Picture src={card.image} alt={card.title} className="absolute inset-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#061b22]/85 via-transparent to-transparent" /><span className="absolute top-4 left-4 rounded-full bg-[#d6eee6]/95 px-3 py-1 text-[10px] font-semibold text-[#36665b] uppercase">{card.category}</span><h3 className="absolute right-5 bottom-5 left-5 font-serif text-lg leading-tight text-white sm:text-xl">{card.title}</h3></article>)}</div></div></div></section>;
}

const missionValues = [
  { icon: "♧", title: "Sustainable Travel" },
  { icon: "♙", title: "Local Communities" },
  { icon: "♡", title: "Small Groups" },
  { icon: "◇", title: "Safe & Trusted" },
];

export function AppMission() {
  return <section id="app-mission" aria-labelledby="app-mission-title" className="overflow-hidden bg-[#f7fbfc] text-[#11394a]"><div className="mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12"><div className="grid h-[450px] grid-cols-2 grid-rows-2 gap-3 sm:h-[540px]"><Picture src="/images/application-solutions/ocean.webp" alt="Sea turtle swimming near a snorkeler" className="rounded-[28px] rounded-tl-[65px]" /><Picture src="/images/destinations/merzouga.webp" alt="Traveller in a desert landscape" className="rounded-[28px] rounded-tr-[65px]" /><Picture src="/images/moments/friends.jpg" alt="Friends experiencing a journey together" className="col-span-2 rounded-[28px] rounded-bl-[65px]" /></div><div className="max-w-[620px]"><p className="text-xs font-bold tracking-[.2em] text-[#55a4ad] uppercase">Our mission</p><h2 id="app-mission-title" className="mt-3 text-[clamp(44px,4.5vw,70px)] leading-[1.05] font-semibold tracking-[-.06em]">Meaningful trips<br />for people who<br />care about <span className="font-serif italic text-[#378ca0]">the planet.</span></h2><p className="mt-6 text-base leading-[1.75] text-[#577584]">We connect curious travellers with local communities, breathtaking nature and authentic cultural experiences. Every journey is designed to have a positive impact.</p><div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">{missionValues.map((value) => <div key={value.title} className="text-center"><span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#e3f1f2] text-2xl text-[#2e7c8e]">{value.icon}</span><p className="mt-3 text-xs font-semibold leading-tight">{value.title}</p></div>)}</div></div></div></section>;
}

export function AppProtection() {
  return (
    <section id="app-protection" aria-labelledby="app-protection-title" className="bg-[#f5f1eb] text-[#193140]">
      <div className="mx-auto grid min-h-[600px] max-w-[1550px] items-center gap-5 px-5 py-16 sm:px-8 lg:grid-cols-[.95fr_1.15fr_.78fr] lg:px-12">
        <div className="max-w-[480px]">
          <p className="text-xs font-bold tracking-[.2em] text-[#7a8b86] uppercase">About Vitae</p>
          <h2 id="app-protection-title" className="mt-4 font-serif text-[clamp(46px,4.3vw,68px)] leading-[1.04] tracking-[-.06em]">More Than<br />Just Insurance.</h2>
          <p className="mt-5 text-base leading-[1.7] text-[#6d7b7d]">We help you plan, protect, and grow with life assurance solutions designed for every stage of your journey.</p>
          <Link href="/contact-us" className="mt-7 inline-flex rounded-full bg-[#173745] px-7 py-3 text-sm font-semibold text-white hover:bg-[#315a66]">Our story →</Link>
        </div>
        <div className="relative min-h-[400px] overflow-hidden rounded-[80px_22px_80px_22px]">
          <Image src="/images/application-solutions/vase.webp" alt="Olive branches overlooking a calm mountain lake" fill sizes="(max-width: 1023px) 100vw, 37vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102d35]/35 to-transparent" />
          <p className="absolute top-8 right-8 max-w-[210px] font-serif text-xl leading-tight text-white drop-shadow-[0_1px_7px_#123]">Real people.<br />Real protection.<br />Lasting impact.</p>
        </div>
        <div className="grid h-[400px] grid-rows-2 gap-4">
          <div className="relative overflow-hidden rounded-[18px]">
            <Image src="/images/agenda/photo-1449158743715-0a90ebb6d2d8.jpg" alt="Modern home exterior" fill sizes="(max-width: 1023px) 100vw, 25vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d3d]/65 to-transparent" />
            <p className="absolute top-5 left-5 font-serif text-xl text-white">Plan for<br />Your Future</p>
          </div>
          <div className="relative overflow-hidden rounded-[18px]">
            <Image src="/images/application-solutions/hiker.webp" alt="Expansive mountain landscape" fill sizes="(max-width: 1023px) 100vw, 25vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d3d]/65 to-transparent" />
            <p className="absolute top-5 left-5 font-serif text-xl text-white">Build<br />Lasting Wealth</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppWayOfLife() {
  return <section id="app-way-of-life" aria-labelledby="app-way-title" className="overflow-hidden bg-[#f3f4ee] text-[#243f37]"><div className="mx-auto grid min-h-[620px] max-w-[1500px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.88fr_1.12fr] lg:px-12"><div className="max-w-[560px]"><p className="text-xs font-bold tracking-[.2em] text-[#7c9186] uppercase">About Wanderly</p><h2 id="app-way-title" className="mt-4 text-[clamp(47px,4.6vw,72px)] leading-[1.04] font-semibold tracking-[-.065em]">More Than a Trip<br />It&apos;s a Way of Life</h2><p className="mt-6 text-base leading-[1.75] text-[#6a8077]">Travel has the power to connect people, cultures, and nature. We make meaningful journeys accessible, sustainable, and unforgettable.</p><a href="#app-guides" className="mt-8 inline-flex rounded-full bg-[#3d6152] px-7 py-3 text-sm font-semibold text-white hover:bg-[#2c4c40]">Learn more →</a></div><div className="relative min-h-[400px] sm:min-h-[520px]"><Picture src="/images/application-solutions/hiker.webp" alt="Hiker overlooking a mountain lake" className="absolute inset-[3%_7%_7%_0] rounded-[22px]" /><div className="absolute top-0 right-0 font-serif text-3xl italic leading-none text-[#628173] sm:text-5xl">Good<br />Vibes<br />Only</div><Picture src="/images/destinations/swiss-alps.webp" alt="Alpine lake and mountain" className="absolute right-0 bottom-0 h-[28%] w-[35%] rotate-6 border-[7px] border-white shadow-xl" /></div></div></section>;
}

const guideRows = [
  { number: "01", label: "The guide", title: "Plan Smarter.\nHike Further.", body: "From choosing the right trail to understanding the terrain, our guides give you everything you need to plan a safe, memorable adventure.", image: "/images/application-solutions/hiker.webp", link: "Explore guides" },
  { number: "02", label: "Gear & essentials", title: "The Right Gear\nFor Greater Journeys", body: "Well-chosen gear makes every hike safer, more comfortable, and more enjoyable. Discover practical advice for every type of adventure.", image: "/images/application-solutions/hiking-gear.webp", link: "View gear guide" },
  { number: "03", label: "Routes & destinations", title: "Maps. Trails.\nHidden Gems.", body: "Explore handpicked routes, detailed maps, and insider tips to discover breathtaking destinations from iconic peaks to secluded hidden gems.", image: "/images/destinations/swiss-alps.webp", link: "Explore destinations" },
];

export function AppGuides() {
  return <section id="app-guides" aria-label="Adventure guides" className="overflow-hidden">{guideRows.map((row, index) => <article key={row.number} className={index === 1 ? "bg-[#f5f4f0] text-[#1d3033]" : "bg-[#0d2630] text-[#f8f7ef]"}><div className={`mx-auto grid min-h-[480px] max-w-[1550px] items-center gap-9 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12 ${index === 1 ? "" : ""}`}><div className={index === 1 ? "order-2 lg:order-2" : "order-1"}><p className={`text-8xl leading-none font-semibold tracking-[-.09em] ${index === 1 ? "text-[#d4d5cf]" : "text-[#39545a]"}`}>{row.number}</p><p className={`-mt-8 ml-24 text-xs font-bold tracking-[.18em] uppercase ${index === 1 ? "text-[#7c8b85]" : "text-[#d4bb80]"}`}>{row.label}</p><h2 className="mt-5 font-serif text-[clamp(40px,4.3vw,66px)] leading-[1.04] tracking-[-.055em] whitespace-pre-line">{row.title}</h2><p className={`mt-5 max-w-[540px] text-base leading-[1.7] ${index === 1 ? "text-[#6d7773]" : "text-[#b5c5c6]"}`}>{row.body}</p><Link href="/contact-us" className={`mt-6 inline-flex text-sm font-semibold underline underline-offset-4 ${index === 1 ? "text-[#576f62]" : "text-[#e9c27f]"}`}>{row.link} →</Link></div><Picture src={row.image} alt={row.title.replace("\n", " ")} className={`h-[330px] rounded-[24px] sm:h-[400px] ${index === 1 ? "order-1 lg:order-1" : "order-2"}`} /></div></article>)}</section>;
}
