import { HamburgerIcon } from '../atoms/Icons';
import Modal from '../atoms/Modal';

const MobileNavbar = ({ children }) => {
  return (
    <nav className="md:hidden">
      {/* Hamburger Menu */}
      <section className="p-5 text-secondary-01">
        <HamburgerIcon />
      </section>
      <section>
        <Modal className="top-16 text-secondary-01 md:hidden">{children}</Modal>
      </section>
    </nav>
  );
};

export default MobileNavbar;
