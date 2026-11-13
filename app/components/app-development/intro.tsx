import Image from "next/image";
import Link from "next/link";
import { Photo, Polaroid, appBlue } from "./visuals";

export function AppPortfolioHero() {
  return (
    <section id="app-top" aria-labelledby="app-hero-heading" className="overflow-hidden bg-[#fffefd] text-[#111719]">
      <div className="mx-auto flex max-w-[1570px] flex-col px-5 pt-12 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:px-12 lg:pt-4">
        <div className="grid flex-1 items-center gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative z-20 pt-8 lg:pt-0">
            <p className="mb-4 text-[11px] font-bold tracking-[.25em] text-[#3478a7] uppercase">Capyngen / App Development</p>
            <h1 id="app-hero-heading" className="max-w-[780px] leading-[.88] tracking-[-.07em]"><span className="block font-serif text-[clamp(54px,6vw,106px)] font-normal">Best App Development</span><span className="block text-[clamp(58px,6.4vw,112px)] font-black text-[#3375a5] uppercase">Company</span><span className="block font-serif text-[clamp(54px,6vw,106px)] font-normal">in Gurgaon</span></h1>
            <div className="mt-5 flex items-center gap-3 text-[clamp(14px,1.4vw,23px)] font-semibold tracking-[.015em] uppercase"><svg viewBox="0 0 44 32" fill="currentColor" className="w-10 shrink-0" aria-hidden="true"><path d="M43 1 1 14l17 4 5 12 6-10 9-4 5-15Zm-16 16-4 7-3-8 16-10-9 11Z" /></svg><span>From app concept to a real app</span></div>
            <p className="mt-7 max-w-[510px] text-sm leading-[1.75] text-[#6b7980] sm:text-base">As a top app development company in Gurugram we help brands build fully functional apps that their customers will want to use. Need an iOS native build, or Android? Or maybe a cross-platform solution? We design and develop mobile products that make sense.</p>
          </div>

          <div className="relative h-[420px] min-w-0 sm:h-[570px] lg:h-[min(77vh,710px)] lg:min-h-[490px]">
            <Polaroid src="/images/destinations/swiss-alps.webp" alt="Mountain destination" className="absolute top-[1%] left-[16%] h-[34%] w-[28%] -rotate-6" />
            <Polaroid src="/images/destinations/los-lances.webp" alt="Coastal destination" className="absolute top-[10%] right-[3%] h-[36%] w-[30%] rotate-8" />
            <Polaroid src="/images/app-development/resort-pool.webp" alt="Beachfront resort" className="absolute right-[8%] bottom-[9%] h-[35%] w-[31%] -rotate-5" />
            <div className="absolute inset-x-[8%] bottom-0 z-10 h-[98%]"><Image src="/images/app-development/hero-creator.webp" alt="Creator holding flowers and wearing headphones" fill priority sizes="(max-width: 1023px) 80vw, 48vw" className="object-contain object-bottom" /></div>
          </div>
        </div>
        <nav aria-label="App development page sections" className="relative z-20 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#dce4e7] py-5 text-[11px] font-bold tracking-[.08em] uppercase sm:gap-x-10 sm:text-xs">
          <a href="#app-about" className="hover:text-[#278bb7]">About Us</a><a href="#app-services" className="hover:text-[#278bb7]">What We Build</a><a href="#app-testimonials" className="hover:text-[#278bb7]">Who We Build For</a><a href="#app-faq" className="hover:text-[#278bb7]">Frequently Asked Questions</a><Link href="/contact-us" className="hover:text-[#278bb7]">Contact Capyngen</Link>
        </nav>
      </div>
    </section>
  );
}

