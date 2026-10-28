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
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { groupExperience, type ExperienceItem } from "@/lib/experience";
import type { CvData } from "./build-cv-pdf";

function shortenUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

// The Notion portfolio link carries a `?pvs=` query string and wraps onto a
// second line at CV text sizes, so only the recognisable profile links are kept.
const CONTACT_SOCIAL_TYPES = new Set(["linkedin", "github", "youtube"]);

function buildContactLine() {
  const profiles = socials
    .filter((social) => CONTACT_SOCIAL_TYPES.has(social.type))
    .map((social) => shortenUrl(social.url));

  return [
    contact.email,
    contact.phone,
    shortenUrl(contact.website || SITE_URL),
    ...profiles,
  ]
    .filter(Boolean)
    .join("  ·  ");
}

/** Maps `src/data/content.json` onto the shape the PDF renderer consumes. */
export function collectCvData(): CvData {
  return {
    name: SITE_NAME,
    kicker: roleKicker,
    contactLine: buildContactLine(),
    profile: aboutMe,
    skills,
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