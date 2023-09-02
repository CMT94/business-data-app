import React from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    key: "home",
  },
  {
    key: "account",
  },
  {
    key: "resources",
  },
  {
    key: "about",
  },
  {
    key: "contact",
  },
];

const lastLinksIndex = navLinks.length - 1;

const Navbar = () => {
  const [navMenu, setNavMenu] = React.useState(false);
  const toggleNavMenu = () => setNavMenu((prevState) => !prevState);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">DATABIZ.</h1>
      <ul className="capitalize hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.key} className="p-4">
            {link.key}
          </li>
        ))}
      </ul>

      {/* MOBILE NAV - START */}
      <div onClick={toggleNavMenu} className="block md:hidden">
        {navMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          navMenu
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed top-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          DATABIZ.
        </h1>
        <ul className="uppercase p-4">
          {navLinks.map((link, index) => (
            <li
              key={link.key}
              className={`p-4 ${
                index !== lastLinksIndex ? "border-b border-gray-600" : null
              }`}
            >
              {link.key}
            </li>
          ))}
        </ul>
      </div>
      {/* MOBILE NAV - END */}
    </div>
  );
};

export default Navbar;
