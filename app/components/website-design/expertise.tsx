"use client";

import PodcastPhoto from "./podcast-photo";
import { useState } from "react";
import styles from "./sections.module.css";

const groups = [
  { name: "By Industry", items: ["B2B", "B2C", "Retail", "Healthcare", "Human Resource", "Beauty & Fashion"] },
  { name: "By Capability", items: ["Research & Discovery", "Responsive Web Design", "User Friendly App Design", "Ecommerce Design", "Branding", "Agility in execution"] },
  { name: "By Technology", items: ["CMS Based Design", "HTML5/CSS3", "Popular Sketching tools", "Leading Graphic Applications"] },
];

const items = groups.flatMap(group => group.items.map((title, i) => ({ title, category: group.name, index: i % 3 })));

export default function Expertise() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? items : items.filter(item => item.category === filter);
  return <section id="website-expertise" className={styles.episodes} aria-labelledby="episodes-heading"><div className={styles.container}><header className={styles.episodesHeader}><p className={styles.eyebrow}>Our Expertise</p><h2 id="episodes-heading">WE&apos;RE Web Design Specialists</h2><p>WE&apos;RE Web Design Specialists with a proven history of generating leads, sales, and phenomenally high traffic. We do this thorough design process research on your competitors, a full business analysis and most critically jaw dropping results.</p></header><div className={styles.filters} role="group" aria-label="Filter expertise">{["All", ...groups.map(group => group.name)].map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><p className={styles.srOnly} role="status">{visible.length} items</p><div className={styles.episodeGrid}>{visible.map(item => <article key={`${item.category}-${item.title}`} className={styles.episodeCard}><div className={styles.episodeOpen}><div className={styles.episodePhoto}><PodcastPhoto index={item.index} alt="" className={styles.episodeImage} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span className={styles.episodeView} aria-hidden="true">↗</span></div><div className={styles.episodeMeta}><span>{item.category}</span><span>Our Expertise</span></div><h3>{item.title}</h3></div></article>)}</div></div></section>;
}
