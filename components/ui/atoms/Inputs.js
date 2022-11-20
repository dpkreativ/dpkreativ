export function Input({ id, placeholder, type }) {
  return (
    <div className="rounded-lg bg-white p-4 border border-gray-300 w-full">
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="outline-none w-full"
      />
    </div>
  );
}

export function TextArea({ id, placeholder }) {
  return (
    <div className="rounded-lg bg-white p-4 border border-gray-300 w-full">
      <textarea
        name={id}
        id={id}
        cols="30"
        rows="4"
        placeholder={placeholder}
        className="outline-none w-full"
      ></textarea>
    </div>
  );
}
