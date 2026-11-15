'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useNavigate, useLocation } from './navState';
import { fetchRecruitmentJobs } from './recruitmentApi';
import { slugToCountry, careerRoutes } from './careerRoutes';
import { parseJobDescription, splitBoldSegments } from './jobDescription';

// --- Data (swap per job, or pass as the `job` prop) ---
const jobDetail = {
  title: 'Senior Frontend Developer',
  location: 'Gurugram, India',
  meta: ['Experienced Professionals', 'Engineering', 'Permanent', 'Job ID: ENG-1025'],
  intro: [
    'Capyngen is a technology company delivering AI-powered software, enterprise applications, SaaS platforms, cloud solutions, and digital transformation services for businesses worldwide.',
    'Our engineering team builds scalable, secure, and modern digital products that solve real-world business challenges while creating exceptional user experiences.'
  ],
  about: [
    "We're looking for a passionate Senior Frontend Developer to build high-performance, scalable web applications that delight users.",
    "You'll work closely with UI/UX designers, backend engineers, product managers, and QA teams to transform ideas into production-ready products.",
    "This role is perfect for someone who enjoys writing clean code, solving complex UI challenges, and working with modern frontend technologies."
  ],
  responsibilities: [
    'Develop responsive, high-performance web applications.',
    'Build reusable UI components and scalable design systems.',
    'Collaborate with UX designers to create pixel-perfect interfaces.',
    'Optimize applications for speed, accessibility, and SEO.',
    'Integrate frontend applications with REST APIs and backend services.',
    'Review code and mentor junior developers.',
    'Participate in sprint planning, stand-ups, and code reviews.',
    'Maintain coding standards and engineering best practices.',
    'Troubleshoot bugs and improve application performance.',
    'Stay updated with emerging frontend technologies.'
  ],
  skillGroups: [
    { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { label: 'Tools', items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'] },
    { label: 'Nice to Have', items: ['Redux Toolkit', 'Framer Motion', 'React Query', 'GraphQL', 'Docker', 'AWS', 'CI/CD', 'Jest'] }
  ]
};

// Fallback list of similar jobs (used if none passed via props)
const defaultSimilarJobs = [
  { id: 101, title: 'Frontend Developer', department: 'Engineering', location: 'Gurugram', experience: '2–4 Years', type: 'Hybrid' },
  { id: 102, title: 'React Developer', department: 'Engineering', location: 'Gurugram', experience: '2–4 Years', type: 'Hybrid' },
  { id: 103, title: 'Full Stack Developer', department: 'Engineering', location: 'Gurugram', experience: '2–4 Years', type: 'Hybrid' }
];

// --- Reusable bits ---

const SectionHeading = ({ children }) => (
  <h2 className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#03152c] mb-5 sm:mb-6">
    <span className="w-1.5 h-6 sm:h-7 rounded-full bg-[#4884f0]" />
    {children}
  </h2>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2.5 sm:space-y-3">
    {items?.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
        <svg className="w-4 h-4 mt-1 text-[#4884f0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Render a text line, honoring **bold** runs from the description markdown.
const InlineText = ({ text }) => (
  <>
    {splitBoldSegments(text).map((seg, i) =>
      seg.bold ? (
        <strong key={i} className="font-semibold text-[#03152c]">
          {seg.text}
        </strong>
      ) : (
        <span key={i}>{seg.text}</span>
      ),
    )}
  </>
);

// The API returns the description as rich-text HTML or flattened markdown;
// parseJobDescription restores the structure and this renders it with the
// page's heading/bullet styles.
const DescriptionBlocks = ({ description, title }) => {
  const blocks = parseJobDescription(description, title);
  if (blocks.length === 0) return null;

  return (
    <div>
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return block.level <= 2 ? (
            <h3
              key={i}
              className="text-base sm:text-lg lg:text-xl font-bold text-[#03152c] mt-8 first:mt-0 mb-3 pb-2 border-b border-gray-100"
            >
              <InlineText text={block.text} />
            </h3>
          ) : (
            <h4
              key={i}
              className="text-sm sm:text-base font-semibold text-[#4884f0] mt-6 first:mt-0 mb-2 uppercase tracking-wide"
            >
              <InlineText text={block.text} />
            </h4>
          );
        }

        if (block.type === 'list') {
          return block.ordered ? (
            <ol key={i} className="list-decimal pl-5 space-y-2 mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              {block.items.map((item, j) => (
                <li key={j}>
                  <InlineText text={item} />
                </li>
              ))}
            </ol>
          ) : (
            <ul key={i} className="space-y-2 mb-4">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <svg className="w-4 h-4 mt-1 text-[#4884f0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <InlineText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
            <InlineText text={block.text} />
          </p>
        );
      })}
    </div>
  );
};

