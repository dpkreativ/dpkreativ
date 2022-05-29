import { HamburgerIcon } from '../atoms/Icons';

const MobileNavbar = ({ children }) => {
  return (
    <nav className="md:hidden">
      {/* Hamburger Menu */}
      <section className="p-5 text-secondary-01">
        <HamburgerIcon />
      </section>
      <section>{children}</section>
    </nav>
  );
};

export default MobileNavbar;
