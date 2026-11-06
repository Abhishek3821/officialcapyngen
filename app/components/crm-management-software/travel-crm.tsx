import Image from "next/image";
import Link from "next/link";

function Photo({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#dce9ed] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

const journeyPoints = ["Smart bookings", "Secure payments", "24/7 assistance", "Best price guarantee"];

export function JourneySimplified() {
  return <section id="crm-journey" aria-labelledby="crm-journey-title" className="bg-[#f8fbfc] px-5 py-16 sm:px-8 lg:px-12"><div className="relative mx-auto grid min-h-[590px] max-w-[1500px] items-center gap-8 overflow-hidden rounded-[34px] bg-[#064a52] px-6 py-12 text-white sm:px-10 lg:grid-cols-[.78fr_1.22fr] lg:px-14"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_45%_50%,#1b899055,transparent_52%)]" /><div className="relative z-10 max-w-[540px]"><p className="text-xs font-bold tracking-[.18em] text-[#b6e6dc] uppercase">Travel CRM concept</p><h2 id="crm-journey-title" className="mt-4 text-[clamp(46px,5vw,76px)] leading-[1.02] font-semibold tracking-[-.065em]">Your Journey,<br />Simplified</h2><p className="mt-6 text-base leading-[1.7] text-[#c5e5df]">Book stays, hotels, and activities in one place with clear updates and a smoother planning experience.</p><ul className="mt-7 space-y-3">{journeyPoints.map((point) => <li key={point} className="flex items-center gap-3 text-sm text-[#e4f4ef]"><span className="flex size-5 items-center justify-center rounded-full border border-[#a4d6d0] text-xs">✓</span>{point}</li>)}</ul><a href="#devops-destinations" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07545c] hover:bg-[#d9f5ef]">Explore app →</a></div><div className="relative min-h-[390px] sm:min-h-[500px]"><Photo src="/images/crm-management-software/travel-couple.webp" alt="Couple planning a trip on their phone" className="absolute inset-[3%_9%_0_0] rounded-[28px]" position="object-[35%_center]" /><div className="absolute top-[4%] right-0 bottom-[3%] w-[45%] max-w-[275px] rotate-[4deg] overflow-hidden rounded-[32px] border-[9px] border-[#1b2830] bg-white p-4 text-[#193747] shadow-[0_25px_55px_#001d2c70] sm:p-5"><div className="mx-auto mb-5 h-2 w-16 rounded-full bg-[#28343c]" /><p className="text-[10px] font-semibold text-[#56a1a4]">TRAVELPERK</p><h3 className="mt-2 text-base font-semibold sm:text-xl">Explore</h3><p className="mt-2 text-[10px] text-[#87999a]">Where to next?</p><div className="mt-4 grid gap-2">{[{ src: "/images/destinations/goreme.webp", title: "Cappadocia" }, { src: "/images/destinations/swiss-alps.webp", title: "Swiss Alps" }, { src: "/images/destinations/los-lances.webp", title: "Beach escape" }].map((item) => <div key={item.title} className="flex items-center gap-2 rounded-[12px] bg-[#f1f7f7] p-1.5"><Photo src={item.src} alt="" className="size-10 shrink-0 rounded-[8px] sm:size-12" /><span className="text-[10px] font-semibold sm:text-xs">{item.title}</span></div>)}</div></div></div></div></section>;
}

const places = [
  { name: "Switzerland", detail: "Mountains and new perspectives", image: "/images/destinations/swiss-alps.webp" },
  { name: "Türkiye", detail: "Landscapes worth exploring", image: "/images/destinations/goreme.webp" },
  { name: "Spain", detail: "Sun, sea and open space", image: "/images/destinations/los-lances.webp" },
  { name: "Morocco", detail: "A desert adventure", image: "/images/destinations/merzouga.webp" },
];

export function LovedPlaces() {
  return <section id="devops-destinations" aria-labelledby="crm-places-title" className="bg-[#f8fbff] text-[#142b47]"><span id="devops-top-destination" className="sr-only" aria-hidden="true" /><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[680px] lg:px-12"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold tracking-[.2em] text-[#6e9dc2] uppercase">Top destinations</p><h2 id="crm-places-title" className="mt-3 max-w-[780px] text-[clamp(42px,4.8vw,74px)] leading-[1.02] font-semibold tracking-[-.065em]">Explore the World&apos;s Most<br />Loved Places with TravelPerk.</h2></div><a href="#crm-experiences" className="rounded-full bg-[#0869c2] px-6 py-3 text-sm font-semibold text-white hover:bg-[#06539b]">Explore more ↗</a></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{places.map((place) => <article key={place.name} className="relative min-h-[380px] overflow-hidden rounded-t-[180px] rounded-b-[24px]"><Photo src={place.image} alt={place.name} className="absolute inset-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#063e6e]/50 via-transparent to-transparent" /><div className="absolute right-5 bottom-5 left-5 rounded-[18px] bg-white/95 px-4 py-5 text-center shadow-lg"><p className="mx-auto w-fit rounded-full bg-[#0874d4] px-3 py-1 text-[10px] font-bold tracking-[.12em] text-white uppercase">Destination</p><h3 className="mt-3 text-lg font-semibold">{place.name}</h3><p className="mt-1 text-xs text-[#8c9eaa]">{place.detail}</p><span className="mx-auto mt-4 flex size-8 items-center justify-center rounded-full bg-[#f8a94e] text-sm text-white">→</span></div></article>)}</div></div></section>;
}

const testimonials = [
  { name: "Wade Warren", quote: "Everything felt easy to manage, from finding a destination to keeping the details in one place.", image: "/images/client-1.jpg" },
  { name: "Jessica Brown", quote: "A clear, thoughtful experience that gave us more time to enjoy the trip and less time planning it.", image: "/images/client-3.jpg" },
];

export function TravelerTestimonials() {
  return <section id="crm-testimonials" aria-labelledby="crm-testimonials-title" className="bg-[#f8fbff] text-[#15334c]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[640px] lg:px-12"><div className="grid gap-5 lg:grid-cols-[.75fr_1fr_1fr]"><div><p className="text-xs font-bold tracking-[.18em] text-[#2875b3] uppercase">Testimonials</p><h2 id="crm-testimonials-title" className="mt-3 text-[clamp(41px,4.3vw,65px)] leading-[1.04] font-semibold tracking-[-.06em]">What Our<br />Travelers Say</h2><p className="mt-5 max-w-[320px] text-sm leading-[1.7] text-[#7b8f9e]">Stories that show how thoughtful experiences can make each journey feel more personal.</p><a href="#crm-experiences" className="mt-7 inline-flex rounded-full bg-[#0869c2] px-6 py-3 text-sm font-semibold text-white hover:bg-[#06539b]">Read more →</a></div>{testimonials.map((item) => <blockquote key={item.name} className="flex min-h-[250px] flex-col rounded-[22px] bg-white p-7 shadow-[0_12px_35px_#0b4c8110]"><div className="flex items-center gap-3"><Image src={item.image} alt="" width={48} height={48} className="size-12 rounded-full object-cover" /><div><p className="text-sm font-semibold">{item.name}</p><p className="text-xs text-[#a2aeb7]">Traveler · sample story</p></div></div><p className="mt-6 text-base leading-[1.7] text-[#5d7080]">“{item.quote}”</p><span aria-hidden="true" className="mt-auto self-end font-serif text-5xl leading-none text-[#c9dce8]">”</span></blockquote>)}</div><div className="relative mt-12 min-h-[230px] overflow-hidden rounded-[26px] bg-[#086ac8]"><Photo src="/images/crm-management-software/travel-couple.webp" alt="Couple looking at travel plans" className="absolute inset-y-0 left-0 w-[42%] max-sm:w-[50%]" position="object-[35%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#086ac8]/95 to-[#086ac8]" /><div className="relative ml-auto flex min-h-[230px] max-w-[760px] flex-col justify-center px-6 py-8 text-white sm:px-10"><h3 className="text-2xl font-semibold sm:text-3xl">TravelPerk: Your Gateway to the World&apos;s Best Tours</h3><p className="mt-2 text-sm text-white/80">Make the next journey easier to plan.</p><Link href="/contact-us" className="mt-5 w-fit rounded-full bg-[#f6aa48] px-6 py-2.5 text-sm font-semibold text-[#123b63] hover:bg-[#ffc778]">Discover more ↗</Link></div></div><p className="mt-2 text-right text-xs text-[#9eaeba]">Testimonials shown as design examples.</p></div></section>;
}

const experiences = [
  { title: "Adventure", description: "Explore dramatic landscapes and active escapes.", icon: "↗", image: "/images/application-solutions/hiker.webp" },
  { title: "Water Sports", description: "Find fresh ways to enjoy the water.", icon: "≈", image: "/images/destinations/los-lances.webp" },
  { title: "Paragliding", description: "See familiar places from a new point of view.", icon: "✈", image: "/images/destinations/goreme.webp" },
  { title: "Wildlife", description: "Get closer to the natural world.", icon: "♧", image: "/images/application-solutions/ocean.webp" },
];

export function TravelerExperiences() {
  return (
    <section id="crm-experiences" aria-labelledby="crm-experiences-title" className="bg-[#eaf2f7] text-[#142d46]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 text-center sm:px-8 lg:px-12">
        <p className="text-xs font-bold tracking-[.18em] text-[#4088be] uppercase">Our experiences</p>
        <h2 id="crm-experiences-title" className="mx-auto mt-3 max-w-[940px] text-[clamp(40px,4vw,64px)] leading-[1.06] font-semibold tracking-[-.06em]">Unforgettable Experiences<br />Tailored for Every Traveler</h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {experiences.map((item, index) => (
            <article key={item.title} className="group relative min-h-[330px] overflow-hidden rounded-[24px] bg-[#315a70] text-white shadow-[0_16px_36px_#173e5a24] sm:min-h-[360px]">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092a43]/90 via-[#092a43]/20 to-transparent" />
              <span className="absolute top-5 left-5 rounded-full border border-white/35 bg-black/20 px-3 py-1.5 text-[10px] font-semibold tracking-[.14em] uppercase backdrop-blur-sm">0{index + 1} / Experience</span>
              <div className="absolute right-5 bottom-7 left-5">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-white/35 bg-white/20 text-xl backdrop-blur-sm">{item.icon}</span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.5] text-white/90">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/contact-us" className="mt-9 inline-flex rounded-full bg-[#0869c2] px-8 py-3 text-sm font-semibold text-white hover:bg-[#06539b]">Explore now ↗</Link>
      </div>
    </section>
  );
}
