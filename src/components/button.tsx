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
      className={`bg-white dark:bg-black font-mono font-bold text-faxx-dark dark:text-white border-2 border-faxx-dark dark:border-gray-700 px-6 py-3 flex items-center gap-2 uppercase tracking-wider hover:bg-faxx-cyan dark:hover:bg-faxx-cyan hover:text-faxx-dark transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] active:shadow-[0px_0px_0px_0px_rgba(17,17,17,1)] dark:active:shadow-[0px_0px_0px_0px_rgba(0,229,255,1)] active:translate-x-[4px] active:translate-y-[4px] ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
