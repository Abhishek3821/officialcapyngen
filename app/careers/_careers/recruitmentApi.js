import { htmlToPlainText } from "./jobDescription";

// Public recruitment API (Orinite HRMS) used by the Careers section.
// Returns active jobs + branding so the site can render the job list dynamically.
// The API origin-gates requests to https://capyngen.com, so calls go through
// the local proxy route (app/recruitment-api/[...path]/route.ts), which
// forwards them with the allowed Origin — works on localhost, preview and
// production domains alike. NEXT_PUBLIC_RECRUITMENT_API_BASE overrides it.
const RECRUITMENT_ROOT =
  process.env.NEXT_PUBLIC_RECRUITMENT_API_BASE || "/recruitment-api";
const RECRUITMENT_BASE = `${RECRUITMENT_ROOT}/jobs`;
const RECRUITMENT_TENANT_ID = "6a47a7e1ec2ba07354500c19";

// Filters supported by the API (sent as query params).
const FILTER_KEYS = [
  "country",
  "region",
  "jobCategory",
  "location",
  "experienceRange",
  "type",
  "search",
];

// Canonical department buckets the Careers site always shows (with
// "No openings" when empty). The real department list comes from the API's
// filters.categories; any category it announces beyond these gets its own
// auto-created section in CountryCareers.
export const DEPARTMENTS = [
  "Engineering",
  "Design",
  "AI & Data",
  "Marketing",
  "Business",
];

// Match a category name from the API to a canonical department regardless of
// casing/whitespace ("engineering" → "Engineering"), so the same department
// never renders as two sections. Unknown names pass through trimmed.
export const canonicalDepartment = (name) => {
  const trimmed = `${name || ""}`.trim();
  if (!trimmed) return "";
  const match = DEPARTMENTS.find(
    (dept) => dept.toLowerCase() === trimmed.toLowerCase(),
  );
  return match || trimmed;
};

const DEPARTMENT_KEYWORDS = {
  Engineering: [
    "engineer", "developer", "software", "frontend", "front-end", "backend",
    "back-end", "full stack", "fullstack", "devops", "qa", "sdet", "tester",
    "programmer", "architect", "cloud", "sre", "mobile", "android", "ios",
  ],
  Design: ["designer", "ux", "ui", "product design", "graphic", "creative"],
  "AI & Data": [
    "ai ", "artificial intelligence", "machine learning", " ml", "ml ",
    "data scien", "data analyst", "data engineer", "nlp", "llm", "analytics",
  ],
  Marketing: [
    "marketing", "seo", "smm", "ppc", "content", "growth", "social media",
    "brand", "copywriter",
  ],
  Business: [
    "hr", "human resource", "recruit", "talent", "people", "sales",
    "business development", "account", "operation", "finance", "accountant",
    "manager", "customer success", "support", "product manager", "product owner",
    "executive", "analyst",
  ],
};

// A bare 24-hex string is an unresolved Mongo ObjectId, not a display name.
const isObjectId = (value) => /^[0-9a-f]{24}$/i.test(value);

// The department/category name the API provides for a job, if any. Checked in
// order of likelihood; `department` counts only when it's a real name (some
// payloads only carry an opaque ObjectId there).
const apiCategory = (job) => {
  const candidates = [
    job.jobCategory,
    job.category,
    job.departmentName,
    job.department?.name,
    typeof job.department === "string" && !isObjectId(job.department)
      ? job.department
      : "",
  ];
  const found = candidates.find((c) => typeof c === "string" && c.trim());
  return found ? found.trim() : "";
};

// Department for a job: whatever the API names wins (even a brand-new
// department — the UI auto-creates a section for it); otherwise classify
// into the canonical buckets from the title, falling back to "Other".
export const categorizeJob = (job) => {
  const named = apiCategory(job);
  if (named) return canonicalDepartment(named);
  const text = `${job.title || ""}`.toLowerCase();
  for (const dept of DEPARTMENTS) {
    if (DEPARTMENT_KEYWORDS[dept].some((kw) => text.includes(kw))) return dept;
  }
  return "Other";
};

