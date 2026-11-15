'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useNavigate, useLocation } from './navState';
import { fetchRecruitmentJobs } from './recruitmentApi';
import { slugToCountry, careerRoutes } from './careerRoutes';

// --- Data ---
const filterMeta = {
  department: 'Department',
  experience: 'Experience',
  workType: 'Work Type',
  location: 'Location',
};

const EMPTY_FILTERS = { department: '', experience: '', workType: '', location: '' };

const hiringProcessSteps = [
  { id: 1, title: 'Apply', desc: 'Submit your application for the role that excites you.', icon: (<svg className="w-8 h-8 text-[#4884f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>) },
  { id: 2, title: 'HR Discussion', desc: 'Our HR team will connect with you to understand you better.', icon: (<svg className="w-8 h-8 text-[#00c4cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>) },
  { id: 3, title: 'Technical Assessment', desc: 'Showcase your skills through a technical assessment.', icon: (<svg className="w-8 h-8 text-[#4884f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) },
  { id: 4, title: 'Team Interview', desc: 'Meet the team, discuss ideas, and see how you fit in.', icon: (<svg className="w-8 h-8 text-[#00c4cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>) },
  { id: 5, title: 'Offer', desc: 'Receive your offer and become a part of our growing team.', icon: (<svg className="w-8 h-8 text-[#4884f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) },
  { id: 6, title: 'Welcome to Capyngen', desc: 'Begin your journey with us and build the future together!', icon: (<svg className="w-8 h-8 text-[#00c4cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>) }
];

// Color-code work type pills
const typeStyles = {
  Remote: 'bg-emerald-100 text-emerald-700',
  Hybrid: 'bg-blue-100 text-blue-700',
  Onsite: 'bg-amber-100 text-amber-700'
};

// --- Subcomponents ---

const JobCard = ({ job, onViewDetails }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          {job.category && job.category !== 'Other' && (
            <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-[#4884f0] bg-blue-50 px-2.5 py-1 rounded-md">
              {job.category}
            </span>
          )}
          {job.type && (
            <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md ${typeStyles[job.type] || 'bg-gray-100 text-gray-600'}`}>
              {job.type}
            </span>
          )}
          {job.openings ? (
            <span className="inline-block text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
              {job.openings} {job.openings === 1 ? 'opening' : 'openings'}
            </span>
          ) : null}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#03152c] group-hover:text-[#4884f0] transition-colors">
          {job.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-2 text-sm text-gray-500">
          {job.location && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#4884f0]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {job.location}
            </span>
          )}
          {job.experience && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#00c4cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {job.experience}
            </span>
          )}
          {job.salaryRange && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#4884f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              {job.salaryRange}
            </span>
          )}
        </div>
      </div>

      <div className="shrink-0 sm:text-right">
        <button
          onClick={() => onViewDetails(job)}
          className="inline-flex items-center gap-2 bg-[#03152c] hover:bg-[#4884f0] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors group-hover:bg-[#4884f0]"
        >
          View Details
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const FilterSection = ({ title, filterKey, options, selected, onSelect, onClear }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      {selected && (
        <button
          onClick={() => onClear(filterKey)}
          className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
    <div className="flex flex-col gap-2.5">
      {options.map((option, idx) => {
        const active = selected === option;
        return (
          <label key={idx} className="flex items-center gap-3 cursor-pointer group">
            <div className={`relative flex items-center justify-center w-4 h-4 border rounded-full transition-colors ${active ? 'border-[#4884f0]' : 'border-gray-500 group-hover:border-blue-400'}`}>
              <input
                type="radio"
                name={filterKey}
                checked={active}
                onChange={() => onSelect(filterKey, option)}
                className="peer opacity-0 absolute w-full h-full cursor-pointer"
              />
              <div className={`w-2 h-2 rounded-full transition-colors ${active ? 'bg-[#4884f0]' : 'bg-transparent'}`}></div>
            </div>
            <span className={`text-sm transition-colors ${active ? 'text-white font-medium' : 'text-gray-300 group-hover:text-white'}`}>
              {option}
            </span>
          </label>
        );
      })}
    </div>
  </div>
);

// --- Main Component ---

export default function JobSearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { country: countrySlug } = useParams();

  // Country comes from the URL (/careers/:country/jobs); the department the
  // user picked is carried in navigation state.
  const country = slugToCountry(countrySlug) || '';
  const incoming = location.state || {};
  const region = incoming.region || '';
  const jobCategory = incoming.jobCategory || '';

  const [jobs, setJobs] = useState([]);
  const [branding, setBranding] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  // Seed the department filter from the category the user navigated in with,
  // so the Engineering page never shows, e.g., an HR role.
  const [filters, setFilters] = useState(() => ({
    ...EMPTY_FILTERS,
    department: jobCategory || '',
  }));

  // Load jobs from the recruitment API (server-side filters from navigation state).
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    fetchRecruitmentJobs({ country, region, jobCategory }, controller.signal)
      .then(({ jobs, branding }) => {
        setJobs(jobs);
        setBranding(branding);
      })
      .catch((err) => {
        if (err.name !== 'AbortError')
          setError('Failed to load job openings. Please try again.');
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [country, region, jobCategory]);

  const handleSelect = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  const handleClearCategory = (key) => setFilters((f) => ({ ...f, [key]: '' }));
  const handleClearAll = () => {
    setFilters(EMPTY_FILTERS);
    setSearch('');
  };

  // Build filter options from the jobs actually returned by the API.
  const filterOptions = useMemo(() => {
    const uniq = (arr) => [...new Set(arr.filter(Boolean))];
    return {
      department: uniq(jobs.map((j) => j.category)),
      experience: uniq(jobs.map((j) => j.experience)),
      workType: uniq(jobs.map((j) => j.type)),
      location: uniq(jobs.map((j) => j.location)),
    };
  }, [jobs]);

  const activeFilters = Object.entries(filters).filter(([, v]) => v);
  const activeCount = activeFilters.length;

  const filteredJobs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.type.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q);

      // Country comes from the page the user navigated in from (e.g. India).
      // Only show jobs whose inferred country matches the selected one.
      const matchesCountry = !country || job.country === country;
      const matchesDepartment = !filters.department || job.category === filters.department;
      const matchesExperience = !filters.experience || job.experience === filters.experience;
      const matchesWorkType = !filters.workType || job.type === filters.workType;
      const matchesLocation = !filters.location || job.location === filters.location;

      return matchesCountry && matchesSearch && matchesDepartment && matchesExperience && matchesWorkType && matchesLocation;
    });
  }, [jobs, country, search, filters]);

  // Open the job detail page for the selected job (carry branding for display rules)
  const handleViewDetails = (job) =>
    navigate(careerRoutes.jobDetail(country, job.id), {
      state: { job, branding },
    });

  // Render the default Job Search Page
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-900 overflow-x-hidden">

      {/* 1. Hero & Search */}
      <header className="relative bg-gradient-to-br from-[#03152c] via-[#072044] to-[#03152c] px-4 sm:px-6 lg:px-12 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#4884f0]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#00c4cc]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#4884f0] bg-[#4884f0]/10 px-3 py-1.5 rounded-full mb-5">
            Careers at Capyngen
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Find your next <span className="text-[#4884f0]">opportunity</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-8">
            {jobCategory
              ? `${jobCategory} roles${country ? ` in ${country}` : ''}. Your career starts here.`
              : country
                ? `Open roles${region ? ` in ${region}, ${country}` : ` in ${country}`}. Your career starts here.`
                : 'Browse open roles across engineering, design, AI, and more. Your career starts here.'}
          </p>

          <div className="relative max-w-2xl bg-white rounded-full p-1.5 flex items-center shadow-2xl">
            <svg className="w-5 h-5 text-gray-400 ml-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs by location, profession or keywords"
              className="flex-1 bg-transparent px-3 sm:px-4 py-2 sm:py-3 outline-none text-gray-700 text-sm sm:text-base w-full"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="text-gray-400 hover:text-gray-600 px-2 text-xl shrink-0"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4884f0] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Layout */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">

        {/* Left: Listings */}
        <div className="flex-1 flex flex-col gap-5">
          {loading ? (
            <div className="flex flex-col gap-5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm animate-pulse">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-3" />
                  <div className="h-6 w-2/3 bg-gray-200 rounded mb-3" />
                  <div className="h-4 w-1/2 bg-gray-100 rounded" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-white border border-red-100 rounded-2xl p-12 text-center text-gray-600 shadow-sm">
              <p className="text-lg font-semibold text-red-600 mb-1">{error}</p>
              <p className="text-sm mb-5">We couldn't reach the jobs service.</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#4884f0] hover:bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
          <>
          {/* Result count + active filter chips */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-[#03152c]">{filteredJobs.length}</span>{' '}
              {filteredJobs.length === 1 ? 'job' : 'jobs'} found
            </p>
          </div>

          {(activeCount > 0 || search) && (
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {search && (
                <span className="flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-[#4884f0] px-3 py-1.5 rounded-full">
                  “{search}”
                  <button onClick={() => setSearch('')} className="hover:text-blue-800">×</button>
                </span>
              )}
              {activeFilters.map(([key, value]) => (
                <span key={key} className="flex items-center gap-1.5 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                  {filterMeta[key]}: {value}
                  <button onClick={() => handleClearCategory(key)} className="hover:text-black">×</button>
                </span>
              ))}
              <button onClick={handleClearAll} className="text-xs text-[#4884f0] hover:underline font-medium ml-1">
                Clear all
              </button>
            </div>
          )}

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onViewDetails={handleViewDetails}
              />
            ))
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center text-gray-500 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#4884f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-[#03152c] mb-1">
                {country ? `No openings in ${country} right now` : 'No matching jobs found'}
              </p>
              <p className="text-sm mb-5">
                {country
                  ? 'Please check back soon or explore roles in other regions.'
                  : 'Try adjusting your search or clearing some filters.'}
              </p>
              <button
                onClick={handleClearAll}
                className="bg-[#4884f0] hover:bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
          </>
          )}
        </div>

        {/* Right: Filters (sticky on desktop) */}
        <aside className="w-full lg:w-[320px] bg-[#161a23] text-white rounded-2xl p-6 h-max shrink-0 lg:sticky lg:top-24 shadow-lg">
          <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              Filters
              {activeCount > 0 && (
                <span className="text-xs bg-[#4884f0] text-white px-2 py-0.5 rounded-full">{activeCount}</span>
              )}
            </h3>
            <button
              onClick={handleClearAll}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Clear all
            </button>
          </div>

          {filterOptions.department.length > 0 && (
            <FilterSection title="Department" filterKey="department" options={filterOptions.department} selected={filters.department} onSelect={handleSelect} onClear={handleClearCategory} />
          )}
          {filterOptions.experience.length > 0 && (
            <FilterSection title="Experience" filterKey="experience" options={filterOptions.experience} selected={filters.experience} onSelect={handleSelect} onClear={handleClearCategory} />
          )}
          {filterOptions.workType.length > 0 && (
            <FilterSection title="Work Type" filterKey="workType" options={filterOptions.workType} selected={filters.workType} onSelect={handleSelect} onClear={handleClearCategory} />
          )}
          {filterOptions.location.length > 0 && (
            <FilterSection title="Location" filterKey="location" options={filterOptions.location} selected={filters.location} onSelect={handleSelect} onClear={handleClearCategory} />
          )}
          {filterOptions.department.length === 0 &&
            filterOptions.experience.length === 0 &&
            filterOptions.workType.length === 0 &&
            filterOptions.location.length === 0 && (
              <p className="text-sm text-gray-400">No filters available.</p>
            )}
        </aside>
      </main>

      {/* 3. Hiring Process */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 pb-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden">

          <div className="absolute top-0 left-0 text-blue-100/50 hidden md:block">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="4"/><circle cx="40" cy="20" r="4"/><circle cx="60" cy="20" r="4"/>
              <circle cx="20" cy="40" r="4"/><circle cx="40" cy="40" r="4"/><circle cx="60" cy="40" r="4"/>
              <circle cx="20" cy="60" r="4"/><circle cx="40" cy="60" r="4"/><circle cx="60" cy="60" r="4"/>
              <path d="M0 0h150v150C80 150 0 80 0 0z" fill="#eef2ff" className="opacity-50"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 text-blue-100/50 hidden md:block rotate-180">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="4"/><circle cx="40" cy="20" r="4"/><circle cx="60" cy="20" r="4"/>
              <circle cx="20" cy="40" r="4"/><circle cx="40" cy="40" r="4"/><circle cx="60" cy="40" r="4"/>
              <circle cx="20" cy="60" r="4"/><circle cx="40" cy="60" r="4"/><circle cx="60" cy="60" r="4"/>
              <path d="M0 0h150v150C80 150 0 80 0 0z" fill="#eef2ff" className="opacity-50"/>
            </svg>
          </div>

          <div className="relative z-10 text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#03152c] mb-3">Hiring Process</h2>
            <p className="text-gray-500 text-base sm:text-lg">Our journey to welcome you aboard</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-4 text-center">
            {hiringProcessSteps.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col items-center group">
                {idx < hiringProcessSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full z-0 px-4">
                    <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <line x1="0" y1="10" x2="90" y2="10" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                      <polyline points="85,5 92,10 85,15" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    </svg>
                  </div>
                )}
                <div className="relative z-10 mb-6">
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md z-20 ${idx % 2 === 0 ? 'bg-[#4884f0]' : 'bg-[#00c4cc]'}`}>
                    {step.id}
                  </div>
                  <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-[#03152c] font-bold text-sm sm:text-base mb-2">{step.title}</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}