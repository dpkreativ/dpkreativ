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
      className={`group inline-flex items-center justify-center whitespace-nowrap border border-black bg-black px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/25 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-white dark:hover:border-white/40 ${className ?? ""}`}
      type={type}
      disabled={disabled}
    >
      <div className="flex items-center gap-2 transition-colors duration-300">
        {children}
      </div>
    </button>
  );
}
