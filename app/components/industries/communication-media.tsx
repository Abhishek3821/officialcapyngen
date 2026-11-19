"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import s from "./communication-media.module.css";

const photos = {
  boat: "/images/communication-media/wooden-boat.jpg",
  yacht: "/images/communication-media/yacht.jpg",
  camera: "/images/communication-media/security-camera.jpg",
  city: "/images/network-solutions/venice.webp",
  lounge: "/images/high-tech/yacht-lounge.webp",
  celebration: "/images/moments/celebration.jpg",
  friends: "/images/moments/friends.jpg",
  laptop: "/images/custom-ai/analytics-laptop.webp",
  office: "/images/custom-ai/blue-glass-office.webp",
  studio: "/images/website-design/podcast-studio.webp",
  meeting: "/images/company-overview-meeting.webp",
};
const heroText = "We are a leader in communication media IT software development for broadcasters, telecom operators and information service providers. Capynge n helps you tap into the potential of generative AI, boost content monetisation methods and create hyper-personalised audience experiences on an enterprise scale.";
const offers = [
  { name: "Lead Generation", icon: "bell", image: photos.boat, alt: "A wooden motorboat moving through rippling water", text: "Responsive sites, SEO for visibility, active communities, and targeted advertising that generates leads." },
  { name: "Cost Reduction", icon: "cloud", image: photos.yacht, alt: "A white yacht on calm blue water", text: "Reduced infrastructure costs through cloud streaming, automated service orchestration and simplified broadcasting workflows." },
  { name: "Sales Expansion", icon: "spark", image: photos.lounge, alt: "An inviting lounge on a yacht", text: "New streaming channels, interactive media and personalisation that boost retention and average revenue per user." },
  { name: "Communication Infrastructure", icon: "screen", image: photos.city, alt: "Venice viewed from the waterfront", text: "Dependable cloud offerings with AI-based routing and combined chat, video, and voice for more seamless operations." },
  { name: "Media analytics", icon: "chart", image: photos.celebration, alt: "Friends sharing a special celebration", text: "In-the-moment engagement tracking, AI audience segmentation, and dashboards that make marketing ROI straightforward." },
];
const aiCards = [
  { name: "The Future of AI in Media and Broadcasting", photo: photos.studio, alt: "A podcast studio with microphones and recording equipment", text: "From automated sports highlights to AI-generated news summaries, the limits of media production are accelerating at pace. Capyngen media technology solutions help media organisations operationalise AI in a responsible way, keeping standards and editorial integrity high while dramatically compressing production timelines and lowering content costs.", items: ["Automated sports highlights", "AI-generated news summaries", "Editorial integrity high"] },
  { name: "Building Intelligent Media Ecosystems with AI", photo: photos.laptop, alt: "A laptop displaying analytics dashboards", text: "Capyngen communication software development business helps media and telecom corporations harness emerging A.I, cloud-native designs, and real-time analytics to craft social content experiences, monetise data resources optimally, and help lead the digital transformation. Capyn IT software development businesses provide development expertise to promote smooth administration and deployment.", items: ["Emerging A.I", "Cloud-native designs", "Real-time analytics"] },
];
const platforms = [
  { name: "Streaming Platform Development", image: photos.studio, type: "Streaming", tag: "OTT · VOD · IPTV", text: "OTT, VOD, IPTV, and live streaming platforms." },
  { name: "CMS for Media Industry", image: photos.office, type: "CMS", tag: "WordPress · Joomla · Drupal", text: "Media companies: WordPress, Joomla, and Drupal solutions for media companies." },
  { name: "Systems & Languages", image: photos.laptop, type: "Web Development", tag: "Laravel · Yii · PHP", text: "Web Development in Laravel, Yii, CodeIgniter, CakePHP & Core PHP." },
  { name: "Custom APIs", image: photos.city, type: "APIs", tag: "Telecom services", text: "Expand third-party tools and telecom services." },
  { name: "Ecosystem Platforms", image: photos.lounge, type: "Ecosystem", tag: "Shopify · Magento", text: "Digital media and entertainment solutions - Shopify, Magento, and OpenCart." },
  { name: "AI & Machine Learning", image: photos.meeting, type: "AI & ML", tag: "Personalise content", text: "User profile: personalise content, ease moderation, and improve streaming quality." },
];
const softwareText = "Capyngen develops next-generation IT for broadcasting networks, telecoms streaming services and media publishers. Our platforms are scalable, autonomous, and flexible, enabling your teams to make, broadcast, and manage digital workflows with minimal technical know-how. Offering everything from broadcast, platform, apps, and digital media platforms, through streaming development and content management, we provide the expertise, technology, and business insight to enable scalable success.";
const software = [
  { icon: "bell", name: "Broadcasting Software", text: "Scalable tools for today's broadcasting workflows." },
  { icon: "screen", name: "Streaming Platform Development", text: "Our proprietary platforms that deliver content." },
  { icon: "gear", name: "Content Management Systems", text: "Ease of managing your media property." },
];
const reasons = [
  { name: "Industry-Specific Expertise", number: "01", image: photos.office, text: "Our team boasts lots of media, journalism, and information services experience to deliver solutions." },
  { name: "Cutting-Edge Technology", number: "02", image: photos.studio, text: "We harness leading edge AI blockchain cloud and immersive technology to help you stay ahead." },
  { name: "Multi-Platform Focus", number: "03", image: photos.laptop, text: "All of our solutions are developed to provide effortless and immersive experiences on any device or platform." },
  { name: "Scalability", number: "04", image: photos.meeting, text: "Whether a niche publisher or a global media company, we have the solutions to scale for you." },
];
const ctaStats = [
  { value: "05", label: "Solutions we offer", image: photos.city },
  { value: "06", label: "Platforms built for media growth", image: photos.studio },
];
const faqs = [
  { q: "What makes Capyngen a reliable partner for communication media IT software development?", a: "We apply media domain expertise to enterprise engineering. Our communication media IT software development team collaborates with broadcasters, telecom operators, and content publishers to develop platforms that integrate scale, monetisation, and personalisation." },
  { q: "What is included in your IT software development services?", a: "Content, SaaS & IT software development we provide streaming platform development, CMS solutions, custom API integrations, AI driven media tools and always on support. We scope each engagement based on your audience, content, and monetisation." },
  { q: "Do you build OTT and streaming platforms?", a: "Yes. We develop OTT, VOD, IPTV, and live streaming software for media companies that require low latency delivery, multi-device support, and build-in subscription billing." },
  { q: "Which communication technology solutions do you offer?", a: "Our communication technology offerings encompass cloud communication infrastructure, AI-driven routing, integrated chat, video, and voice platforms, as well as workflow automation tailored for media operations." },
  { q: "How does AI fit into your media technology solutions?", a: "Our media technology products employ generative AI for automatic highlights, content summaries personalisation moderation and segmentation of audiences all while maintaining editorial control and quality standards." },
  { q: "Can you help with content monetisation?", a: "Do you work on payment infrastructure? Yes. We develop subscription platforms, tiered paywalls, microtransactions, cross-border payment integration that can help you grow an audience and generate a recurring revenue." },
  { q: "What platforms and systems do you work with?", a: "We develop on WordPress Joomla Drupal, Laravel Yii CodeIgniter CakePHP Core PHP, Shopify, Magento, and OpenCart as well as with custom headless CMS structures." },
  { q: "Do you provide mobile and web media applications?", a: "Yes. We develop instant streaming apps, subscription media apps, workflow apps, and interactive content management platforms for mobile and web." },
  { q: "How is Capyngen different from other IT consulting services providers?", a: "We are a communication software development company, combining media-specific background journalism, broadcasting, and information services with our IT consulting services that link technology choices to business objectives." },
  { q: "How do I get started with Capyngen's media software development team?", a: "CONTACT us via our contact form. We will arrange a discovery call to get to know your issues with content, distribution, and monetisation, then discuss a feasible way forward at no cost to you." },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    anchor: "M18 10v20m-8-12h16M5 21c0 8 6 11 13 11s13-3 13-11m-30 3 4-3 4 3m18 0 4-3 4 3M22 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    spark: "m18 2 4 11 11 4-11 4-4 12-4-12-12-4 12-4 4-11Z",
    heart: "M18 31S3 22 3 12a8 8 0 0 1 15-3 8 8 0 0 1 15 3c0 10-15 19-15 19Z",
    bell: "M5 25h26l-4-6v-7a9 9 0 0 0-18 0v7l-4 6Zm10 5a3 3 0 0 0 6 0M18 1v3",
    cloud: "M10 27H8a6 6 0 0 1-1-12A10 10 0 0 1 27 12a8 8 0 0 1 1 15h-4M18 17v15m-5-10 5-5 5 5",
    power: "M18 2v14m-8-9a13 13 0 1 0 16 0",
    gear: "m14 3 7 0 1 5 4 2 5-1 3 6-4 3v5l4 3-3 6-5-2-4 2-1 4h-7l-1-4-4-2-5 2-3-6 4-3v-5l-4-3 3-6 5 1 4-2 1-5Zm9 15a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z",
    screen: "M3 4h30v21H3V4Zm15 21v7m-8 0h16M7 9h22",
    chart: "M4 31h28M8 26v-8h5v8m5 0V12h5v14m5 0V6h5v20",
  };
  return <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.spark} /></svg>;
}

