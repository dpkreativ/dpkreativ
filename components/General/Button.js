const Button = ({ children }) => {
  return (
    <button className="text-purple-600 border-2 border-purple-600 py-5 px-10 rounded-2xl text-lg hover:text-white hover:bg-purple-600">
      {children}
    </button>
  );
};

export default Button;
