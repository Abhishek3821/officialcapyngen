"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, SESSION_MAX_AGE, createSessionToken, credentialsMatch, isAuthConfigured } from "./session";

export type LoginState = { error: string };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  if (!isAuthConfigured()) {
    return { error: "Admin login is not configured on the server. Set ADMIN_EMAIL, ADMIN_PASSWORD and ADMIN_SESSION_SECRET." };
  }

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!credentialsMatch(email, password)) return { error: "Invalid email or password" };

  (await cookies()).set(ADMIN_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: SESSION_MAX_AGE,
  });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete({ name: ADMIN_COOKIE, path: "/admin" });
  redirect("/admin/login");
}