function EquipmentArt() {
  const gradient = useId();
  return <svg className={s.equipmentArt} viewBox="0 0 410 230" aria-hidden="true"><defs><linearGradient id={gradient} x2="1" y2="1"><stop stopColor="#536572" /><stop offset="1" stopColor="#142332" /></linearGradient></defs><ellipse cx="215" cy="207" rx="180" ry="15" fill="#0b213d" opacity=".15" /><g stroke="#102b45" strokeWidth="2"><path d="m30 50 25-15h75l15 15v145H30Z" fill={`url(#${gradient})`} /><path d="M30 50h100v145H30Z" fill="#243747" /><rect x="48" y="68" width="65" height="23" rx="3" fill="#102334" /><path d="M56 78h24m-32 27h65m-65 8h65m-65 8h65m-65 8h65" stroke="#819897" /><circle cx="82" cy="162" r="9" fill="#c5d694" /><rect x="153" y="99" width="99" height="93" rx="7" fill="#eef0e9" /><path d="M163 89h79v15h-79Z" fill="#243747" /><rect x="165" y="119" width="75" height="41" rx="3" fill="#cbdca2" /><path d="m199 124-15 20h15l-4 13 20-23h-16l4-10" fill="#294969" stroke="none" /><path d="m255 108 11-72h108l9 72Z" fill={`url(#${gradient})`} /><path d="m275 46-9 52h106l-8-52Z" fill="#96b6c5" /><path d="m255 108-13 15h151l-10-15Z" fill="#d5ddd9" /><rect x="268" y="148" width="119" height="49" rx="7" fill="#dce2df" /><path d="M280 148v-19h91v19m-91 22h88" fill="#f9faf3" /><rect x="282" y="178" width="87" height="24" fill="#22364b" /><circle cx="376" cy="160" r="3" fill="#a3ba6a" /></g></svg>;
}

