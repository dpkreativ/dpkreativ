import { GitHub, LinkedIn, Twitter } from '../atoms/Icons';
import NavLink from '../atoms/NavLink';
import Navbar from '../molecules/Navbar';

const Footer = () => {
  return (
    <footer className="border-t border-line text-secondary-01 flex justify-between">
      <div className="p-5 w-full max-w-max md:border-r border-line">
        find me on:
      </div>
      <Navbar>
        <div className="flex">
          <NavLink rightBorder>
            <Twitter />
          </NavLink>
          <NavLink rightBorder>
            <LinkedIn />
          </NavLink>
        </div>
        <div className="flex">
          <NavLink leftBorder>
            <GitHub />
          </NavLink>
        </div>
      </Navbar>

      {/* Mobile Navlinks. Might refactor later */}
      <section className="md:hidden">
        <div className="flex">
          <NavLink leftBorder>
            <Twitter />
          </NavLink>
          <NavLink leftBorder>
            <LinkedIn />
          </NavLink>
          <NavLink leftBorder>
            <GitHub />
          </NavLink>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
