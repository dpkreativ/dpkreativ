import Nav from "../molecules/Nav";

const Header = ({ active }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Nav active={active} />
    </header>
  );
};

export default Header;
