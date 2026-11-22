import { projects, showreelProjects } from "@/assets/data";

describe("portfolio projects", () => {
  it("lists the seven projects in archive order with case study content", () => {
    expect(projects.map(({ slug, url }) => [slug, url])).toEqual([
      ["crunchies-online", "https://crunchiesonline.com"],
      ["bonjour-quick-bites", "https://bonjourquickbites.com"],
      ["the-iroko-circle", "https://theirokocircle.org"],
      ["noma", "https://noma-study-prep.vercel.app"],
      ["merphils", "https://merphils.com"],
      ["grooovy", "https://grooovy.fun"],
      ["alchemy-of-code", "https://aoc.divineorji.com"],
    ]);
    expect(projects.every(({ caseStudy }) => Boolean(caseStudy?.headline))).toBe(true);
  });

  it("curates the five live showreel previews in the requested order", () => {
    expect(showreelProjects.map(({ slug }) => slug)).toEqual([
      "bonjour-quick-bites",
      "alchemy-of-code",
      "the-iroko-circle",
      "noma",
      "crunchies-online",
    ]);
    expect(showreelProjects.every(({ embeddable, featured }) => embeddable && featured)).toBe(true);
  });
});
