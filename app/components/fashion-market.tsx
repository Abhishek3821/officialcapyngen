import Image from "next/image";

const steps = [
  { number: "01", title: "Discovery and Requirement Mapping", description: "We study your business goals, audience, and competitors before planning any Top web development Services and solutions." },
  { number: "02", title: "Design and Prototype Approval", description: "Wireframes and clickable prototypes are approved by you, so the Best web development Services Provider builds exactly what you expect." },
  { number: "03", title: "Development and Quality Testing", description: "Clean code, cross-browser checks, and speed audits are handled by our team at top web development in Gurgaon." },
  { number: "04", title: "Launch and Ongoing Support", description: "After going live, we monitor performance and provide maintenance — the standard you should expect from the Best web development company in India." },
];

export default function FashionMarket() {
  return (
    <section id="fashion-market" aria-labelledby="fashion-market-heading" className="relative isolate overflow-hidden bg-[#356383] px-5 pt-8 pb-5 sm:px-7 sm:pt-11 sm:pb-7 lg:px-10 lg:pt-12 lg:pb-9">
      <div aria-hidden="true" className="pointer-events-none absolute -inset-10 -z-10">
        <Image src="/images/moments/celebration.jpg" alt="" fill sizes="100vw" className="scale-110 object-cover opacity-80 blur-[22px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_26%,#237898b3,transparent_48%),radial-gradient(ellipse_at_80%_70%,#c8438ac4,transparent_45%),radial-gradient(ellipse_at_70%_10%,#74b9d99e,transparent_50%),linear-gradient(90deg,#0f3a5a66,#30284944)]" />
      </div>
      <div className="mx-auto max-w-[1560px]">
        <h2 id="fashion-market-heading" className="mx-auto max-w-[650px] text-center text-[clamp(30px,3.7vw,58px)] leading-[.99] font-normal tracking-[-.045em] text-[#fff9f1]">Our Process as Best Web<br />Development Company In India</h2>
        <dl className="mt-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-14 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex min-h-[235px] flex-col justify-between rounded-[8px] bg-[#fffefa] px-5 pt-6 pb-5 text-[#26251f] shadow-[0_2px_12px_#1330490a] sm:min-h-[265px] sm:px-6 lg:min-h-[310px] lg:px-7 lg:pt-7 lg:pb-7 xl:min-h-[340px]">
              <dt className="order-2 mt-12 max-w-[230px] text-[12px] leading-[1.45] tracking-[-.015em] text-[#8a8984] sm:text-[13px] lg:text-[14px]"><span className="mb-2 block text-[14px] leading-[1.3] font-medium tracking-[-.02em] text-[#26251f] sm:text-[15px] lg:text-[17px]">{step.title}</span>{step.description}</dt>
              <dd className="order-1 font-[Georgia,'Times_New_Roman',serif] text-[clamp(42px,4.8vw,76px)] leading-none font-normal tracking-[-.075em]">{step.number}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
