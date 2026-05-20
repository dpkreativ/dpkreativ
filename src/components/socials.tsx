import { socials } from "@/assets/data";

type SocialsProps = {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
};

export default function Socials({
  className = "",
  linkClassName = "",
  iconClassName = "",
}: SocialsProps) {
  return (
    <div className={`flex items-center gap-6 px-5 ${className}`.trim()}>
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          rel="noreferrer"
          target="_blank"
          className={`text-[#111111]/68 transition-colors hover:text-[#ff5a58] dark:text-white/72 dark:hover:text-faxx-lime ${linkClassName}`.trim()}
        >
          <i className={`${social.icon} text-xl ${iconClassName}`.trim()}></i>
        </a>
      ))}
    </div>
  );
}
