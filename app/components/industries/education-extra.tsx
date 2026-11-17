import Link from "next/link";
import s from "./education-extra.module.css";

const metrics = [
  { title: "Course completion rates", text: "Are learners finishing their training?" },
  { title: "Time to Value", text: "How quickly do trained users become active users?" },
  { title: "Training satisfaction", text: "Do learners find the content valuable and easy to follow?" },
  { title: "Certification or badging rates", text: "How many learners earn credentials that reflect mastery?" },
  { title: "Adoption and usage impact", text: "Does training correlate with higher product usage or fewer support cases?" },
  { title: "Support Ticket Deflection Rate", text: "How effectively does proactive, in-app training reduce the volume of inbound support requests?" },
];
const solutions = [
  { title: "Learning Management System (LMS) Development", items: ["Custom LMS in K-12 and higher education institutions.", "There was a smooth integration of grading, assessment, attendance and virtual classroom.", "Responsive design in a student and faculty App that is developed using IT solutions for education industry."] },
  { title: "Cloud Solutions for Education", items: ["Educational student records and learning materials are stored in a safe and secure cloud.", "The development of an online education platform that is responsive to the size of the institution.", "Third party tool compatibility with a simple ERP was facilitated by an IT solution for education sector in India."] },
  { title: "Data Analytics & Insights", items: ["View the performance and engagement data of students in real-time.", "Predicting learning outcomes with advanced statistical models and algorithms.", "They are provided with access and control by setting up roles and permissions in dashboards for users in the education field."] },
];
const faqs = [
  { q: "Q1. What does education software development include at Capyngen?", a: "From custom LMS and VLE applications, to student info systems, assessment modules, and mobile apps for staff and students all working with your institution's processes." },
  { q: "Q2. What makes Capyngen a reliable education software development company?", a: "Education knowledge and engineering expertise we understand the reality of education. We're an education software development company, building for compliance and scale. And classroom practicality." },
  { q: "Q3. What is EdTech software development, and who is it for?", a: "What is EdTech software development? EdTech software development relates to the development of software products for digital learning and education from eLearning apps to Artificial Intelligence powered content platforms. It supports schools colleges training providers, and education startups to launch new products into the market." },
  { q: "Q4. Which education technology solutions do you offer?", a: "We offer Learning Management Systems, cloud virtual classrooms, student information systems, eLearning application development and education ERP integration, as well as anything else that may be required. The full package of EdTech solutions for educational organizations and EdTech companies." },
  { q: "Q5. How do education IT services support institutions day to day?", a: "Education IT services provide system support and troubleshooting, cloud hosting, data security, third-party tool integration, and support and maintenance. We'll support your platforms, so you can support your students and faculty." },
  { q: "Q6. How is AI in education used in your solutions?", a: "AI in education AI is used for personalised learning pathways, automatic grading, predictive analytics for students' performance, and AI-driven content recommendations. These help make education more engaging and enable institutions to make data-driven decisions." },
  { q: "Q7. Can you build a custom LMS for our institution?", a: "Yes. We create customized Learning Management Systems for K-12 schools, higher education institutions, and EdTech companies. Every LMS we make is designed in particular to support your grading, attendance, assessment, and virtual classroom needs." },
  { q: "Q8. How do you handle student data security and compliance?", a: "Encryption RBAC secure APIs and multi-layered security in compliance with applicable data privacy regulations. Protecting the data of students is an integral component of each project that involves education software development." },
  { q: "Q9. How long does it take to develop an education platform?", a: "Some examples on how long it will take? Timeframes our LMS apps, eLearning solutions go live in 8 16 weeks but if you want something like an institutional platform, integrated with an ERP, it will be more like 4 6 months. We will tell you exactly how we will get there before we start." },
  { q: "Q10. How do I get started with Capyngen's education technology solutions?", a: "Contact us via our contact form we will analyze your existing systems, find the gaps, and present you with a feasible plan of action whether you are looking for a complete platform build or specialized education IT services." },
];
const metricsIntro = "You can’t improve what you don’t measure. Standard metrics for education services include:";
const metricsOutro = "By tracking these KPIs, you can demonstrate to executives and stakeholders that education isn’t just a support function—it’s a growth engine.";

export default function EducationExtra() {
  return <>
    <section className={s.metrics} aria-labelledby="education-metrics-title">
      <header className={s.heading}><p className={s.eyebrow}>Education / KPIs</p><h2 id="education-metrics-title">Metrics That <span>Show Impact</span></h2><p>{metricsIntro}</p></header>
      <ol className={s.metricGrid}>{metrics.map((item, i) => <li key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
      <p className={s.outro}>{metricsOutro}</p>
    </section>
    <section className={s.solutions} aria-labelledby="education-solutions-title">
      <header className={s.heading}><p className={s.eyebrow}>Education / Solutions</p><h2 id="education-solutions-title">Transforming Education <span>with IT Innovation</span></h2><p>Capyngen delivers comprehensive software solutions designed to upgrade educational institutions into digitally connected environments.</p></header>
      <div className={s.solutionGrid}>{solutions.map(item => <article key={item.title}><h3>{item.title}</h3><ul>{item.items.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div>
      <div className={s.cta}><Link href="/contact-us">Contact Us ↗</Link></div>
    </section>
    <section className={s.faq} aria-labelledby="education-faq-title">
      <header className={s.heading}><p className={s.eyebrow}>Education / FAQ</p><h2 id="education-faq-title">Frequently Asked <span>Questions</span></h2></header>
      <div className={s.faqList}>{faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div>
    </section>
  </>;
}
