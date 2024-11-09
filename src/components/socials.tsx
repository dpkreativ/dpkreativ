import { GitHub, Twitter } from "@/assets/icons";
import Button from "@/components/button";

export default function Socials() {
  return (
    <div className="flex gap-5 justify-end items-center">
      <a href="https://x.com/dpkreativ" target="_blank" rel="noreferrer">
        <Twitter />
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
