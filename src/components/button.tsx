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
      className={`group inline-flex items-center justify-center whitespace-nowrap border border-[#201d1a]/12 bg-faxx-coral px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-white hover:text-[#111111] hover:border-[#ff5a58]/60 disabled:cursor-not-allowed disabled:opacity-50 dark:border-faxx-lime dark:bg-faxx-lime dark:text-faxx-dark dark:hover:bg-black dark:hover:text-white dark:hover:border-faxx-lime ${className ?? ""}`}
      type={type}
      disabled={disabled}
    >
      <div className="flex items-center gap-2 transition-colors duration-300">
        {children}
      </div>
    </button>
  );
}
