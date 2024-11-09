export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-white text-black border border-black px-5 py-2 rounded-full">
      {children}
    </button>
  );
}
