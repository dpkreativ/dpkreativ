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
    id: 1,
    title: "Crunchies Online",
    image: crunchies,
    client: "Crunchies Fried Chicken",
    description: "",
    url: "https://crunchiesonline.com",
    github: "",
    featured: true,
    tags: ["UI/UX", "Coding", "Next.js"],
    slug: "crunchies-online",
  },
  {
    id: 2,
    title: "IGHub Website",
    image: ighub,
    client: "Innovation Growth Hub",
    description: "",
    url: "https://ighub.ng",
    github: "",
    featured: true,
    tags: ["UI/UX", "Coding", "WordPress"],
    slug: "ighub-website",
  },

  {
    id: 3,
    title: "The Developer Marketing Book",
    image: devmarbook,
    client: "Decenta LLC",
    description: "",
    url: "https://devmarbook.vercel.app/",
    github: "github.com/dpkreativ/devmarbook",
    featured: true,
    tags: ["UI/UX", "Coding", "Next.js"],
    slug: "the-developer-marketing-book",
  },
  {
    id: 4,
    title: "Phil's Auto Sales Website",
    image: philsauto,
    client: "Phil's Auto Sales LLC",
    description: "",
    url: "https://philsautosalesllc.com",
    github: "",
    featured: true,
    tags: ["UI/UX", "Coding", "WordPress"],
    slug: "phils-auto-sales-website",
  },
  {
    id: 5,
    title: "Alchemy Of Code",
    image: alchemyofcode,
    client: "",
    description: "",
    url: "https://https://bit.ly/Alchemy-Of-Code",
    github: "",
    featured: true,
    tags: ["Documentation", "Notion", "Tutorials"],
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
