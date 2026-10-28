const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ndash: "-",
  mdash: "—",
  hellip: "...",
};

const REPLACEMENTS: Record<string, string> = {
  "\u20a6": "NGN", // ₦ naira
  "\u2192": "->", // → arrow
  "\u2190": "<-", // ← arrow
  "\u00a0": " ", // non-breaking space
  "\u00ad": "", // soft hyphen
  "\u2018": "'",
  "\u2019": "'",
  "\u201c": '"',
  "\u201d": '"',
  "\u2013": "-",
  "\u2026": "...",
  "\u2713": "",
  "\u2714": "",
};

/**
 * WinAnsi (the encoding behind every PDF standard font) stops at Latin-1 plus a
 * handful of typographic characters. Anything outside that range makes
 * `drawText` throw, which would take down the whole route, so unknown symbols
 * are transliterated or dropped before they reach the page.
 */
const UNSUPPORTED =
  /[^\t\n\x20-\x7e\xa0-\xff\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u2026\u20ac\u2122]/g;

export function stripHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|li|div|h[1-6])>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity: string) => {
      if (entity.startsWith("#x") || entity.startsWith("#X")) {
        return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
      }

      if (entity.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
      }

      return ENTITIES[entity.toLowerCase()] ?? match;
    })
    .replace(/\s+/g, " ")
    .trim();
}

/** Normalizes arbitrary content strings into safe, single-line PDF text. */
export function toPdfText(value: string) {
  const flattened = stripHtml(value).replace(/\s+/g, " ");

  const substituted = [...flattened]
    .map((character) => REPLACEMENTS[character] ?? character)
    .join("");

  return substituted.replace(UNSUPPORTED, "").trim();
}