import { Photo, Polaroid } from "./visuals";

const conceptLabel = <span className="text-[10px] font-bold tracking-[.2em] text-[#2d80a8] uppercase">App concept / Case study</span>;

export function AppAirlineCaseStudy() {
  return (
    <section id="app-case-studies" aria-labelledby="app-airline-heading" className="overflow-hidden bg-white text-[#17232a]">
      <div className="mx-auto grid max-w-[1550px] items-center gap-7 px-5 py-16 sm:px-8 lg:min-h-[650px] lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.05fr)_minmax(0,.48fr)_minmax(0,.78fr)] lg:gap-4 lg:px-12 lg:py-14">
        <div className="max-w-[390px] lg:pr-4">
          {conceptLabel}
          <h2 id="app-airline-heading" className="mt-3 text-[clamp(38px,3.4vw,58px)] leading-[.92] font-bold tracking-[-.06em] text-[#205c83] uppercase">Airline<br /><span className="font-serif font-normal text-[#202930] normal-case">Booking App</span></h2>
          <p className="mt-6 text-sm leading-[1.65] text-[#60737c]">A travel app concept designed to make the journey feel effortless, from discovering destinations to choosing a seat and checking in.</p>
          <ul className="mt-6 space-y-2 text-xs font-semibold tracking-[.02em] text-[#2d3e47] uppercase"><li>+ Simple booking flow</li><li>+ Clear trip information</li><li>+ Seamless mobile check-in</li></ul>
        </div>
        <Photo src="/images/app-development/airline-cabin.webp" alt="Premium airline cabin with a welcoming crew member" className="h-[370px] rounded-[19px] sm:h-[490px] lg:h-[510px]" imageClassName="object-cover object-[center_28%]" />
        <div className="relative hidden h-[510px] lg:block"><Polaroid src="/images/destinations/swiss-alps.webp" alt="Alpine destination" className="absolute top-[2%] left-[-20%] h-[34%] w-[118%] rotate-6" /><Polaroid src="/images/destinations/goreme.webp" alt="Cappadocia destination" className="absolute top-[33%] left-[-10%] h-[34%] w-[118%] -rotate-4" /><Polaroid src="/images/destinations/los-lances.webp" alt="Coastal destination" className="absolute bottom-[1%] left-[-18%] h-[34%] w-[118%] rotate-5" /></div>
        <Photo src="/images/destinations/yosemite.webp" alt="Scenic destination viewed on a journey" className="hidden h-[410px] rounded-[20px] lg:block" />
      </div>
    </section>
  );
}

export function AppResortCaseStudy() {
  return (
    <section id="app-resort-case-study" aria-labelledby="app-resort-heading" className="overflow-hidden bg-[#dfe9dc] text-[#26382d]">
      <div className="mx-auto grid max-w-[1550px] items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[700px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-14 lg:px-12">
        <div className="relative h-[430px] sm:h-[550px]">
          <Photo src="/images/app-development/resort-pool.webp" alt="Oceanfront resort infinity pool" className="absolute top-[4%] right-[5%] h-[88%] w-[72%] rounded-[24px] border border-white/80" />
          <Photo src="/images/app-development/resort-terrace.webp" alt="Tropical beachfront lounge" className="absolute top-[15%] left-0 h-[68%] w-[40%] rounded-[20px] border border-white/80" />
          <Polaroid src="/images/destinations/los-lances.webp" alt="Coastal view" className="absolute top-[2%] left-[25%] z-10 h-[32%] w-[28%] -rotate-6" />
          <Polaroid src="/images/app-development/resort-terrace.webp" alt="Resort dining terrace" className="absolute bottom-[3%] left-[23%] z-10 h-[34%] w-[29%] rotate-5" />
        </div>
        <div className="max-w-[490px]">
          <p className="text-[11px] font-bold tracking-[.2em] text-[#657767] uppercase">Hospitality / App concept</p>
          <h2 id="app-resort-heading" className="mt-3 text-[clamp(42px,4.4vw,72px)] leading-[.9] font-bold tracking-[-.065em] uppercase">Villa Stay<br /><span className="font-serif font-normal normal-case">Beachfront resort</span></h2>
          <p className="mt-7 text-sm leading-[1.75] text-[#53675a] sm:text-base">A guest experience concept that brings the best of a resort into one easy-to-use app: discover a stay, explore amenities, plan experiences, and find everything in one place.</p>
          <ul className="mt-7 space-y-2 text-xs font-semibold tracking-[.04em] uppercase sm:text-sm"><li>+ Easy room discovery</li><li>+ Experiences at a glance</li><li>+ A smoother guest journey</li></ul>
        </div>
      </div>
    </section>
  );
}

export function AppBaliCaseStudy() {
  return (
    <section id="app-bali-case-study" aria-labelledby="app-bali-heading" className="overflow-hidden bg-white text-[#17232a]">
      <div className="mx-auto grid max-w-[1550px] items-center gap-7 px-5 py-16 sm:px-8 lg:min-h-[690px] lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.12fr)_minmax(0,.48fr)_minmax(0,.76fr)] lg:gap-4 lg:px-12">
        <div className="max-w-[390px] lg:pr-4">
          {conceptLabel}
          <h2 id="app-bali-heading" className="mt-3 text-[clamp(38px,3.4vw,58px)] leading-[.9] font-bold tracking-[-.06em] text-[#205c83] uppercase">Bali<br /><span className="font-serif font-normal text-[#202930] normal-case">Guest Experience</span></h2>
          <p className="mt-6 text-sm leading-[1.7] text-[#60737c]">A hospitality app concept inspired by life on the coast. Thoughtful planning, local discovery, and simple service access come together in a calm, useful mobile experience.</p>
          <ul className="mt-6 space-y-2 text-xs font-semibold tracking-[.02em] text-[#2d3e47] uppercase"><li>+ Explore local experiences</li><li>+ Plan a stay with ease</li><li>+ Stay connected on the go</li></ul>
        </div>
        <Photo src="/images/app-development/resort-terrace.webp" alt="Dining on a tropical oceanfront terrace" className="h-[370px] rounded-[19px] sm:h-[490px] lg:h-[520px]" />
        <div className="relative hidden h-[520px] lg:block"><Polaroid src="/images/app-development/resort-pool.webp" alt="Resort infinity pool" className="absolute top-[2%] left-[-17%] h-[34%] w-[120%] rotate-5" /><Polaroid src="/images/destinations/los-lances.webp" alt="Tropical coast" className="absolute top-[33%] left-[-11%] h-[34%] w-[120%] -rotate-4" /><Polaroid src="/images/app-development/resort-terrace.webp" alt="Resort refreshments" className="absolute bottom-[1%] left-[-18%] h-[34%] w-[120%] rotate-6" /></div>
        <Photo src="/images/app-development/resort-pool.webp" alt="Luxury pool beside the sea" className="hidden h-[420px] rounded-[20px] lg:block" />
      </div>
    </section>
  );
}
