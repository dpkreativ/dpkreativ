import Button from "@/components/button";

export default function Socials() {
  return (
    <div className="flex gap-10 justify-end items-center">
      <a href="https://github.com/dpkreativ" target="_blank" rel="noreferrer">
        <i className="ri-github-fill text-xl"></i>
      </a>

      <a
        href="https://dpkreativ.notion.site/Divine-s-Technical-Content-Portfolio-dfdee17cdcb647498fae2f4b9d22a672?pvs=4"
        target="_blank"
        rel="noreferrer"
      >
        <i className="ri-quill-pen-fill text-xl"></i>
      </a>

      <a href="mailto:dpkreativ@gmail.com" rel="noreferrer" target="_blank">
        <i className="ri-mail-send-fill text-xl"></i>
      </a>
    </div>
  );
}
