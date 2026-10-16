import { PDFDocument } from 'pdf-lib';
import { buildCvPdf } from '@/lib/cv/build-cv-pdf';
import { collectCvData } from '@/lib/cv/collect-cv-data';
import { toPdfText, stripHtml } from '@/lib/cv/text';
import { groupExperience, type ExperienceItem } from '@/lib/experience';

const ascii = (bytes: Uint8Array) => Buffer.from(bytes).toString('latin1');

describe('groupExperience', () => {
  const item = (over: Partial<ExperienceItem>): ExperienceItem => ({
    role: 'Engineer',
    company: 'Acme',
    period: '2020 - 2021',
    summary: 'Did things.',
    highlights: [],
    ...over,
  });

  it('merges roles that share a company into one block', () => {
    const groups = groupExperience([
      item({ role: 'Head of Engineering', period: 'January 2025 - Present' }),
      item({ role: 'Software Engineer', period: 'January 2019 - Present' }),
    ]);

    expect(groups).toHaveLength(1);
    expect(groups[0].roles.map((role) => role.role)).toEqual([
      'Head of Engineering',
      'Software Engineer',
    ]);
  });

  it('widens the block period to span every merged role', () => {
    const [group] = groupExperience([
      item({ role: 'B', company: 'Acme', period: 'January 2019 - Present' }),
      item({ role: 'A', company: 'Acme', period: 'January 2025 - Present' }),
    ]);

    expect(group.period).toBe('January 2019 - Present');
  });

  it('keeps Present sticky when another role has ended', () => {
    const [group] = groupExperience([
      item({ role: 'B', company: 'Acme', period: 'January 2019 - Present' }),
      item({ role: 'A', company: 'Acme', period: 'March 2020 - June 2022' }),
    ]);

    expect(group.period).toBe('January 2019 - Present');
  });

  it('falls back to the latest end date when no role is ongoing', () => {
    const [group] = groupExperience([
      item({ role: 'A', company: 'Acme', period: 'January 2021 - March 2024' }),
      item({ role: 'B', company: 'Acme', period: 'January 2019 - December 2023' }),
    ]);

    expect(group.period).toBe('January 2019 - March 2024');
  });

  it('matches companies case-insensitively but preserves source order', () => {
    const groups = groupExperience([
      item({ company: 'The Kreativ Studio' }),
      item({ company: '  the kreativ studio ' }),
      item({ company: 'Truparse' }),
    ]);

    expect(groups.map((group) => group.company)).toEqual([
      'The Kreativ Studio',
      'Truparse',
    ]);
  });

  it('defaults missing highlights to an empty array', () => {
    const groups = groupExperience([
      { role: 'A', company: 'Acme', period: '2020 - 2021', summary: 'x' },
    ]);

    expect(groups[0].roles[0].highlights).toEqual([]);
  });
});

describe('toPdfText', () => {
  it('strips tags and decodes entities', () => {
    expect(stripHtml('<p>Built <strong>fast</strong> &amp; shipped.</p>')).toBe(
      'Built fast & shipped.'
    );
  });

  it('drops characters WinAnsi cannot encode, which would otherwise throw', () => {
    expect(toPdfText('Scaled from \u20a6200k to \u20a63M')).toBe(
      'Scaled from NGN200k to NGN3M'
    );
    expect(toPdfText('Load \u2192 convert \u2190 store')).toBe(
      'Load -> convert <- store'
    );
  });

  it('keeps typographic punctuation that WinAnsi does support', () => {
    expect(toPdfText('Ship it \u2014 fast \u2022 reliable \u00b7 tested')).toBe(
      'Ship it \u2014 fast \u2022 reliable \u00b7 tested'
    );
  });
});

describe('buildCvPdf', () => {
  it('renders a valid PDF from the live site content', async () => {
    const bytes = await buildCvPdf(collectCvData());
    const raw = ascii(bytes);

    expect(raw.startsWith('%PDF-')).toBe(true);
    expect(raw.trimEnd().endsWith('%%EOF')).toBe(true);
    expect(bytes.byteLength).toBeGreaterThan(5_000);
  });

  it('paginates rather than overflowing a single page', async () => {
    const bytes = await buildCvPdf(collectCvData());
    const doc = await PDFDocument.load(bytes);

    expect(doc.getPageCount()).toBeGreaterThanOrEqual(1);
    expect(doc.getPageCount()).toBeLessThan(10);
  });

  it('survives content containing unencodable symbols', async () => {
    const data = collectCvData();

    const bytes = await buildCvPdf({
      ...data,
      profile: ['Engineer \u20a6 \u2192 \u00b7 builder'],
      experience: [
        {
          company: 'Acme \u20a6',
          period: '2020 - Present',
          roles: [
            {
              role: 'Engineer',
              period: '2020 - Present',
              summary: 'Grew revenue from \u20a61M.',
              highlights: ['Shipped \u2192 prod'],
            },
          ],
        },
      ],
    });

    expect(ascii(bytes).startsWith('%PDF-')).toBe(true);
  });

  it('produces a page for empty optional sections', async () => {
    const data = collectCvData();

    const bytes = await buildCvPdf({
      ...data,
      skills: [],
      education: [],
      certifications: [],
      languages: [],
      experience: [],
    });

    const doc = await PDFDocument.load(bytes);

    expect(doc.getPageCount()).toBe(1);
  });
});

describe('collectCvData', () => {
  it('exposes every About page section the renderer draws', () => {
    const data = collectCvData();

    expect(data.name).toBeTruthy();
    expect(data.kicker).toBeTruthy();
    expect(data.contactLine).toContain('@');
    expect(data.profile.length).toBeGreaterThan(0);
    expect(data.skills.length).toBeGreaterThan(0);
    expect(data.experience.length).toBeGreaterThan(0);
    expect(data.education.length).toBeGreaterThan(0);
    expect(data.certifications.length).toBeGreaterThan(0);
    expect(data.languages.length).toBeGreaterThan(0);
  });

  it('strips scheme and www from the contact line', () => {
    const { contactLine } = collectCvData();

    expect(contactLine).not.toContain('https://');
    expect(contactLine).not.toContain('www.');
  });

  it('keeps the contact line to a single line by dropping the notion link', () => {
    const { contactLine } = collectCvData();

    expect(contactLine).toContain('linkedin.com/in/dpkreativ');
    expect(contactLine).toContain('github.com/dpkreativ');
    expect(contactLine).not.toContain('notion.site');
    expect(contactLine).not.toContain('?');
  });
});