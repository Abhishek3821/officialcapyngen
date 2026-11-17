import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "./app/admin/_lib/session";

// Guards the admin portal: every /admin page needs a valid signed session cookie.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const loggedIn = verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value);
  const onLogin = pathname === "/admin/login";

  if (!loggedIn && !onLogin) return NextResponse.redirect(new URL("/admin/login", request.url));
  if (loggedIn && onLogin) return NextResponse.redirect(new URL("/admin", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
