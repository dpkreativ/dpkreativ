const Navbar = ({ children }) => {
  return (
    <nav className="hidden lg:flex justify-between w-full">{children}</nav>
  );
};

export default Navbar;
