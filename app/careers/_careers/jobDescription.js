// Parses the recruitment API's job `description` into renderable blocks.
//
// Descriptions arrive in whatever shape the HRMS stored them:
//   - rich-text HTML from its editor ("<h2>Position Details</h2><p>...")
//   - markdown with the newlines stripped ("# Title ## Summary * bullet ...")
//   - plain text
// HTML is first converted to the markdown dialect below (tags are never
// rendered — blocks become plain React text, so hostile markup is inert),
// then everything goes through the same line-based parser.
// (The API's `formattedDescription.blocks` is unreliable — it splits
// mid-sentence — so we always parse `description` ourselves.)

// --- HTML handling ---------------------------------------------------------

// True when the text contains real HTML markup rather than markdown/plain
// text. Matches known tags only, so "a < b" or "<3" never trigger it.
const HTML_TAG =
  /<\/?(h[1-6]|p|div|ul|ol|li|br|hr|strong|b|em|i|u|s|span|a|table|thead|tbody|tr|td|th|blockquote|section|article|font)(\s[^>]*)?\/?>/i;
const looksLikeHtml = (raw) => HTML_TAG.test(String(raw));

const NAMED_ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’",
  ldquo: "“", rdquo: "”", hellip: "…", bull: "•",
  middot: "·", copy: "©", reg: "®", trade: "™",
};

const decodeEntities = (text) =>
  text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number(num)))
    .replace(/&([a-z]+);/gi, (m, name) => NAMED_ENTITIES[name.toLowerCase()] ?? m)
    .replace(/ /g, " ");

// Convert rich-text HTML to the flattened-markdown dialect the parser below
// understands: headings -> "# ", list items -> "* " / "1. ", bold -> **...**,
// other block boundaries -> newlines, everything else stripped.
const htmlToMarkdown = (raw) => {
  const text = String(raw)
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\s*(br|hr)\s*\/?\s*>/gi, "\n")
    .replace(/<\s*h([1-6])(\s[^>]*)?>/gi, (_, level) => `\n${"#".repeat(Number(level))} `)
    // Number ordered-list items so they keep their 1., 2., ... sequence.
    .replace(/<\s*ol(\s[^>]*)?>([\s\S]*?)<\/\s*ol\s*>/gi, (_, attrs, body) => {
      let n = 0;
      return `\n${body.replace(/<\s*li(\s[^>]*)?>/gi, () => `\n${++n}. `)}\n`;
    })
    .replace(/<\s*li(\s[^>]*)?>/gi, "\n* ")
    .replace(/<\/?\s*(strong|b)(\s[^>]*)?>/gi, "**")
    // Any other block tag (open or close) just ends the current line.
    .replace(/<\/?\s*(h[1-6]|p|div|ul|ol|li|section|article|table|thead|tbody|tr|td|th|blockquote)(\s[^>]*)?>/gi, "\n")
    // Remaining inline/unknown tags contribute nothing.
    .replace(/<[^>]+>/g, "")
    // Empty bold runs left by "<strong> </strong>" would render as literal **.
    .replace(/\*\*(\s*)\*\*/g, "$1");
  return decodeEntities(text);
};

