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
      className={`group bg-faxx-dark dark:bg-white font-mono font-bold text-white dark:text-faxx-dark border-2 border-faxx-dark dark:border-gray-700 px-6 py-3 uppercase tracking-wider hover:bg-white dark:hover:bg-black hover:text-faxx-dark dark:hover:text-white transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] active:shadow-[0px_0px_0px_0px_rgba(17,17,17,1)] dark:active:shadow-[0px_0px_0px_0px_rgba(0,229,255,1)] active:translate-x-[4px] active:translate-y-[4px] ${className}`}
      type={type}
      disabled={disabled}
    >
      <div className="flex items-center gap-2 group-hover:text-faxx-dark dark:group-hover:text-white transition-colors duration-200">
        {children}
      </div>
    </button>
  );
}
