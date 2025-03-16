import logo from "@/assets/images/kreativ-icon.svg";
import logoword from "@/assets/images/kreativ-wordmark.svg";
import avatar from "@/assets/images/divine.jpg";
import crunchies from "@/assets/images/crunchies.png";
import ighub from "@/assets/images/ighub.png";
import devmarbook from "@/assets/images/devmarbook.png";
import philsauto from "@/assets/images/philsauto.png";
import alchemyofcode from "@/assets/images/alchemyofcode.png";
import ighublogo from "@/assets/images/ighublogo.png";
import philsautologo from "@/assets/images/philsautologo.png";
import crunchieslogo from "@/assets/images/crunchieslogo.png";
import alchemyofcodelogo from "@/assets/images/alchemyofcodelogo.png";

export { avatar, logo, logoword };

export const brands = [
  {
    image: philsautologo,
    url: "https://philsautosalesllc.com",
    title: "Phil's Auto Sales LLC",
  },
  {
    image: ighublogo,
    url: "https://ighub.ng",
    title: "IGHub",
  },
  {
    image: crunchieslogo,
    url: "https://crunchiesonline.com",
    title: "Crunchies Fried Chicken",
  },
  {
    image: alchemyofcodelogo,
    url: "https://alchemyofcode.pages.dev",
    title: "Alchemy Of Code",
  },
];

export const projects = [
  {
    title: "Crunchies Online",
    image: crunchies,
    client: "Crunchies Fried Chicken",
    description: [
      "I took the lead on this exciting project, where I completely redesigned the UI to make it more intuitive and visually appealing for users.",
      "Using my skills in Next.js and Tailwind CSS, I built a responsive, fast-loading site that reflects my passion for performance optimization.",
      "One of my favorite parts was integrating the Google Maps API—I added a feature that lets users pick their delivery location and find nearby Crunchies outlets with ease, enhancing the overall user experience.",
    ],
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
    description: [
      "I creating a clean, user-friendly, and responsive website using WordPress, tailoring it to showcase Mr. Philemon's car inventory in a way that's easy for customers to browse.",
      "I also implemented SEO best practices to boost the site's visibility online. To streamline customer inquiries, I added features like contact forms and clear calls-to-action, making it simple for visitors to connect with the business.",
    ],
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
    description: [
      "I had a blast building this modern website for IGHub, where I used WordPress to highlight their startup incubation programs, upcoming events, and valuable resources.",
      "My focus was on accessibility—I wanted everyone, regardless of ability, to navigate the site effortlessly. I also optimized its performance to ensure fast load times, reflecting my commitment to creating smooth user experiences.",
      "Working closely with the IGHub team, I brought their mission to life through a design that's both functional and engaging.",
    ],
    url: "https://ighub.ng",
    github: "",
    featured: false,
    tags: ["UI/UX", "Coding", "WordPress"],
    stack: ["WordPress", "Custom Theme Development"],
    slug: "ighub-website",
  },
  {
    title: "The Developer Marketing Book",
    image: devmarbook,
    client: "Decenta LLC",
    description: [
      "I developed this interactive website using Next.js, and I'm thrilled with how it turned out!",
      "My aim was to create a platform where users could explore the book's content and sign up for updates seamlessly. I leaned on my UI/UX skills to design an inviting layout, paired with Tailwind CSS for a sleek look, and deployed it on Vercel for top-notch performance.",
      "It's one of those projects where I got to blend my coding expertise with my love for making complex ideas accessible to everyone.",
    ],
    url: "https://devmarbook.com/",
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
    description: [
      "Alchemy Of Code is my personal passion project, designed as a structured self-learning platform for developers.",
      "It features programs like Fullstack Forge, which guides you through mastering web development from front to back, and Mobile Maestro, focused on building high-quality mobile applications with React Native.",
      "My goal is to empower developers to learn practical skills through hands-on projects and curated resources.",
    ],
    url: "https://alchemyofcode.pages.dev/",
    github: "",
    featured: true,
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
