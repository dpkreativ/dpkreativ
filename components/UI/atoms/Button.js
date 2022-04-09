const Button = ({ children, filled, onClick }) => {
  return (
    <button
      className={`py-2 px-5 border border-primary-normal text-lg font-semibold hover:border-primary-dark hover:shadow-lg ${
        filled
          ? "bg-primary-normal text-white hover:bg-primary-dark"
          : "text-primary-normal hover:text-primary-dark"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
