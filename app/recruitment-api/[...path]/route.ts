// Proxy for the public recruitment API used by the Careers pages.
// The API origin-gates requests to https://capyngen.com, so a page on any
// other origin (localhost, preview domains) can't call it directly (403).
// This forwards the request server-side with the allowed Origin.

const TARGET = "https://api.orinite.com/api/v1/public/recruitment";
const ALLOWED_ORIGIN = "https://capyngen.com";

async function forward(request: Request, path: string[]) {
  const search = new URL(request.url).search;
  const url = `${TARGET}/${path.map(encodeURIComponent).join("/")}${search}`;

  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);
  headers.set("accept", request.headers.get("accept") ?? "application/json");
  headers.set("origin", ALLOWED_ORIGIN);

  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  const upstream = await fetch(url, {
    method: request.method,
    headers,
    body: hasBody ? await request.arrayBuffer() : undefined,
    cache: "no-store",
  });

  const responseHeaders = new Headers();
  const upstreamType = upstream.headers.get("content-type");
  if (upstreamType) responseHeaders.set("content-type", upstreamType);

  return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
}

export async function GET(request: Request, ctx: { params: Promise<{ path: string[] }> }) {
  return forward(request, (await ctx.params).path);
}

export async function POST(request: Request, ctx: { params: Promise<{ path: string[] }> }) {
  return forward(request, (await ctx.params).path);
}
