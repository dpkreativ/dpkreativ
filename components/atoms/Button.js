const Button = ({ children, filled }) => {
  return (
    <button
      className={`py-2 px-5 border border-purple-600 text-lg font-semibold hover:border-purple-700 hover:shadow-lg ${
        filled
          ? "bg-purple-600 text-white hover:bg-purple-700"
          : "text-purple-600 hover:text-purple-700"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
