import Image from "next/image";

const features = [
  {
    title: "Real-time analytics",
    description: "Gain actionable insights with our real-time analytics feature",
    icon: "analytics",
  },
  {
    title: "Customizable reports",
    description: "Streamline your financial processes with automated workflows",
    icon: "reports",
  },
  {
    title: "Mobile accessibility",
    description: "Manage your finances on the go with our mobile-friendly platform",
    icon: "mobile",
  },
  {
    title: "Enhanced security",
    description: "Protect your sensitive financial data with our state-of-the-art security measures",
    icon: "security",
  },
] as const;

function FeatureIcon({ type }: { type: (typeof features)[number]["icon"] }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#fffdf6] text-[#f17d51] lg:size-12">
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {type === "analytics" && <><path d="M6 17v-5M12 17V8M18 17V5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>}
        {type === "reports" && <><path d="M7 6h10v13H7z" fill="currentColor" fillOpacity=".2" /><path d="m8 15 8-8 2 2-8 8-3 1 1-3Z" fill="currentColor" /><path d="M7 5h6M7 20h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>}
        {type === "mobile" && <><rect x="7" y="3" width="11" height="18" rx="2.5" fill="currentColor" /><path d="M11 6h3M11 17h3" stroke="#fffdf6" strokeWidth="1.5" strokeLinecap="round" /></>}
        {type === "security" && <><path d="m12 3 7 3v6c0 4-4 7-7 9-3-2-7-5-7-9V6l7-3Z" fill="currentColor" /><path d="m9 12 2 2 4-4" stroke="#fffdf6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></>}
      </svg>
    </span>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  return (
    <article className="flex min-h-[185px] flex-col justify-between gap-8 rounded-[20px] bg-[#20534b] p-5 sm:p-6 lg:min-h-[240px] lg:rounded-[24px] lg:p-7">
      <FeatureIcon type={feature.icon} />
      <p className="max-w-[290px] text-sm leading-[1.5] tracking-[-0.02em] text-[#b0c4be] lg:text-base">
        <span className="font-medium text-[#f2f6f2]">{feature.title}</span>{" "}
        {feature.description}
      </p>
    </article>
  );
}

export default function Features() {
  return (
    <section id="services" aria-labelledby="features-heading" className="bg-[#083c32] px-5 py-12 sm:px-7 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1344px]">
        <div className="mx-auto max-w-[620px] text-center">
          <h2 id="features-heading" className="text-[clamp(28px,3.5vw,48px)] leading-[1.18] font-normal tracking-[-0.045em] text-[#f4f6f3]">
            Core features that set us<br className="hidden sm:block" /> apart from the competition
          </h2>
          <p className="mx-auto mt-5 max-w-[460px] text-sm leading-[1.5] text-[#a8beb6] lg:text-base">
            Explore our standout features designed to deliver exceptional performance and value, distinguishing us from the competition.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3 lg:gap-5">
          <div className="grid gap-4 lg:gap-5">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[20px] bg-[#809888] sm:row-span-2 md:row-span-1 lg:rounded-[24px]">
            <Image
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="A smiling professional working at her laptop"
              fill
              unoptimized
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>

          <div className="grid gap-4 lg:gap-5">
            <FeatureCard feature={features[2]} />
            <FeatureCard feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
