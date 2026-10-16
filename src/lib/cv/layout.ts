import { rgb, type PDFFont, type PDFPage } from "pdf-lib";

export const PAGE = {
  width: 595.28,
  height: 841.89,
  marginX: 48,
  marginTop: 54,
  marginBottom: 62,
};

export const INK = rgb(0.067, 0.067, 0.067);
export const CONTENT_INK = rgb(0.13, 0.13, 0.13);
export const MUTED = rgb(0.39, 0.4, 0.42);
export const FAINT = rgb(0.83, 0.83, 0.84);
export const CHIP_FILL = rgb(0.965, 0.965, 0.97);

export function contentWidth() {
  return PAGE.width - PAGE.marginX * 2;
}

/** Widens every glyph by `tracking` points, mimicking CSS `letter-spacing`. */
export function trackedWidth(
  text: string,
  font: PDFFont,
  size: number,
  tracking: number
) {
  return font.widthOfTextAtSize(text, size) + tracking * Math.max(text.length - 1, 0);
}

export function drawTracked(
  page: PDFPage,
  text: string,
  options: {
    x: number;
    y: number;
    font: PDFFont;
    size: number;
    tracking?: number;
    color?: ReturnType<typeof rgb>;
  }
) {
  const tracking = options.tracking ?? 0;

  if (tracking === 0) {
    page.drawText(text, {
      x: options.x,
      y: options.y,
      size: options.size,
      font: options.font,
      color: options.color ?? INK,
    });

    return;
  }

  let cursor = options.x;

  for (const character of text) {
    page.drawText(character, {
      x: cursor,
      y: options.y,
      size: options.size,
      font: options.font,
      color: options.color ?? INK,
    });

    cursor += options.font.widthOfTextAtSize(character, options.size) + tracking;
  }
}

/** Greedy word wrap that also breaks words longer than the available column. */
export function wrapText(
  text: string,
  font: PDFFont,
  size: number,
  maxWidth: number
) {
  const lines: string[] = [];

  for (const paragraph of text.split("\n")) {
    let line = "";

    for (const word of paragraph.split(/\s+/).filter(Boolean)) {
      const candidate = line ? `${line} ${word}` : word;

      if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
        line = candidate;
        continue;
      }

      if (line) {
        lines.push(line);
      }

      if (font.widthOfTextAtSize(word, size) <= maxWidth) {
        line = word;
        continue;
      }

      let chunk = "";

      for (const character of word) {
        if (font.widthOfTextAtSize(chunk + character, size) > maxWidth && chunk) {
          lines.push(chunk);
          chunk = character;
          continue;
        }

        chunk += character;
      }

      line = chunk;
    }

    if (line) {
      lines.push(line);
    }
  }

  return lines.length > 0 ? lines : [""];
}