import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonClassName =
  "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap border border-black/15 bg-white px-4 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all duration-200 hover:bg-black hover:text-white dark:border-white/15 dark:bg-[#1a1a1a] dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white";

function BackIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

export default function BackButton({ 
  href, 
  label,
  className,
}: { 
  href: string; 
  label: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(buttonClassName, className)}>
      <BackIcon />
      <span>{label}</span>
    </Link>
  );
}
