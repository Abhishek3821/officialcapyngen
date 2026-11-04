import Image from "next/image";

const values = [
  {
    number: "01",
    title: "Excellence",
    description: "We bring care, craft, and clear thinking to every project, from the first idea to the final detail.",
    details: ["Quality in every delivery", "Always improving our work"],
  },
  {
    number: "02",
    title: "Teamwork",
    description: "Good work grows through open conversation, shared ownership, and respect for every perspective.",
    details: ["One team with our clients", "Better ideas through collaboration"],
  },
];

export default function CompanyCoreValues() {
  return (
    <section id="core-values" aria-labelledby="core-values-heading" className="bg-white text-[#202a30]">
      <div className="mx-auto grid max-w-[1580px] gap-12 px-5 py-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-12 2xl:px-16">
        <div className="min-w-0">
          <p className="mb-3 text-[11px] font-bold tracking-[.2em] text-[#299ecc] uppercase">What guides us</p>
          <h2 id="core-values-heading" className="text-[clamp(44px,5vw,78px)] leading-none font-bold tracking-[-.065em] uppercase">
            Core <span className="text-[#299ecc]">Values</span>
          </h2>
          <div className="relative mt-8 pb-14 sm:mt-10 sm:pb-16">
            <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[#dce8ed] sm:h-[430px] lg:h-[min(51vh,500px)] lg:min-h-[340px]">
              <Image src="/images/company-overview-meeting.webp" alt="Capyngen team members discussing ideas around a table" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-[center_46%]" />
            </div>
            <div className="absolute right-4 bottom-0 left-4 grid grid-cols-2 gap-3 sm:right-8 sm:left-8 sm:gap-5">
              <article className="min-h-[112px] rounded-[18px] bg-[#202a30] px-4 py-4 text-white shadow-[0_14px_30px_#14242d26] sm:min-h-[130px] sm:px-6 sm:py-5">
                <span aria-hidden="true" className="mb-2 block text-xl leading-none text-[#7ed5f0]">✧</span>
                <h3 className="text-base font-semibold sm:text-lg">Integrity</h3>
                <p className="mt-1 text-[11px] leading-[1.45] text-white/70 sm:text-xs">Honest choices. Lasting trust.</p>
              </article>
              <article className="min-h-[112px] rounded-[18px] bg-[#299ecc] px-4 py-4 text-white shadow-[0_14px_30px_#14577526] sm:min-h-[130px] sm:px-6 sm:py-5">
                <span aria-hidden="true" className="mb-2 block text-xl leading-none text-white">✦</span>
                <h3 className="text-base font-semibold sm:text-lg">Innovation</h3>
                <p className="mt-1 text-[11px] leading-[1.45] text-white/85 sm:text-xs">Fresh thinking that moves us forward.</p>
              </article>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:pt-14">
          <p className="max-w-[480px] text-base leading-[1.65] text-[#687984] sm:text-lg">The principles behind every experience we create and every partnership we build.</p>
          <div className="mt-6 border-t border-[#dfe8ec] sm:mt-9">
            {values.map((value) => (
              <article key={value.number} className="grid grid-cols-[52px_minmax(0,1fr)] gap-4 border-b border-[#dfe8ec] py-7 sm:grid-cols-[68px_minmax(0,1fr)] sm:gap-6 sm:py-9">
                <span className="text-[clamp(28px,3vw,43px)] leading-none font-semibold tracking-[-.06em] text-[#299ecc]">{value.number}</span>
                <div>
                  <h3 className="text-xl leading-tight font-semibold tracking-[-.035em] sm:text-2xl">{value.title}</h3>
                  <p className="mt-3 max-w-[480px] text-sm leading-[1.65] text-[#6c7c85] sm:text-base">{value.description}</p>
                  <ul className="mt-4 grid gap-2 text-xs font-medium text-[#3d4e58] sm:text-sm">
                    {value.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2"><span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#299ecc]" />{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
