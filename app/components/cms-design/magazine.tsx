import Image from "next/image";
import Link from "next/link";
import styles from "./magazine.module.css";

const empower = [
  { title: "Personalised to Meet Your Individual Needs", image: "/images/cms-design/coast.jpg", alt: "Colorful Mediterranean village overlooking the blue sea" },
  { title: "SEO-Optimized Designs", image: "/images/agenda/photo-1600210492486-724fe5c67fb0.jpg", alt: "Warm contemporary living room with soft furnishings" },
  { title: "No need for technical staff training", image: "/images/cms-design/food.jpg", alt: "Colorful fresh vegetables arranged in a salad bowl" },
  { title: "The freedom to build, modify, and expand content whenever you want.", image: "/images/agenda/photo-1486406146926-c627a92ad1ab.jpg", alt: "Modern city architecture rising toward the sky" },
  { title: "Comprehensive backend support", image: "/images/cms-design/editorial-hero.webp", alt: "Woman wearing sunglasses and a timeless charcoal coat" },
];

const services = [
  { name: "Responsive CMS Design", image: "/images/client-1.jpg", text: "We'll make sure your CMS-based website is stunning on any device. Rest assured, our responsive CMS design is made to work on any device. Layouts automatically resize to look great on desktops, tablets, and smartphones." },
  { name: "CMS UI/UX Design", image: "/images/client-2.jpg", text: "Keep users and admins engaged with simple browsing, fast loading speeds, and clean editorial workflows that make daily use a breeze." },
  { name: "CMS Design & Customisation", image: "/images/client-3.jpg", text: "We offer a full spectrum of services: from customising themes and headless CMS development to creating a holistic digital environment." },
];

const tools = [
  { title: "Creative & Professional CMS Designers", image: "/images/website-design/how-we-work.webp", alt: "Creative studio filled with art prints and green plants" },
  { title: "On-Time Delivery", image: "/images/cms-design/wellness.jpg", alt: "A quiet coffee ritual in soft natural light" },
  { title: "Effective Project Management System", image: "/images/custom-ai/analytics-laptop.webp", alt: "Laptop displaying a digital analytics workspace" },
];

const faqs = [
  { question: "What are CMS Website Design Services?", answer: "CMS Website Design Services: Develop, design, and build websites that are stored within a content management system (CMS). Your team will be able to manage your website without touching any code." },
  { question: "Why should I select Capyngen as the Best CMS Designing Company in India?", answer: "We harmonise clean design with safe, scalable development. We are a Best CMS Design Company in India, providing professional, secure, international-standard websites, and we make websites easy to manage." },
  { question: "Do I need technical training to manage my CMS website?", answer: "No. Do I have to code to use your CMS Website Design? Our CMS Website Design is made for non-technical teams. You can publish and update content on your website without a developer or training." },
  { question: "Do you offer Responsive CMS Design?", answer: "Yes. All of our Responsive CMS Design start out by adapting easily to desktops, tablets, and phones, so that your website will look the same on all of them." },
  { question: "Can you build Custom CMS Websites?", answer: "Yes. We build Custom CMS Websites using themes, workflows, and features that match your business, not just packages of templates." },
  { question: "What is included in your CMS UI/UX Design service?", answer: "Features of our CMS UI/UX Design: Our website UI/UX design ensures that your visitors can navigate through pages easily and quickly. We ensure that the workflow for writers and editors is crisp and simple." },
  { question: "Do you provide Custom CMS Development Services?", answer: "Yes. Would you like the single, integrated digital experience to be based on the CMS? Our Custom CMS Development Services cover headless CMS, custom modules and everything else you need." },
  { question: "Are you a CMS Website Development Company in Gurgaon?", answer: "Is website development in Gurgaon? Yes. We are a CMS Website Development Company in Gurgaon for local businesses, and Indians are served with on-site site evaluation." },
  { question: "How is CMS Website Development India different from Capyngen?", answer: "CMS Web Development projects with us go through well-defined processes: discovery, designing, developing, testing, and supporting, with SEO optimized site structure and design at the beginning." },
  { question: "What do your Professional CMS Services include after launch?", answer: "Professional CMS Services: We'll provide ongoing backend support, security, and performance monitoring, and content workflow enhancements as your website expands." },
];

