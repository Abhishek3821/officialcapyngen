"use client";

import Image from "next/image";
import { useState } from "react";
import s from "./sections.module.css";

const industries = [
  { name: "Retail & E-Commerce", count: "Commercial models", image: "restaurant", alt: "Retail and e-commerce data analytics" },
  { name: "Healthcare", count: "Statutory compliance", image: "pendant", alt: "Healthcare data analytics" },
  { name: "Finance & Banking", count: "Vertical data formats", image: "kitchen", alt: "Finance and banking data analytics" },
  { name: "Education", count: "Focused data science", image: "dining", alt: "Education data analytics" },
  { name: "Manufacturing", count: "Operational feedback", image: "interior-hero", alt: "Manufacturing data analytics" },
];
const steps = [
  { title: "Discovery & Assessment", text: "Deep dive into your current data landscape, schema structures, business KPIs and analytics maturity." },
  { title: "Data Collection & ETL Integration", text: "Unify distributed data across cloud applications, legacy SQL and API's into automated, clean, and reliable data pipelines." },
  { title: "Analysis, Modelling & Visualisation", text: "Developing predictive ML models and deploying interactive Power BI, Tableau, or custom React executive dashboards." },
];
const offerings = [
  { title: "Data Strategy & Consulting", text: "Create a set of actionable analytics roadmap that plans how to centralise data collection with related pipeline architecture and KPIs in support of your executive business objectives." },
  { title: "Business Intelligence (BI) & Reporting", text: "On-demand, real-time data visualisation and KPI monitoring bring ready access to operational visibility through interactive custom dashboards." },
  { title: "Advanced Analytics & Data Modelling", text: "Implement cutting-edge machine learning algorithms and statistical models for use as forecasters for highly precise trend and revenue forecasting." },
];
const reasons = [
  { title: "Personalized Solutions", text: "Bespoke analytics suites in line with your particular data schemas, commercial model, margins, and growth aspirations.", image: "content", alt: "Personalized data analytics solutions" },
  { title: "Cloud Analytics Mastery", text: "Cloud Engineer - Certified - Scale Data lakes and Analytics Platforms on AWS, Azure, and Google Cloud.", image: "sales", alt: "Cloud analytics platforms" },
  { title: "Deep Domain Knowledge", text: "Data architects with industry-specific experience in Banking, Healthcare, Retail, Manufacturing, and Tech.", image: "mobile", alt: "Data architects with deep domain knowledge" },
];
const faqs = [
  { q: "1. What are data analytics services, and why does my business need them?", a: "Data analytics services: We'll help you shape your business's raw data into intelligible dashboards, reports, and insights. Now you can make smarter decisions based on facts instead of assumptions and see a difference in forecasting, spending, and performance." },
  { q: "2. How is Capyngen different from a typical data analytics company?", a: "Most providers give you reports and call it a day. We're an outcomes-driven data analytics firm. We develop the pipeline, collect modelling dashboards, and provide long-term ongoing support so insights get to those people who make decisions." },
  { q: "3. What does your data analytics consulting include?", a: "Our data analytics consulting takes you through discovery, data strategy, pipeline design, key measures and roadmaps. We evaluate your position and identify where the value is, and the simplest build priorities to deliver the fastest business impact." },
  { q: "4. What are business intelligence services, and how do they help?", a: "With BI, your information comes to life with dynamic dashboards and live reporting. You view your sales, operations, and KPIs immediately, so you see issues and opportunities and address them right away instead of having to dig through a mountain of spreadsheets." },
  { q: "5. What types of data analytics solutions for business do you build?", a: "Focused on business analytics, we develop end-to-end data analytics platforms, including ETL pipelines, data warehouses, predictive models, and bespoke executive dashboards, all tailored for your data sources, KPIs, and reporting requirements." },
  { q: "6. Which industries do you serve?", a: "Our team services industries including retail and e-commerce, healthcare, finance, and banking, education, and manufacturing. Every engagement is tailored for that industry's data standards, regulatory compliance, and business model." },
  { q: "7. Do you provide an umbrella solution? Can you aggregate data from multiple sources such as CRM, ERP, and cloud apps?", a: "Yes. We combine data from cloud apps, legacy SQL databases, APIs, and even on-premises systems into automated, clean pipelines. You'll have one source of truth instead of a host of disparate records." },
  { q: "8. Do you build dashboards in Power BI and Tableau?", a: "Yes. We build and implement interactive dashboards (Power BI, Tableau, or tailored dashboards). Dashboards are created based on what your management really wants to monitor, and not the visualisation that looks good." },
  { q: "9. How long does a data analytics project take?", a: "New dashboards or report projects can be implemented within 4 8 weeks. Major projects requiring a data warehouse, ETL pipelines, and predictive modelling may take 3-5 months given the number of data sources." },
  { q: "10. How do I get started with Capyngen's data analytics services?", a: "Contact us via our form or get on our calendar for a free discovery session, and we will walk through your data environment to identify a realistic game plan — no strings attached, no hassle." },
];
const whyText = "Capyngen enables companies to realise the true value of their data by unburdening their cloud data pipelines and converting them into transparency-rich business executive reports.";
const growText = "Grow your business with Capyngen's Data-driven Methods and analytics services to Search. Automate. Lead your business to Lasting Growth.";

