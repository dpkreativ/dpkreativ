import { BlogIcon, GitHub } from "@/assets/icons";
import Button from "@/components/button";

export default function Socials() {
  return (
    <div className="flex gap-5 justify-end items-center">
      <a
        href="https://dpkreativ.notion.site/Divine-s-Technical-Content-Portfolio-dfdee17cdcb647498fae2f4b9d22a672?pvs=4"
        target="_blank"
        rel="noreferrer"
      >
        <BlogIcon />
      </a>

      <a href="https://github.com/dpkreativ" target="_blank" rel="noreferrer">
        <GitHub />
      </a>

      <a href="mailto:dpkreativ@gmail.com" rel="noreferrer" target="_blank">
        <Button>dpkreativ@gmail.com</Button>
      </a>
    </div>
  );
}
