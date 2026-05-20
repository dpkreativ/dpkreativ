export default function Button({
  children,
  onClick,
  type,
  disabled,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#201d1a]/12 bg-faxx-coral px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:bg-white hover:text-[#111111] hover:border-[#ff5a58]/60 active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed disabled:opacity-50 dark:border-faxx-lime dark:bg-faxx-lime dark:text-faxx-dark dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:bg-black dark:hover:text-white dark:hover:border-faxx-lime dark:active:shadow-[0px_0px_0px_0px_rgba(255,255,255,1)] ${className ?? ""}`}
      type={type}
      disabled={disabled}
    >
      <div className="flex items-center gap-2 transition-colors duration-300">
        {children}
      </div>
    </button>
  );
}
