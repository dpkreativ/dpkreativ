export default function Button({ children, type }) {
  return (
    <button type={type} className="bg-black text-white rounded-lg p-4">
      {children}
    </button>
  );
}
