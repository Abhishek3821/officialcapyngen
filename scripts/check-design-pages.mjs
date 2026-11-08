import assert from "node:assert/strict";

// Run against next dev as well as next start: development catches Image prop
// errors that Next.js deliberately omits from the production build.
const origin = process.argv[2] ?? "http://localhost:3000";
const pages = {
  "/ui-ux-design": ["school-heading", "academics-heading", "approach-heading", "strategy-heading", "growth-heading", "implementation-heading"],
  "/website-design": ["website-design-heading", "work-heading", "voices-heading", "podcast-heading", "subscribe-heading", "benefits-heading", "episodes-heading"],
};

async function request(path) {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path} must return HTTP 200`);
  return response;
}

for (const [path, headings] of Object.entries(pages)) {
  const html = await (await request(path)).text();
  assert(!html.includes('id="__next_error__"'), `${path} must render without a Next.js error`);
  const cssPaths = [...html.matchAll(/<link\b[^>]*href="([^"]+)"[^>]*>/g)]
    .filter(([tag]) => tag.includes('rel="stylesheet"'))
    .map(([, href]) => href.replaceAll("&amp;", "&"));
  assert(cssPaths.length > 0, `${path} must load stylesheets`);
  const css = (await Promise.all(cssPaths.map(async href => (await request(href)).text()))).join("\n");
  for (const heading of headings) {
    const sections = [...html.matchAll(/<section\b[^>]*>/g)].filter(([tag]) => tag.includes(`aria-labelledby="${heading}"`));
    assert.equal(sections.length, 1, `${heading} must appear exactly once`);
    const className = sections[0][0].match(/class="([^"]+)"/)?.[1].split(" ")[0];
    assert(className, `${heading} must retain its CSS Module class`);
    assert(css.includes(`.${className}`), `${heading} must have matching compiled CSS`);
  }
  console.log(`PASS ${path}: HTTP 200, ${headings.length} styled sections, all stylesheets available`);
}

for (const image of [
  "/images/ui-ux-design/campus.jpg",
  "/images/ui-ux-design/classroom.jpg",
  "/images/website-design/editorial-desk.webp",
  "/images/website-design/how-we-work.webp",
  "/images/website-design/podcast-studio.webp",
  "/images/website-design/studio-microphone.webp",
]) {
  const response = await request(image);
  assert(response.headers.get("content-type")?.startsWith("image/"), `${image} must be an image`);
  await response.arrayBuffer();
}
console.log("PASS all representative design assets are available");