export function AppAboutSection() {
  return (
    <section id="app-about" aria-labelledby="app-about-heading" className="bg-[#e7f1f6] text-[#17232b]">
      <div className="mx-auto grid max-w-[1460px] items-center gap-10 px-5 py-20 sm:px-8 lg:min-h-[680px] lg:grid-cols-[minmax(0,1.04fr)_minmax(0,.96fr)] lg:gap-16 lg:px-12">
        <div className="relative h-[420px] sm:h-[530px]">
          <Photo src="/images/agenda/photo-1600210492486-724fe5c67fb0.jpg" alt="Warm contemporary interior" className="absolute top-0 left-[5%] h-[66%] w-[43%] rounded-[16px]" />
          <Photo src="/images/app-development/resort-pool.webp" alt="Tropical beachfront pool" className="absolute right-[4%] bottom-0 h-[62%] w-[48%] rounded-[16px]" />
          <Polaroid src="/images/virtual-card-lifestyle.webp" alt="Person using a mobile phone" className="absolute top-[17%] left-[30%] z-10 h-[53%] w-[38%] rotate-[-8deg]" />
          <Polaroid src="/images/destinations/los-lances.webp" alt="Sunny coastal view" className="absolute right-[4%] top-[2%] h-[35%] w-[30%] rotate-[6deg]" />
          <Polaroid src="/images/app-development/resort-terrace.webp" alt="Beachfront terrace" className="absolute bottom-[2%] left-[3%] h-[32%] w-[31%] -rotate-3" />
        </div>
        <div className="max-w-[560px]">
          <p className="text-xs font-semibold tracking-[.22em] text-[#347aa8] uppercase">About Us</p>
          <h2 id="app-about-heading" className="mt-3 leading-[.9] tracking-[-.065em]"><span className="block font-serif text-[clamp(49px,5vw,78px)]">About Us as a Top App Development</span><span className="block text-[clamp(55px,5.3vw,86px)] font-black text-[#287eac] uppercase">Company</span></h2>
          <p className="mt-7 text-base leading-[1.75] text-[#586a75] sm:text-lg">Capyngen creates mobile apps from the bottom up, with an eye on what happens after they are released: do they load fast, do they crash, do the users return?</p>
          <p className="mt-4 text-sm leading-[1.8] text-[#6a7b84] sm:text-base">Being one of the top app development companies in India, we design apps for startups and enterprises that are functional, secure, and user-centric. Our approach never begins with writing code. It begins with understanding the ideal outcome your business model and customer experience need the app to generate.</p>
          <Link href="/contact-us" className="mt-7 inline-flex items-center gap-3 border-b-2 border-[#2d85b0] pb-1 text-sm font-semibold text-[#246f99]">Contact Capyngen <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function AppContactStrip() {
  return (
    <section aria-labelledby="app-contact-strip-heading" className={`${appBlue} overflow-hidden text-white`}>
      <div className="mx-auto grid max-w-[1550px] items-center gap-7 px-5 py-9 sm:px-8 md:grid-cols-[1.2fr_.7fr_.75fr_1fr] lg:px-12">
        <h2 id="app-contact-strip-heading" className="text-[clamp(31px,3.5vw,59px)] leading-[.9] font-bold tracking-[-.065em] uppercase">Why Capyngen<br /><span className="font-serif font-normal normal-case">for App</span> Development</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs font-medium sm:text-sm md:grid-cols-1"><span>✦ Native iOS &amp; Android</span><span>✦ Cross-platform builds</span><span>✦ Product design</span><span>✦ Post-launch support</span></div>
        <div className="text-sm"><p className="text-[10px] font-bold tracking-[.15em] text-white/70 uppercase">Ready to Build Your App?</p><Link href="/contact-us" className="mt-1 inline-block border-b border-white/60 pb-1 font-semibold hover:border-white">Contact Capyngen ↗</Link><p className="mt-4">Seeking an experienced app development company in India that will treat your app as a product and not a project? You&apos;ve come to the right place.</p></div>
        <div className="grid h-[150px] grid-cols-3 gap-2 md:h-[190px]"><Photo src="/images/app-development/airline-cabin.webp" alt="Airline cabin" className="rounded-[12px]" /><Photo src="/images/app-development/resort-pool.webp" alt="Resort pool" className="rounded-[12px]" /><Photo src="/images/app-development/resort-terrace.webp" alt="Oceanfront terrace" className="rounded-[12px]" /></div>
      </div>
    </section>
  );
}
