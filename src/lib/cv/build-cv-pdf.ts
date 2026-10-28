import {
  PDFDocument,
  StandardFonts,
  rgb,
  type PDFFont,
  type PDFPage,
} from "pdf-lib";

import type { GroupedExperience } from "@/lib/experience";
import {
  CHIP_FILL,
  CONTENT_INK,
  FAINT,
  INK,
  MUTED,
  PAGE,
  contentWidth,
  drawTracked,
  trackedWidth,
  wrapText,
} from "./layout";
import { toPdfText } from "./text";

export type CvEducation = {
  degree: string;
  institution: string;
  period: string;
};

export type CvData = {
  name: string;
  kicker: string;
  contactLine: string;
  profile: string[];
  skills: string[];
  experience: GroupedExperience[];
  education: CvEducation[];
  certifications: string[];
  languages: string[];
  footerNote: string;
};

const LABEL_TRACKING = 1.4;
const CHIP_TRACKING = 0.6;
const CHIP_SIZE = 7.5;
const CHIP_PAD_X = 5;
const CHIP_PAD_Y = 3.5;
const CHIP_HEIGHT = CHIP_SIZE + CHIP_PAD_Y * 2;
const CHIP_GAP_X = 4;
const CHIP_GAP_Y = 4;
const BULLET_INDENT = 11;

type Fonts = {
  regular: PDFFont;
  bold: PDFFont;
  oblique: PDFFont;
  mono: PDFFont;
  monoBold: PDFFont;
};

/**
 * pdf-lib has no layout engine, so this walks the page with a cursor: draw at
 * `y`, subtract the block height, and start a new page whenever the next block
 * would collide with the footer rule.
 */
class CvBuilder {
  private page: PDFPage;
  private y: number;

  private constructor(
    private readonly doc: PDFDocument,
    private readonly fonts: Fonts
  ) {
    this.page = doc.addPage([PAGE.width, PAGE.height]);
    this.y = PAGE.height - PAGE.marginTop;
  }

  static async create() {
    const doc = await PDFDocument.create();

    doc.setTitle("Divine Orji - Curriculum Vitae", {
      showInWindowTitleBar: true,
    });
    doc.setCreator("dpkreativ.vercel.app");

    const [regular, bold, oblique, mono, monoBold] = await Promise.all([
      doc.embedFont(StandardFonts.Helvetica),
      doc.embedFont(StandardFonts.HelveticaBold),
      doc.embedFont(StandardFonts.HelveticaOblique),
      doc.embedFont(StandardFonts.Courier),
      doc.embedFont(StandardFonts.CourierBold),
    ]);

    return new CvBuilder(doc, { regular, bold, oblique, mono, monoBold });
  }

  private get floor() {
    return PAGE.marginBottom;
  }

  private get right() {
    return PAGE.marginX + contentWidth();
  }

  private ensureSpace(height: number) {
    if (this.y - height < this.floor) {
      this.page = this.doc.addPage([PAGE.width, PAGE.height]);
      this.y = PAGE.height - PAGE.marginTop;
    }
  }

  /** Draws a single line without moving the cursor. */
  private draw(text: string, options: {
    font: PDFFont;
    size: number;
    x?: number;
    color?: ReturnType<typeof rgb>;
    tracking?: number;
  }) {
    const x = options.x ?? PAGE.marginX;

    if (options.tracking) {
      drawTracked(this.page, text, {
        x,
        y: this.y,
        font: options.font,
        size: options.size,
        tracking: options.tracking,
        color: options.color,
      });

      return;
    }

    this.page.drawText(text, {
      x,
      y: this.y,
      size: options.size,
      font: options.font,
      color: options.color,
    });
  }

  /** Right-aligns `text` on the cursor's baseline. */
  private drawRight(text: string, options: {
    font: PDFFont;
    size: number;
    color?: ReturnType<typeof rgb>;
    tracking?: number;
  }) {
    const width = options.tracking
      ? trackedWidth(text, options.font, options.size, options.tracking)
      : options.font.widthOfTextAtSize(text, options.size);

    this.draw(text, {
      ...options,
      x: this.right - width,
    });
  }

  private rule(options: {
    height?: number;
    color?: ReturnType<typeof rgb>;
    inset?: number;
  } = {}) {
    const { height = 0.75, color = FAINT, inset = 0 } = options;

    this.page.drawRectangle({
      x: PAGE.marginX + inset,
      y: this.y,
      width: contentWidth() - inset * 2,
      height,
      color,
    });

    this.y -= height;
  }

