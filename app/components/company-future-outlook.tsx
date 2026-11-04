import Image from "next/image";

const priorities = [
  "Keep improving the quality of every digital experience",
  "Explore practical uses of new technology",
  "Build long-term partnerships through shared progress",
];

export default function CompanyFutureOutlook() {
  return (
    <section id="future-outlook" aria-labelledby="future-outlook-heading" className="bg-[#191f24] text-white">
      <div className="mx-auto max-w-[1550px] px-5 pt-14 pb-8 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:px-12 lg:pt-12 lg:pb-10 2xl:px-16">
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-14">
          <div className="min-w-0">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.2em] text-[#75cdea] uppercase"><span className="h-px w-8 bg-[#75cdea]" aria-hidden="true" /> Looking ahead</p>
            <h2 id="future-outlook-heading" className="text-[clamp(48px,5.2vw,82px)] leading-[.92] font-bold tracking-[-.07em] uppercase">Future<br /><span className="text-[#66c5e5]">Outlook</span></h2>
            <div className="mt-8 max-w-[500px] border-t border-white/20 pt-6 sm:mt-10">
              <h3 className="text-xl font-semibold tracking-[-.03em] sm:text-2xl">Future Vision</h3>
              <p className="mt-3 text-sm leading-[1.7] text-[#b9c6cd] sm:text-base">We see a future where thoughtful design and useful technology help businesses create better experiences for people.</p>
              <ul className="mt-6 space-y-3 text-sm leading-[1.5] text-[#e1e9ec]">
                {priorities.map((priority) => (
                  <li key={priority} className="flex items-start gap-3"><span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#6ecbe9]" />{priority}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-[#d9e4e9] shadow-[0_24px_60px_#0005] sm:h-[390px] lg:h-[min(55vh,500px)] lg:min-h-[350px]">
            <Image src="/images/company-future-outlook.webp" alt="A team celebrating together around a table in a bright office" fill sizes="(max-width: 1023px) 100vw, 56vw" className="object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101a22a8] to-transparent" aria-hidden="true" />
            <span className="absolute bottom-5 left-6 text-[11px] font-semibold tracking-[.15em] text-white uppercase">Progress is a team effort</span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-[16px] bg-[#238fb8] px-6 py-6 sm:grid-cols-[auto_1fr_1.2fr] sm:items-center sm:gap-7 sm:px-8 lg:mt-12 lg:px-10">
          <span className="text-[clamp(38px,4vw,62px)] leading-none font-semibold tracking-[-.06em]">03</span>
          <h3 className="text-xl font-semibold tracking-[-.035em] sm:text-2xl">Growth Priorities</h3>
          <p className="max-w-[500px] text-sm leading-[1.6] text-white/85">Better work, smarter solutions, and stronger partnerships guide what comes next.</p>
        </div>
      </div>
    </section>
  );
}
