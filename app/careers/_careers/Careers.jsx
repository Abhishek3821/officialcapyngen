'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useNavigate } from './navState';
import { careerRoutes } from './careerRoutes';

// 1. Image imports
const heroBg = '/careers/carrer.png';

// Import your three card images here (for Perks section):
// import cardImage1 from '../assets/card1.jpg';
// import cardImage2 from '../assets/card2.jpg';
// import cardImage3 from '../assets/card3.jpg';

// Import your "Why Capyngen" images here:
// import imgInnovation from '../assets/image_42d516.jpg';
// import imgLearning from '../assets/image_42d4de.jpg';
// import imgCulture from '../assets/image_42d4be.jpg';
// import imgGrowth from '../assets/image_42d1f8.jpg';

// Import your "Diversity" background image here:
// import diversityBg from '../assets/image_435c81.jpg';

// Import your "Opportunity" laptop image here:
// import opportunityImg from '../assets/image_435fc4.jpg';

// --- DATA ARRAYS ---

const regionData = [
  {
    id: '01',
    title: 'India',
    countries: ['India'],
  },
  {
    id: '02',
    title: 'Americas',
    countries: [
      'Canada', 'USA', 'Argentina',
      'Brazil', 'Chile', 'Colombia',
      'Ecuador', 'Mexico', 'Peru',
      'Uruguay'
    ],
  },
  {
    id: '03',
    title: 'Asia Pacific',
    countries: ['Australia', 'Singapore', 'Japan'],
  },
  {
    id: '04',
    title: 'Europe and UK',
    countries: ['UK', 'Germany', 'France'],
  },
  {
    id: '05',
    title: 'Middle East and Africa',
    countries: ['UAE', 'South Africa'],
  },
];