  private paragraph(text: string, options: {
    font?: PDFFont;
    size?: number;
    color?: ReturnType<typeof rgb>;
    indent?: number;
    leading?: number;
  } = {}) {
    const {
      font = this.fonts.regular,
      size = 9.5,
      color = CONTENT_INK,
      indent = 0,
      leading = size * 1.45,
    } = options;

    for (const line of wrapText(text, font, size, contentWidth() - indent)) {
      this.ensureSpace(leading);
      this.draw(line, { font, size, x: PAGE.marginX + indent, color });
      this.y -= leading;
    }
  }

  private bullet(text: string, options: { size?: number } = {}) {
    const size = options.size ?? 9;
    const leading = size * 1.45;
    const lines = wrapText(
      text,
      this.fonts.regular,
      size,
      contentWidth() - BULLET_INDENT
    );

    lines.forEach((line, index) => {
      this.ensureSpace(leading);

      if (index === 0) {
        this.page.drawRectangle({
          x: PAGE.marginX + 1.5,
          y: this.y + size * 0.26,
          width: 2.6,
          height: 2.6,
          color: INK,
        });
      }

      this.draw(line, {
        font: this.fonts.regular,
        size,
        x: PAGE.marginX + BULLET_INDENT,
        color: CONTENT_INK,
      });

      this.y -= leading;
    });
  }

  private sectionHeading(label: string) {
    this.ensureSpace(46);
    this.y -= 16;

    this.draw(toPdfText(label).toUpperCase(), {
      font: this.fonts.monoBold,
      size: 9,
      tracking: LABEL_TRACKING,
      color: INK,
    });

    this.y -= 8;
    this.rule({ height: 0.75, color: INK });
    this.y -= 12;
  }

  /** Rows are measured up front so a chip never gets orphaned by a page break. */
  private skillChips(skills: string[]) {
    const rows: Array<Array<{ text: string; width: number }>> = [];
    let row: Array<{ text: string; width: number }> = [];
    let rowWidth = 0;

    for (const skill of skills) {
      const text = toPdfText(skill).toUpperCase();
      const width =
        trackedWidth(text, this.fonts.monoBold, CHIP_SIZE, CHIP_TRACKING) +
        CHIP_PAD_X * 2;

      if (row.length > 0 && rowWidth + CHIP_GAP_X + width > contentWidth()) {
        rows.push(row);
        row = [];
        rowWidth = 0;
      }

      row.push({ text, width });
      rowWidth += width + (row.length > 1 ? CHIP_GAP_X : 0);
    }

    if (row.length > 0) {
      rows.push(row);
    }

    rows.forEach((chips, rowIndex) => {
      this.ensureSpace(CHIP_HEIGHT);

      let x = PAGE.marginX;
      const top = this.y - CHIP_HEIGHT;

      for (const chip of chips) {
        this.page.drawRectangle({
          x,
          y: top,
          width: chip.width,
          height: CHIP_HEIGHT,
          borderColor: FAINT,
          borderWidth: 0.6,
          color: CHIP_FILL,
        });

        drawTracked(this.page, chip.text, {
          x: x + CHIP_PAD_X,
          y: top + CHIP_PAD_Y + 1,
          font: this.fonts.monoBold,
          size: CHIP_SIZE,
          tracking: CHIP_TRACKING,
          color: INK,
        });

        x += chip.width + CHIP_GAP_X;
      }

      this.y -= CHIP_HEIGHT + (rowIndex < rows.length - 1 ? CHIP_GAP_Y : 0);
    });
  }

  private experienceEntry(group: GroupedExperience, index: number) {
    this.ensureSpace(80);

    if (index > 0) {
      this.y -= 13;
      this.page.drawRectangle({
        x: PAGE.marginX,
        y: this.y,
        width: contentWidth(),
        height: 0.5,
        color: FAINT,
      });
      this.y -= 13;
    }

    this.draw(toPdfText(group.company).toUpperCase(), {
      font: this.fonts.bold,
      size: 9.5,
      color: INK,
    });

    this.drawRight(toPdfText(group.period), {
      font: this.fonts.regular,
      size: 8.5,
      color: MUTED,
    });

    this.y -= 15;

    group.roles.forEach((role, roleIndex) => {
      if (group.roles.length > 1) {
        const label = toPdfText(role.role).toUpperCase();

        this.draw(label, {
          font: this.fonts.monoBold,
          size: 8,
          color: INK,
        });

        this.drawRight(toPdfText(role.period), {
          font: this.fonts.mono,
          size: 7.5,
          color: MUTED,
        });

        this.y -= 14;
      } else {
        this.draw(toPdfText(role.role), {
          font: this.fonts.oblique,
          size: 10,
          color: MUTED,
        });

        this.y -= 14;
      }

      this.paragraph(toPdfText(role.summary));

      if (role.highlights.length > 0) {
        this.y -= 4;

        for (const highlight of role.highlights) {
          this.bullet(toPdfText(highlight), { size: 8.8 });
          this.y -= 2;
        }
      }

      if (roleIndex < group.roles.length - 1) {
        this.y -= 6;
      }
    });
  }

