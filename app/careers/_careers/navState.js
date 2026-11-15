'use client';

// Next.js has no router "state" like React Router's navigate(path, { state }).
// The Careers pages pass the selected job / branding / department between
// pages that way, so this keeps the same API: the state is held in memory
// (keyed by destination path) for client-side navigations. On a direct or
// shared link there is no state — exactly like React Router — and each page
// falls back to fetching what it needs from the API.

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const stateByPath = new Map();

export function useNavigate() {
  const router = useRouter();
  return (path, options = {}) => {
    if (options.state !== undefined) stateByPath.set(path, options.state);
    else stateByPath.delete(path);
    router.push(path);
  };
}

export function useLocation() {
  const pathname = usePathname();
  return useMemo(
    () => ({ pathname, state: stateByPath.get(pathname) ?? null }),
    [pathname],
  );
}
