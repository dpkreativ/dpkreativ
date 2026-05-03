import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonClassName =
  "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap border-2 border-faxx-dark bg-faxx-light px-4 font-mono text-xs font-bold uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-faxx-dark hover:text-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-400 dark:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.4)] dark:hover:bg-zinc-800 dark:hover:text-white dark:active:shadow-[0px_0px_0px_0px_rgba(156,163,175,0.4)]";

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
