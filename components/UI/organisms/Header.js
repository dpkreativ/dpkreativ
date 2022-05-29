import Brand from '../atoms/Brand';
import NavLink from '../atoms/NavLink';
import MobileNavbar from '../molecules/MobileNavbar';
import Navbar from '../molecules/Navbar';

const Header = () => {
  return (
    <header className="border-b border-line flex">
      <div className="w-full max-w-xs p-5 md:border-r border-line">
        <Brand />
      </div>
      <Navbar>
        <div className="flex">
          <NavLink rightBorder active>
            _hello
          </NavLink>
          <NavLink rightBorder>_about-me</NavLink>
          <NavLink rightBorder>_projects</NavLink>
        </div>
        <div className="flex">
          <NavLink leftBorder>_contact-me</NavLink>
        </div>
      </Navbar>
      <MobileNavbar></MobileNavbar>
    </header>
  );
};

export default Header;