// The API has no country field on jobs, so we infer it from the location
// (a city or an explicit country name). Keys are matched against the location
// string; values are the country names used by the Careers region list.
const COUNTRY_KEYWORDS = {
  India: [
    "india", "gurugram", "gurgaon", "delhi", "new delhi", "noida", "mumbai",
    "bengaluru", "bangalore", "hyderabad", "pune", "chennai", "kolkata",
    "ahmedabad", "jaipur", "indore", "kochi",
  ],
  USA: ["usa", "united states", "new york", "san francisco", "seattle", "austin", "boston", "chicago"],
  Canada: ["canada", "toronto", "vancouver", "montreal", "ottawa"],
  UK: ["uk", "united kingdom", "england", "london", "manchester"],
  Germany: ["germany", "berlin", "munich", "frankfurt"],
  France: ["france", "paris"],
  UAE: ["uae", "united arab emirates", "dubai", "abu dhabi", "sharjah"],
  Singapore: ["singapore"],
  Australia: ["australia", "sydney", "melbourne", "brisbane"],
  Japan: ["japan", "tokyo", "osaka"],
  "South Africa": ["south africa", "johannesburg", "cape town"],
  Brazil: ["brazil", "sao paulo", "rio de janeiro"],
  Mexico: ["mexico", "mexico city", "guadalajara"],
};

// Infer the country for a job from its location. Returns "" when unknown.
export const detectCountry = (location) => {
  const text = `${location || ""}`.toLowerCase();
  if (!text) return "";
  for (const [country, keywords] of Object.entries(COUNTRY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) return country;
  }
  return "";
};

const SCREENING_QUESTION_TYPES = ["yesno", "number", "text"];

// Normalize a job's screening questions; unknown/future `type` values fall
// back to "text" so the form always has a renderable widget.
const normalizeScreeningQuestions = (questions) =>
  (Array.isArray(questions) ? questions : []).map((q) => ({
    question: q.question || "",
    type: SCREENING_QUESTION_TYPES.includes(q.type) ? q.type : "text",
    required: !!q.required,
  }));

// Map an API job document to the shape the Careers UI expects.
const normalizeJob = (job) => ({
  id: job._id,
  jobCode: job.jobCode || "",
  title: job.title || "",
  department:
    (typeof job.department === "string"
      ? job.department
      : job.department?.name) || "", // raw value; `category` is what's displayed
  category: categorizeJob(job), // API-named department, or derived from title
  country: detectCountry(job.location), // inferred from location ("" if unknown)
  location: job.location || "",
  type: job.type || "",
  experience: job.experienceRange || "",
  salaryRange: job.salaryRange || "",
  openings: typeof job.openings === "number" ? job.openings : null,
  description: job.description || "", // may be rich-text HTML; parsed at render
  requirements: Array.isArray(job.requirements)
    ? job.requirements.map(htmlToPlainText).filter(Boolean)
    : [],
  createdAt: job.createdAt || null,
  skills: [], // API does not provide a skills array
  screeningQuestions: normalizeScreeningQuestions(job.screeningQuestions),
});

/**
 * Fetch active jobs, optionally filtered by country / region / location / etc.
 * @param {Object} filters - any subset of FILTER_KEYS
 * @param {AbortSignal} [signal]
 * @returns {Promise<{ jobs: Array, branding: Object|null, categories: string[] }>}
 */