  private educationEntry(entry: CvEducation) {
    this.ensureSpace(42);

    const period = toPdfText(entry.period).toUpperCase();

    this.draw(toPdfText(entry.degree), {
      font: this.fonts.bold,
      size: 10,
      color: INK,
    });

    this.drawRight(period, {
      font: this.fonts.mono,
      size: 7.5,
      tracking: LABEL_TRACKING,
      color: MUTED,
    });

    this.y -= 14;
    this.draw(toPdfText(entry.institution), {
      font: this.fonts.regular,
      size: 9.5,
      color: MUTED,
    });

    this.y -= 15;
  }

  private renderHeader(data: CvData) {
    drawTracked(this.page, toPdfText(data.name).toUpperCase(), {
      x: PAGE.marginX,
      y: this.y,
      font: this.fonts.bold,
      size: 27,
      tracking: 0.6,
      color: INK,
    });

    this.y -= 22;
    this.rule({ height: 2.5, color: INK });
    this.y -= 17;

    drawTracked(this.page, toPdfText(data.kicker).toUpperCase(), {
      x: PAGE.marginX,
      y: this.y,
      font: this.fonts.monoBold,
      size: 8,
      tracking: LABEL_TRACKING,
      color: MUTED,
    });

    this.y -= 16;

    for (const line of wrapText(
      toPdfText(data.contactLine),
      this.fonts.regular,
      8.5,
      contentWidth()
    )) {
      this.draw(line, {
        font: this.fonts.regular,
        size: 8.5,
        color: CONTENT_INK,
      });
      this.y -= 12;
    }
  }

  private drawFooters(note: string) {
    const pages = this.doc.getPages();
    const footerY = PAGE.marginBottom - 28;

    pages.forEach((page, index) => {
      page.drawRectangle({
        x: PAGE.marginX,
        y: footerY + 16,
        width: contentWidth(),
        height: 0.5,
        color: FAINT,
      });

      drawTracked(page, toPdfText(note).toUpperCase(), {
        x: PAGE.marginX,
        y: footerY,
        font: this.fonts.mono,
        size: 6.5,
        tracking: LABEL_TRACKING,
        color: MUTED,
      });

      const marker = `PAGE ${index + 1} / ${pages.length}`;

      drawTracked(page, marker, {
        x:
          PAGE.marginX +
          contentWidth() -
          trackedWidth(marker, this.fonts.mono, 6.5, LABEL_TRACKING),
        y: footerY,
        font: this.fonts.mono,
        size: 6.5,
        tracking: LABEL_TRACKING,
        color: MUTED,
      });
    });
  }

  async render(data: CvData) {
    this.renderHeader(data);

    this.sectionHeading("Profile");

    for (const paragraph of data.profile) {
      this.paragraph(toPdfText(paragraph), { size: 10, leading: 15 });
      this.y -= 5;
    }

    if (data.skills.length > 0) {
      this.sectionHeading("Technical Capabilities");
      this.skillChips(data.skills);
    }

    if (data.experience.length > 0) {
      this.sectionHeading("Experience");
      data.experience.forEach((group, index) =>
        this.experienceEntry(group, index)
      );
    }

    if (data.education.length > 0) {
      this.sectionHeading("Education");
      data.education.forEach((entry) => this.educationEntry(entry));
    }

    if (data.certifications.length > 0) {
      this.sectionHeading("Certifications");

      for (const certification of data.certifications) {
        this.bullet(toPdfText(certification));
        this.y -= 3;
      }
    }

    if (data.languages.length > 0) {
      this.sectionHeading("Languages");
      this.paragraph(
        data.languages.map((language) => toPdfText(language)).join("  ·  "),
        { font: this.fonts.monoBold, size: 8.5, color: INK, leading: 14 }
      );
    }

    this.drawFooters(data.footerNote);

    return this.doc.save();
  }
}

export async function buildCvPdf(data: CvData) {
  const builder = await CvBuilder.create();

  return builder.render(data);
}