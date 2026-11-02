import Image from "next/image";

const statistics = [
  { value: "12+", label: "лет опыта", detail: "Строим с 2012 года" },
  { value: "150+", label: "построенных домов", detail: "В Москве и области" },
  { value: "98%", label: "довольных клиентов", detail: "Нас рекомендуют" },
  { value: "10 лет", label: "гарантии", detail: "На конструктивные элементы" },
];

export default function Architecture() {
  return (
    <section aria-label="Наш опыт в строительстве домов" lang="ru" className="bg-white px-5 py-6 sm:px-7 lg:px-12 lg:py-10">
      <div className="mx-auto grid max-w-[1344px] overflow-hidden rounded-[24px] bg-[#17181b] md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:rounded-[32px]">
        <div className="flex flex-col justify-between gap-8 px-6 py-7 sm:px-8 sm:py-9 lg:gap-12 lg:px-9 lg:py-10">
          <h2 className="text-[clamp(25px,2.8vw,40px)] leading-[1.2] font-normal tracking-[-0.04em] text-[#f5f5f4]">
            Строим дома,<br />которыми гордимся
          </h2>

          <dl className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-0 md:grid-cols-2 md:gap-x-5 md:gap-y-7 xl:grid-cols-4 xl:gap-0">
            {statistics.map((stat, index) => (
              <div key={stat.value} className={`min-w-0 ${index > 0 ? "sm:border-l sm:border-white/10 sm:pl-4 md:border-l-0 md:pl-0 xl:border-l xl:pl-4" : ""} ${index < statistics.length - 1 ? "sm:pr-3 md:pr-0 xl:pr-3" : ""}`}>
                <dt className="text-[clamp(26px,2.7vw,38px)] leading-none font-light tracking-[-0.055em] whitespace-nowrap text-[#f4f4f3]">{stat.value}</dt>
                <dd className="mt-3">
                  <p className="text-[11px] leading-[1.4] tracking-[-0.025em] text-[#dadad9] lg:text-xs">{stat.label}</p>
                  <p className="mt-2 max-w-[135px] text-[10px] leading-[1.5] tracking-[-0.025em] text-[#8f9094] lg:text-[11px]">{stat.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-[#75634f] sm:min-h-[300px] md:min-h-0 lg:rounded-[32px]">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Светлая гостиная современного дома с большими окнами и уютной мебелью"
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
