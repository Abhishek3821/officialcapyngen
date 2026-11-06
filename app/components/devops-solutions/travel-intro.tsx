import Image from "next/image";
import Link from "next/link";

function Photo({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`relative overflow-hidden bg-[#eee9e3] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

const places = [
  { name: "Yosemite National Park", country: "United States", image: "/images/destinations/yosemite.webp", id: "nature" },
  { name: "Cappadocia", country: "Türkiye", image: "/images/destinations/goreme.webp", id: "adventure" },
  { name: "Swiss Alps", country: "Switzerland", image: "/images/destinations/swiss-alps.webp", id: "mountains" },
  { name: "Los Lances Beach", country: "Spain", image: "/images/destinations/los-lances.webp", id: "coast" },
];

export function TravelHero({ label = "Capyngen / DevOps Solutions" }: { label?: string }) {
  return <section id="devops-home" aria-labelledby="devops-hero-title" className="relative overflow-hidden bg-[#fffcf8] text-[#24221e]">
    <div aria-hidden="true" className="pointer-events-none absolute -top-48 right-[14%] size-[480px] rounded-full border-[48px] border-[#edf2f5]" />
    <div className="relative mx-auto grid min-h-[660px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[.92fr_1.08fr] lg:px-12">
      <div className="max-w-[660px]"><p className="mb-7 text-xs font-semibold tracking-[.18em] text-[#9e8b7d] uppercase">{label}</p><h1 id="devops-hero-title" className="text-[clamp(50px,5.7vw,86px)] leading-[.98] font-bold tracking-[-.07em]">Discover the World&apos;s <span className="text-[#e98165]">Hidden</span> Wonders</h1><p className="mt-6 max-w-[530px] text-base leading-[1.75] text-[#8c8983]">A journey through ideas, places, and better ways to build. Explore what happens when reliable systems make room for discovery.</p><Link href="#devops-destinations" className="mt-8 inline-flex rounded-full bg-[#e98165] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_#e9816530] hover:bg-[#d36b50] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d36b50]">Explore places ↗</Link><div aria-hidden="true" className="mt-8 text-6xl leading-none text-[#eec9b7]">↝</div></div>
      <div className="grid h-[430px] grid-cols-3 gap-3 sm:h-[550px] lg:h-[580px]"><Photo src="/images/destinations/nagano.webp" alt="Mountain village in Japan" className="mt-14 h-[76%] rounded-[28px]" /><Photo src="/images/destinations/goreme.webp" alt="Cappadocia valley at dusk" className="h-[88%] rounded-[28px]" /><div className="grid h-full grid-rows-2 gap-3"><Photo src="/images/destinations/swiss-alps.webp" alt="Snowy Alpine peak" className="rounded-[28px]" /><Photo src="/images/destinations/yosemite.webp" alt="Yosemite mountain landscape" className="rounded-[28px]" /></div></div>
    </div>
  </section>;
}

export function TopDestinations() {
  return <section id="devops-destinations" aria-labelledby="devops-destinations-title" className="bg-[#fffdfb] text-[#252521]">
    <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-20"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-semibold tracking-[.18em] text-[#da8d74] uppercase">Explore the collection</p><h2 id="devops-destinations-title" className="mt-2 text-[clamp(42px,4.4vw,68px)] leading-none font-semibold tracking-[-.06em]">Top Destinations</h2></div><Link href="#devops-top-destination" className="rounded-full border border-[#dedbd5] px-5 py-2.5 text-xs font-semibold hover:bg-[#f4eee9] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d98265]">Explore all destinations ↗</Link></div>
      <nav aria-label="Destination categories" className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#85847f]"><a href="#nature" className="text-[#e17e60] hover:underline">Nature</a><a href="#adventure" className="hover:text-[#e17e60] hover:underline">Adventure</a><a href="#mountains" className="hover:text-[#e17e60] hover:underline">Mountains</a><a href="#coast" className="hover:text-[#e17e60] hover:underline">Coast</a></nav>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{places.map((place) => <article id={place.id} key={place.name} className="min-w-0 scroll-mt-28"><Photo src={place.image} alt={place.name} className="h-[290px] rounded-[20px] sm:h-[330px]" /><h3 className="mt-4 text-lg font-semibold tracking-[-.025em]">{place.name}</h3><p className="mt-1 text-sm text-[#9d9a94]">{place.country}</p></article>)}</div>
    </div>
  </section>;
}

const stories = [
  { title: "A slower way to see the world", category: "Travel notes", image: "/images/moments/travel.jpg" },
  { title: "What makes a place feel like home", category: "Perspective", image: "/images/agenda/photo-1600210492486-724fe5c67fb0.jpg" },
  { title: "The journeys we remember", category: "Inspiration", image: "/images/moments/friends.jpg" },
];

export function LatestStories() {
  return <section id="devops-stories" aria-labelledby="devops-stories-title" className="bg-[#faf9f7] text-[#242420]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[710px] lg:px-12 lg:py-20"><div className="flex items-end justify-between gap-5"><div><p className="text-xs font-semibold tracking-[.18em] text-[#d98b70] uppercase">From the journal</p><h2 id="devops-stories-title" className="mt-2 text-[clamp(42px,4.4vw,68px)] leading-none font-semibold tracking-[-.06em]">Latest Stories</h2></div><a href="#devops-highlights" className="rounded-full border border-[#ddd9d3] px-5 py-2.5 text-xs font-semibold hover:bg-white">Read more ↗</a></div>
    <div className="mt-9 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-12"><article><Photo src="/images/moments/coffee.jpg" alt="Friends sharing a moment over coffee" className="h-[340px] rounded-[20px] sm:h-[440px]" /><p className="mt-6 text-xs font-semibold tracking-[.14em] text-[#dc8e72] uppercase">People &amp; places</p><h3 className="mt-2 max-w-[700px] text-2xl leading-tight font-semibold sm:text-3xl">The moments that make a journey unforgettable</h3><p className="mt-3 max-w-[690px] text-sm leading-[1.65] text-[#83817c]">An invitation to pause, look closer, and find stories in the places we pass through.</p></article>
      <div className="space-y-5">{stories.map((story) => <article key={story.title} className="grid grid-cols-[110px_1fr] gap-4 border-b border-[#e6e2dc] pb-5 sm:grid-cols-[155px_1fr]"><Photo src={story.image} alt={story.title} className="h-[105px] rounded-[14px] sm:h-[125px]" /><div><p className="text-[11px] font-semibold tracking-[.12em] text-[#dd8d70] uppercase">{story.category}</p><h3 className="mt-2 text-base leading-[1.25] font-semibold sm:text-lg">{story.title}</h3><p className="mt-3 text-xs text-[#aaa7a0]">Capyngen journal</p></div></article>)}</div></div>
  </div></section>;
}

export function TrekkerHighlights() {
  return <section id="devops-highlights" aria-labelledby="devops-highlights-title" className="bg-[#fffdfb] text-[#24241f]"><div className="mx-auto grid min-h-[630px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-12">
    <div><p className="text-xs font-semibold tracking-[.18em] text-[#d98b70] uppercase">A closer look</p><h2 id="devops-highlights-title" className="mt-2 text-[clamp(40px,4.3vw,66px)] leading-none font-semibold tracking-[-.06em]">Trekker&apos;s Highlights</h2><div className="mt-8 flex items-center gap-3"><Image src="/images/client-1.jpg" alt="" width={42} height={42} className="size-11 rounded-full object-cover" /><div><p className="text-sm font-semibold">From our travel journal</p><p className="text-xs text-[#a09d96]">Field notes &amp; inspiration</p></div></div><h3 className="mt-8 text-2xl font-semibold">An extraordinary view from a new angle</h3><p className="mt-4 max-w-[530px] text-base leading-[1.75] text-[#85817b]">Great journeys reward curiosity. From remote landscapes to familiar streets, every stop brings a new perspective and a story worth sharing.</p><a href="#devops-top-destination" className="mt-7 inline-flex rounded-full border border-[#ded9d0] px-6 py-3 text-sm font-semibold hover:bg-[#f6f1eb]">Discover more ↗</a></div>
    <div className="grid h-[430px] grid-cols-[1.15fr_.85fr] gap-4 sm:h-[510px]"><Photo src="/images/destinations/goreme.webp" alt="Hot air balloons over Cappadocia" className="rounded-[26px]" /><div className="flex flex-col gap-4"><Photo src="/images/destinations/nagano.webp" alt="Mountain village in Japan" className="min-h-0 flex-1 rounded-[26px]" /><Photo src="/images/destinations/merzouga.webp" alt="Desert landscape at sunset" className="min-h-0 flex-1 rounded-[26px]" /></div></div>
  </div></section>;
}
