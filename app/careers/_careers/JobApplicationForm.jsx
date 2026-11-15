'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { useNavigate, useLocation } from './navState';
import { fetchApplicationFields, submitApplication } from './recruitmentApi';
import { slugToCountry, careerRoutes } from './careerRoutes';

// --- Reusable Form Field ---
const Field = ({ label, required, children, hint, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {hint && !error && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const inputClass =
  'w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4884f0]/30 focus:border-[#4884f0] transition';

const uploadIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.9 5 5 0 019.9-1A4.5 4.5 0 0117 16M12 12v6m0-6l-2.5 2.5M12 12l2.5 2.5" />
  </svg>
);

// --- Upload Card ---
const UploadCard = ({ label, required, placeholder, accept, hint, file, onFile, error }) => {
  const inputRef = useRef(null);
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`w-full h-40 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 text-center transition-colors ${
          file
            ? 'border-[#4884f0] bg-blue-50/60'
            : 'border-gray-300 bg-gray-50 hover:border-[#4884f0] hover:bg-blue-50/40'
        }`}
      >
        <span className={`flex items-center justify-center w-11 h-11 rounded-full ${file ? 'bg-[#4884f0] text-white' : 'bg-white text-[#4884f0] border border-gray-200'}`}>
          {file ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : uploadIcon}
        </span>
        {file ? (
          <span className="text-xs font-medium text-[#03152c] break-all line-clamp-2">{file.name}</span>
        ) : (
          <>
            <span className="text-sm font-semibold text-gray-700">{placeholder}</span>
            <span className="text-[11px] text-gray-400">Click to browse</span>
          </>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0] || null)}
      />
      {accept && <p className="mt-1.5 text-[11px] text-gray-400">{hint || `Accepted: ${accept}`}</p>}
      {file && (
        <button type="button" onClick={() => onFile(null)} className="mt-1 text-xs text-red-500 hover:underline">
          Remove
        </button>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

// Map an API field type to an <input> type.
const inputType = (type) =>
  ({ email: 'email', phone: 'tel', number: 'number', url: 'url', date: 'date' }[type] || 'text');

// --- Main Component ---
export default function JobApplicationForm({ jobTitle, department, onBack, onSubmitOverride } = {}) {
  const navigate = useNavigate();
  const location = useLocation();

  // Job + branding arrive via router state from the Job Detail page.
  const { country: countrySlug, jobId } = useParams();
  const country = slugToCountry(countrySlug);

  const job = location.state?.job || null;
  const branding = location.state?.branding || null;
  const screeningQuestions = job?.screeningQuestions || [];
  const title = jobTitle || job?.title || 'this Position';
  const dept =
    department || (job?.category && job.category !== 'Other' ? job.category : '') || '';
  const goBack =
    onBack || (() => navigate(careerRoutes.jobDetail(country, jobId)));

  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const [values, setValues] = useState({});
  const [files, setFiles] = useState({});
  const [screeningValues, setScreeningValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Fields are driven entirely by the API — nothing is hardcoded here.
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setLoadError(null);
    fetchApplicationFields(controller.signal)
      .then(setConfig)
      .catch((err) => {
        if (err.name !== 'AbortError')
          setLoadError('Unable to load the application form. Please try again.');
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [reloadKey]);

  const fields = useMemo(
    () => (config?.fields || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0)),
    [config],
  );
  const fileFields = fields.filter((f) => f.type === 'file');
  const otherFields = fields.filter((f) => f.type !== 'file');

  const labels = config?.labels || branding?.labels || {};
  const submitLabel = labels.submitButtonText || 'Submit Application';
  const successMessage = labels.successMessage || 'Application successfully submitted!';

  const setVal = (name) => (e) => setValues((s) => ({ ...s, [name]: e.target.value }));
  const setFile = (name) => (f) => setFiles((s) => ({ ...s, [name]: f }));
  const setScreeningVal = (idx) => (val) => setScreeningValues((s) => ({ ...s, [idx]: val }));

  const validate = () => {
    const err = {};
    fields.forEach((field) => {
      const { name, type, required, label } = field;
      if (type === 'file') {
        const file = files[name];
        if (required && !file) err[name] = `${label} is required.`;
        else if (file) {
          const exts = field.allowedFileExtensions || [];
          if (exts.length && !exts.some((ext) => file.name.toLowerCase().endsWith(ext.toLowerCase()))) {
            err[name] = `Allowed file types: ${exts.join(', ')}.`;
          }
          const maxMb = field.maxFileSizeMb || 5;
          if (file.size > maxMb * 1024 * 1024) err[name] = `Max size ${maxMb} MB.`;
        }
        return;
      }
      const value = (values[name] || '').trim();
      if (required && !value) err[name] = `${label} is required.`;
      else if (value && type === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
        err[name] = 'Enter a valid email.';
      }
    });
    screeningQuestions.forEach((q, idx) => {
      const errorKey = `screening_${idx}`;
      const value = (screeningValues[idx] ?? "").toString().trim();
      if (q.required && !value) err[errorKey] = `${q.question} is required.`;
    });

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async () => {
    setSubmitError(null);
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const screeningAnswers = screeningQuestions.map((q, idx) => ({
      question: q.question,
      type: q.type,
      answer: (screeningValues[idx] ?? '').toString(),
    }));
    if (onSubmitOverride) {
      onSubmitOverride({ jobId, values, files, screeningAnswers });
      return;
    }
    setSubmitting(true);
    try {
      await submitApplication({ jobId, config, values, files, screeningAnswers });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      setSubmitError(e.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderField = (field) => {
    const { name, label, type, required, options, autocomplete } = field;
    const error = errors[name];
    if (options && options.length > 0) {
      return (
        <Field key={name} label={label} required={required} error={error}>
          <div className="relative">
            <select
              value={values[name] || ''}
              onChange={setVal(name)}
              className={`${inputClass} appearance-none pr-9 ${values[name] ? 'text-gray-900' : 'text-gray-400'}`}
            >
              <option value="">No Selection</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </Field>
      );
    }
    if (type === 'textarea') {
      return (
        <Field key={name} label={label} required={required} error={error}>
          <textarea rows={4} value={values[name] || ''} onChange={setVal(name)} className={inputClass} />
        </Field>
      );
    }
    return (
      <Field key={name} label={label} required={required} error={error}>
        <input
          type={inputType(type)}
          value={values[name] || ''}
          onChange={setVal(name)}
          autoComplete={autocomplete}
          className={inputClass}
        />
      </Field>
    );
  };

  const renderScreeningQuestion = (q, idx) => {
    const errorKey = `screening_${idx}`;
    const error = errors[errorKey];
    const value = screeningValues[idx] ?? '';

    if (q.type === 'yesno') {
      return (
        <Field key={errorKey} label={q.question} required={q.required} error={error}>
          <div className="flex items-center gap-6">
            {['yes', 'no'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name={`screening-${idx}`}
                  value={opt}
                  checked={value === opt}
                  onChange={() => setScreeningVal(idx)(opt)}
                  className="w-4 h-4 text-[#4884f0] focus:ring-[#4884f0]"
                />
                {opt === 'yes' ? 'Yes' : 'No'}
              </label>
            ))}
          </div>
        </Field>
      );
    }

    return (
      <Field key={errorKey} label={q.question} required={q.required} error={error}>
        <input
          type={q.type === 'number' ? 'number' : 'text'}
          value={value}
          onChange={(e) => setScreeningVal(idx)(e.target.value)}
          className={inputClass}
        />
      </Field>
    );
  };

  // --- Success screen ---
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-50 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#03152c] mb-2">Thank you!</h1>
          <p className="text-gray-600 mb-6">{successMessage}</p>
          <button
            onClick={() => navigate('/careers')}
            className="bg-[#4884f0] hover:bg-blue-600 text-white font-semibold text-sm px-8 py-3 rounded-full transition-colors"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 pt-28 sm:pt-32">

        {/* Back + language */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#03152c] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Job Details
          </button>
          <button className="text-[#4884f0] text-sm hover:underline">English UK (English UK)</button>
        </div>

        {/* Header card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-8">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[#4884f0] bg-blue-50 px-3 py-1 rounded-full mb-3">
            Application
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#03152c] mb-2">Apply for this Position</h1>
          <p className="text-base sm:text-lg text-gray-700">
            <span className="font-bold text-[#03152c]">{title}</span>
            {dept ? ` · ${dept} Department` : ''}
          </p>
        </div>

        {submitError && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {submitError}
          </div>
        )}

        {loading ? (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[0, 1, 2].map((i) => <div key={i} className="h-40 rounded-xl bg-gray-100 animate-pulse" />)}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-4">
              {[0, 1, 2, 3].map((i) => <div key={i} className="h-11 rounded-lg bg-gray-100 animate-pulse" />)}
            </div>
          </div>
        ) : loadError ? (
          <div className="bg-white border border-red-100 rounded-2xl p-12 text-center text-gray-600 shadow-sm">
            <p className="text-lg font-semibold text-red-600 mb-1">{loadError}</p>
            <p className="text-sm mb-5">The application form could not be loaded.</p>
            <button
              onClick={() => setReloadKey((k) => k + 1)}
              className="bg-[#4884f0] hover:bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              Retry
            </button>
          </div>
        ) : fields.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center text-gray-500 shadow-sm">
            No application fields are configured for this position yet.
          </div>
        ) : (
          <>
            {/* File uploads */}
            {fileFields.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {fileFields.map((field) => (
                  <UploadCard
                    key={field.name}
                    label={field.label}
                    required={field.required}
                    placeholder={`Upload ${field.label}`}
                    accept={(field.allowedFileExtensions || []).join(',')}
                    hint={
                      (field.allowedFileExtensions || []).length
                        ? `${field.allowedFileExtensions.join(', ')} · max ${field.maxFileSizeMb || 5} MB`
                        : null
                    }
                    file={files[field.name] || null}
                    onFile={setFile(field.name)}
                    error={errors[field.name]}
                  />
                ))}
              </div>
            )}

            {/* Text / select fields */}
            {otherFields.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {otherFields.map(renderField)}
                </div>
              </div>
            )}

            {/* Screening questions */}
            {screeningQuestions.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8">
                <h2 className="text-lg font-semibold text-[#03152c] mb-4">Screening Questions</h2>
                <div className="space-y-5">
                  {screeningQuestions.map(renderScreeningQuestion)}
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="flex flex-col items-center justify-center gap-3 pt-8">
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full sm:w-auto bg-[#4884f0] hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-12 py-3 rounded-full transition-colors shadow-md"
              >
                {submitting ? 'Submitting…' : submitLabel}
              </button>
              <p className="text-center text-xs text-gray-400">
                By applying you agree to our terms and privacy policy.
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
