import Image from "next/image";

const items = [
  { value: "01", label: "Where we started", detail: "A small team with a clear idea: build software that businesses actually keep using." },
  { value: "02", label: "Where we are now", detail: "A delivery partner for companies across India and beyond, working across industries and platforms." },
  { value: "03", label: "What we value", detail: "Straight answers, clean engineering, and support that continues long after launch." },
  { value: "04", label: "Where we are going", detail: "Deeper work in AI, automation, and cloud — solving harder problems for bigger teams." },
];

export default function Architecture() {
  return (
    <section aria-label="Our journey and approach" className="bg-white px-5 py-6 sm:px-7 lg:px-12 lg:py-10">
      <div className="mx-auto grid max-w-[1344px] overflow-hidden rounded-[24px] bg-[#17181b] md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:rounded-[32px]">
        <div className="flex flex-col justify-between gap-8 px-6 py-7 sm:px-8 sm:py-9 lg:gap-12 lg:px-9 lg:py-10">
          <h2 className="text-[clamp(25px,2.8vw,40px)] leading-[1.2] font-normal tracking-[-0.04em] text-[#f5f5f4]">
            From First Client to<br />Long-Term Partner
          </h2>

          <dl className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-0 md:grid-cols-2 md:gap-x-5 md:gap-y-7 xl:grid-cols-4 xl:gap-0">
            {items.map((item, index) => (
              <div key={item.value} className={`min-w-0 ${index > 0 ? "sm:border-l sm:border-white/10 sm:pl-4 md:border-l-0 md:pl-0 xl:border-l xl:pl-4" : ""} ${index < items.length - 1 ? "sm:pr-3 md:pr-0 xl:pr-3" : ""}`}>
                <dt className="text-[clamp(26px,2.7vw,38px)] leading-none font-light tracking-[-0.055em] whitespace-nowrap text-[#f4f4f3]">{item.value}</dt>
                <dd className="mt-3">
                  <p className="text-[11px] leading-[1.4] tracking-[-0.025em] text-[#dadad9] lg:text-xs">{item.label}</p>
                  <p className="mt-2 max-w-[155px] text-[10px] leading-[1.5] tracking-[-0.025em] text-[#8f9094] lg:text-[11px]">{item.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-[#75634f] sm:min-h-[300px] md:min-h-0 lg:rounded-[32px]">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Modern living room interior with large windows and cozy furniture"
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, 42vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}