const perksData = [
  {
    title: 'Learn Every Day',
    description: 'Work with experienced mentors, AI technologies, and modern development practices',
    linkText: 'DISCOVER MORE',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Build Real Products',
    description: 'From HRMS to CRM and AI platforms, your work impacts real businesses.',
    linkText: 'READ MORE',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Flexible Work Culture',
    description: 'Enjoy hybrid work, collaborative teams, and a healthy work-life balance.',
    linkText: 'ABOUT CODEVITA',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const whyCapyngenData = [
  {
    id: 'innovation',
    title: 'Innovation',
    heading: 'Innovation',
    description: 'Work on AI-powered products, SaaS platforms, and scalable enterprise solutions using modern technologies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'learning',
    title: 'Learning',
    heading: 'Learning',
    description: 'Access workshops, certifications, mentoring, and hands-on experience with cutting-edge tools.',
    image: 'https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'culture',
    title: 'Culture',
    heading: 'Culture',
    description: 'We believe in collaboration, creativity, ownership, and continuous improvement.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'growth',
    title: 'Growth',
    heading: 'Growth',
    description: 'Your career evolves with challenging projects, leadership opportunities, and meaningful feedback.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  }
];

// --- MAIN COMPONENT ---

const Careers = () => {
  const navigate = useNavigate();
  const [openRegion, setOpenRegion] = useState(null);
  const [activeWhyTab, setActiveWhyTab] = useState(whyCapyngenData[0].id);

  const toggleRegion = (id) => {
    setOpenRegion(openRegion === id ? null : id);
  };

  const handleCountryClick = (e, country) => {
    e.preventDefault();
    navigate(careerRoutes.country(country));
  };

  return (
    <main className="w-full font-sans">

      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION                                      */}
      {/* ---------------------------------------------------- */}
      <section
        className="relative w-full h-screen min-h-[500px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Layered overlay: directional gradient for text legibility + soft vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-center">
          <div className="mb-6 md:mb-8 w-full max-w-[80%] md:max-w-2xl">
            <span className="inline-flex items-center gap-3 text-gray-100 text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
              <span className="inline-block w-8 h-[2px] bg-[#2A61F5]"></span>
              Careers
            </span>
            <div className="h-[1px] w-full bg-white/30 mt-3 md:mt-4"></div>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-4 md:mb-6 max-w-3xl drop-shadow-sm">
            Build Products That <br className="hidden sm:block" /> Power Tomorrow
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light mb-10 md:mb-12 max-w-2xl">
            Build the Future with Capyngen
          </p>
          <div>
            <Link
              href={careerRoutes.jobs('India')}
              className="group inline-flex items-center gap-3 rounded-full bg-[#2A61F5] px-7 py-3.5 text-sm sm:text-base font-semibold tracking-[0.12em] uppercase text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#1f4fd6] hover:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              All Jobs
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
          
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. JOIN US SECTION                                   */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-white pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl">
            <h3 className="inline-flex items-center gap-3 text-black text-sm md:text-base font-semibold tracking-[0.15em] uppercase mb-4 md:mb-6">
              <span className="inline-block w-8 h-[2px] bg-[#2A61F5]"></span>
              Join Us
            </h3>
            <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              Build Solutions That Matter
            </h2>
            <div className="text-gray-900 text-base sm:text-lg md:text-xl leading-relaxed md:leading-relaxed space-y-4 font-medium">
              <p>
                At Capyngen, every project is an opportunity to solve real business problems through AI, cloud technology, enterprise software, and exceptional user experiences.
              </p>
              <p>
                We empower passionate designers, developers, marketers, and innovators to create products used by businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. LOCATIONS / REGIONS ACCORDION SECTION             */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-white pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col w-full border-t border-gray-200">
            {regionData.map((region) => {
              const isOpen = openRegion === region.id;
              const count = region.countries.length;
              return (
                <div
                  key={region.id}
                  className={`border-b transition-colors duration-300 ${isOpen ? 'border-blue-400' : 'border-gray-200'}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleRegion(region.id)}
                    className="w-full flex justify-between items-center py-6 sm:py-8 cursor-pointer group text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-blue-600 text-2xl sm:text-3xl font-medium tabular-nums">{region.id}.</span>
                      <h4 className={`text-2xl sm:text-3xl font-medium transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-black'}`}>
                        {region.title}
                      </h4>
                      <span className={`hidden sm:inline-flex items-center justify-center text-xs font-semibold rounded-full px-2.5 py-0.5 transition-colors ${isOpen ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                        {count} {count === 1 ? 'location' : 'locations'}
                      </span>
                    </div>
                    <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#2A61F5] rotate-180' : 'border border-gray-400 group-hover:border-gray-900'}`}>
                      {isOpen ? (
                        <div className="w-3.5 h-[2px] bg-white rounded-full"></div>
                      ) : (
                        <div className="relative w-3.5 h-3.5">
                          <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-gray-600 group-hover:bg-gray-900 -translate-y-1/2 rounded-full transition-colors"></div>
                          <div className="absolute top-0 left-1/2 w-[1.5px] h-full bg-gray-600 group-hover:bg-gray-900 -translate-x-1/2 rounded-full transition-colors"></div>
                        </div>
                      )}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1200px] opacity-100 pb-8 sm:pb-12' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-2 pr-2 pl-[3.25rem] sm:pl-[4.25rem]">
                      {region.countries.map((country, idx) => (
                        <a
                          key={idx}
                          href="#"
                          onClick={(e) => handleCountryClick(e, country)}
                          className="group/card flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-4 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <div className="flex flex-col min-w-0">
                            <span className="text-blue-500 text-lg sm:text-xl font-normal truncate">{country}</span>
                            <span className="text-black text-sm sm:text-base font-medium mt-1 group-hover/card:text-blue-600 transition-colors">
                              Visit career page
                            </span>
                          </div>
                          <svg
                            className="shrink-0 w-5 h-5 text-gray-400 -translate-x-1 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 group-hover/card:text-blue-600 transition-all duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. PERKS & CULTURE SECTION                           */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-white pb-20 md:pb-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-medium mb-10 md:mb-14">
            Why You'll Love Working at Capyngen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {perksData.map((perk, index) => (
              <div
                key={index}
                className="group relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden flex flex-col justify-end ring-1 ring-black/5 transition-all duration-500 hover:ring-blue-400/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${perk.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity duration-500 group-hover:from-black/90"></div>
                <div className="relative z-10 p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-white text-2xl sm:text-3xl font-medium mb-3">{perk.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{perk.description}</p>
                  <a href="#" className="inline-flex items-center text-white text-xs sm:text-sm font-semibold tracking-widest uppercase gap-2 hover:gap-4 transition-all duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    {perk.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. WHY CAPYNGEN TABBED SCROLL SECTION                */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-[#2A61F5] py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium mb-12 md:mb-16">
            Why Capyngen
          </h2>

          <div className="flex w-full overflow-x-auto pb-4 mb-10 md:mb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {whyCapyngenData.map((tab) => {
              const isActive = activeWhyTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveWhyTab(tab.id)}
                  className={`relative flex-1 min-w-[140px] md:min-w-[200px] pb-4 sm:pb-6 transition-all duration-300 ease-out flex justify-center items-center focus:outline-none ${
                    isActive
                      ? 'text-[#0f172a] font-semibold'
                      : 'text-white/80 font-normal hover:text-white'
                  }`}
                >
                  <span className="text-lg sm:text-xl tracking-wide">{tab.title}</span>
                  {/* Base rail */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"></span>
                  {/* Animated active underline */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#0f172a] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0'}`}></span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full min-h-[450px] lg:min-h-[400px]">
            {whyCapyngenData.map((tab) => (
              <div
                key={tab.id}
                className={`absolute inset-0 w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 lg:gap-24 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
                  activeWhyTab === tab.id
                    ? 'opacity-100 translate-y-0 z-10 pointer-events-auto'
                    : 'opacity-0 translate-y-8 z-0 pointer-events-none'
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                  <div className="group w-full max-w-xl overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                      style={{ aspectRatio: '16/10' }}
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center pt-2 md:pt-8">
                  <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
                    {tab.heading}
                  </h3>
                  <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-light max-w-lg">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. LEADERSHIP QUOTE SECTION                          */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-white py-20 sm:py-28 md:py-36">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          <div className="mb-8 md:mb-10 text-[#5182c4]">
            <svg className="w-16 h-16 md:w-20 md:h-20 fill-current" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-[2.5rem] leading-snug md:leading-normal font-normal text-[#5182c4] mb-10 md:mb-12">
            At Capyngen, innovation begins with people. We foster curiosity, encourage ownership, and create opportunities where talented individuals can build solutions that make a real impact.
          </blockquote>

          <div className="h-[1px] w-full bg-gray-200 mb-6 md:mb-8"></div>

          <div className="flex items-center gap-4">
            <span className="block w-10 h-[2px] bg-[#2A61F5]"></span>
            <p className="text-black font-semibold text-sm sm:text-base md:text-lg tracking-wide">
              Leadership Team, Capyngen
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. DIVERSITY SECTION                                 */}
      {/* ---------------------------------------------------- */}
      <section
        className="relative w-full py-24 sm:py-32 md:py-40 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-[#1e2025]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#101524]/70 to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl border-l-[3px] border-[#2A61F5] pl-6 md:pl-10">
            <span className="block text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8">
              A Belief in Diversity
            </span>
            <h2 className="text-white text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.15] mb-6 md:mb-8">
              Great Teams Build <br className="hidden sm:block" /> Great Technology
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12 pr-4">
              Innovation thrives when people from different backgrounds, experiences, and ideas work together. At Capyngen, every voice contributes to creating better digital products.
            </p>
            <a href="#" className="group inline-flex items-center gap-3 text-white text-sm sm:text-base md:text-lg font-medium hover:text-[#2A61F5] transition-colors duration-300">
              Learn more about us
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. OPPORTUNITY SECTION                               */}
      {/* ---------------------------------------------------- */}
      <section className="w-full flex flex-col lg:flex-row min-h-[500px]">
        {/* Left Image Side */}
        <div className="group w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto relative overflow-hidden bg-gray-100">
          <img
            // Replace with your local image import: src={opportunityImg}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Laptop on desk"
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          {/* Soft seam so the image blends into the dark panel on large screens */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#101524]"></div>
        </div>

        {/* Right Content Side */}
        <div className="w-full lg:w-1/2 bg-[#101524] flex flex-col justify-center px-8 py-16 sm:px-12 md:px-16 lg:px-20 xl:px-28">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.2] mb-8">
            Your Next Big <br className="hidden lg:block" />
            Opportunity Starts <br className="hidden lg:block" />
            Here
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-12">
            Whether you're a designer, developer, marketer, or AI enthusiast, join a team that values creativity, collaboration, and continuous growth.
          </p>
          
        </div>
      </section>

    </main>
  );
};

export default Careers;