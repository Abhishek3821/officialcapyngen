// Country-aware, relatable Careers routes:
//   /careers
//   /careers/:country                      e.g. /careers/india
//   /careers/:country/jobs
//   /careers/:country/jobs/:jobId
//   /careers/:country/jobs/:jobId/apply

// Canonical country list (keep in sync with Careers regionData).
export const CAREER_COUNTRIES = [
  "India", "Canada", "USA", "Argentina", "Brazil", "Chile", "Colombia",
  "Ecuador", "Mexico", "Peru", "Uruguay", "Australia", "Singapore", "Japan",
  "UK", "Germany", "France", "UAE", "South Africa",
];

// "South Africa" -> "south-africa", "USA" -> "usa"
export const countryToSlug = (country) =>
  String(country || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

const SLUG_TO_COUNTRY = CAREER_COUNTRIES.reduce((acc, name) => {
  acc[countryToSlug(name)] = name;
  return acc;
}, {});

// "south-africa" -> "South Africa"; falls back to title-casing unknown slugs.
export const slugToCountry = (slug) => {
  if (!slug) return "";
  const key = String(slug).toLowerCase();
  if (SLUG_TO_COUNTRY[key]) return SLUG_TO_COUNTRY[key];
  return key
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

export const careerRoutes = {
  home: () => "/careers",
  country: (country) => `/careers/${countryToSlug(country)}`,
  jobs: (country) => `/careers/${countryToSlug(country)}/jobs`,
  jobDetail: (country, jobId) =>
    `/careers/${countryToSlug(country)}/jobs/${jobId}`,
  jobApply: (country, jobId) =>
    `/careers/${countryToSlug(country)}/jobs/${jobId}/apply`,
};
