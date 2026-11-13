import Link from "next/link";
import { Photo, Polaroid, appBlue } from "./visuals";

const features = [
  { number: "01", label: "Custom mobile solutions" },
  { number: "02", label: "User-friendly apps" },
  { number: "03", label: "Seamless experiences" },
  { number: "04", label: "Modern business websites" },
];

export function AppStatsStrip() {
  return (
    <section aria-label="Features of a Top App Development Company in India" className={appBlue}>
      <div className="mx-auto grid max-w-[1350px] grid-cols-2 gap-6 px-5 py-7 text-center text-white sm:px-8 md:grid-cols-4 lg:px-12 lg:py-9">
        {features.map((feature) => <div key={feature.number}><p className="text-[clamp(40px,4.5vw,72px)] leading-none font-light tracking-[-.07em]">{feature.number}</p><p className="mt-2 text-xs font-medium tracking-[.08em] text-white/80 uppercase sm:text-sm">{feature.label}</p></div>)}
      </div>
    </section>
  );
}

const services = [
  { title: "Native iOS & Android Apps", image: "/images/virtual-card-lifestyle.webp", second: "/images/app-development/airline-cabin.webp", description: "As a best iOS app development company in India, we create apps that look native to your user because they can tell. Everything from the way screens change to the way gestures react is designed to fit the device it runs on.", points: ["Platform-specific UI patterns", "Clean, maintainable codebases", "Help with App Store and Play Store submissions."] },
  { title: "Cross-Platform Apps", image: "/images/app-development/resort-pool.webp", second: "/images/destinations/los-lances.webp", description: "Speed. Scalability. Cost. Why compromise? To get to market quickly without sacrificing quality.", points: ["Shared business logic", "Consistent user journeys across devices", "Faster release cycles"] },
  { title: "Product Design & UX", image: "/images/web-development/chair.webp", second: "/images/app-development/resort-terrace.webp", description: "A pretty app that baffles users is a broken app. Our design process doesn't begin with designing the screens; it begins with user flows.", points: ["UX research, user flow mapping", "UI design systems", "Interactive prototyping for testing before development"] },
];

