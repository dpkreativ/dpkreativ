import logo from "@/assets/images/kreativ-icon.svg";
import logoword from "@/assets/images/kreativ-wordmark.svg";
import avatar from "@/assets/images/divine.jpg";
import crunchies from "@/assets/images/crunchies.png";
import ighub from "@/assets/images/ighub.png";
import devmarbook from "@/assets/images/devmarbook.png";
import philsauto from "@/assets/images/philsauto.png";
import alchemyofcode from "@/assets/images/alchemyofcode.png";

export { avatar, logo, logoword };

export const projects = [
  {
    title: "Crunchies Online",
    image: crunchies,
    client: "Crunchies Fried Chicken",
    description:
      "I led the UI redesign and implemented features with Next.js and Tailwind. I also integrated a Google Maps location feature, allowing users to select their delivery location and find nearby outlets.",
    url: "https://crunchiesonline.com",
    github: "",
    featured: true,
    tags: ["UI/UX", "Coding", "Next.js"],
    stack: ["Next.js", "Tailwind", "Google Maps API"],
    slug: "crunchies-online",
  },
  {
    title: "Phil's Auto Sales Website",
    image: philsauto,
    client: "Phil's Auto Sales LLC",
    description:
      "Designed and developed a responsive website using WordPress to showcase car inventory and streamline customer inquiries. Implemented SEO best practices to improve visibility.",
    url: "https://philsautosalesllc.com",
    github: "",
    featured: true,
    tags: ["UI/UX", "Coding", "WordPress"],
    stack: ["WordPress", "Elementor", "SEO"],
    slug: "phils-auto-sales-website",
  },
  {
    title: "IGHub Website",
    image: ighub,
    client: "Innovation Growth Hub",
    description:
      "Built a modern website for IGHub to highlight their startup incubation programs, events, and resources. Focused on accessibility and performance optimization.",
    url: "https://ighub.ng",
    github: "",
    featured: true,
    tags: ["UI/UX", "Coding", "WordPress"],
    stack: ["WordPress", "Custom Theme Development"],
    slug: "ighub-website",
  },
  {
    title: "The Developer Marketing Book",
    image: devmarbook,
    client: "Decenta LLC",
    description:
      "Developed an interactive website for 'The Developer Marketing Book' using Next.js, allowing users to explore book content and sign up for updates.",
    url: "https://devmarbook.vercel.app/",
    github: "github.com/dpkreativ/devmarbook",
    featured: true,
    tags: ["UI/UX", "Coding", "Next.js"],
    stack: ["Next.js", "Tailwind", "Vercel"],
    slug: "the-developer-marketing-book",
  },
  {
    title: "Alchemy Of Code",
    image: alchemyofcode,
    client: "",
    description:
      "A collection of technical documentation, tutorials, and resources for developers, organized in Notion for easy accessibility and learning.",
    url: "https://bit.ly/Alchemy-Of-Code",
    github: "",
    featured: false,
    tags: ["Documentation", "Notion", "Tutorials"],
    stack: ["Notion", "Markdown", "Technical Writing"],
    slug: "alchemy-of-code",
  },
];

export const navlinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Work",
    url: "/work",
  },
];

const aboutMe = [
  "An experienced web developer passionate about building dynamic, responsive websites that deliver an exceptional user experience.",
  "With a background in design and skills in HTML, CSS, and JavaScript, I turn ideas into reality using the right tools and frameworks. Check out my work to see how I do it.",
  "I am active in various developer communities, where I collaborate with peers and contribute to open source projects. I also enjoy breaking down complex ideas on my blogs at Hashnode, Dev.to, and Medium.",
];

const heroImgText = "Hello World! I'm Divine.";
