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
          <NavLink url="/" rightBorder active>
            _hello
          </NavLink>
          <NavLink url="/about-me" rightBorder>
            _about-me
          </NavLink>
          <NavLink url="/projects" rightBorder>
            _projects
          </NavLink>
        </div>
        <div className="flex">
          <NavLink url="/contact-me" leftBorder>
            _contact-me
          </NavLink>
        </div>
      </Navbar>
      <MobileNavbar>
        <NavLink url="/" bottomBorder>
          _hello
        </NavLink>
        <NavLink url="/about-me" bottomBorder>
          _about-me
        </NavLink>
        <NavLink url="/projects" bottomBorder>
          _projects
        </NavLink>
        <NavLink url="/contact-me" bottomBorder>
          _contact-me
        </NavLink>
      </MobileNavbar>
    </header>
  );
};

export default Header;