// Flatten rich text (or plain text with entities) to one readable line — for
// fields like requirements items that render as plain strings.
export const htmlToPlainText = (raw) => {
  const text = String(raw ?? "");
  if (!looksLikeHtml(text) && !/&[a-z#]/i.test(text)) return text.trim();
  return htmlToMarkdown(text)
    .split("\n")
    .map((line) => line.replace(/^\s*(#{1,6}|[*•-]|\d{1,2}[.)])\s+/, "").trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

// Re-insert a newline before every block-level markdown marker. Markers only
// count when surrounded by whitespace, so "C#", "**bold**" and "3-5 years"
// are never split.
const restoreLineBreaks = (raw) => {
  let text = String(raw).replace(/\r\n?/g, "\n").trim();
  // Headings: "## Heading"
  text = text.replace(/(^|\s)(#{1,6})[ \t]+/g, "\n$2 ");
  // Bullets: a spaced "* " or "• " (a lone spaced asterisk is never part of
  // "**bold**", whose asterisks are flanked by "*" on one side).
  text = text.replace(/(^|\s)[*•][ \t]+/g, "\n* ");
  // Ordered items: "1. Item" — only before a capital, so a sentence like
  // "version 2. next" isn't mistaken for a list.
  text = text.replace(/(^|\s)(\d{1,2})\.[ \t]+(?=[A-Z])/g, "\n$2. ");
  return text;
};

// Because the newlines are stripped, a heading can absorb the paragraph that
// followed it ("## Job Summary The HR Head is responsible..."). Section names
// JDs commonly use, longest-first, to find where the real heading ends.
const KNOWN_SECTIONS = [
  "key performance indicators (kpis)",
  "key performance indicators",
  "roles and responsibilities",
  "preferred qualifications",
  "key responsibilities",
  "about the company",
  "preferred skills",
  "required skills",
  "job description",
  "responsibilities",
  "what you will do",
  "about the role",
  "qualifications",
  "what you'll do",
  "what we offer",
  "job overview",
  "requirements",
  "compensation",
  "job summary",
  "who we are",
  "experience",
  "education",
  "reporting",
  "about us",
  "benefits",
  "location",
  "overview",
  "summary",
  "skills",
  "salary",
  "perks",
];

// A joiner lets a known section name extend without starting a sentence:
// "Required Skills & Competencies" is still a title, "Salary up to X" is not.
const SECTION_JOINER = /^\s*([&/+(]|and\b)/i;

// HTML descriptions often leave section titles as bare text between blocks
// ("...</p>Key Responsibilities<ul>..."). Recognize a plain line that IS a
// section title so it renders as a heading; sentence-like lines stay
// paragraphs. Returns the cleaned title or null.
const asSectionHeading = (line) => {
  const plain = line.replace(/\*\*/g, "").replace(/:\s*$/, "").trim();
  if (!plain || plain.length > 60 || /[.!?,:](\s|$)/.test(plain)) return null;
  const lower = plain.toLowerCase();
  for (const name of KNOWN_SECTIONS) {
    if (lower === name) return plain;
    if (lower.startsWith(name) && SECTION_JOINER.test(lower.slice(name.length))) {
      return plain;
    }
  }
  return null;
};

// Words that typically start the sentence trailing a merged heading.
const SENTENCE_STARTERS = /^(The|This|These|We|Our|You|Your|It|A|An)$/;

// Split heading text that swallowed its body. Returns [heading, body] where
// either may be null: short marker-free text is all heading; text with no
// detectable boundary is demoted to a paragraph rather than shown as a
// paragraph-length heading.
const splitHeadingBody = (text) => {
  if (text.length <= 60 && !/[.!?](\s|$)/.test(text)) return [text, null];

  const lower = text.toLowerCase();
  for (const name of KNOWN_SECTIONS) {
    if (lower === name) return [text, null];
    if (lower.startsWith(name) && /\s/.test(text[name.length])) {
      return [text.slice(0, name.length), text.slice(name.length).trim()];
    }
  }

  const words = text.split(/\s+/);
  for (let i = 1; i < Math.min(words.length, 10); i++) {
    if (SENTENCE_STARTERS.test(words[i])) {
      return [words.slice(0, i).join(" "), words.slice(i).join(" ")];
    }
  }

  return [null, text];
};

/**
 * Parse a job description into blocks:
 *   { type: "heading", level: 1-6, text }
 *   { type: "list", ordered: boolean, items: string[] }
 *   { type: "paragraph", text }
 */
export const parseJobDescription = (raw, jobTitle = "") => {
  if (!raw || !String(raw).trim()) return [];

  const source = looksLikeHtml(raw) ? htmlToMarkdown(raw) : String(raw);
  const lines = restoreLineBreaks(source)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const blocks = [];
  const pushListItem = (item, ordered) => {
    const last = blocks[blocks.length - 1];
    if (last?.type === "list" && last.ordered === ordered) {
      last.items.push(item);
    } else {
      blocks.push({ type: "list", ordered, items: [item] });
    }
  };

  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const [headText, bodyText] = splitHeadingBody(heading[2].trim());
      if (headText) {
        blocks.push({
          type: "heading",
          level: heading[1].length,
          text: headText,
        });
      }
      if (bodyText) {
        blocks.push({ type: "paragraph", text: bodyText });
      }
      continue;
    }

    const bullet = line.match(/^[*•-]\s+(.+)$/);
    if (bullet) {
      pushListItem(bullet[1].trim(), false);
      continue;
    }

    const ordered = line.match(/^\d{1,2}[.)]\s+(.+)$/);
    if (ordered) {
      pushListItem(ordered[1].trim(), true);
      continue;
    }

    const section = asSectionHeading(line);
    if (section) {
      blocks.push({ type: "heading", level: 3, text: section });
      continue;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  // The page header already shows the job title — drop leading blocks that
  // just repeat it: "# Job Title: ...", "# Sales Executive", or a bare
  // "Sales Executive – Job Description" line.
  const normalize = (s) =>
    s.replace(/\*\*/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const title = normalize(jobTitle || "");
  const titleEchoes = new Set([
    "job description",
    ...(title
      ? [title, `${title} job description`, `job description ${title}`, `job title ${title}`]
      : []),
  ]);
  while (blocks.length > 0) {
    const first = blocks[0];
    if (first.type !== "heading" && first.type !== "paragraph") break;
    const norm = normalize(first.text);
    const isEcho =
      titleEchoes.has(norm) ||
      (first.type === "heading" && /^job\s*title\b/.test(norm));
    if (!isEcho) break;
    blocks.shift();
  }

  return blocks;
};

// Split "**bold**" runs out of a text line. Returns [{ text, bold }, ...] so
// the renderer can wrap bold segments without dangerouslySetInnerHTML.
export const splitBoldSegments = (text) =>
  String(text)
    .split(/\*\*([^*]+)\*\*/g)
    .map((part, i) => ({ text: part, bold: i % 2 === 1 }))
    .filter((seg) => seg.text !== "");