export function AppServicesSection() {
  return (
    <section id="app-services" aria-labelledby="app-services-heading" className="bg-[#fffefd] text-[#17232a]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <p className="text-center text-[11px] font-bold tracking-[.2em] text-[#317daa] uppercase">App Development</p>
        <h2 id="app-services-heading" className="mt-2 text-center text-[clamp(42px,4.8vw,74px)] leading-none font-bold tracking-[-.06em] text-[#205c83] uppercase">What We Build</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-5 lg:gap-8">
          {services.map((service) => (
            <article key={service.title} className="min-w-0">
              <div className="relative h-[260px] sm:h-[310px] md:h-[250px] lg:h-[320px]">
                <Photo src={service.image} alt={service.title} className="absolute top-[4%] left-[4%] h-[76%] w-[72%] rounded-[16px]" />
                <Polaroid src={service.second} alt="" className="absolute right-[2%] bottom-[2%] h-[58%] w-[49%] rotate-6" />
              </div>
              <div className="mt-5 border-t border-[#d8e3e8] pt-5">
                <h3 className="text-xl font-bold tracking-[-.04em] uppercase sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-[1.65] text-[#667a84]">{service.description}</p>
                <ul className="mt-5 space-y-1.5 text-xs leading-[1.5] text-[#3e535e] sm:text-sm">{service.points.map((point) => <li key={point}>• {point}</li>)}</ul>
                <Link href="/contact-us" className="mt-5 inline-flex border-b border-[#2a85b0] pb-1 text-xs font-bold tracking-[.05em] text-[#237ca8] uppercase hover:text-[#155b7f]">Contact Capyngen ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const audiences = [
  { image: "/images/app-development/resort-pool.webp", alt: "Oceanfront resort pool", badge: "MVP", title: "Startups", text: "You need an MVP that validates the idea, but doesn't blow the entire budget. We help you scope out the minimum viable product, develop it quickly, and put it in the hands of customers to get true feedback." },
  { image: "/images/app-development/airline-cabin.webp", alt: "Premium airline cabin", badge: "Mobile channel", title: "Growing Businesses", text: "You already sell products/services and require a mobile channel that generates engagement. We develop apps that connect seamlessly with your existing workflows and further your expansion strategies." },
  { image: "/images/destinations/los-lances.webp", alt: "Sunny beach and sea", badge: "Enterprise-ready", title: "Enterprises", text: "You require an app development service and option that meets security, compliance, and scale needs. Our group builds mobile programs with you on the infrastructure and brings them enterprise-ready." },
];

export function AppTestimonials() {
  return (
    <section id="app-testimonials" aria-labelledby="app-testimonials-heading" className="bg-[#f0ede7] text-[#26332e]">
      <div className="mx-auto max-w-[1450px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <p className="text-center text-[11px] font-bold tracking-[.2em] text-[#69756a] uppercase">Startups · Growing Businesses · Enterprises</p>
        <h2 id="app-testimonials-heading" className="mt-2 text-center text-[clamp(39px,4.8vw,72px)] leading-none font-bold tracking-[-.06em] uppercase">Who We Build For</h2>
        <div className="mt-11 grid gap-9 md:grid-cols-3 md:gap-6 lg:gap-10">
          {audiences.map((item, index) => (
            <article key={item.title} className="min-w-0">
              <div className="relative mx-auto h-[310px] max-w-[370px] sm:h-[380px] md:h-[300px] lg:h-[380px]">
                <Polaroid src={item.image} alt={item.alt} className={`absolute inset-x-[6%] top-0 bottom-[7%] ${index === 1 ? "rotate-3" : "-rotate-3"}`} sizes="(max-width: 768px) 80vw, 28vw" />
                <span className="absolute right-[9%] bottom-[10%] z-10 bg-[#446b56] px-3 py-1 text-[10px] font-semibold text-white">{item.badge}</span>
              </div>
              <h3 className="mt-2 font-serif text-2xl tracking-[-.03em]">{item.title}</h3>
              <p className="mt-3 max-w-[360px] text-sm leading-[1.65] text-[#536159]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: "/images/app-development/resort-terrace.webp", alt: "Tropical resort dining" },
  { src: "/images/app-development/resort-pool.webp", alt: "Oceanfront infinity pool" },
  { src: "/images/agenda/photo-1600607687920-4e2a09cf159d.jpg", alt: "Contemporary guest room" },
  { src: "/images/agenda/photo-1600210492486-724fe5c67fb0.jpg", alt: "Warm interior detail" },
  { src: "/images/destinations/los-lances.webp", alt: "Sunny beach and sea" },
  { src: "/images/app-development/airline-cabin.webp", alt: "Premium airline interior" },
  { src: "/images/destinations/swiss-alps.webp", alt: "Mountain getaway" },
  { src: "/images/agenda/photo-1497366754035-f200968a6e72.jpg", alt: "Modern space" },
  { src: "/images/app-development/resort-pool.webp", alt: "Palm-lined resort pool" },
];

export function AppSnapshot() {
  return (
    <section id="app-gurgaon" aria-labelledby="app-snapshot-heading" className="overflow-hidden bg-[#f7eee1] text-[#28352c]">
      <div className="mx-auto max-w-[1350px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <p className="text-center text-[11px] font-bold tracking-[.22em] text-[#7a725f] uppercase">Gurugram, Haryana</p>
        <h2 id="app-snapshot-heading" className="mt-2 text-center leading-[.9] tracking-[-.06em]"><span className="block text-[clamp(42px,5vw,77px)] font-bold uppercase">App Development</span><span className="block font-serif text-[clamp(49px,5.5vw,84px)] font-normal">in Gurgaon and Across India</span></h2>
        <p className="mx-auto mt-7 max-w-[760px] text-center text-sm leading-[1.75] text-[#5d6559] sm:text-base">Capyngen is based in Gurugram, Haryana, and has clients throughout India and internationally. When searching for the best app development in Gurgaon, you can count on us to meet in person and be present locally in Gurgaon.</p>
        <div className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {gallery.map((item, index) => <Photo key={`${item.src}-${index}`} src={item.src} alt={item.alt} className="aspect-[1.18] rounded-[16px] border border-white/80 sm:aspect-[1.3]" sizes="(max-width: 640px) 50vw, 30vw" />)}
          <Polaroid src="/images/app-development/resort-terrace.webp" alt="Oceanfront hospitality scene" className="absolute top-[26%] left-[27%] z-10 hidden h-[45%] w-[43%] rotate-[-7deg] sm:block" sizes="35vw" />
        </div>
      </div>
    </section>
  );
}
