export default function Button({ children, type }) {
  return (
    <button type={type} className="bg-black text-white rounded-lg p-5">
      {children}
    </button>
  );
}
