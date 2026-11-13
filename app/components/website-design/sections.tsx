import Image from "next/image";
import Link from "next/link";
import Expertise from "./expertise";
import StudioPhoto from "./podcast-photo";
import styles from "./sections.module.css";

const services = [
  { title: "Fully Custom Website Design", text: "Differentiate from competitors with fully custom website design service that is tailored to your brand identity and audience expectation." },
  { title: "Modern Website Design", text: "The expectations of your users are growing at an exponential rate. Our approach to web design makes your brand contemporary and digitally relevant." },
  { title: "Responsive Website Design", text: "Over half of all web traffic is generated from mobile devices. With our custom website design services, everything will work perfectly across all screen sizes." },
  { title: "UX/UI Website Design", text: "Awesome design is based on usability. Our UX / UI experts develop user experiences that feel smooth and natural all the way to conversion." },
  { title: "Website Redesign & Revamp", text: "Already have a website? Outdated? Not meeting expectations? We can convert it into a high-impact effective site." },
];

const steps = [
  { name: "Discover & Plan", number: "01", index: 0 },
  { name: "Design & Develop", number: "02", index: 1 },
  { name: "Launch & Optimize", number: "03", index: 2 },
];

const whyChoose = [
  "Examples of custom website designprojects that showcase your brand story and what you stand for.",
  "Desktop first Great Readability and Easy Navigation to give all users the same seamless browsing experience.",
  "Innovative & Trendy Interfaces that help to bring greater exposure to your brands and reduce bounce rates.",
  "Corporate Web Solutions a professional web presence that is strong, trustworthy, and reliable.",
  "E-Commerce Website Designs designed to scale, with secure user check out and put money directly into your accounts.",
  "Is recognized by the Industry trusted to be one of the best Website Design and development partner nationwide.",
];

const results = ["Higher conversion rates", "Stronger brand credibility", "Better mobile engagement", "Lower bounce rates", "Improved user satisfaction", "Improved search visibility"];

const bestReasons = [
  { title: "Hands-On Experience", text: "The company has years of experience and a track record of success in delivering high performing websites for many industry sectors." },
  { title: "SEO-Compatible Method", text: "Excellent quality programming, fast loading times, and a Search-engine-friendly architecture that will boost your search engine rankings." },
  { title: "Cheap Web Design Services", text: "With price, the customer receives customized-made options without any slight compromise on engineering quality." },
  { title: "Bright Side of Design", text: "A perfect blend of modern design with customer friendly digital functionality." },
];

const faqs = [
  { question: "What makes Capyngen the best website design company in India?", answer: "We integrate custom design, clean development and SEO system. Our layouts as a Website Design Company in India not only look great, but ensure visitors convert to customers, not just an eye-catching template." },
  { question: "Do you offer custom website design services?", answer: "Yes. Our Custom Website Design Services are centered on your branding, the expectations of your audience, and your growth goals. Each site design is original, created from the ground up and never template-based." },
  { question: "Do you provide responsive website design?", answer: "Absolutely. Our Responsive Website Design approach guarantees seamless performance on mobile, tablet, and desktop devices, recognizing that over half of web traffic now originates from mobile platforms." },
  { question: "Are you a website design company in Gurgaon serving other cities?", answer: "Yes. We at Website Design Company Gurgaon also work with clients from across India and overseas through remote work." },
  { question: "What is included in your corporate website design services?", answer: "Our Corporate Website Design Services include strategy, bespoke design, coding, and content hierarchies, and launch support to give your website the credibility of a professional online presence." },
  { question: "Do you build e-commerce websites?", answer: "Yes. Our E-commerce Website Design Services are designed to scale seamlessly, protect checkout and support revenue growth directly." },
  { question: "Do you offer affordable website design services?", answer: "Yes. Our Facebook Website Design Cost Services can be customized to fit your budget, without losing the quality of the engineering and design." },
  { question: "Can you redesign my existing website?", answer: "Yes. We redign your website into a high impact digital asset. We turn slow and underperforming websites into winners, that loads faster, are easy-to-use, and ultimately increase conversions." },
  { question: "Do you provide landing page design services?", answer: "Yes. Our Landing Page Design Service aims at single-objective pages designed for campaigns, lead generation, and conversions." },
  { question: "How do I choose between you and another top website design company?", answer: "Compare portfolios, how transparent the process is and support after you launch. We are a Top Website Design Company and Best Website Design Agency doing all three, with a track record in every industry. Contact us and we will explain our Creative Website Design Services and how they align to your objectives." },
];

