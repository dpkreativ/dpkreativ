import { useState } from "react";
import HamburgerMenu from "../atoms/HamburgerMenu";
import Logo from "../atoms/Logo";
import Navlink from "../atoms/Navlink";

const Nav = ({ active = 1 }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(active);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="p-5 lg:p-10">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <div className="text-purple-600">
            <Logo width="32" height="32" />
          </div>
          <div className="md:flex md:items-baseline md:space-x-2">
            <h1 className="font-bold text-xl lg:text-2xl">Divine Orji</h1>
            <h2 className="text-sm lg:text-lg">/ Software Engineer</h2>
          </div>
        </div>
        <div>
          <div className="relative lg:hidden">
            <HamburgerMenu
              onClick={handleClick}
              className={`${openMenu ? "opened" : ""}`}
            />
            <div
              className={`${
                openMenu ? "block" : "hidden"
              } absolute bg-gray-50 w-48 right-0 p-5 shadow-lg`}
            >
              <ul className="flex flex-col space-y-5">
                <li className="text-base">About Me</li>
                <li className="text-base">Résumé</li>
                <li className="text-base">Projects</li>
                <li className="text-base">Blog</li>
                <li className="text-base">Contact</li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-5">
              <Navlink url="/" active={activeTab === 1}>
                About Me
              </Navlink>
              <Navlink url="/resume" active={activeTab === 2}>
                Résumé
              </Navlink>
              <Navlink url="/projects" active={activeTab === 3}>
                Projects
              </Navlink>
              <Navlink url="/blog" active={activeTab === 4}>
                Blog
              </Navlink>
              <Navlink url="/contact" active={activeTab === 5}>
                Contact
              </Navlink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
