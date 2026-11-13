import Image from "next/image";
import Link from "next/link";

function Photo({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#dce9ed] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

const varieties = ["Operational CRM", "Analytical CRM", "Collaborative CRM", "Strategic CRM"];

export function JourneySimplified() {
  return <section id="crm-varieties" aria-labelledby="crm-journey-title" className="bg-[#f8fbfc] px-5 py-16 sm:px-8 lg:px-12"><div className="relative mx-auto grid min-h-[590px] max-w-[1500px] items-center gap-8 overflow-hidden rounded-[34px] bg-[#064a52] px-6 py-12 text-white sm:px-10 lg:grid-cols-[.78fr_1.22fr] lg:px-14"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_45%_50%,#1b899055,transparent_52%)]" /><div className="relative z-10 max-w-[540px]"><p className="text-xs font-bold tracking-[.18em] text-[#b6e6dc] uppercase">CRM &amp; Management Software</p><h2 id="crm-journey-title" className="mt-4 text-[clamp(40px,4vw,60px)] leading-[1.02] font-semibold tracking-[-.065em]">Varities of CRM Best Software Management Capyngen Provide</h2><ul className="mt-7 space-y-3">{varieties.map((point) => <li key={point} className="flex items-center gap-3 text-sm text-[#e4f4ef]"><span className="flex size-5 items-center justify-center rounded-full border border-[#a4d6d0] text-xs">✓</span>{point}</li>)}</ul><a href="#crm-why-capyngen" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07545c] hover:bg-[#d9f5ef]">Why Choose Capyngen →</a></div><div className="relative min-h-[390px] sm:min-h-[500px]"><Photo src="/images/crm-management-software/travel-couple.webp" alt="Couple looking at a phone together" className="absolute inset-[3%_9%_0_0] rounded-[28px]" position="object-[35%_center]" /><div className="absolute top-[4%] right-0 bottom-[3%] w-[45%] max-w-[275px] rotate-[4deg] overflow-hidden rounded-[32px] border-[9px] border-[#1b2830] bg-white p-4 text-[#193747] shadow-[0_25px_55px_#001d2c70] sm:p-5"><div className="mx-auto mb-5 h-2 w-16 rounded-full bg-[#28343c]" /><p className="text-[10px] font-semibold text-[#56a1a4]">CAPYNGEN</p><h3 className="mt-2 text-base font-semibold sm:text-xl">AI CRM</h3><p className="mt-2 text-[10px] text-[#87999a]">Connected Teams</p><div className="mt-4 grid gap-2">{[{ src: "/images/destinations/goreme.webp", title: "Sales" }, { src: "/images/destinations/swiss-alps.webp", title: "Marketing" }, { src: "/images/destinations/los-lances.webp", title: "Support" }].map((item) => <div key={item.title} className="flex items-center gap-2 rounded-[12px] bg-[#f1f7f7] p-1.5"><Photo src={item.src} alt="" className="size-10 shrink-0 rounded-[8px] sm:size-12" /><span className="text-[10px] font-semibold sm:text-xs">{item.title}</span></div>)}</div></div></div></div></section>;
}

const reasons = [
  { name: "Lead and Contact Management", image: "/images/destinations/swiss-alps.webp", alt: "Swiss Alps" },
  { name: "Automation", image: "/images/destinations/goreme.webp", alt: "Cappadocia valley" },
  { name: "Social CRM", image: "/images/destinations/los-lances.webp", alt: "Coastline" },
  { name: "Artificial Intelligence", image: "/images/destinations/merzouga.webp", alt: "Desert dunes" },
];

export function LovedPlaces() {
  return <section id="crm-why-capyngen" aria-labelledby="crm-places-title" className="bg-[#f8fbff] text-[#142b47]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[680px] lg:px-12"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold tracking-[.2em] text-[#6e9dc2] uppercase">Why Choose Capyngen</p><h2 id="crm-places-title" className="mt-3 max-w-[780px] text-[clamp(42px,4.8vw,74px)] leading-[1.02] font-semibold tracking-[-.065em]">Why Choose Capyngen for Best CRM Management Software</h2></div><a href="#crm-faq" className="rounded-full bg-[#0869c2] px-6 py-3 text-sm font-semibold text-white hover:bg-[#06539b]">Frequently Asked Questions ↗</a></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{reasons.map((item) => <article key={item.name} className="relative min-h-[380px] overflow-hidden rounded-t-[180px] rounded-b-[24px]"><Photo src={item.image} alt={item.alt} className="absolute inset-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#063e6e]/50 via-transparent to-transparent" /><div className="absolute right-5 bottom-5 left-5 rounded-[18px] bg-white/95 px-4 py-5 text-center shadow-lg"><p className="mx-auto w-fit rounded-full bg-[#0874d4] px-3 py-1 text-[10px] font-bold tracking-[.12em] text-white uppercase">CRM</p><h3 className="mt-3 text-lg font-semibold">{item.name}</h3><span className="mx-auto mt-4 flex size-8 items-center justify-center rounded-full bg-[#f8a94e] text-sm text-white">→</span></div></article>)}</div></div></section>;
}

const whyOurCrm = [
  { name: "Specialities & Benefits", text: "CRM development services that we provide will be designed to be scalable and highly automated to create the most automated touch points for all customers.", image: "/images/client-1.jpg" },
  { name: "Security & Compliance", text: "The CRM software development company introduced by us, encrypts the data of its users and makes use of GDPR-compliant features.", image: "/images/client-3.jpg" },
];

export function TravelerTestimonials() {
  return <section id="crm-why-our-crm" aria-labelledby="crm-testimonials-title" className="bg-[#f8fbff] text-[#15334c]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[640px] lg:px-12"><div className="grid gap-5 lg:grid-cols-[.75fr_1fr_1fr]"><div><p className="text-xs font-bold tracking-[.18em] text-[#2875b3] uppercase">Customer Success Stories</p><h2 id="crm-testimonials-title" className="mt-3 text-[clamp(38px,3.6vw,56px)] leading-[1.04] font-semibold tracking-[-.06em]">Why Choose Our CRM Management Software?</h2><p className="mt-5 max-w-[320px] text-sm leading-[1.7] text-[#7b8f9e]"><strong className="font-semibold text-[#15334c]">Customer Success Stories:</strong> Capyngen is also listed among the Best CRM software in India in the best results delivered across industries.</p><a href="#crm-trends" className="mt-7 inline-flex rounded-full bg-[#0869c2] px-6 py-3 text-sm font-semibold text-white hover:bg-[#06539b]">Future Trends in CRM →</a></div>{whyOurCrm.map((item) => <article key={item.name} className="flex min-h-[250px] flex-col rounded-[22px] bg-white p-7 shadow-[0_12px_35px_#0b4c8110]"><div className="flex items-center gap-3"><Image src={item.image} alt="" width={48} height={48} className="size-12 rounded-full object-cover" /><div><h3 className="text-sm font-semibold">{item.name}</h3><p className="text-xs text-[#a2aeb7]">CRM &amp; Management Software</p></div></div><p className="mt-6 text-base leading-[1.7] text-[#5d7080]">{item.text}</p><span aria-hidden="true" className="mt-auto self-end font-serif text-5xl leading-none text-[#c9dce8]">”</span></article>)}</div><div className="relative mt-12 min-h-[230px] overflow-hidden rounded-[26px] bg-[#086ac8]"><Photo src="/images/crm-management-software/travel-couple.webp" alt="Couple looking at a phone together" className="absolute inset-y-0 left-0 w-[42%] max-sm:w-[50%]" position="object-[35%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#086ac8]/95 to-[#086ac8]" /><div className="relative ml-auto flex min-h-[230px] max-w-[760px] flex-col justify-center px-6 py-8 text-white sm:px-10"><h3 className="text-2xl font-semibold sm:text-3xl">Manage smarter, grow faster</h3><p className="mt-2 text-sm text-white/80">Improve efficiency with CRM &amp; Management software based on work process tailored for the age of the modern era. Capyngen is a Custom CRM software development company, so provide excellent performance thanks to integration, automation, and analytics.</p><Link href="/contact-us" className="mt-5 w-fit rounded-full bg-[#f6aa48] px-6 py-2.5 text-sm font-semibold text-[#123b63] hover:bg-[#ffc778]">Get in touch ↗</Link></div></div></div></section>;
}

const trends = [
  { title: "AI and Machine Learning Integration", description: "Smart CRM software development will be able to predict trends and personalize the customer experience.", icon: "↗", image: "/images/application-solutions/hiker.webp", alt: "Hiker in the mountains" },
  { title: "CRM On The Move", description: "Mobile Preference Cloud-based tools offered by the prominent CRM software development services help users to have access on the move.", icon: "≈", image: "/images/destinations/los-lances.webp", alt: "Coastline" },
  { title: "Predictive Analytics", description: "CRM software development company tools forecast customer liking and also assists in motivating customers to participate.", icon: "✈", image: "/images/destinations/goreme.webp", alt: "Cappadocia valley" },
];

export function TravelerExperiences() {
  return (
    <section id="crm-trends" aria-labelledby="crm-experiences-title" className="bg-[#eaf2f7] text-[#142d46]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 text-center sm:px-8 lg:px-12">
        <p className="text-xs font-bold tracking-[.18em] text-[#4088be] uppercase">Future Trends</p>
        <h2 id="crm-experiences-title" className="mx-auto mt-3 max-w-[940px] text-[clamp(40px,4vw,64px)] leading-[1.06] font-semibold tracking-[-.06em]">Future Trends in CRM Management Software</h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {trends.map((item, index) => (
            <article key={item.title} className="group relative min-h-[330px] overflow-hidden rounded-[24px] bg-[#315a70] text-white shadow-[0_16px_36px_#173e5a24] sm:min-h-[360px]">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092a43]/90 via-[#092a43]/20 to-transparent" />
              <span className="absolute top-5 left-5 rounded-full border border-white/35 bg-black/20 px-3 py-1.5 text-[10px] font-semibold tracking-[.14em] uppercase backdrop-blur-sm">0{index + 1}</span>
              <div className="absolute right-5 bottom-7 left-5">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-white/35 bg-white/20 text-xl backdrop-blur-sm">{item.icon}</span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.5] text-white/90">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/contact-us" className="mt-9 inline-flex rounded-full bg-[#0869c2] px-8 py-3 text-sm font-semibold text-white hover:bg-[#06539b]">Get in touch ↗</Link>
      </div>
    </section>
  );
}

const faqs = [
  { question: "What makes Capyngen the best CRM & Management Software company in India?", answer: "Your CRM systems are configured around the way your sales, marketing, and support teams operate. As the leading CRM & Management Software company in India, we are all about the results quicker follow-up, cleaner data, increased conversion - not just delivering software." },
  { question: "How is Capyngen different from other CRM providers?", answer: "Most Vendors leave after delivering a platform. We continue with you through integration configuration training, and tuning. That's what makes us one of the top CRM & Management Software Companies in India not just another vendor." },
  { question: "Which types of CRM software do you offer?", answer: "Operational CRM Analytical CRM Collaborative CRM Strategic CRM with AI our best CRM & Management Software Solution services provider team is here to help you decide, which kind of CRM is best for your business process based on your business size." },
  { question: "Can your CRM software work for small and medium businesses?", answer: "Can I customize the system to my business? Yes our CRM and management software is designed for small, medium, and large businesses, so you can use a smaller sales pipeline or go big with enterprise management." },
  { question: "How does AI CRM help my business grow?", answer: "You get an edge by let AI discover fruitful opportunities, add context to deal health, know the right sales efforts to focus on, and automate mundane follow-up activities. That's how Gurgaon's best CRM & Management Software implementation transforms a sea of unstructured data into a clear following." },
  { question: "How secure is your CRM software?", answer: "Encryption and GDPR-compliant features and role-based controls are used to ensure security. We embed security and compliance in our architecture rather than bolt them on afterwards." },
  { question: "Does your CRM integrate with our existing tools?", answer: "Yes. We integrate your CRM with email, ERP, accounting, marketing, and support software. During implementation we carry out integration and data migration, so that everything is seamlessly linked." },
  { question: "Do you provide training and support after implementation?", answer: "Yes. We teach your team, optimize processes through iterative suggestions, and support you remotely even after go-live. Our partnership as a best CRM & Management Software companies does not end there." },
  { question: "How long does CRM implementation take?", answer: "A standard setup usually takes 48 weeks. More involved deployments with custom modules, AI capabilities, and heavy integrations can take 3-4 months. We can always give you a straightforward timeline before we begin." },
  { question: "How do I get started? What is the entry point to Capyngen's CRM & Management Software and services?", answer: "Get in touch with us here. We'll book in a discovery call to help you plot your sales journey, customer interaction points and data shortfalls, and offer a suitable CRM solution at no cost to you." },
];

export function CrmFaq() {
  return <section id="crm-faq" aria-labelledby="crm-faq-title" className="bg-[#f8fbff] text-[#15334c]"><div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14 lg:px-12 lg:py-20">
    <div><p className="text-xs font-bold tracking-[.18em] text-[#2875b3] uppercase">Get in touch</p><h2 id="crm-faq-title" className="mt-3 text-[clamp(41px,4.3vw,65px)] leading-[1.04] font-semibold tracking-[-.06em]">Frequently Asked Questions</h2></div>
    <div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[22px] bg-white p-5 shadow-[0_12px_35px_#0b4c8110] sm:px-7">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base leading-[1.5] font-semibold text-[#15334c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0869c2] [&::-webkit-details-marker]:hidden"><span><span className="mr-2 text-[#0869c2]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f8a94e] text-base text-white transition-transform group-open:rotate-45">+</span></summary>
      <p className="mt-3 pr-10 text-sm leading-[1.7] text-[#5d7080]">{faq.answer}</p>
    </details>)}</div>
  </div></section>;
}
