import { useState } from 'react';
import { CloseIcon, HamburgerIcon } from '../atoms/Icons';
import Modal from '../atoms/Modal';

const MobileNavbar = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="lg:hidden">
      {/* Hamburger Menu */}
      <section
        className="p-5 text-secondary-01"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <CloseIcon /> : <HamburgerIcon />}
      </section>
      {showMenu ? (
        <section>
          <Modal className="top-[65px] right-0 max-w-md h-4/5 text-secondary-01 bg-primary-02 lg:hidden">
            {children}
          </Modal>
        </section>
      ) : null}
    </nav>
  );
};

export default MobileNavbar;
