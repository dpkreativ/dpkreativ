import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="p-5 lg:p-10">
      <div className="flex justify-between items-center">
        <div className="font-bold text-3xl text-purple-600">
          <Logo />
        </div>
        <div>
          <div className="relative">
            <HamburgerMenu
              onClick={handleClick}
              className={`${openMenu ? "opened" : ""}`}
            />
            <div
              className={`${
                openMenu ? "block" : "hidden"
              } absolute bg-purple-50 w-72 right-0 p-5 shadow-lg rounded-2xl`}
            >
              <ul className="flex flex-col space-y-6">
                <li className="text-lg">Work</li>
                <li className="text-lg">Blog</li>
                <li className="text-lg">Resume</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