// Single card inside the Similar Jobs section
const SimilarJobCard = ({ job, onViewDetails }) => (
  <div className="group bg-white rounded-2xl px-6 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-sm hover:shadow-xl transition-shadow duration-300">
    {/* Left: title, location, button */}
    <div className="flex-1">
      <h3 className="text-xl sm:text-2xl font-bold text-[#03152c] group-hover:text-[#4884f0] transition-colors">
        {job?.title}
      </h3>
      <p className="flex items-center gap-1.5 mt-2 text-sm sm:text-base text-gray-500">
        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {job?.location}
      </p>
      <button
        onClick={() => onViewDetails && onViewDetails(job)}
        className="mt-4 inline-flex items-center gap-1.5 bg-[#03152c] hover:bg-[#4884f0] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
      >
        View Details →
      </button>
    </div>

    {/* Right: meta */}
    <div className="flex flex-row sm:flex-col flex-wrap sm:items-end gap-x-4 gap-y-1.5 sm:text-right shrink-0">
      <span className="text-xs font-semibold uppercase tracking-wide text-[#4884f0] bg-blue-50 px-3 py-1 rounded-md">
        {job?.department}
      </span>
      <span className="text-sm sm:text-base font-semibold text-gray-700">{job?.experience}</span>
      <span className="text-sm sm:text-base font-semibold text-gray-700">{job?.type}</span>
    </div>
  </div>
);

// --- Main Component ---

