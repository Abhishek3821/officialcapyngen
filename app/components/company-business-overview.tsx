import Image from "next/image";

const stages = [
  { label: "Products", height: 34 },
  { label: "SaaS", height: 48 },
  { label: "Enterprise", height: 62 },
  { label: "Digital", height: 76 },
  { label: "Innovation", height: 90 },
];

const focusAreas = [
  { title: "Software Product Development", description: "Building technology products designed to solve practical business challenges." },
  { title: "SaaS Solutions", description: "Developing cloud-based software platforms that businesses can access and manage efficiently." },
  { title: "Enterprise Applications", description: "Creating business applications that support organisational processes and operational requirements." },
  { title: "Digital Business Solutions", description: "Helping businesses improve workflows and adopt technology-driven processes." },
  { title: "Technology Innovation", description: "Exploring modern technologies to develop useful and scalable digital solutions." },
];

export default function CompanyBusinessOverview() {
  return (
    <section id="business-overview" aria-labelledby="business-overview-heading" className="bg-[#171d23] text-white">
      <div className="mx-auto grid max-w-[1640px] gap-10 px-5 py-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.82fr)_minmax(0,.78fr)] lg:items-center lg:gap-8 lg:px-12 lg:py-12 2xl:gap-12 2xl:px-16">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[.22em] text-[#72c9e9] uppercase"><span className="h-px w-9 bg-[#72c9e9]" aria-hidden="true" /> Capyngen at work</p>
          <h2 id="business-overview-heading" className="text-[clamp(47px,5.2vw,82px)] leading-[.94] font-bold tracking-[-.07em] uppercase">
            What<br /><span className="text-[#55bde1]">We Do</span>
          </h2>
          <p className="mt-6 max-w-[460px] text-sm leading-[1.7] text-[#b6c4cb] sm:text-base">At Capyngen Private Limited, we develop and operate technology solutions designed to support changing business requirements. Our work covers software development, SaaS product development, enterprise applications, and digital solutions.</p>

          <div className="mt-10 max-w-[475px] border-t border-white/15 pt-6 sm:mt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium tracking-[.12em] text-[#aab9c1] uppercase">Our key areas of focus</p>
                <p className="mt-1 text-2xl font-semibold tracking-[-.045em] sm:text-3xl">Five ways we build</p>
              </div>
              <span className="rounded-full border border-[#62c4e4]/35 px-3 py-1 text-xs font-semibold text-[#87d5ed]">05 areas</span>
            </div>
            <div className="mt-7 grid h-[205px] grid-cols-5 items-end gap-3 border-b border-white/20 sm:h-[235px] sm:gap-5" aria-label="Our five key areas of focus: software products, SaaS, enterprise applications, digital solutions, and technology innovation">
              {stages.map((stage) => (
                <div key={stage.label} className="flex h-full flex-col justify-end gap-3">
                  <div className="relative flex-1">
                    <div className="absolute right-1 bottom-0 left-0 rounded-t-[5px] bg-white/90" style={{ height: `${stage.height}%` }} />
                    <div className="absolute right-0 bottom-0 w-[42%] rounded-t-[5px] bg-[#299ecc]" style={{ height: `${Math.max(stage.height - 12, 18)}%` }} />
                  </div>
                  <span className="pb-3 text-center text-[9px] font-medium tracking-[.02em] text-[#b8c7cf] sm:text-[11px]">{stage.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="relative h-[250px] overflow-hidden rounded-[22px] bg-[#34434c] sm:h-[270px] lg:h-[min(33vh,310px)] lg:min-h-[220px]">
            <Image src="/images/company-about-office.webp" alt="Colleagues planning a software product" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 29vw" className="object-cover object-[center_40%]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101820a8] to-transparent" aria-hidden="true" />
            <span className="absolute bottom-4 left-5 text-[11px] font-semibold tracking-[.16em] uppercase">Software Development</span>
          </div>
          <div className="relative h-[250px] overflow-hidden rounded-[22px] bg-[#34434c] sm:h-[270px] lg:h-[min(33vh,310px)] lg:min-h-[220px]">
            <Image src="/images/company-overview-meeting.webp" alt="Team members building SaaS and enterprise applications" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 29vw" className="object-cover object-[center_52%]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101820a8] to-transparent" aria-hidden="true" />
            <span className="absolute bottom-4 left-5 text-[11px] font-semibold tracking-[.16em] uppercase">SaaS &amp; Enterprise</span>
          </div>
        </div>

        <div className="min-w-0 border-t border-white/20 pt-6">
          <p className="text-sm leading-[1.7] text-[#b2c0c7]">We focus on creating products and platforms that help organisations manage their operations more effectively. Our approach combines technology, business understanding, and continuous improvement to deliver solutions that are relevant to modern business environments.</p>
          <ul className="mt-6 space-y-4">
            {focusAreas.map((area, index) => (
              <li key={area.title} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[11px] bg-[#299ecc] text-xs font-bold text-white">0{index + 1}</span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-[-.025em]">{area.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.55] text-[#b2c0c7]">{area.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
