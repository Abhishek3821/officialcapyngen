import Image from "next/image";
import Link from "next/link";
import PodcastEpisodes from "./podcast-episodes";
import SubscribeForm from "./subscribe-form";
import StudioPhoto from "./podcast-photo";
import styles from "./sections.module.css";

const hosts = [
  { name: "Alex Morgan", role: "The curious storyteller", index: 0 },
  { name: "Olivia Bennett", role: "The creative perspective", index: 1 },
  { name: "Daniel Hayes", role: "The big-picture thinker", index: 2 },
];

export default function WebsiteDesignSections() {
  return <>
    <section id="how-we-work" className={styles.work} aria-labelledby="work-heading">
      <div className={`${styles.container} ${styles.workGrid}`}>
        <div className={styles.workVisual}><div className={styles.workPhoto}><Image src="/images/website-design/how-we-work.webp" alt="Content strategist in an orange sweater researching and writing at her laptop" fill sizes="(max-width: 800px) 100vw, 45vw" className={styles.image} /></div><div className={styles.seal} aria-hidden="true"><span>✦</span></div></div>
        <div className={styles.workCopy}><p className={styles.purpleEyebrow}>How We Work</p><h2 id="work-heading">Know a Little Bit<br />About How We Work</h2><p>Content marketing is not about posting more. It is about saying the right thing to the right person at the right time. At Capyngen, we build content engines — blogs, guides, case studies, and landing pages — that bring in search traffic and turn readers into customers.</p><p>Our work brings together brand thinking and digital content that people actually read. Every piece we write starts with research — your audience, your competitors, and the questions your customers are already searching for.</p><ul><li>High-quality, original content — no recycled templates</li><li>Flexible packages for startups and growing businesses</li><li>Strategy, writing, design, and publishing handled end to end</li></ul><Link href="/contact-us" className={styles.purpleButton}>Contact Us <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>

    <section id="podcast-voices" className={styles.voices} aria-labelledby="voices-heading">
      <div className={`${styles.container} ${styles.voicesGrid}`}>
        <div className={styles.hosts}>{hosts.map(host => <article key={host.name}><StudioPhoto index={host.index} alt={`${host.name}, concept podcast host, at a studio microphone`} className={styles.hostPhoto} /><h3>{host.name}</h3><p>{host.role}</p></article>)}</div>
        <div className={styles.voicesCopy}><p className={styles.eyebrow}>Different perspectives. Shared curiosity.</p><h2 id="voices-heading">United Voices,<br />Limitless Stories</h2><p>Fresh ideas deserve a great conversation. Meet the voices behind a world of stories, creative perspectives, and the questions that keep us thinking.</p><a href="#podcast-episodes" className={styles.blackButton}>Explore Episodes <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section id="podcast-intro" className={styles.podcastIntro} aria-labelledby="podcast-heading">
      <div className={`${styles.container} ${styles.introGrid}`}>
        <div className={styles.introCopy}><p className={styles.eyebrow}>The conversation starts here</p><h2 id="podcast-heading">Epic Headlines,<br />Always Fresh,<br />Always Here</h2><p>Big ideas. Honest conversations. A fresh perspective on the stories shaping our work, creativity, and everyday lives. Find your next spark of inspiration.</p><a href="#podcast-episodes" className={styles.blackButton}>Discover the Episodes <span aria-hidden="true">↗</span></a><div className={styles.topics}><p>Find your next conversation</p><div><span>◉ &nbsp; Creative thinking</span><span>◈ &nbsp; Brand stories</span><span>▧ &nbsp; Digital culture</span><span>◎ &nbsp; Everyday ideas</span></div></div></div>
        <div className={styles.introPortrait}><StudioPhoto index={0} alt="Podcast presenter sharing a story into a studio microphone" className={styles.featuredHost} /><span className={styles.onAir}><span /> On the mic</span></div>
        <aside className={styles.introAside}><p>Good conversations make room for new perspectives. Explore ideas from creative minds, discover a different point of view, and take something useful into your day.</p><a href="#podcast-episodes" className={styles.featuredLink}><span aria-hidden="true">↗</span> Find your next episode</a><div className={styles.podcastFacts}><p>A little something for everyone</p><div><strong>08</strong><span>Curated episode previews</span></div><div><strong>03</strong><span>Distinct creative perspectives</span></div></div><div className={styles.hostAvatars}><p>Your next favorite voices</p><div>{hosts.map(host => <StudioPhoto key={host.name} index={host.index} alt={host.name} className={styles.avatar} />)}<a href="#podcast-voices" aria-label="Meet our concept podcast hosts">↗</a></div></div></aside>
      </div>
    </section>

    <section id="podcast-subscribe" className={styles.subscribe} aria-labelledby="subscribe-heading"><div className={styles.container}><div className={styles.subscribeBanner}><Image src="/images/website-design/studio-microphone.webp" alt="" fill sizes="(max-width: 700px) 100vw, 85vw" className={styles.micImage} /><div className={styles.subscribeCopy}><p className={styles.eyebrow}>Stay in the conversation</p><h2 id="subscribe-heading">What Do You Want to Hear<br />Today? Subscribe for the<br />Latest Episodes</h2><p>Leave your email to register your interest in new conversations.</p><SubscribeForm /></div></div></div></section>

    <section id="podcast-benefits" className={styles.benefits} aria-labelledby="benefits-heading"><div className={`${styles.container} ${styles.benefitsGrid}`}><div className={styles.benefitsCopy}><p className={styles.eyebrow}>More than a conversation</p><h2 id="benefits-heading">Why Settle? Join<br />the Podcast<br />Masters</h2><p>Every conversation is a chance to see things differently. Explore ideas, discover a new perspective, and make space for inspiration with stories that stay with you.</p><a href="#podcast-episodes" className={styles.textLink}>Find your inspiration <span aria-hidden="true">↗</span></a></div><StudioPhoto alt="Three podcast hosts exchanging ideas around a studio table" className={styles.benefitsPhoto} /><div className={styles.accordion}>{[{ title: "Why join the conversation?", text: "Discover practical ideas, thoughtful perspectives, and stories that connect creativity, business, and everyday life." },{ title: "Engaging Stories", text: "Meet the people behind the ideas. Explore personal experiences and honest conversations that go beyond the headlines." },{ title: "Actionable Advice", text: "Take away useful prompts and fresh approaches you can bring to your next creative project or business challenge." },{ title: "Community and Connection", text: "Great ideas grow through conversation. Find common ground with curious people and discover perspectives beyond your own." }].map((item, index) => <details key={item.title} name="podcast-benefits" open={index === 0}><summary>{item.title}<span aria-hidden="true">+</span></summary><p>{item.text}</p></details>)}</div></div></section>

    <PodcastEpisodes />
  </>;
}
