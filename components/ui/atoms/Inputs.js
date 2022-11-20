export function Input({ id, placeholder, type }) {
  return (
    <div className="rounded-lg bg-white p-5 border border-gray-300">
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="outline-none"
      />
    </div>
  );
}

export function TextArea({ id, placeholder }) {
  return (
    <div className="rounded-lg bg-white p-5 border border-gray-300">
      <textarea
        name={id}
        id={id}
        cols="30"
        rows="4"
        placeholder={placeholder}
        className="outline-none"
      ></textarea>
    </div>
  );
}
