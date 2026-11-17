import { createHmac, timingSafeEqual } from "node:crypto";

// Server-only helpers for the admin session cookie. Imported by proxy.ts and the
// login/logout server actions — never from a Client Component.

export const ADMIN_COOKIE = "capyngen_admin";
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours

function secret() {
  return process.env.ADMIN_SESSION_SECRET ?? "";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function isAuthConfigured() {
  return Boolean(secret() && process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD);
}

export function createSessionToken() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  return `${expires}.${sign(`admin.${expires}`)}`;
}

export function verifySessionToken(token: string | undefined) {
  if (!token || !secret()) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature || Number(expires) < Date.now() / 1000) return false;
  return safeEqual(signature, sign(`admin.${expires}`));
}

/** Constant-time check of submitted credentials against ADMIN_EMAIL / ADMIN_PASSWORD. */
export function credentialsMatch(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL ?? "";
  const expectedPassword = process.env.ADMIN_PASSWORD ?? "";
  if (!expectedEmail || !expectedPassword) return false;
  // Hash both sides so the comparison length never leaks the real value's length.
  const emailOk = safeEqual(sign(email.trim().toLowerCase()), sign(expectedEmail.trim().toLowerCase()));
  const passwordOk = safeEqual(sign(password), sign(expectedPassword));
  return emailOk && passwordOk;
}
