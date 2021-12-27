import Nav from "../molecules/Nav";

const Header = ({ active }) => {
  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-sm flex-grow-0 flex-shrink"
      style={{ flexBasis: "auto" }}
    >
      <Nav activeTab={active} />
    </header>
  );
};

export default Header;
