"use client";

import { useState, type FormEvent } from "react";

const fieldClass = "min-h-[52px] w-full rounded-xl border border-[#e5dfd8] bg-[#faf9f6] px-4 py-3 text-base text-[#2e2925] outline-none transition-colors placeholder:text-[#9c938a] hover:border-[#cfc3b8] focus:border-[#f4772e] focus:bg-white focus:ring-2 focus:ring-[#f4772e]/15";
const labelClass = "mb-2 block text-[13px] font-medium text-[#60564d]";
const services = ["Web development", "Branding & design", "Digital marketing"];

export default function ContactQuoteForm() {
  const [complete, setComplete] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setComplete(true);
  }

  return (
    <form onSubmit={submit} onChange={() => setComplete(false)} className="mt-7" aria-label="Request a quote demo form">
      <fieldset className="mb-7">
        <legend className="mb-3 text-[13px] font-medium text-[#60564d]">I’m interested in</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <label key={service} className="cursor-pointer">
              <input type="radio" name="service" value={service} defaultChecked={index === 0} required className="peer sr-only" />
              <span className="flex min-h-10 items-center rounded-full border border-[#e5dfd8] bg-white px-3.5 py-2 text-xs font-medium text-[#75695e] transition-colors hover:border-[#d6b599] peer-checked:border-[#f4772e] peer-checked:bg-[#fff0e5] peer-checked:text-[#a74913] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-[#f4772e]">{service}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        <label><span className={labelClass}>Full name <span aria-hidden="true" className="text-[#df7436]">*</span></span><input name="name" autoComplete="name" placeholder="Your name" required maxLength={100} className={fieldClass} /></label>
        <label><span className={labelClass}>Email address <span aria-hidden="true" className="text-[#df7436]">*</span></span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={200} className={fieldClass} /></label>
        <label><span className={labelClass}>Phone <span className="font-normal text-[#9a8e82]">(optional)</span></span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" maxLength={40} className={fieldClass} /></label>
        <label><span className={labelClass}>Subject <span aria-hidden="true" className="text-[#df7436]">*</span></span><input name="subject" placeholder="What’s on your mind?" required maxLength={200} className={fieldClass} /></label>
        <label className="sm:col-span-2"><span className={labelClass}>Tell us about your project <span aria-hidden="true" className="text-[#df7436]">*</span></span><textarea name="message" placeholder="A little about your idea, your goals, and what you’d like to create…" required minLength={10} maxLength={5000} rows={5} className={`${fieldClass} block min-h-36 resize-y leading-relaxed`} /></label>
      </div>
      <button type="submit" className="group mt-6 inline-flex min-h-[54px] w-full items-center justify-between gap-4 rounded-full bg-[#f4772e] px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_#f4772e20] transition-colors hover:bg-[#df651f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4772e]"><span>Get a quote</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      <p className="mt-4 text-center text-xs leading-relaxed text-[#8a7e72]">Demo form · Your details won’t be sent or stored.</p>
      {complete && <div role="status" className="mt-5 rounded-xl border border-[#f0d6bf] bg-[#fff7ef] p-4 text-sm leading-relaxed text-[#805027]"><p className="font-semibold">Your demo request is ready.</p><p className="mt-1">No message has been sent. This form is a preview until an email service is connected.</p></div>}
    </form>
  );
}
