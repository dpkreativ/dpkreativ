import content from "@/data/content.json";

type ProjectSlug = (typeof content.projects)[number]["slug"];
type Brand = (typeof content.brands)[number];
type RawProject = (typeof content.projects)[number];

type CaseStudyStep = {
  eyebrow: string;
  title: string;
  details: string[];
};

type CaseStudy = {
  headline: string;
  timeline: string;
  role: string;
  services: string[];
  goals: string[];
  process: CaseStudyStep[];
  results: string[];
  reflection: string;
};

function normalizeLabel(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function getProjectBrand(project: RawProject, brands: Brand[]) {
  const projectLabels = [project.title, project.client].map(normalizeLabel);

  return (
    brands.find((brand) => {
      const brandLabel = normalizeLabel(brand.title);

      return projectLabels.some(
        (projectLabel) =>
          projectLabel === brandLabel ||
          projectLabel.includes(brandLabel) ||
          brandLabel.includes(projectLabel),
      );
    }) ?? null
  );
}

const projectCaseStudies: Record<ProjectSlug, CaseStudy> = {
  "crunchies-online": {
    headline:
      "Rebuilt the ordering experience around speed, clarity, and delivery confidence.",
    timeline: "2024",
    role: "Lead Fullstack Developer",
    services: [
      "Product Thinking",
      "UI Redesign",
      "Frontend Engineering",
      "Location Experience",
    ],
    goals: [
      "Make ordering and outlet discovery easier for first-time and returning customers.",
      "Redesign the interface so the product feels clear, trustworthy, and fast on mobile.",
      "Turn location selection into a core part of the journey instead of a point of friction.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Find the exact moments where ordering confidence drops.",
        details: [
          "The early framing centered on reducing confusion in the ordering flow, especially around delivery choices and outlet discovery.",
          "Instead of treating the redesign as a visual refresh alone, the product direction focused on making the next action obvious at every step.",
        ],
      },
      {
        eyebrow: "Friction Mapping",
        title: "Trace the decisions customers struggle to make mid-journey.",
        details: [
          "The UI was redesigned to create a more intuitive structure, clearer hierarchy, and stronger calls to action across key customer journeys.",
          "Location-aware interactions were brought forward so users could choose delivery points and discover nearby Crunchies outlets with less effort.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Rebuild the flow around simpler choices and clearer next steps.",
        details: [
          "The experience was refined around the moments where customers choose how to receive an order, where it should go, and what outlet makes sense for them.",
          "That made the product feel less like a generic menu surface and more like a guided ordering journey that answers practical questions early.",
        ],
      },
      {
        eyebrow: "Build and Rollout",
        title: "Ship the faster experience and location-aware tools.",
        details: [
          "Next.js and Tailwind CSS provided the foundation for a responsive, performance-minded build that was easier to scale and maintain.",
          "Google Maps integration connected interface decisions to a practical customer need, making delivery planning part of the product experience itself.",
        ],
      },
    ],
    results: [
      "Delivered a cleaner ordering journey built around the decisions customers actually need to make.",
      "Made delivery selection and nearby outlet discovery feel like natural parts of the product instead of hidden edge cases.",
      "Created a faster, more modern digital experience that better matched the brand's ambition and operational needs.",
    ],
    reflection:
      "The strongest e-commerce improvements usually come from removing uncertainty. Once customers know what to do next, conversion and trust become much easier to earn.",
  },
  merphils: {
    headline:
      "Designing a unified education platform where schools, families, educators, and learners can move across roles without losing continuity.",
    timeline: "In Progress",
    role: "Product Engineer",
    services: [
      "Product Strategy",
      "Role-Based Access Design",
      "Platform UX",
      "Frontend Systems",
    ],
    goals: [
      "Unify school operations, family access, and learner history in one platform instead of fragmented portals.",
      "Make one account work across multiple schools, children, and roles while keeping school data private by default.",
      "Lay the groundwork for future network features such as study circles, resource sharing, and tutor discovery.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Start where education platforms usually break: fragmented identity.",
        details: [
          "The core product decision was to treat identity as shared across schools, roles, and relationships rather than forcing separate accounts for every context.",
          "That framing made it possible to design around one learner history, one family surface, and one person moving between roles like owner, staff member, parent, or student.",
        ],
      },
      {
        eyebrow: "Constraint Mapping",
        title: "Define access rules without losing continuity for the user.",
        details: [
          "The platform is being shaped around strict access boundaries so each school only exposes the information relevant to that context while still preserving continuity for the user.",
          "The experience has to make context-switching feel simple for families and administrators without weakening privacy or permission controls behind the scenes.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Turn school operations into product surfaces people can actually navigate.",
        details: [
          "The platform is being structured around the daily jobs schools and families need to complete, from classes and assignments to admissions, grades, and finance.",
          "That keeps the product grounded in operational clarity instead of letting the access model become an abstract architecture exercise.",
        ],
      },
      {
        eyebrow: "Platform Implementation",
        title: "Build today's school workflows without blocking tomorrow's network features.",
        details: [
          "Current product work is focused on the workflows schools need immediately, including classes, assignments, grades, academic history, admissions, and finance.",
          "At the same time, the structure is being kept flexible enough to support future network features like tutor discovery, study circles, and resource sharing across education contexts.",
        ],
      },
      {
        eyebrow: "Current State",
        title: "Push the platform toward a first cohesive operations release.",
        details: [
          "Right now the work is centered on tightening the relationship between identity, permissions, and the operational surfaces schools and families will use most often.",
          "The immediate goal is to get the core school workflows feeling stable and coherent before broader collaboration features become part of the next phase of the product.",
        ],
      },
    ],
    results: [
      "Established a clearer product direction around one account across schools, children, and roles.",
      "Defined an access model that protects school boundaries while preserving learner continuity over time.",
      "Created a platform foundation that can support school operations now and broader education collaboration later.",
    ],
    reflection:
      "Education platforms break down when identity is fragmented. The real work is making continuity feel simple without weakening access boundaries.",
  },
  grooovy: {
    headline:
      "Designing a vibe-first event platform that turns social discovery, signup, and planning into one fast flow.",
    timeline: "In Progress",
    role: "Product Designer and Frontend Engineer",
    services: [
      "Product Experience",
      "Onboarding and Auth Flows",
      "Dashboard UX",
      "Frontend Delivery",
    ],
    goals: [
      "Make nightlife and social event discovery feel closer to the way people actually decide what to do.",
      "Connect public browsing, guided onboarding, and signed-in planning tools without losing momentum.",
      "Build a warm, cinematic, mobile-friendly interface that still supports host, wallet, and admin workflows.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Start with the messy way people actually discover plans.",
        details: [
          "The public product surface is being shaped around curated event discovery so the browsing experience feels more like reading the city's mood than navigating a cold listings directory.",
          "Event detail pages, related events, and RSVP or checkout flows are designed to keep users moving from interest to action without unnecessary detours.",
        ],
      },
      {
        eyebrow: "Insight Layer",
        title: "Use onboarding to turn personal taste into product context.",
        details: [
          "The onboarding flow asks new users for their city and preferred vibes before account creation so the signed-in experience can feel more personal from the start.",
          "Authentication, password recovery, and protected dashboard access are being treated as part of the product experience, not just background account plumbing.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Design event pages to keep curiosity moving toward commitment.",
        details: [
          "Individual event pages are being designed to balance mood, core logistics, related events, and RSVP or checkout actions without stalling the user.",
          "That flow matters because discovery products only work when the jump from maybe to I'm in feels short and obvious.",
        ],
      },
      {
        eyebrow: "Product Build",
        title: "Extend the fix beyond browsing into plans, tickets, wallets, and hosting.",
        details: [
          "The signed-in product includes upcoming plans, saved and past events, ticket views, wallet activity, and personalized identity details like city and vibe tags.",
          "Host and admin surfaces are being designed alongside the user journey so event creation, attendee visibility, payouts, and summary analytics all live inside the same broader ecosystem.",
        ],
      },
      {
        eyebrow: "Current State",
        title: "Tighten the handoff from discovery into the signed-in product.",
        details: [
          "The project is currently at the point where public event discovery, onboarding, and dashboard behavior are being refined into a smoother end-to-end flow.",
          "The focus now is making sure the product feels just as strong after login as it does during first-touch browsing, especially across plans, tickets, wallets, and host tools.",
        ],
      },
    ],
    results: [
      "Established a product structure that connects discovery, onboarding, and signed-in planning in one coherent experience.",
      "Built out core flows for event exploration, account creation, personalized dashboards, and host tooling.",
      "Created a foundation for a multi-surface social product that can grow from weekend plans into a broader event ecosystem.",
    ],
    reflection:
      "Event products live or die on momentum. Every screen should shorten the distance between curiosity and commitment.",
  },
  "kadric-ltd": {
    headline:
      "Improved the UI of an existing WordPress and Elementor brochure site for an industrial supplier, with clearer content and enquiry paths.",
    timeline: "2024",
    role: "Web Strategist and Product Engineer",
    services: [
      "B2B Website Strategy",
      "UI Improvement",
      "WordPress and Elementor",
      "Enquiry Flow",
    ],
    goals: [
      "Improve the UI of the existing brochure-style website without rebuilding the site from scratch.",
      "Make Kadric's services and product range easier for potential clients to understand quickly.",
      "Create a clearer path for clients to send enquiries through the site's forms.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Start from an existing site that needed much stronger UI clarity.",
        details: [
          "The website already existed in WordPress and Elementor, so the job was not to reinvent the product but to improve the interface and overall presentation.",
          "The core issue was clarity: the UI needed to do a better job of presenting Kadric's services, product areas, and credibility in a way potential clients could grasp quickly.",
        ],
      },
      {
        eyebrow: "Friction Mapping",
        title: "Find where the brochure experience felt weak or visually unclear.",
        details: [
          "The content and interface needed better hierarchy so visitors could move through the site without the layout feeling dated or difficult to scan.",
          "Visual polish, spacing, and content placement became the main levers for making the brochure site feel more trustworthy and easier to use.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Improve the structure and presentation without overcomplicating the site.",
        details: [
          "The UI was refined around clearer sections, better content grouping, and a more readable presentation of Kadric's offer.",
          "That kept the site true to its brochure-style purpose while making it easier for clients to understand what the business does and why they should reach out.",
        ],
      },
      {
        eyebrow: "Enquiry Path",
        title: "Make the forms feel like a natural route for client enquiries.",
        details: [
          "The forms were positioned and framed as a straightforward way for potential clients to send enquiries after understanding the company and its services.",
          "That gave the site a clearer next step without pretending it was anything more complex than a brochure website meant to start conversations.",
        ],
      },
    ],
    results: [
      "Improved the overall UI and presentation of an existing WordPress and Elementor website.",
      "Made Kadric's services and product information easier for visitors to understand.",
      "Created a clearer path for potential clients to send enquiries through the site's forms.",
    ],
    reflection:
      "Even a straightforward brochure site does real work when the UI is clear, the content is easy to scan, and the path to enquire feels obvious.",
  },
  "the-iroko-circle": {
    headline:
      "Shaped a literary community platform that makes African stories easier to discover, discuss, and support.",
    timeline: "2024",
    role: "Web Designer and Developer",
    services: [
      "Editorial Website Design",
      "Community UX",
      "Information Architecture",
      "CMS Implementation",
    ],
    goals: [
      "Give essays, reviews, poetry, features, and short stories a clearer editorial home.",
      "Support community growth through submissions, chapters, join flows, and newsletter touchpoints.",
      "Express the mission with enough warmth that readers feel invited, not just informed.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Start with the risk of good stories feeling scattered or hard to enter.",
        details: [
          "The site architecture gives distinct space to essays, features, poetry, reviews, and short stories so readers can browse African literature through clear editorial pathways.",
          "Homepage storytelling, featured pieces, and mission framing work together to make the platform feel like a living literary surface rather than a static archive.",
        ],
      },
      {
        eyebrow: "Friction Mapping",
        title: "Spot where readers need clearer invitations into the community.",
        details: [
          "Join the Circle, chapters, submissions, donate, and partner pathways are treated as core parts of the experience so visitors can move from reading to belonging.",
          "The community surface is designed to support both casual readers and people who want a deeper role in growing the literary ecosystem.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Restructure discovery so every content type has a clearer path.",
        details: [
          "Essays, features, poetry, reviews, and short stories are organized as distinct but connected paths so the platform feels editorially rich without becoming confusing to browse.",
          "Featured content, shelf structure, and mission-led copy help new visitors understand both what is published and why the platform exists.",
        ],
      },
      {
        eyebrow: "Experience Build",
        title: "Carry the fix through brand, publishing, and participation surfaces.",
        details: [
          "The visual and content direction is built to amplify African stories while keeping navigation, submissions, and newsletter touchpoints easy to understand.",
          "That balance matters because community publishing platforms need emotional resonance, but they also need enough structure for readers and contributors to trust the system.",
        ],
      },
    ],
    results: [
      "Created a clearer editorial home for African stories across multiple content formats.",
      "Made community entry points like joining, submitting, donating, and chapter participation easier to find.",
      "Aligned the site more closely with The Iroko Circle's mission of reading, discussing, and amplifying African stories.",
    ],
    reflection:
      "Community publishing platforms need more than content. They need clear invitations into the conversation.",
  },
  "the-bakistry": {
    headline:
      "Translated a cake brand into a storefront that sells freshness, speed, and celebration from the first scroll.",
    timeline: "2024",
    role: "E-commerce Designer and Developer",
    services: [
      "Storefront UX",
      "Merchandising Structure",
      "Brand Translation",
      "E-commerce Implementation",
    ],
    goals: [
      "Make the brand feel handcrafted and premium while keeping the buying path simple.",
      "Help customers browse by occasion, speed, and product type instead of getting lost in a flat catalog.",
      "Support fast ordering with a storefront that reinforces delivery confidence and visual appetite.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Start from the gap between handcrafted brand feeling and shopping clarity.",
        details: [
          "The product direction starts from a simple promise: every celebration deserves something that tastes as good as it looks.",
          "That meant translating warmth, freshness, and premium craft into a storefront that still feels practical to shop from.",
        ],
      },
      {
        eyebrow: "Friction Mapping",
        title: "See where customers need faster routes into the right product type.",
        details: [
          "The storefront organizes buying around categories like Budget Express Cakes, Classic Express Cakes, Gateaux, Cupcakes, Combos, Kiddies, and Treats so customers can narrow in quickly.",
          "Featured products, flavour options, and category-led browsing help the site support both fast everyday orders and more deliberate celebration purchases.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Connect appetite, speed, and trust inside one storefront flow.",
        details: [
          "Delivery messaging, top selections, and product cards are arranged to reassure buyers that the brand can move from beautiful presentation to actual fulfillment quickly.",
          "That keeps the storefront persuasive for celebration purchases without making customers work too hard to understand what to buy next.",
        ],
      },
      {
        eyebrow: "Commerce Build",
        title: "Carry the fix through to checkout confidence.",
        details: [
          "Fast-delivery messaging, product cards, cart access, and editorial updates are all positioned to keep the journey moving from inspiration to order.",
          "The site treats visual appetite and buying clarity as one product problem, which is critical for a bakery brand that sells both emotion and speed.",
        ],
      },
    ],
    results: [
      "Created a warmer storefront that better matches The Bakistry's handcrafted positioning.",
      "Made product discovery clearer through category-led browsing and stronger merchandising cues.",
      "Built a smoother path from first impression to checkout for customers ordering across everyday and special occasions.",
    ],
    reflection:
      "Food commerce is emotional, but the path to purchase still has to be obvious. Appetite brings people in; clarity gets the order over the line.",
  },
  "the-developer-marketing-book": {
    headline:
      "Built a focused launch site that presents the book, formats, proof, and author credibility without wasting motion.",
    timeline: "2024",
    role: "Frontend Engineer",
    services: [
      "Landing Page Strategy",
      "Frontend Development",
      "Conversion UX",
      "Performance Delivery",
    ],
    goals: [
      "Help the right reader understand the book's promise quickly.",
      "Support multiple conversion paths across paperback, audiobook, and preview moments.",
      "Package social proof, content themes, and author credibility into one lightweight marketing surface.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Start with the risk of a launch page saying too much and converting too little.",
        details: [
          "The experience is structured around the book's core promise: a comprehensive approach to reaching and engaging developers.",
          "That meant leading with value, keeping the page lean, and resisting the temptation to bury the main story under extra campaign clutter.",
        ],
      },
      {
        eyebrow: "Friction Mapping",
        title: "Strip the page down to the questions a potential reader actually asks.",
        details: [
          "Paperback and audiobook calls to action, content themes, testimonials, and author context are placed to answer the main reader questions in one continuous scroll.",
          "The design uses proof and pacing to build confidence without forcing users through a heavy funnel or an over-explained purchase journey.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Let paperback, audiobook, and preview paths all feel intentional.",
        details: [
          "The site treats paperback, audiobook, preview listening, and platform availability as parallel conversion paths instead of forcing everyone toward the same action.",
          "That gives readers more than one way to engage with the book while still keeping the broader launch story focused.",
        ],
      },
      {
        eyebrow: "Launch Build",
        title: "Ship the focused story without sacrificing speed or polish.",
        details: [
          "The frontend is intentionally lightweight so the visuals, testimonials, and conversion paths remain smooth across device sizes.",
          "That performance baseline matters for launch pages because the interface should feel polished while staying invisible enough for the content to do its job.",
        ],
      },
    ],
    results: [
      "Delivered a clearer launch story around the book's audience, subject matter, and value proposition.",
      "Supported multiple conversion paths across paperback discovery, audiobook interest, and social proof.",
      "Created a marketing surface that stays focused on the book instead of diluting attention with unnecessary extras.",
    ],
    reflection:
      "The best launch pages compress context, proof, and action into one continuous scroll.",
  },
};

const {
  avatar,
  portraits,
  logo,
  contact,
  highlights,
  skills,
  experience,
  education,
  certifications,
  languages,
  brands,
  projects: rawProjects,
  navlinks,
  aboutMe,
  heroImgText,
  socials,
  blogs,
} = content;

export const projects = rawProjects.map((project) => ({
  ...project,
  brand: getProjectBrand(project, brands),
  caseStudy: projectCaseStudies[project.slug as ProjectSlug],
}));

export type Project = (typeof projects)[number];

export {
  avatar,
  portraits,
  logo,
  contact,
  highlights,
  skills,
  experience,
  education,
  certifications,
  languages,
  brands,
  navlinks,
  aboutMe,
  heroImgText,
  socials,
  blogs,
};
