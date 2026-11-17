"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import { login, type LoginState } from "../_lib/actions";

const field = "w-full rounded-xl border border-neutral-700 bg-black/60 px-4 py-3 text-white outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(login, { error: "" });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={action} className="w-full max-w-md rounded-3xl border border-white/10 bg-[#020617]/90 p-7 shadow-2xl backdrop-blur-xl sm:p-8">
      <Image src="/images/capyngen-logo.png" alt="Capyngen" width={500} height={300} priority className="mx-auto mb-4 h-20 w-auto object-contain" />
      <h1 className="mb-2 text-center text-3xl font-bold text-white">Admin Sign In</h1>
      <p className="mb-8 text-center text-neutral-400">Login to access the admin dashboard</p>

      <label className="mb-5 block">
        <span className="mb-1 block text-sm text-neutral-400">Email</span>
        <input type="email" name="email" required autoComplete="username" placeholder="Enter admin email" className={field} />
      </label>

      <label className="mb-6 block">
        <span className="mb-1 block text-sm text-neutral-400">Password</span>
        <span className="relative block">
          <input type={showPassword ? "text" : "password"} name="password" required autoComplete="current-password" placeholder="Enter password" className={`${field} pr-12`} />
          <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400 hover:text-white">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />{showPassword && <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}</svg>
          </button>
        </span>
      </label>

      <p role="alert" aria-live="polite" className="mb-4 min-h-5 text-center text-sm text-red-400">{state.error}</p>

      <button type="submit" disabled={pending} className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-70">{pending ? "Signing in…" : "Sign In"}</button>
    </form>
  );
}