export default function WebsiteDesignSections() {
  return <>
    <section id="website-services" className={styles.work} aria-labelledby="work-heading">
      <div className={`${styles.container} ${styles.workGrid}`}>
        <div className={styles.workVisual}><div className={styles.workPhoto}><Image src="/images/website-design/how-we-work.webp" alt="Designer in an orange sweater researching and working at her laptop" fill sizes="(max-width: 800px) 100vw, 45vw" className={styles.image} /></div><div className={styles.seal} aria-hidden="true"><span>✦</span></div></div>
        <div className={styles.workCopy}><p className={styles.purpleEyebrow}>About Our Custom Website Design</p><h2 id="work-heading">Our Website<br />Design Services</h2><p>About Our Custom Website Design we customize every website design based on your brand, the expectations of your audience and your growth goals. Our custom website design sets you apart from cookie-cutter websites and gives you a unique presence that will stand out in the marketplace.</p><ul>{services.map(item => <li key={item.title}><strong className="font-semibold text-[#2b2833]">{item.title}:</strong> {item.text}</li>)}</ul><Link href="/contact-us" className={styles.purpleButton}>Contact Us <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>

    <section id="website-process" className={styles.voices} aria-labelledby="voices-heading">
      <div className={`${styles.container} ${styles.voicesGrid}`}>
        <div className={styles.hosts}>{steps.map(step => <article key={step.name}><StudioPhoto index={step.index} alt="Studio portrait" className={styles.hostPhoto} /><h3>{step.name}</h3><p>{step.number}</p></article>)}</div>
        <div className={styles.voicesCopy}><p className={styles.eyebrow}>Straightforward. Transparent. Results-oriented.</p><h2 id="voices-heading">Our Website<br />Design Process</h2><p>It all begins with your business, and ends with a website that works just as hard as you do. We keep it straightforward transparent results-oriented no guessing, no endless reworking.</p><a href="#website-why-choose" className={styles.blackButton}>Why Choose Capyngen <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section id="website-why-choose" className={styles.podcastIntro} aria-labelledby="podcast-heading">
      <div className={`${styles.container} ${styles.introGrid}`}>
        <div className={styles.introCopy}><p className={styles.eyebrow}>Your partner in digital growth</p><h2 id="podcast-heading">Why Choose Capyngen for Website Design Services?</h2><p>We at Capyngen are more than a service provider we are your partner in digital growth. With our capabilities and experience, we design and build websites that are visually appealing, user-friendly, mobile responsive, and conversion-centric.</p><a href="#website-expect" className={styles.blackButton}>What You Can Expect <span aria-hidden="true">↗</span></a><div className={styles.topics}><p>Why Choose Capyngen</p><div>{whyChoose.map((item, index) => <span key={item}>{["◉", "◈", "▧", "◎", "◉", "◈"][index]} &nbsp; {item}</span>)}</div></div></div>
        <div className={styles.introPortrait}><StudioPhoto index={0} alt="Studio portrait" className={styles.featuredHost} /><span className={styles.onAir}><span /> Capyngen</span></div>
        <aside className={styles.introAside}><p><strong className="font-semibold text-[#171b18]">Website Design That Works for Your Business.</strong> Your website is how the world views your business. With Our Website Design Services we create attractive, creative website with sophisticated functionality and innovative solutions with strategic direction. We deliver only the best websites that perform seamlessly and leave the right impressions on the digital world.</p><a href="#website-best" className={styles.featuredLink}><span aria-hidden="true">↗</span> Why Capyngen is the Best Website Design Company</a><div className={styles.podcastFacts}><p>Our Website Design Process</p><div><strong>03</strong><span>Discover &amp; Plan. Design &amp; Develop. Launch &amp; Optimize.</span></div><div><strong>06</strong><span>Results our clients typically experience</span></div></div><div className={styles.hostAvatars}><p>Our Website Design Process</p><div>{steps.map(step => <StudioPhoto key={step.name} index={step.index} alt={step.name} className={styles.avatar} />)}<a href="#website-process" aria-label="Our Website Design Process">↗</a></div></div></aside>
      </div>
    </section>

    <section id="website-expect" className={styles.subscribe} aria-labelledby="subscribe-heading"><div className={styles.container}><div className={styles.subscribeBanner}><Image src="/images/website-design/studio-microphone.webp" alt="" fill sizes="(max-width: 700px) 100vw, 85vw" className={styles.micImage} /><div className={styles.subscribeCopy}><p className={styles.eyebrow}>Quantifiable results</p><h2 id="subscribe-heading">What You Can Expect from Our Professional Website Design Services</h2><p>Know that when working with an experienced best website design company, there should be quantifiable results. Our clients typically experience:</p><ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 text-[13px] font-medium text-[#f7f8f3] sm:grid-cols-2">{results.map(item => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-[#aaa]">↗</span>{item}</li>)}</ul></div></div></div></section>

    <section id="website-best" className={styles.benefits} aria-labelledby="benefits-heading"><div className={`${styles.container} ${styles.benefitsGrid}`}><div className={styles.benefitsCopy}><p className={styles.eyebrow}>Art, science, and strategy</p><h2 id="benefits-heading">Why Capyngen is the Best Website Design Company</h2><p>Capyngen stands out from the crowd by offering a powerful blend of art, science, and strategy and the web expertise that, in turn, drives real business results.</p><a href="#website-expertise" className={styles.textLink}>Our Expertise <span aria-hidden="true">↗</span></a></div><StudioPhoto alt="Three people exchanging ideas around a studio table" className={styles.benefitsPhoto} /><div className={styles.accordion}>{bestReasons.map((item, index) => <details key={item.title} name="website-best" open={index === 0}><summary>{item.title}<span aria-hidden="true">+</span></summary><p>{item.text}</p></details>)}</div></div></section>

    <Expertise />

    <section id="website-faq" className={styles.benefits} aria-labelledby="website-faq-heading"><div className={styles.container}><div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-14"><div className={styles.benefitsCopy}><p className={styles.eyebrow}>Have a question?</p><h2 id="website-faq-heading">Frequently Asked Questions</h2></div><div className={styles.accordion}>{faqs.map((faq, index) => <details key={faq.question} name="website-faq" open={index === 0}><summary>Q{index + 1}. {faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></div></section>
  </>;
}