function Arrow() { return <span aria-hidden="true">→</span>; }
function Photo({ src, alt, className = "", preload = false }: { src: string; alt: string; className?: string; preload?: boolean }) {
  return <div className={`${styles.photo} ${className}`}><Image src={src} alt={alt} fill preload={preload} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 45vw" className={styles.image} /></div>;
}

export default function Magazine() {
  return <>
    <section id="cms-design-hero" className={styles.hero} aria-labelledby="cms-hero-heading">
      <Image src="/images/cms-design/editorial-hero.webp" alt="Woman with sunglasses holding a magazine on a sunlit city street" fill preload sizes="100vw" className={styles.heroImage} />
      <div className={styles.heroShade} />
      <div className={styles.heroInner}><p className={styles.eyebrow}>Best CMS Design Company in India</p><h1 id="cms-hero-heading">Best CMS<br />Website Design<br />Services</h1><p className={styles.heroDescription}>Capyngen, Best CMS Design Company in India notices the advancement of services in the other domains also.</p><div className={styles.heroActions}><a href="#cms-services" className={styles.goldButton}>CMS Web Design Services <Arrow /></a><a href="#cms-why" className={styles.outlineButton}><span aria-hidden="true">◉</span> Why Choose Capyngen</a></div><div className={styles.trust}><span><span aria-hidden="true">♧</span> Safe</span><span><span aria-hidden="true">◇</span> Scalable</span><span><span aria-hidden="true">◎</span> World-class</span></div></div>
      <p className={styles.heroScript} aria-hidden="true">Trusted<br />Partner &amp;<br />Digital Leader ♡</p>
    </section>

    <section id="cms-empower" className={styles.trending} aria-labelledby="trending-heading"><div className={`${styles.container} ${styles.trendingGrid}`}><header><p className={styles.eyebrow}>Empower Your Content Management with Capyngen</p><h2 id="trending-heading">Empower <br />Your <br />Content</h2><a href="#cms-services" className={styles.textLink}>CMS Web Design Services <Arrow /></a></header><div className={styles.storyCards}>{empower.map((item, index) => <article key={item.title}><div className={styles.storyButton}><div className={styles.trendingImage}><Photo src={item.image} alt={item.alt} /><span className={styles.rank}>{index + 1}</span></div><p className={styles.category}>Empower</p><h3>{item.title}</h3></div></article>)}</div></div></section>

    <section id="cms-growth" className={styles.bannerSection} aria-labelledby="wellness-heading"><div className={styles.container}><a href="#cms-top" className={`${styles.imageBanner} ${styles.wellnessBanner}`}><Photo src="/images/cms-design/wellness.jpg" alt="A quiet coffee ritual in soft natural light" /><div className={styles.bannerCopy}><p className={styles.eyebrow}>Trusted Partner &amp; Digital Leader</p><h2 id="wellness-heading">Transformational<br />Growth</h2><span>Top CMS Website Design Company In India <Arrow /></span></div></a></div></section>

    <section id="cms-top" className={styles.featured} aria-labelledby="featured-heading"><div className={`${styles.container} ${styles.featuredGrid}`}><div className={styles.featuredCopy}><p className={styles.eyebrow}>Safe, scalable, and world-class</p><h2 id="featured-heading">Top CMS Website<br />Design Company<br />In India</h2><p>You start out with and end up with Best CustomCMS Website Design Agency ensure your CMS-enabled website is safe, scalable, and world-class, ready to meet international web standards.</p><Link href="/contact-us" className={styles.darkButton}>Get your Free consultation <Arrow /></Link></div><div className={styles.featuredPhoto}><Photo src="/images/application-solutions/hiker.webp" alt="Hiker overlooking a clear alpine lake and mountain landscape" /><span className={styles.featuredScript} aria-hidden="true">Safe<br />Scalable<br />World-<br />class</span></div></div></section>

    <section id="cms-services" className={styles.readers} aria-labelledby="readers-heading"><div className={`${styles.container} ${styles.readersGrid}`}><header><p className={styles.eyebrow}>Clean design. Modern UI.</p><h2 id="readers-heading">CMS Web<br />Design Services</h2><a href="#cms-tools" className={styles.textLink}>Professional Tools <Arrow /></a><p className={styles.sampleNote}>Our CMS Web Design services include clean design, modern UI and responsive features to keep your audience engaged.</p></header><div className={styles.quotes}>{services.map(service => <figure key={service.name}><Image src={service.image} alt="" width={64} height={64} className={styles.avatar} /><div><blockquote>{service.text}</blockquote><figcaption><span>{service.name}</span></figcaption></div></figure>)}</div></div></section>

    <section id="cms-tools" className={styles.editors} aria-labelledby="editors-heading"><div className={`${styles.container} ${styles.editorsGrid}`}><div><h2 id="editors-heading" className={styles.eyebrow}>Professional Tools</h2><div className={styles.editorList}>{tools.map((tool, index) => <article key={tool.title}><div className={styles.editorStory}><Photo src={tool.image} alt={tool.alt} /><div><p className={styles.category}>Professional Tools</p><h3>{tool.title}</h3><span>0{index + 1}</span></div><span className={styles.editorArrow} aria-hidden="true">↗</span></div></article>)}</div></div><div className={styles.newsletter}><div className={styles.newsletterCopy}><h2>Get your<br /><strong>Free consultation</strong><br />for Your Business</h2><span className={styles.goldRule} /><p>Best CMS Website Design Services by Capyngen.</p><Link href="/contact-us" className={styles.goldButton}>Get your Free consultation <Arrow /></Link></div><div className={styles.cover} aria-hidden="true"><span>Capyngen</span><p>CMS WEBSITE DESIGN</p><div><Image src="/images/cms-design/editorial-hero.webp" alt="" fill sizes="240px" className={styles.coverImage} /><strong>Best CMS<br />Website<br />Design</strong></div><small>SAFE. SCALABLE. WORLD-CLASS.</small></div><span className={styles.newsletterLeaf} aria-hidden="true">✳</span></div></div></section>

    <section id="cms-why" className={styles.travel} aria-labelledby="travel-heading"><div className={styles.container}><div className={styles.imageBanner}><Photo src="/images/cms-design/coast.jpg" alt="Coastal village and turquoise sea beneath steep Mediterranean hills" /><div className={styles.bannerCopy}><p className={styles.eyebrow}>Why Choose Capyngen</p><h2 id="travel-heading">Why Choose<br />Capyngen</h2><p className="mt-5 max-w-[460px] text-sm leading-[1.65] text-[#fffdf5]/90">Capyngen offers high-quality, innovative CMS design services for businesses to control, expand, and tidy up their web presence.</p></div></div></div></section>

    <section id="cms-faq" className={styles.readers} aria-labelledby="cms-faq-heading"><div className={`${styles.container} ${styles.readersGrid}`}><header className="self-start"><p className={styles.eyebrow}>Get your Free consultation</p><h2 id="cms-faq-heading">Frequently<br />Asked Questions</h2></header><div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[5px] border border-[#eeeee7] bg-white p-5 shadow-[0_3px_12px_#18241b05]">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-[Georgia,serif] text-lg leading-[1.35] text-[#171e16] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3c] [&::-webkit-details-marker]:hidden"><span><span className="mr-2 text-[#b28a3c]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#b28a3c] font-sans text-sm text-[#b28a3c] transition-transform group-open:rotate-45">+</span></summary>
      <p className="mt-3 pr-10 text-sm leading-[1.7] text-[#7a8278]">{faq.answer}</p>
    </details>)}</div></div></section>
  </>;
}
