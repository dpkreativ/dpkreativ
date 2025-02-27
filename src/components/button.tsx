export default function Button({
  children,
  onClick,
  type,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black border border-black/10 px-5 py-2 flex items-center gap-2 rounded-full shadow-lg`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
