import {
  aboutMe,
  certifications,
  contact,
  education,
  experience,
  languages,
  roleKicker,
  skills,
  socials,
} from "@/assets/data";
import content from "@/data/content.json";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { groupExperience, type ExperienceItem } from "@/lib/experience";
import type { CvData, CvSelectedWork } from "./build-cv-pdf";

const BLOG_URL = "https://divineorji.com/blog";
const LOCATION_NOTE = "Remote (UTC+1)";

export function shortenUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

function formatInternationalPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("0")) {
    return `+234 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }

  return phone;
}

// The Notion portfolio link carries a `?pvs=` query string and wraps onto a
// second line at CV text sizes, so only the recognisable profile links are kept.
const CONTACT_SOCIAL_TYPES = new Set(["linkedin", "github", "youtube"]);

function buildContactLine() {
  const profiles = socials
    .filter((social) => CONTACT_SOCIAL_TYPES.has(social.type))
    .map((social) => shortenUrl(social.url));

  const primaryLine = [
    contact.email,
    formatInternationalPhone(contact.phone),
    shortenUrl(contact.website || SITE_URL),
    shortenUrl(BLOG_URL),
  ]
    .filter(Boolean)
    .join("  ·  ");

  const secondaryLine = [...profiles, LOCATION_NOTE].filter(Boolean).join("  ·  ");

  return [primaryLine, secondaryLine].filter(Boolean).join("\n");
}

function collectSelectedWork(): CvSelectedWork[] {
  const stackByUrl = new Map<string, string[]>(
    content.projects.map((project) => [shortenUrl(project.url), [...project.stack]])
  );

  return content.selectedWork.map((item) => {
    const stack = stackByUrl.get(shortenUrl(item.url));

    return stack && stack.length > 0 ? { ...item, stack } : { ...item };
  });
}

/** Maps `src/data/content.json` onto the shape the PDF renderer consumes. */
export function collectCvData(): CvData {
  return {
    name: SITE_NAME,
    kicker: roleKicker,
    contactLine: buildContactLine(),
    profile: aboutMe,
    skills,
    selectedWork: collectSelectedWork(),
    experience: groupExperience(experience as ExperienceItem[]),
    education: education.map((entry) => ({
      degree: entry.degree,
      institution: entry.institution,
      period: entry.period,
    })),
    certifications,
    languages,
    footerNote: `${SITE_URL} // ${SITE_NAME}`,
  };
}
