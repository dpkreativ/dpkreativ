import Link from 'next/link';
import Brand from '../atoms/Brand';
import NavLink from '../atoms/NavLink';
import MobileNavbar from '../molecules/MobileNavbar';
import Navbar from '../molecules/Navbar';

const Header = ({ activeTab = null }) => {
  return (
    <header className="border-b border-line flex justify-between h-max">
      <Link href="/" passHref>
        <a className="w-full max-w-xs p-5 md:border-r border-line block">
          <Brand />
        </a>
      </Link>
      <Navbar>
        <div className="flex">
          <NavLink url="/" rightBorder active={activeTab === 1}>
            _hello
          </NavLink>
          <NavLink url="/about-me" rightBorder active={activeTab === 2}>
            _about-me
          </NavLink>
          <NavLink url="/projects" rightBorder active={activeTab === 3}>
            _projects
          </NavLink>
        </div>
        <div className="flex">
          <NavLink url="/contact-me" leftBorder active={activeTab === 4}>
            _contact-me
          </NavLink>
        </div>
      </Navbar>
      <MobileNavbar>
        <NavLink url="/" bottomBorder active={activeTab === 1}>
          _hello
        </NavLink>
        <NavLink url="/about-me" bottomBorder active={activeTab === 2}>
          _about-me
        </NavLink>
        <NavLink url="/projects" bottomBorder active={activeTab === 3}>
          _projects
        </NavLink>
        <NavLink url="/contact-me" bottomBorder active={activeTab === 4}>
          _contact-me
        </NavLink>
      </MobileNavbar>
    </header>
  );
};

export default Header;
