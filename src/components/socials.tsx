import { socials } from "@/assets/data";

export default function Socials() {
  return (
    <div className="flex gap-10 justify-end items-center px-5">
      {socials.map((social, idx) => (
        <a key={idx} href={social.url} rel="noreferrer" target="_blank">
          <i className={`${social.icon} text-2xl`}></i>
        </a>
      ))}
    </div>
  );
}
