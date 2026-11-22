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
      "I redesigned online ordering so Crunchies customers could choose delivery or pickup and find a nearby outlet.",
    timeline: "2024",
    role: "Lead full-stack developer",
    services: [
      "Ordering flow design",
      "Frontend development",
      "Google Maps integration",
    ],
    goals: [
      "Make delivery, pickup, and outlet selection clear before checkout.",
      "Keep the ordering site usable on mobile, including on slower connections.",
    ],
    process: [
      {
        eyebrow: "Checkout design",
        title: "Clarifying delivery and pickup",
        details: [
          "I reorganized checkout around three decisions: how to receive the order, where to deliver it, and which outlet to use.",
        ],
      },
      {
        eyebrow: "Maps and mobile",
        title: "Helping customers find an outlet",
        details: [
          "I rebuilt the site in Next.js and Tailwind CSS for desktop and mobile. I integrated Google Maps so customers could select a delivery location and find nearby outlets.",
        ],
      },
    ],
    results: [
      "Crunchies credits the redesign with helping monthly online sales grow from ₦200,000 to ₦3 million.",
    ],
    reflection:
      "For a restaurant, choosing how and where to receive an order is as important as choosing what to eat.",
  },
  merphils: {
    headline:
      "I’m designing a school management platform that lets staff, families, and students use one account across schools.",
    timeline: "In Progress",
    role: "Product Engineer",
    services: [
      "Product Strategy",
      "Role-Based Access Design",
      "Platform UX",
      "Frontend Systems",
    ],
    goals: [
      "Give schools tools for classes, grades, admissions, and finance.",
      "Let people switch schools and roles without creating separate accounts or exposing private school records.",
    ],
    process: [
      {
        eyebrow: "Account design",
        title: "One account across schools and roles",
        details: [
          "A person might teach at one school and have a child at another. One account lets them switch roles while the platform checks what they can see at each school.",
        ],
      },
      {
        eyebrow: "Release planning",
        title: "School workflows before collaboration tools",
        details: [
          "The first release focuses on school operations and learner records. Tutor discovery and study circles are planned for later.",
        ],
      },
    ],
    results: [
      "Defined how one account can work across schools and roles while keeping each school’s records separate.",
    ],
    reflection:
      "Sharing a login across schools doesn’t have to mean sharing access to school records.",
  },
  grooovy: {
    headline:
      "I’m designing a platform for finding nightlife events, making plans, and managing tickets.",
    timeline: "In Progress",
    role: "Product Designer and Frontend Engineer",
    services: [
      "Product Experience",
      "Onboarding and Auth Flows",
      "Dashboard UX",
      "Frontend Delivery",
    ],
    goals: [
      "Let people browse events before signing up.",
      "Give attendees and hosts separate tools for managing their plans and events.",
    ],
    process: [
      {
        eyebrow: "Discovery",
        title: "Browsing events before sign-up",
        details: [
          "Public event pages are designed to show the details people need to decide whether to go, alongside related events and a way to RSVP or buy a ticket.",
        ],
      },
      {
        eyebrow: "Onboarding",
        title: "Personalizing the account setup",
        details: [
          "During sign-up, people choose their city and the kinds of events they like.",
        ],
      },
      {
        eyebrow: "Dashboards",
        title: "Separate tools for attendees and hosts",
        details: [
          "Attendees can view saved events, tickets, and wallet activity. I’m also designing tools for hosts to create events, see who’s coming, and track payouts.",
        ],
      },
    ],
    results: [
      "Built the core event browsing, sign-up, and dashboard flows. I’m still refining how people move between them.",
    ],
    reflection:
      "Show people what they need to decide whether to go before you ask them to sign up.",
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
      "I designed and built a home for African literature and the community around it.",
    timeline: "2024",
    role: "Web Designer and Developer",
    services: [
      "Editorial Website Design",
      "Community UX",
      "Information Architecture",
      "CMS Implementation",
    ],
    goals: [
      "Let readers browse writing by format, from poetry to reviews.",
      "Make it clear how to submit work, join a chapter, or support the community.",
    ],
    process: [
      {
        eyebrow: "Editorial structure",
        title: "Organizing the site around what people read",
        details: [
          "I gave essays, features, poetry, reviews, and short stories their own sections. The homepage introduces the Circle’s mission and highlights pieces for readers to start with.",
        ],
      },
      {
        eyebrow: "Community participation",
        title: "Making it clear how to take part",
        details: [
          "I gave submissions, membership, chapters, donations, and partnerships dedicated paths so visitors can choose how to get involved.",
        ],
      },
    ],
    results: [
      "The WordPress site gives the Circle one place to publish new work and invite readers to participate.",
    ],
    reflection:
      "A literary site should show people what to read and how to take part.",
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
  "7star-unisex-beauty-palace": {
    headline:
      "Built a brand-driven service site that turns hair care expertise into a seamless booking experience.",
    timeline: "2026",
    role: "Web Designer and Developer",
    services: [
      "Website Strategy",
      "Brand Translation",
      "Service Presentation",
      "Booking Integration",
    ],
    goals: [
      "Give the studio a professional web presence that reflects its expertise in locs, braiding, and protective styling.",
      "Make every service easy to understand and schedule from starter dreadlocks to loc extensions and repairs.",
      "Build trust through client reviews, educational content, and a clean brand presentation.",
    ],
    process: [
      {
        eyebrow: "Problem Discovery",
        title: "Start with the gap between salon expertise and online first impressions.",
        details: [
          "7Star had strong in-person reputation in Cairo but needed a website that communicated its professionalism, range of services, and client-centered approach to new visitors.",
          "The product direction centered on translating the studio's hands-on care philosophy into a digital experience that felt trustworthy and easy to navigate.",
        ],
      },
      {
        eyebrow: "Service Structuring",
        title: "Organize around what clients actually need to know before booking.",
        details: [
          "Each service — starter dreadlocks, loc retwists, extensions, knotless braids, box braids, and afro twists — was given its own presentation space with clear descriptions, imagery, and a direct path to scheduling.",
          "The client reviews section was positioned prominently so new visitors could see real feedback and build confidence before making an appointment.",
        ],
      },
      {
        eyebrow: "Solution Direction",
        title: "Make booking feel like the natural next step after browsing.",
        details: [
          "WhatsApp integration was embedded throughout the site so potential clients could move from exploring a service to starting a conversation without friction.",
          "The design prioritized clean service presentation, mobile-friendly navigation, and a warm brand tone that matched the studio's welcoming atmosphere.",
        ],
      },
      {
        eyebrow: "Content and Trust Build",
        title: "Support the booking path with social proof, products, and educational content.",
        details: [
          "A blog section was added to position the studio as an educational resource for hair care beyond just styling appointments.",
          "Products page, newsletter signup, and social media links were integrated to extend the relationship beyond the first appointment.",
        ],
      },
    ],
    results: [
      "Delivered a professional web presence that communicates 7Star's hair care expertise and range of services.",
      "Made service discovery and booking scheduling feel simple through clear categorization and WhatsApp integration.",
      "Created a brand-aligned digital experience that supports both new client acquisition and ongoing community engagement.",
    ],
    reflection:
      "Service businesses win online when expertise is easy to understand and booking feels like a natural next step. 7Star needed a site that converted browsing into appointments without losing the warmth of the in-person experience.",
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
  roleKicker,
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
  roleKicker,
  socials,
  blogs,
};
