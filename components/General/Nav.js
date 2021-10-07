import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="p-5 lg:p-10">
      <div className="flex justify-between items-center">
        <div className="font-bold text-3xl">Divine.</div>
        <div>
          <div className="relative">
            <HamburgerMenu
              onClick={handleClick}
              className={`${openMenu ? "opened" : ""}`}
            />
            <div
              className={`${
                openMenu ? "block" : "hidden"
              } absolute bg-gray-300 w-72 right-0 p-5 shadow-lg rounded-xl`}
            >
              <ul className="flex flex-col space-y-6">
                <li>Work</li>
                <li>Blog</li>
                <li>Resume</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