export default function CommunicationMediaExperience() {
  const [platform, setPlatform] = useState(0);

  return <div className={s.page}><main id="main-content" tabIndex={-1}>
    <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="communication-title"><div className={s.heroPhoto}><Image src={photos.boat} alt="A polished wooden motorboat leaving a white wake on dark water" fill preload sizes="(max-width: 700px) 100vw, 62vw" /></div><div className={s.heroShade} /><div className={s.heroInner}><div className={s.heroCopy}><span className={s.eyebrow}>Capyngen / Communication, Media & Information Services</span><h1 id="communication-title" className={s.longTitle}>Communication Media IT <em>Software Development</em></h1><p className={s.heroLead}>{heroText}</p><span className={s.heroHeart} aria-hidden="true"><Icon name="heart" /></span><a className={s.ovalButton} href="#communication-offer">Explore Our Solutions <span aria-hidden="true">↗</span></a></div><span className={s.heroNote}>Hyper-personalised<br />audience experiences.</span><Link className={s.heroPostcard} href="/contact-us"><span className={s.tape} /><span className={s.postcardPhoto}><Image src={photos.city} alt="Beautiful Venetian architecture alongside the water" fill sizes="(max-width: 700px) 35vw, 20vw" /></span><span>Generative AI.</span></Link></div></section>

    <section className={s.experiences} id="communication-offer" aria-labelledby="communication-offer-title"><header><span className={s.eyebrow}>Leads · Costs · Sales · Infrastructure · Analytics</span><h2 id="communication-offer-title">The Solutions<br /><em>We Offer</em></h2></header><div className={s.polaroidGrid}>{offers.map(item => <article key={item.name} className={s.polaroid}><span className={s.tape} /><span className={s.polaroidPhoto}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 600px) 80vw, 30vw" /></span><span className={s.polaroidLabel}><Icon name={item.icon} />{item.name}</span><span className={s.polaroidText}>{item.text}</span></article>)}</div><span className={s.anchorDoodle} aria-hidden="true"><Icon name="chart" /></span><span className={s.experienceNote} aria-hidden="true">Retention.<br />Revenue.<br />ROI.</span></section>

    <section className={s.packages} aria-labelledby="communication-ai-title"><header><span className={s.eyebrow}>Generative AI · Cloud-native · Real-time analytics</span><h2 id="communication-ai-title">AI-Powered Media<br />Technology Solutions</h2></header><div className={s.packageGrid}>{aiCards.map(item => <article key={item.name}><h3>{item.name}</h3><p>{item.text}</p><div className={s.packagePhoto}><Image src={item.photo} alt={item.alt} fill sizes="(max-width: 600px) 90vw, 40vw" /><span className={s.tape} /></div><ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul><Link className={s.ovalButton} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></article>)}</div></section>

    <section className={s.catalogue} aria-labelledby="communication-platforms-title"><header><div><span className={s.eyebrow}>Streaming · CMS · APIs · AI</span><h2 id="communication-platforms-title">Platforms Built<br />for Media Growth</h2></div><div className={s.controls}><button type="button" aria-label="Previous platform" onClick={() => setPlatform((platform + platforms.length - 1) % platforms.length)}>←</button><button type="button" aria-label="Next platform" onClick={() => setPlatform((platform + 1) % platforms.length)}>→</button></div></header><div className={s.vesselGrid} aria-live="polite">{[0, 1, 2].map(offset => { const item = platforms[(platform + offset) % platforms.length]; return <article key={item.name}><div className={s.vesselPhoto}><Image src={item.image} alt="" fill sizes="(max-width: 600px) 85vw, 33vw" /><span>{item.type}</span><span>{item.tag}</span></div><div className={s.vesselCopy}><h3><Icon name="screen" />{item.name}</h3><p>{item.text}</p><Link className={s.ovalButton} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></div></article>; })}</div></section>

    <section className={s.protection} aria-labelledby="communication-software-title"><div className={s.protectionCopy}><span className={s.eyebrow}>Broadcast · Streaming · Content</span><h2 id="communication-software-title">Media and Communication Software Solutions</h2><p>{softwareText}</p><Link className={s.textLink} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></div><div className={s.securityCard}><Image src={photos.camera} alt="A white camera mounted on a textured wall" fill sizes="(max-width: 600px) 90vw, 33vw" /><span className={s.securityShade} /><span className={s.securityPlus} aria-hidden="true">+</span><span className={s.securityCaption}><strong>Make, broadcast,<br />and manage.</strong><span>Scalable · Autonomous · Flexible</span></span></div><div className={s.protectionFeatures}>{software.map(item => <div key={item.name}><Icon name={item.icon} /><span><h3>{item.name}</h3><p>{item.text}</p></span></div>)}</div></section>

    <section className={s.solutions} aria-labelledby="communication-apps-title"><header><span className={s.eyebrow}>Mobile &amp; Web Apps</span><h2 id="communication-apps-title">Mobile and Web<br /><em>Media Apps</em></h2><p>Mobile &amp; Web Apps: We develop apps for mobile and web that enable businesses across different industries to enable broadcasting, information sharing, and high retention engagement.</p></header><div className={s.solutionGrid}><article className={s.powerCard}><div><span className={s.squareIcon}><Icon name="power" /></span><h3>Instant streaming &amp; broadcasting Apps</h3><p>High-performance, low-latency live video feeds. Real-time encoding. OTT delivery to multiple devices.</p><Link className={s.textLink} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></div><EquipmentArt /></article><article className={s.supportCard}><Image src={photos.office} alt="Contemporary glass office architecture" fill sizes="(max-width: 600px) 90vw, 35vw" /><div><Icon name="gear" /><h3>Subscription media Apps</h3><p>Seamless recurring billing micro-transactions, tiered paywalls and integrations with cross-border payment gateways.</p><Link className={s.textLink} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></div></article><article className={s.hardwareCard}><span className={s.squareIcon}><Icon name="screen" /></span><h3>Workflow Apps</h3><p>Self-service portals, automated ticketing, VoIP routing, and CRM integrated agent dashboards.</p><Link className={s.textLink} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></article><article className={s.rentalCard}><div><span className={s.eyebrow}>Headless CMS pipelines</span><h3>Interactive Content management for Media Industry Apps</h3><p>Headless CMS pipelines, sophisticated editorial processes, multi-channel syndication, digital asset repositories.</p><Link className={s.lightButton} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></div><EquipmentArt /></article></div></section>

    <section className={s.digital} aria-labelledby="communication-why-title"><div className={s.digitalCopy}><span className={s.eyebrow}>Expertise · Technology · Platforms · Scale</span><h2 id="communication-why-title">Why Choose Capyngen for Media Software Development</h2><p>Whether a niche publisher or a global media company, we have the solutions to scale for you.</p><Link className={s.outlineButton} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></div><div className={s.digitalGrid}>{reasons.map(item => <div key={item.name}><Image src={item.image} alt="" fill sizes="(max-width: 600px) 45vw, 25vw" /><span className={s.digitalShade} /><span className={s.digitalNumber}>{item.number}</span><span className={s.digitalLabel}>{item.name}<small>{item.text}</small></span></div>)}</div></section>

    <section className={`${s.intro} ${s.ctaIntro}`} aria-labelledby="communication-cta-title"><div className={s.introCopy}><span className={s.eyebrow}>Capyngen media solutions</span><h2 id="communication-cta-title">{"Go Digital Confidently\nwith Capyngen Media Solutions"}</h2><p>Reimagine your processes Capyngen is digital transformation for the Media Industry. Power up performance with software built for high efficiency and bold creativity.</p><Link className={s.button} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></div><div className={s.introCards}>{ctaStats.map(item => <article key={item.label}><strong>{item.value}</strong><span className={s.miniPhoto}><Image src={item.image} alt="" fill sizes="100px" /></span><p>{item.label}</p></article>)}</div></section>

    <section className={s.faq} aria-labelledby="communication-faq-title"><header><span className={s.eyebrow}>Communication media IT software development</span><h2 id="communication-faq-title">Frequently Asked <em>Questions</em></h2></header><div className={s.faqList}>{faqs.map((f, i) => <details key={f.q} open={i === 0}><summary><strong>{f.q}</strong><b aria-hidden="true">+</b></summary><p>{f.a}</p></details>)}</div></section>
  </main></div>;
}
