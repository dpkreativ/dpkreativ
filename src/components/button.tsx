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
      className={`bg-white font-mono text-black border border-black/10 px-5 py-2 flex items-center gap-2 rounded-full shadow-lg ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