function Photo({ name, alt, className = "", priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  return <Image src={`/images/data-analytics/${name}.jpg`} alt={alt} width={1400} height={1000} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 55vw, 750px" preload={priority} className={`${s.photo} ${className}`} />;
}
function ArrowLink({ children = "Contact Us", href, coral = false }: { children?: React.ReactNode; href: string; coral?: boolean }) {
  return <a href={href} className={`${s.cta} ${coral ? s.coralButton : ""}`}>{children}<span aria-hidden="true">→</span></a>;
}
function StepIcon({ index }: { index: number }) {
  const paths = ["M9 18h6m-6 3h6M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3Z", "M5 5h14v16H5V5Zm3-3v6m8-6v6M5 10h14m-10 5 2 2 4-4", "m4 4 16 16m-3-17 4 4L7 21l-4-4L17 3ZM5 9l4-4m6 14 4-4", "m14 5 5-2-2 5-4 1-5 11-4-2 7-10-1-4 4-2v3Z", "M9 15 5 19m4-8-5 1-1 5 6-2m4-6 2 6 5-1 1-5M9 15c7-1 11-7 12-12-5 1-11 5-12 12Zm-4 5-2 1 1-3m11-10h.01"];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index]} /></svg>;
}

export default function DataAnalyticsSections() {
  const [selected, setSelected] = useState(0);
  return <>
    <section className={s.hero} aria-labelledby="data-hero-heading"><div className={s.heroInner}>
      <div className={s.heroCopy}><span className={s.heroEyebrow}>ACTIONABLE INSIGHTS. DASHBOARDS. REPORTING.</span><h1 id="data-hero-heading"><em>Best</em> Data Analytics <br />Services in India</h1><p>Delivering Actionable Insights, Dashboards, and Reporting for Businesses.</p><ArrowLink href="#data-why" >Learn More</ArrowLink></div>
      <div className={s.heroVisual}><Photo name="interior-hero" alt="Data analytics services in India" priority /><a href="/contact-us" className={s.watch}><span>Contact Us</span><b aria-hidden="true">→</b></a></div><span className={s.heroFootnote}>SEARCH. AUTOMATE. LEAD.</span>
    </div></section>

    <section id="data-why" className={`${s.section} ${s.welcome}`} aria-labelledby="data-why-heading">
      <div className={s.welcomeCollage}><Photo name="dining" alt="Data-driven business decisions" className={s.tallPhoto} /><div className={s.collageRight}><Photo name="kitchen" alt="Business executive reports" /><blockquote><p>Data is the competition in the digital economy.</p><footer><Image src="/images/client-1.jpg" alt="" width={38} height={38} /><span>Capyngen, Data Analytics</span><span className={s.stars}>★★★★★<small>Full statistical confidence</small></span></footer></blockquote></div></div>
      <div className={s.welcomeCopy}><h2 id="data-why-heading">Why Data Analytics <br /><em>Are Necessary</em></h2><p>{whyText}</p><p>We empower leaders to forecast market movements days ahead of competitors and allocate capital with full statistical confidence, from foundation data modelling to multi-cloud data warehousing and AI-enabled forecasting.</p><p className={s.signature}>Capyngen <span>Data Analytics</span></p><ArrowLink href="#data-insights" /></div>
    </section>

    <section id="data-insights" className={`${s.section} ${s.story}`} aria-labelledby="data-insights-heading"><div><h2 id="data-insights-heading">Turn Data Into <br /><em>Business Insights</em></h2><p>Through our analytics architectures, we will help your business make decisions with concrete empirical data and up-to-the-minute operational feedback.</p><a href="/contact-us" className={s.textLink}>Contact Us <span aria-hidden="true">→</span></a></div><div className={s.storyVisual}><Photo name="interior-hero" alt="Turn data into business insights" /><details className={s.storyNote}><summary>Search. Automate. Lead your business to Lasting Growth. <span aria-hidden="true">＋</span></summary><p>{growText}</p></details></div></section>

    <section id="process" className={`${s.section} ${s.process}`} aria-labelledby="data-process-heading"><div><Photo name="restaurant" alt="Our data analytics services process" className={s.processPhoto} /><ol className={s.timeline}>{["Discover", "Collect", "Integrate", "Model", "Visualise"].map((label, index) => <li key={label}><StepIcon index={index} /><span className={s.timelineDot} /><span>{label}</span></li>)}</ol></div><div className={s.processCopy}><h2 id="data-process-heading">Our Data Analytics <br /><em>Services Process</em></h2><ol className={s.steps}>{steps.map((step, index) => <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>

    <section id="industries" className={`${s.section} ${s.projects}`} aria-labelledby="data-industries-heading">
      <div className={s.projectIntro}><h2 id="data-industries-heading">Industries <br /><em>We Serve</em></h2><p>Focused data science solutions designed explicitly for vertical data formats, statutory compliance and commercial models.</p><ArrowLink href="#data-services" /></div>
      <div className={s.projectGallery}><div className={s.projectCards}>{[0, 1, 2].map(offset => { const item = industries[(selected + offset) % industries.length]; return <a href="/contact-us" key={item.name} className={`${s.projectCard} ${offset === 0 ? s.activeProject : ""}`}><Photo name={item.image} alt={item.alt} /><div><h3>{item.name}</h3><p>{item.count}</p></div></a>; })}</div><div className={s.pagination}><span aria-hidden="true" /><div role="group" aria-label="Choose featured industry">{industries.map((item, index) => <button key={item.name} type="button" onClick={() => setSelected(index)} aria-label={`Feature ${item.name}`} aria-pressed={selected === index} className={selected === index ? s.selected : ""}>{index + 1}</button>)}</div></div><span className={s.srOnly} role="status">Featured: {industries[selected].name}</span></div>
    </section>

    <section id="data-services" className={s.engagement} aria-labelledby="data-services-heading"><div className={s.crmInner}><div className={s.engagementHeading}><span className={s.eyebrow}>END-TO-END DATA SYSTEMS</span><h2 id="data-services-heading">Comprehensive <em>Data Analytics</em> <br />Services</h2><p>We design end-to-end data systems to source, craft models, and visualise your business data with absolute clarity.</p><ArrowLink href="/contact-us" coral>Contact Us</ArrowLink></div><div className={s.stickers} aria-hidden="true"><span>DASHBOARDS</span><span>REPORTING</span><span>MODELLING</span><span>FORECASTING</span></div><ul className={s.benefits}>{offerings.map(item => <li key={item.title}><span aria-hidden="true">✓</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ul><Photo name="crm-workspace" alt="Comprehensive data analytics services" className={s.engagementPhoto} /></div></section>

    <section className={`${s.section} ${s.integration}`} aria-labelledby="data-discover-heading"><div className={s.integrationVisual}><Photo name="crm-integration" alt="Business intelligence and data science" /><span className={s.integrationBadge}>Hidden trends. Strategic advantage.</span></div><div><span className={s.eyebrow}>BUSINESS INTELLIGENCE & DATA SCIENCE</span><h2 id="data-discover-heading">Discover Opportunities <br />Hidden in <em>Your Data</em></h2><p>Turn covert operational trends into strategic advantage with Capyngen business intelligence and data science.</p><ArrowLink href="/contact-us" coral>Contact Us</ArrowLink></div></section>

    <section id="data-trust" className={`${s.section} ${s.services}`} aria-labelledby="data-trust-heading"><div className={s.servicesHeading}><span className={s.eyebrow}>WHY CAPYNGEN</span><h2 id="data-trust-heading">Why Trust Capyngen for <em>Data Analytics</em> Services</h2></div><div className={s.serviceGrid}>{reasons.map(item => <a href="/contact-us" className={s.serviceCard} key={item.title}><Photo name={item.image} alt={item.alt} /><div><h3>{item.title}<span aria-hidden="true">↗</span></h3><p>{item.text}</p></div></a>)}</div></section>

    <section id="data-faq" className={`${s.section} ${s.faq}`} aria-labelledby="data-faq-heading"><div className={s.servicesHeading}><span className={s.eyebrow}>DATA ANALYTICS SERVICES</span><h2 id="data-faq-heading">Frequently Asked <em>Questions</em></h2></div><div className={s.faqList}>{faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span aria-hidden="true">＋</span></summary><p>{item.a}</p></details>)}</div></section>
  </>;
}