export default function CareerJobDetail(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { country: countrySlug, jobId } = useParams();
  const country = slugToCountry(countrySlug);

  const { similarJobs, onViewSimilar } = props;
  const stateJob = props.job || location.state?.job || null;

  // Prefer the job passed via navigation state; on a direct/shared link,
  // resolve it by id from the URL by fetching the job list.
  const [resolvedJob, setResolvedJob] = useState(stateJob);
  const [branding, setBranding] = useState(
    props.branding || location.state?.branding || null,
  );
  const [loading, setLoading] = useState(!stateJob && !!jobId);

  useEffect(() => {
    if (stateJob || !jobId) return;
    const controller = new AbortController();
    setLoading(true);
    fetchRecruitmentJobs({ country }, controller.signal)
      .then(({ jobs, branding: b }) => {
        setResolvedJob(jobs.find((j) => j.id === jobId) || null);
        setBranding((prev) => prev || b);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [jobId, country, stateJob]);

  const job = resolvedJob || jobDetail;
  const onBack = props.onBack || (() => navigate(careerRoutes.jobs(country)));

  // Open the application form, carrying the job + branding for display.
  const handleApply = () =>
    navigate(careerRoutes.jobApply(country, jobId), {
      state: { job, branding },
    });

  // Branding-driven display rules from the API (default to showing everything).
  const labels = branding?.labels || {};
  const jd = branding?.jobDetails || {};
  const show = (key) => jd[key] !== false; // undefined => visible
  const applyLabel = labels.applyButtonText || 'Apply for this job';

  // Jobs coming from the API expose a flat `description` string + meta fields,
  // while the static fallback uses structured intro/about/responsibilities.
  const metaPills =
    job?.meta?.length > 0
      ? job.meta
      : [
          job?.category && job.category !== 'Other' ? job.category : null,
          job?.type,
          show('showExperience') ? job?.experience : null,
          show('showSalary') ? job?.salaryRange : null,
          show('showOpenings') && job?.openings
            ? `${job.openings} ${job.openings === 1 ? 'opening' : 'openings'}`
            : null,
          job?.jobCode ? `Job ID: ${job.jobCode}` : null,
        ].filter(Boolean);

  const postedDate =
    show('showPostedDate') && job?.createdAt
      ? new Date(job.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : null;

  // Only the structured fallback ships similar jobs; API jobs render none.
  const similar = similarJobs || (job?.intro ? defaultSimilarJobs : []);

  // Resolving the job from a shared/direct link.
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="w-10 h-10 border-2 border-gray-200 border-t-[#4884f0] rounded-full animate-spin" />
      </div>
    );
  }

  // Render the Job Details view
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-900">

      {/* 1. Header — pt clears the fixed navbar */}
      <header className="relative bg-gradient-to-br from-[#0b1220] via-[#0e1b35] to-[#0b1220] text-white overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#4884f0]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#00c4cc]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm mb-5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to jobs
            </button>
          )}

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {job?.title}
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {job?.location}
              </p>

              {/* Meta pills */}
              {metaPills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {metaPills.map((m, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm font-medium text-white/90 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}

              {postedDate && (
                <p className="mt-3 text-xs sm:text-sm text-gray-400">
                  Posted {postedDate}
                </p>
              )}
            </div>

            <button
              onClick={handleApply}
              className="w-full sm:w-auto shrink-0 bg-white text-[#0b1220] hover:bg-[#4884f0] hover:text-white text-sm sm:text-base font-semibold px-7 sm:px-8 py-3 rounded-full transition-colors shadow-lg"
            >
              {applyLabel}
            </button>
          </div>
        </div>
      </header>

      {/* 2. Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-14 lg:py-16">

        {/* Intro card (structured fallback) */}
        {job?.intro && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 lg:p-10 mb-10 sm:mb-12 space-y-3">
            {job.intro.map((p, i) => (
              <p key={i} className="text-sm sm:text-base lg:text-lg font-semibold text-[#03152c] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Job description (API jobs provide a single description string) */}
        {!job?.intro && job?.description && show('showDescription') && (
          <section className="mb-10 sm:mb-12">
            <SectionHeading>Job Description</SectionHeading>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 lg:p-10">
              <DescriptionBlocks description={job.description} title={job.title} />
            </div>
          </section>
        )}

        {/* Requirements (API) */}
        {!job?.intro && job?.requirements?.length > 0 && show('showRequirements') && (
          <section className="mb-10 sm:mb-12">
            <SectionHeading>Requirements</SectionHeading>
            <BulletList items={job.requirements} />
          </section>
        )}

        {/* About the Role */}
        {job?.about && (
          <section className="mb-10 sm:mb-12">
            <SectionHeading>About the Role</SectionHeading>
            <div className="space-y-3 text-gray-700">
              {job.about.map((p, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed">{p}</p>
              ))}
            </div>
          </section>
        )}

        {/* Key Responsibilities */}
        {job?.responsibilities && (
          <section className="mb-10 sm:mb-12">
            <SectionHeading>Key Responsibilities</SectionHeading>
            <BulletList items={job.responsibilities} />
          </section>
        )}

        {/* Required Skills */}
        {job?.skillGroups && (
          <section className="mb-10 sm:mb-12">
            <SectionHeading>Required Skills</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {job.skillGroups.map((group, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-sm sm:text-base font-bold text-[#03152c] mb-4 pb-3 border-b border-gray-100">
                    {group?.label}
                  </h3>
                  <BulletList items={group?.items} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Apply CTA */}
        <div className="bg-gradient-to-r from-[#0b1220] to-[#0e1b35] rounded-2xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="text-lg sm:text-xl font-bold text-white mb-1">Ready to join the team?</p>
            <p className="text-sm sm:text-base text-gray-300">We'd love to hear from you.</p>
          </div>
          <button
            onClick={handleApply}
            className="w-full sm:w-auto bg-white text-[#0b1220] hover:bg-[#4884f0] hover:text-white text-sm sm:text-base font-semibold px-7 py-3 rounded-full transition-colors shadow-lg"
          >
            {applyLabel}
          </button>
        </div>
      </main>

      {/* 3. Similar Jobs Section */}
      {similar && similar.length > 0 && (
        <section className="bg-gradient-to-br from-[#0a66ff] to-[#0a4fd1] py-14 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Similar Jobs
              </h2>
              <div className="w-16 h-1 bg-white/50 mx-auto mt-4 rounded-full" />
            </div>

            <div className="flex flex-col gap-5 sm:gap-6">
              {similar.map((sJob) => (
                <SimilarJobCard
                  key={sJob.id}
                  job={sJob}
                  onViewDetails={onViewSimilar}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}