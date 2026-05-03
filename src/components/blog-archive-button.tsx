import Link from "next/link";

const buttonClassName =
  "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap border-2 border-faxx-dark bg-faxx-light px-4 font-mono text-xs font-bold uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-faxx-dark hover:text-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-400 dark:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.4)] dark:hover:bg-zinc-800 dark:hover:text-white dark:active:shadow-[0px_0px_0px_0px_rgba(156,163,175,0.4)]";

function BackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12l4-4m-4 4l4 4" />
    </svg>
  );
}

export default function BlogArchiveButton() {
  return (
    <div className="sticky top-28 z-40 mb-8 w-fit">
      <Link href="/blog" aria-label="Back to archive" title="Back to archive" className={buttonClassName}>
        <BackIcon />
        <span>Back to Archive</span>
      </Link>
    </div>
  );
}
