import { GitHub, LinkedIn, Twitter } from '../atoms/Icons';
import NavLink from '../atoms/NavLink';
import Navbar from '../molecules/Navbar';

const Footer = () => {
  return (
    <footer className="border-t border-line text-secondary-01 flex justify-between h-max">
      <div className="p-5 w-full max-w-max md:border-r border-line">
        find me on:
      </div>
      <Navbar>
        <div className="flex">
          <NavLink
            url="https://twitter.com/dpkreativ"
            target="_blank"
            rightBorder
          >
            <Twitter />
          </NavLink>
          <NavLink
            url="https://www.linkedin.com/in/dpkreativ"
            target="_blank"
            rightBorder
          >
            <LinkedIn />
          </NavLink>
        </div>
        <div className="flex">
          <NavLink
            url="https://github.com/dpkreativ"
            target="_blank"
            leftBorder
          >
            <GitHub />
          </NavLink>
        </div>
      </Navbar>

      {/* Mobile Navlinks. Might refactor later */}
      <section className="md:hidden">
        <div className="flex">
          <NavLink
            url="https://twitter.com/dpkreativ"
            target="_blank"
            leftBorder
          >
            <Twitter />
          </NavLink>
          <NavLink
            url="https://www.linkedin.com/in/dpkreativ"
            target="_blank"
            leftBorder
          >
            <LinkedIn />
          </NavLink>
          <NavLink
            url="https://github.com/dpkreativ"
            target="_blank"
            leftBorder
          >
            <GitHub />
          </NavLink>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
