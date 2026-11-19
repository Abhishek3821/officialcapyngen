const faqs = [
  { q: "1. Why is Capyngen considered the Best IT company in India?", a: "Capyngen focuses on building custom software, AI solutions, cloud platforms, and digital services based on business needs. Its approach combines innovation, quality engineering, clear communication, and long-term support to help businesses achieve their technology goals." },
  { q: "2. What makes Capyngen a Top IT company in India?", a: "Capyngen offers end-to-end technology solutions, including software development, CRM, HRMS, AI analytics, cloud services, and digital marketing. Its focus on customized solutions, scalability, and reliable delivery makes it a technology partner for businesses across different industries." },
  { q: "3. What services does Capyngen provide as a Best IT Services Provider?", a: "Capyngen provides custom software development, web development, mobile app development, CRM solutions, AI and analytics, cloud services, cybersecurity, and digital marketing. These services help businesses manage operations and build better digital experiences." },
  { q: "4. How does Capyngen work as a leading IT company in India?", a: "Capyngen starts by understanding a client's business model, goals, and existing workflows. Its team then plans, designs, develops, and tests solutions according to project requirements. It also provides handover, user training, and ongoing support after launch." },
  { q: "5. Which industries does Capyngen serve?", a: "Capyngen works with businesses in banking and capital markets, retail and e-commerce, fintech, healthcare, logistics, manufacturing, education, and enterprise cybersecurity. Its solutions are adapted to the operational and technology requirements of each industry." },
  { q: "6. Why should businesses choose Capyngen over other Best IT Services companies?", a: "Capyngen brings strategy, design, development, AI, cloud, and digital marketing services together under one team. Businesses can work with a single technology partner, receive clear project updates, and get solutions designed around their specific requirements." },
  { q: "7. What makes Capyngen different from a Top IT Company Software provider?", a: "Capyngen focuses on more than software development. It understands business processes before building a solution and considers performance, security, scalability, and user experience throughout the project. This approach helps businesses get technology that supports real operational needs." },
  { q: "8. What types of Top IT Services and solutions does Capyngen offer?", a: "Capyngen offers solutions such as enterprise software, CRM platforms, HRMS, AI analytics, web applications, mobile apps, cloud infrastructure, and cybersecurity systems. Each solution is planned according to the client's requirements and long-term business objectives." },
  { q: "9. How does Capyngen compare with other top IT Companies and Top software companies?", a: "Businesses should compare technology partners based on their experience, service range, development process, communication, security practices, and post-launch support. Capyngen focuses on custom development, complete project ownership, and long-term partnerships rather than relying on ready-made templates." },
  { q: "10. Does Capyngen provide support after project completion?", a: "Yes. Capyngen's project approach includes documented handover, clean code, user training, and a support plan. The team can continue helping with maintenance, improvements, and future development so that businesses can adapt their platforms as their needs change." },
];

export default function HomeFaq() {
  return (
    <section id="faq" aria-labelledby="home-faq-heading" className="bg-[#f5f3ef] px-5 py-12 sm:px-7 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto w-full max-w-[960px]">
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-3 inline-flex items-center gap-2.5 text-[10px] font-semibold tracking-[.2em] text-[#7e7d72] uppercase"><span aria-hidden="true" className="size-1.5 rounded-full bg-[#b79a73]" />Capyngen</p>
          <h2 id="home-faq-heading" className="font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.05] tracking-[-0.04em] text-[#292c25]">Frequently Asked <em className="font-normal text-[#7a806a]">Questions</em></h2>
        </header>
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index === 0} className="group rounded-[18px] border border-[#dcded3] bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-[18px] px-5 py-4 text-[15px] font-medium tracking-[-.01em] text-[#292c25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a806a] sm:px-6 sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#292c25] text-lg leading-none text-white transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">+</span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-[1.8] text-[#6d7066] sm:px-6 sm:pr-16 sm:pb-6">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
