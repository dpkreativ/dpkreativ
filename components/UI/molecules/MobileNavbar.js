import { useState } from 'react';
import { CloseIcon, HamburgerIcon } from '../atoms/Icons';
import Modal from '../atoms/Modal';

const MobileNavbar = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="md:hidden">
      {/* Hamburger Menu */}
      <section
        className="p-5 text-secondary-01"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <CloseIcon /> : <HamburgerIcon />}
      </section>
      {showMenu ? (
        <section>
          <Modal className="top-16 text-secondary-01 md:hidden">
            {children}
          </Modal>
        </section>
      ) : null}
    </nav>
  );
};

export default MobileNavbar;
