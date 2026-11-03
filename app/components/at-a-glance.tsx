const cardsContent = [
  { label: "Hundreds of Clients Served", position: "lg:col-start-3 lg:row-start-1" },
  { label: "Strong Success Rate on AI Implementations", position: "lg:col-start-4 lg:row-start-1" },
  { label: "A Growing Team of Data, AI and Analytics Professionals", position: "lg:col-start-2 lg:row-start-2" },
  { label: "Years of Proven Excellence", position: "lg:col-start-3 lg:row-start-2" },
  { label: "Projects Delivered Across Industries", position: "sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-2" },
];

export default function AtAGlance() {
  return (
    <section id="at-a-glance" aria-labelledby="at-a-glance-heading" className="bg-[#00162e] px-5 py-10 sm:px-7 sm:py-12 lg:px-12 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
        <div className="mb-3 min-w-0 sm:col-span-2 lg:col-start-1 lg:row-start-1 lg:mb-0 lg:pr-8">
          <h2 id="at-a-glance-heading" className="text-[clamp(29px,3vw,48px)] leading-tight font-bold tracking-[-.025em] text-[#f5f4f5] uppercase">Our story in numbers</h2>
          <div aria-hidden="true" className="mt-6 h-1 w-28 bg-linear-to-r from-[#ff5208] to-[#ff9626] lg:mt-7" />
          <p className="mt-7 max-w-[410px] text-base leading-[1.4] font-medium text-[#afbecb] sm:text-lg lg:mt-10 lg:text-[20px]">
            From a small Gurugram team to a delivery partner for businesses across India and beyond.
          </p>
        </div>

        {cardsContent.map((card) => (
          <article key={card.label} className={`flex min-h-[185px] min-w-0 flex-col justify-center rounded-[20px] border border-[#677588] bg-[#0d233d] px-6 py-7 sm:min-h-[205px] lg:min-h-[clamp(205px,14vw,245px)] lg:px-7 lg:py-8 ${card.position}`}>
            <h3 className="text-[clamp(15px,1.4vw,22px)] leading-[1.3] font-semibold tracking-[-.025em] text-[#d6d6db] uppercase">
              {card.label}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}