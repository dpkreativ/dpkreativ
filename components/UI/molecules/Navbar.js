const Navbar = ({ children }) => {
  return (
    <nav className="hidden md:flex justify-between w-full">{children}</nav>
  );
};

export default Navbar;