export const fetchRecruitmentJobs = async (filters = {}, signal) => {
  const params = new URLSearchParams();
  FILTER_KEYS.forEach((key) => {
    const value = filters[key];
    if (value) params.set(key, value);
  });

  const query = params.toString();
  const url = `${RECRUITMENT_BASE}/${RECRUITMENT_TENANT_ID}${query ? `?${query}` : ""}`;

  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Failed to load jobs (${response.status})`);
  }

  const json = await response.json();
  if (!json?.success) {
    throw new Error("Failed to load jobs");
  }

  const data = json.data || {};

  // jobCode may live on the job itself or only inside the SEO JobPosting schema
  // (the public payload doesn't always include the top-level field yet).
  const codeByTitle = {};
  (Array.isArray(data.seoSchema) ? data.seoSchema : []).forEach((s) => {
    const code = s?.identifier?.value;
    if (s?.title && code) codeByTitle[s.title] = code;
  });

  const jobs = (Array.isArray(data.jobs) ? data.jobs : []).map((job) => {
    const normalized = normalizeJob(job);
    if (!normalized.jobCode && codeByTitle[normalized.title]) {
      normalized.jobCode = codeByTitle[normalized.title];
    }
    return normalized;
  });

  // Department names the API announces for this result set
  // (data.filters.categories). Entries may be plain strings or objects
  // carrying a name; normalize to canonical spellings and dedupe.
  const categories = [
    ...new Set(
      (Array.isArray(data.filters?.categories) ? data.filters.categories : [])
        .map((c) =>
          canonicalDepartment(
            typeof c === "string" ? c : c?.name || c?.label || c?.title || "",
          ),
        )
        .filter(Boolean),
    ),
  ];

  return { jobs, branding: data.branding || null, categories };
};

// ---------------------------------------------------------------------------
// Application form (dynamic fields + submission)
// ---------------------------------------------------------------------------

const DEFAULT_SUBMISSION = {
  method: "POST",
  url: `${RECRUITMENT_ROOT}/apply-direct`,
  contentType: "multipart/form-data",
  customFileFieldPrefix: "custom_",
};

// Multipart field name for screening-question answers on apply-direct. Not
// documented by the API's submission spec (unlike companyId/jobId/customFields) —
// change only this constant if the backend confirms a different key.
const SCREENING_ANSWERS_FIELD = "screeningAnswers";

// The API's submission spec names the absolute apply URL; route it through
// RECRUITMENT_ROOT (the proxy) so the origin gate doesn't block it.
const API_ORIGIN_ROOT = "https://api.orinite.com/api/v1/public/recruitment";
const viaProxy = (submission) =>
  typeof submission.url === "string" && submission.url.startsWith(API_ORIGIN_ROOT)
    ? { ...submission, url: `${RECRUITMENT_ROOT}${submission.url.slice(API_ORIGIN_ROOT.length)}` }
    : submission;

// Fetch the dynamic application-form field config for the company.
export const fetchApplicationFields = async (signal) => {
  const response = await fetch(
    `${RECRUITMENT_ROOT}/fields/${RECRUITMENT_TENANT_ID}`,
    { signal },
  );
  if (!response.ok) throw new Error(`Failed to load form (${response.status})`);
  const json = await response.json();
  if (!json?.success || !json?.data) throw new Error("Failed to load form");

  const data = json.data;
  // Render every field the API returns — the form is fully API-driven.
  const fields = Array.isArray(data.fields) ? data.fields : [];
  return {
    fields,
    resume: data.resume || null,
    labels: data.labels || {},
    submission: viaProxy({ ...DEFAULT_SUBMISSION, ...(data.submission || {}) }),
    requiredFieldNames: data.requiredFieldNames || [],
  };
};

// Submit an application as multipart/form-data per the submission spec.
// values: { [fieldName]: string }, files: { [fieldName]: File }
export const submitApplication = async ({ jobId, config, values, files, screeningAnswers }) => {
  const submission = config?.submission || DEFAULT_SUBMISSION;
  const filePrefix = submission.customFileFieldPrefix || "custom_";

  const fd = new FormData();
  fd.append("companyId", RECRUITMENT_TENANT_ID);
  if (jobId) fd.append("jobId", jobId);

  // Non-file custom fields are sent together as a JSON object in a single
  // `customFields` form field (per the submission spec's customTextPayload);
  // custom file fields go as flat `custom_<name>` multipart fields.
  const customValues = {};

  (config?.fields || []).forEach((field) => {
    const isFile = field.type === "file";
    if (field.source === "custom") {
      if (isFile) {
        if (files[field.name]) {
          fd.append(
            field.multipartFieldName || `${filePrefix}${field.name}`,
            files[field.name],
          );
        }
      } else {
        const v = values[field.name];
        if (v !== undefined && v !== "") {
          // jsonFieldPath is like "customFields.linkedin" — the key inside the
          // customFields object is its last segment (falls back to the name).
          const key = field.jsonFieldPath
            ? field.jsonFieldPath.split(".").pop()
            : field.name;
          customValues[key] = v;
        }
      }
    } else if (isFile) {
      if (files[field.name]) fd.append(field.submitAs || field.name, files[field.name]);
    } else {
      const v = values[field.name];
      if (v !== undefined) fd.append(field.submitAs || field.name, v);
    }
  });

  if (Array.isArray(screeningAnswers) && screeningAnswers.length > 0) {
    fd.append(SCREENING_ANSWERS_FIELD, JSON.stringify(screeningAnswers));
  }

  if (Object.keys(customValues).length > 0) {
    fd.append("customFields", JSON.stringify(customValues));
  }

  const response = await fetch(submission.url, {
    method: submission.method || "POST",
    body: fd,
  });

  if (!response.ok) {
    let message = `Submission failed (${response.status})`;
    try {
      const err = await response.json();
      // Backend may return { message }, { errors: [...] }, or a raw Zod error array.
      const issues = Array.isArray(err) ? err : err?.errors || err?.issues;
      if (Array.isArray(issues) && issues.length > 0) {
        message = issues
          .map((i) => i.message || `${(i.path || []).join(".")} is invalid`)
          .join("; ");
      } else if (err?.message) {
        message = err.message;
      }
    } catch {
      /* ignore */
    }
    throw new Error(message);
  }

  return response.json().catch(() => ({ success: true }));
};
