'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { useNavigate } from './navState';
import { slugToCountry, careerRoutes } from './careerRoutes';
import { fetchRecruitmentJobs, DEPARTMENTS } from './recruitmentApi';
const HeroImage = "/careers/HeroImage.png";
const HeroImage1 = "/careers/HeroImage1.png";
const HeroImage2 = "/careers/HeroImage2.png";

// Canonical departments always shown first (with "No openings" until the API
// specifically returns that category); departments the API introduces via
// filters.categories that aren't in the list are auto-created after them,
// then a catch-all.

// Max job roles previewed per department before "Visit career page".
const MAX_PREVIEW_ROLES = 3;

const whyCards = [
  {
    title: 'Learning & Development',
    body: 'Continuous learning through mentorship, workshops, certifications, and real-world projects.',
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20a8 8 0 1 0-8-8c0 3 2.5 5 2.5 8z" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 7v2m0 6v2m-3.5-6.5l1.5 1.5m4 4 1.5 1.5m0-7-1.5 1.5m-4 4-1.5 1.5M7 12h2m6 0h2" />
      </svg>
    ),
  },
  {
    title: 'Innovation Culture',
    body: 'Experiment with new technologies, AI tools, and modern software frameworks.',
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: 'Work-Life Balance',
    body: 'Flexible work culture designed to support productivity, collaboration, and well-being.',
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l6-6 6 6" />
        <path d="M5 10v11h8V10" />
        <path d="M9 21v-6h2v6" />
        <path d="M17 10h4v11h-4" />
        <path d="M17 3h4v7" />
      </svg>
    ),
  },
  {
    title: 'Career Growth',
    body: 'Clear career paths, performance recognition, and opportunities to lead impactful projects.',
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

const stats = [
  { value: '100+', title: <>Successful Projects<br />Delivered</>, body: 'Helping businesses accelerate digital transformation.' },
  { value: '50+', title: 'Technology Experts', body: 'A multidisciplinary team of developers, designers, AI specialists, and consultants.' },
  { value: '100+', title: 'Industries Served', body: 'Delivering tailored solutions across healthcare, finance, retail, logistics, education, manufacturing, and more.' },
  { value: '98%', title: 'Client Satisfaction', body: 'Building lasting partnerships through quality, innovation, and trust.' },
];

export default function CapyngenCareers() {
  const navigate = useNavigate();
  const { country: countrySlug } = useParams();
  const country = slugToCountry(countrySlug) || 'India';
  const [openAccordion, setOpenAccordion] = useState(null);

  const [jobs, setJobs] = useState([]);
  const [apiCategories, setApiCategories] = useState([]);
  const [branding, setBranding] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load the country's jobs so departments + roles reflect real openings.
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetchRecruitmentJobs({ country }, controller.signal)
      .then(({ jobs, branding, categories }) => {
        setJobs(jobs);
        setBranding(branding);
        setApiCategories(categories || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [country]);

  // Group the country's jobs into departments. Canonical departments are
  // always shown (with "No openings" until the API specifically returns that
  // category). Any department the API announces via filters.categories — or
  // that a job actually carries — which isn't in the canonical list is
  // auto-created (alphabetically, after the canonical ones) so its jobs are
  // never hidden. "Other" appears last and only when it has jobs.
  const departments = useMemo(() => {
    const inCountry = jobs.filter((j) => !country || j.country === country);
    const extraDepartments = [
      ...new Set([
        ...apiCategories,
        ...inCountry.map((j) => j.category || 'Other'),
      ]),
    ]
      .filter((title) => title !== 'Other' && !DEPARTMENTS.includes(title))
      .sort((a, b) => a.localeCompare(b));
    return [...DEPARTMENTS, ...extraDepartments, 'Other']
      .map((title, i) => ({
        id: i + 1,
        num: `${String(i + 1).padStart(2, '0')}.`,
        title,
        jobs: inCountry.filter((j) => (j.category || 'Other') === title),
      }))
      .filter(
        (d) =>
          DEPARTMENTS.includes(d.title) ||
          d.jobs.length > 0 ||
          apiCategories.includes(d.title),
      );
  }, [jobs, apiCategories, country]);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Handler for opening the job search, scoped to country + department.
  const handleVisitCareerPage = (e, departmentTitle) => {
    e.preventDefault();
    navigate(careerRoutes.jobs(country), {
      state: { jobCategory: departmentTitle },
    });
  };

  // Open a specific job's detail page.
  const handleViewJob = (e, job) => {
    e.preventDefault();
    navigate(careerRoutes.jobDetail(country, job.id), {
      state: { job, branding },
    });
  };

  return (
    <div className="bg-gray-100 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center bg-gray-900 overflow-hidden">
        
        {/* Background Image - Covers entire section */}
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            alt="Capyngen Team Collaborating"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
        </div>

        {/* Country Careers bar */}
        <header className="absolute top-[80px] lg:top-[90px] left-0 w-full z-20 bg-transparent">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end h-14">
              {/* Active Tab Indicator */}
              <div className="h-full flex items-center border-b-[3px] border-[#4a72b0] px-2">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-200 uppercase mt-1">
                  {country} Careers
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[160px] sm:pt-[180px] pb-16 sm:pb-24">
          <div className="w-full max-w-4xl">
            {/* Eyebrow Text & Line */}
            <div className="flex items-center gap-4 mb-6 sm:mb-8 md:mb-10 w-full max-w-full sm:max-w-[80%]">
              <span className="inline-block w-8 h-[2px] bg-[#5182cf] shrink-0"></span>
              <h2 className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-300 uppercase whitespace-nowrap">
                Careers at Capyngen
              </h2>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-gray-400/60 to-transparent"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
              Build the Future <br className="hidden sm:block" /> With Capyngen
            </h1>

            {/* Subheadline / Paragraph */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed sm:leading-normal max-w-3xl">
              Join a team of innovators, designers, developers, and problem-solvers building AI-powered software, enterprise solutions, and digital products that transform businesses across the globe.
            </p>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
          <span className="text-white/60 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <p className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.15em] text-gray-800 uppercase mb-3">
                <span className="inline-block w-8 h-[2px] bg-[#0070c9]"></span>
                Join Us
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8">
                Set the Standard for Innovation
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
                <p>
                  At Capyngen, we don't just build software—we create intelligent digital experiences that help businesses grow, automate, and innovate.
                </p>
                <p>
                  Whether you're a developer, designer, AI engineer, marketer, or strategist, you'll work alongside passionate professionals solving real-world challenges using modern technologies.
                </p>
                <p>
                  Here, every idea matters, every contribution counts, and every career has the opportunity to grow.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full">
              <div className="group w-full overflow-hidden rounded-sm shadow-sm ring-1 ring-black/5">
                <img
                  src={HeroImage1}
                  alt="Colleagues shaking hands in an office"
                  className="w-full h-auto object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Accordion Section */}
      <section className="w-full bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200">
            {loading ? (
              <div className="py-10 space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-16 rounded-lg bg-gray-100 animate-pulse" />
                ))}
              </div>
            ) : departments.length === 0 ? (
              <div className="py-14 text-center">
                <p className="text-lg font-semibold text-black mb-1">
                  No open roles in {country} right now
                </p>
                <p className="text-gray-500 text-sm">Please check back soon.</p>
              </div>
            ) : (
              departments.map((dept) => {
                const isOpen = openAccordion === dept.id;
                const count = dept.jobs.length;
                const previewJobs = dept.jobs.slice(0, MAX_PREVIEW_ROLES);
                return (
                <div
                  key={dept.id}
                  className={`border-b transition-colors duration-300 ${isOpen ? 'border-[#0070c9]' : 'border-gray-200'}`}
                >
                  <button
                    className="w-full py-6 sm:py-8 flex justify-between items-center text-left focus:outline-none group"
                    onClick={() => toggleAccordion(dept.id)}
                  >
                    <h3 className="flex items-center gap-3 sm:gap-4 text-2xl sm:text-3xl md:text-4xl font-medium text-black">
                      <span className="text-[#0070c9] tabular-nums">{dept.num}</span>
                      <span className={`transition-colors ${isOpen ? 'text-[#0070c9]' : 'group-hover:text-black'}`}>{dept.title}</span>
                      <span className={`hidden sm:inline-flex items-center justify-center text-xs font-semibold rounded-full px-2.5 py-0.5 transition-colors ${isOpen ? 'bg-[#0070c9]/10 text-[#0070c9]' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                        {count > 0 ? `${count} ${count === 1 ? 'role' : 'roles'}` : 'No openings'}
                      </span>
                    </h3>
                    <div className={`shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'text-[#0070c9] rotate-180' : 'text-black group-hover:text-[#0070c9]'}`}>
                      {isOpen ? (
                        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v8m-4-4h8" />
                        </svg>
                      )}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    {previewJobs.length > 0 ? (
                    <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-2 pr-2 pl-14 sm:pl-20">
                      {previewJobs.map((job) => (
                        <a
                          key={job.id}
                          href="#"
                          onClick={(e) => handleViewJob(e, job)}
                          className="group/card flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-4 transition-all duration-300 hover:border-[#0070c9] hover:bg-[#0070c9]/5 hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0070c9]"
                        >
                          <span className="text-[#0070c9] text-lg sm:text-xl font-light truncate">{job.title}</span>
                          <svg
                            className="shrink-0 w-5 h-5 text-gray-400 -translate-x-1 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 group-hover/card:text-[#0070c9] transition-all duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      ))}
                    </div>
                    <div className="pl-14 sm:pl-20 mt-6">
                      <a
                        href="#"
                        onClick={(e) => handleVisitCareerPage(e, dept.title)}
                        className="group/link inline-flex items-center gap-2 text-black text-sm sm:text-base underline underline-offset-4 font-medium hover:text-[#0070c9] transition-colors"
                      >
                        {count > MAX_PREVIEW_ROLES
                          ? `Visit career page — view all ${count} roles`
                          : 'Visit career page'}
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                    </>
                    ) : (
                      <div className="pl-14 sm:pl-20 pt-2">
                        <p className="text-gray-600 text-base sm:text-lg">
                          No openings in {dept.title} right now. New roles are added regularly — please check back soon.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Why People Love Working Here Section */}
      <section className="w-full bg-white pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <h2 className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.15em] text-black uppercase mb-10 sm:mb-12">
              <span className="inline-block w-8 h-[2px] bg-[#0070c9]"></span>
              Why People Love Working Here
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((card, i) => (
                <div
                  key={i}
                  className="group bg-[#f5f5f9] p-8 sm:p-10 rounded-sm ring-1 ring-transparent transition-all duration-300 hover:bg-white hover:ring-[#0070c9]/30 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-8 text-black transition-colors duration-300 group-hover:text-[#0070c9]">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-wider uppercase text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section (Overlapping Layout) */}
      <section className="w-full bg-white pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row items-center justify-start">

            <div className="group w-full lg:w-[65%] z-0 overflow-hidden shadow-sm">
              <img
                src={HeroImage2}
                alt="Capyngen Culture - Growing Together Beyond Work"
                className="w-full h-auto object-cover min-h-[300px] lg:min-h-[550px] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>

            <div className="w-[90%] sm:w-[85%] lg:w-[42%] bg-[#f5f5f9] p-8 sm:p-12 lg:p-16 z-10 shadow-sm
                        mt-[-3rem] sm:mt-[-4rem] lg:mt-0
                        lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
              <p className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.15em] text-gray-500 uppercase mb-4 sm:mb-6">
                <span className="inline-block w-8 h-[2px] bg-[#0070c9]"></span>
                Our Culture
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6 sm:mb-8">
                Growing Together Beyond Work
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                Great ideas come from great people. At Capyngen, we foster a culture of collaboration, creativity, and continuous learning where every individual is empowered to innovate, share ideas, and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote Section */}
      <section className="w-full bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-y border-gray-200 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:items-center">

              <div className="w-full md:w-1/3 shrink-0">
                <span className="block w-10 h-[2px] bg-[#5182cf] mb-4"></span>
                <p className="text-sm font-bold tracking-widest uppercase text-black leading-snug">
                  Leadership Team<br />
                  Capyngen Private Limited
                </p>
              </div>

              <div className="w-full md:w-2/3 flex gap-4 sm:gap-6 lg:gap-8">
                <div className="text-[#5182cf] shrink-0 mt-[-0.25rem] sm:mt-[-0.5rem]">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl sm:text-2xl lg:text-[1.75rem] italic font-normal text-black leading-relaxed">
                  "Innovation starts with people. At Capyngen, we empower passionate minds to build transformative digital solutions, embrace continuous learning, and create technology that drives real business impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="w-full bg-white pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-y border-gray-200 py-12 sm:py-16">
            <h2 className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.15em] text-black uppercase mb-10 sm:mb-12">
              <span className="inline-block w-8 h-[2px] bg-[#0070c9]"></span>
              What Sets Us Apart
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group relative bg-[#131927] p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] sm:min-h-[340px] overflow-hidden ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:ring-[#5182cf]/40 hover:shadow-xl"
                >
                  <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#5182cf] transition-all duration-500 group-hover:w-full"></span>
                  <div className="text-[3.5rem] sm:text-6xl lg:text-7xl font-light text-[#5182cf] leading-none mb-12">
                    {stat.value}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white mb-4 leading-relaxed">
                      {stat.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {stat.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA (Join Us) Section */}
      <section className="relative w-full bg-[#090914] py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#5182cf]/15 blur-3xl"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 sm:mb-8">
              Join us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-12">
              Whether you're beginning your career or looking for your next challenge, Capyngen offers an environment where you can learn, innovate, and build technology that creates lasting impact.
            </p>
            <a href="#" className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-gray-500 bg-[#1e1e1e] text-white text-sm sm:text-base font-medium hover:bg-white hover:text-[#090914] hover:border-white transition-all duration-300">
              Click here
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}