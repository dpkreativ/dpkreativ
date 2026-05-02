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
        eyebrow: "Ideation",
        title: "Start with the moments where customers hesitate.",
        details: [
          "The early framing centered on reducing confusion in the ordering flow, especially around delivery choices and outlet discovery.",
          "Instead of treating the redesign as a visual refresh alone, the product direction focused on making the next action obvious at every step.",
        ],
      },
      {
        eyebrow: "Experience Design",
        title: "Reshape the interface around real ordering behavior.",
        details: [
          "The UI was redesigned to create a more intuitive structure, clearer hierarchy, and stronger calls to action across key customer journeys.",
          "Location-aware interactions were brought forward so users could choose delivery points and discover nearby Crunchies outlets with less effort.",
        ],
      },
      {
        eyebrow: "Build and Launch",
        title: "Ship a fast frontend that supports the business story.",
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
        eyebrow: "Product Framing",
        title: "Start with identity, because everything else depends on it.",
        details: [
          "The core product decision was to treat identity as shared across schools, roles, and relationships rather than forcing separate accounts for every context.",
          "That framing made it possible to design around one learner history, one family surface, and one person moving between roles like owner, staff member, parent, or student.",
        ],
      },
      {
        eyebrow: "Access Model",
        title: "Turn role-based and tenant-based access into a usable day-to-day experience.",
        details: [
          "The platform is being shaped around strict access boundaries so each school only exposes the information relevant to that context while still preserving continuity for the user.",
          "The experience has to make context-switching feel simple for families and administrators without weakening privacy or permission controls behind the scenes.",
        ],
      },
      {
        eyebrow: "Platform Build",
        title: "Build operations for today without blocking collaboration later.",
        details: [
          "Current product work is focused on the workflows schools need immediately, including classes, assignments, grades, academic history, admissions, and finance.",
          "At the same time, the structure is being kept flexible enough to support future network features like tutor discovery, study circles, and resource sharing across education contexts.",
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
        eyebrow: "Discovery Experience",
        title: "Start with the question people actually ask: what's happening this weekend?",
        details: [
          "The public product surface is being shaped around curated event discovery so the browsing experience feels more like reading the city's mood than navigating a cold listings directory.",
          "Event detail pages, related events, and RSVP or checkout flows are designed to keep users moving from interest to action without unnecessary detours.",
        ],
      },
      {
        eyebrow: "Onboarding and Identity",
        title: "Use guided signup to turn taste into personalization.",
        details: [
          "The onboarding flow asks new users for their city and preferred vibes before account creation so the signed-in experience can feel more personal from the start.",
          "Authentication, password recovery, and protected dashboard access are being treated as part of the product experience, not just background account plumbing.",
        ],
      },
      {
        eyebrow: "Workspace Design",
        title: "Extend the product beyond discovery into plans, tickets, wallets, and hosting.",
        details: [
          "The signed-in product includes upcoming plans, saved and past events, ticket views, wallet activity, and personalized identity details like city and vibe tags.",
          "Host and admin surfaces are being designed alongside the user journey so event creation, attendee visibility, payouts, and summary analytics all live inside the same broader ecosystem.",
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
      "Positioned an industrial supply company around reliability, technical clarity, and faster RFQ-driven action.",
    timeline: "2024",
    role: "Web Strategist and Product Engineer",
    services: [
      "B2B Website Strategy",
      "Information Architecture",
      "RFQ Experience",
      "Content Translation",
    ],
    goals: [
      "Make Kadric's product range and service capability easier for procurement and operations teams to understand quickly.",
      "Create a clearer path from requirement to quote request without forcing buyers through generic marketing copy.",
      "Communicate trust through quality signals, sector relevance, and safety-first positioning.",
    ],
    process: [
      {
        eyebrow: "Content Strategy",
        title: "Lead with the operational job the business supports.",
        details: [
          "The site positioning is built around the real environments Kadric serves: marine, offshore, oil and gas, and industrial operations that care about safety, uptime, and delivery reliability.",
          "That pushed the structure away from abstract company language and toward practical explanations of sourcing support, HSE products, recurring supply, and RFQ responsiveness.",
        ],
      },
      {
        eyebrow: "Structure and Trust",
        title: "Organize the experience around sourcing confidence.",
        details: [
          "The content system gives products, services, HSE support, and quote pathways distinct places so buyers can understand breadth without getting lost.",
          "Client logos, sector language, and service explanations were treated as proof points that reduce uncertainty for procurement teams under pressure.",
        ],
      },
      {
        eyebrow: "Lead Flow",
        title: "Turn the site into a practical RFQ surface.",
        details: [
          "Call-to-action placement is centered on quote-driven behavior, guiding buyers toward sending item lists, quantities, timelines, and delivery points with less friction.",
          "The result is a public-facing experience that behaves less like a brochure and more like an operational entry point for supply conversations.",
        ],
      },
    ],
    results: [
      "Created a stronger public story around Kadric's industrial, marine, and HSE supply capability.",
      "Made the route from browsing to quote request clearer for operations and procurement teams.",
      "Aligned the digital experience with the trust, reliability, and responsiveness the business needs to communicate.",
    ],
    reflection:
      "B2B infrastructure sites work when they reduce ambiguity. The buyer should understand capability, trust the supplier, and know how to proceed in minutes.",
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
        eyebrow: "Editorial Structure",
        title: "Turn the shelf into a navigable editorial system.",
        details: [
          "The site architecture gives distinct space to essays, features, poetry, reviews, and short stories so readers can browse African literature through clear editorial pathways.",
          "Homepage storytelling, featured pieces, and mission framing work together to make the platform feel like a living literary surface rather than a static archive.",
        ],
      },
      {
        eyebrow: "Community Pathways",
        title: "Make participation visible from the first visit.",
        details: [
          "Join the Circle, chapters, submissions, donate, and partner pathways are treated as core parts of the experience so visitors can move from reading to belonging.",
          "The community surface is designed to support both casual readers and people who want a deeper role in growing the literary ecosystem.",
        ],
      },
      {
        eyebrow: "Brand Experience",
        title: "Balance literary warmth with a disciplined product structure.",
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
        eyebrow: "Brand Translation",
        title: "Start from the emotional promise behind every order.",
        details: [
          "The product direction starts from a simple promise: every celebration deserves something that tastes as good as it looks.",
          "That meant translating warmth, freshness, and premium craft into a storefront that still feels practical to shop from.",
        ],
      },
      {
        eyebrow: "Merchandising",
        title: "Use category structure to make ordering easier.",
        details: [
          "The storefront organizes buying around categories like Budget Express Cakes, Classic Express Cakes, Gateaux, Cupcakes, Combos, Kiddies, and Treats so customers can narrow in quickly.",
          "Featured products, flavour options, and category-led browsing help the site support both fast everyday orders and more deliberate celebration purchases.",
        ],
      },
      {
        eyebrow: "Conversion",
        title: "Connect visual delight to checkout readiness.",
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
        eyebrow: "Launch Strategy",
        title: "Center the page on one clear story.",
        details: [
          "The experience is structured around the book's core promise: a comprehensive approach to reaching and engaging developers.",
          "That meant leading with value, keeping the page lean, and resisting the temptation to bury the main story under extra campaign clutter.",
        ],
      },
      {
        eyebrow: "Conversion Design",
        title: "Support interest with proof, not clutter.",
        details: [
          "Paperback and audiobook calls to action, content themes, testimonials, and author context are placed to answer the main reader questions in one continuous scroll.",
          "The design uses proof and pacing to build confidence without forcing users through a heavy funnel or an over-explained purchase journey.",
        ],
      },
      {
        eyebrow: "Delivery",
        title: "Keep the experience fast while carrying the book's voice.",
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
  logo,
  logoword,
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
  logo,
  logoword,
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
