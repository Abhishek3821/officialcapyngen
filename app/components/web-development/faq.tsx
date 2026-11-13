const faqs = [
  { question: "Why is Capyngen considered the Best web development company in India?", answer: "Capyngen is recognized as a Best web development company in India because we combine clean code, fast delivery, and post-launch support. Our projects are built for performance and search visibility, not just visual appeal." },
  { question: "What makes Capyngen a Top web development company in India?", answer: "We are a Top web development company in India because we do not disappear after launch. We provide ongoing maintenance, security updates, and performance monitoring, which most agencies treat as an afterthought." },
  { question: "What services does Capyngen offer as a Best web development Services Provider?", answer: "As a Best web development Services Provider, we offer custom website development, e-commerce builds, web applications, CMS development, API integrations, speed optimization, and maintenance." },
  { question: "Is Capyngen a leading web development company in India for startups?", answer: "Yes. We work with startups and enterprises alike. Our leading web development company in India approach means we scale our process to fit your budget and timeline, whether you need a simple site or a full platform." },
  { question: "Why are Capyngen counted among the Best web development Services companies?", answer: "We are counted among Best web development Services companies because of our delivery record. We have shipped projects across e-commerce, healthcare, finance, and education, with verifiable client outcomes." },
  { question: "How do I find the top web development in Gurgaon?", answer: "You are on the right page. Capyngen is based in Gurgaon and serves clients across Delhi NCR and pan-India. If you want top web development in Gurgaon with local accountability, we are a direct option." },
  { question: "What kind of Top web development Services and solutions do you provide?", answer: "Our Top web development Services and solutions cover everything from front-end design to back-end architecture, database setup, API integration, security hardening, and ongoing support." },
  { question: "How long does it take to build a website with Capyngen?", answer: "A standard business website takes 3 to 5 weeks. E-commerce and custom web applications take 6 to 12 weeks depending on complexity. We give you a clear timeline before starting." },
  { question: "Do you provide support after the website is live?", answer: "Yes. Every project includes a support period, and we offer ongoing maintenance packages for updates, security patches, and performance checks." },
  { question: "How do I get started with Capyngen?", answer: "Fill out the contact form on this page or call us directly. We will schedule a discovery call to understand your requirements and provide a scope and quote. You can also ask us directly why we are considered a Best web development company in India and a Top web development company in India — we will be happy to show you examples." },
];

export default function WebDevelopmentFaq() {
  return (
    <section id="web-development-faq" aria-labelledby="web-development-faq-heading" className="bg-white px-5 py-12 text-[#181b19] sm:px-9 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:gap-12">
        <div>
          <h2 id="web-development-faq-heading" className="text-[clamp(28px,3vw,40px)] leading-tight font-semibold tracking-[-.045em]">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-[#e2e5de] border-y border-[#e2e5de]">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm text-[15px] leading-[1.45] font-medium tracking-[-.01em] text-[#181b19] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1e1c] lg:text-[17px] [&::-webkit-details-marker]:hidden">
                <span>{index + 1}. {faq.question}</span>
                <span aria-hidden="true" className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[#e2e5de] text-sm text-[#626b5f] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-[760px] pr-10 text-sm leading-[1.65] tracking-[-.01em] text-[#858884] lg:text-[15px]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
