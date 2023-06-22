import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "./Nav";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="flex justify-between items-center h-[80px] px-8 md:px-16 lg:px-32 relative">
      <div className="flex gap-x-8 items-center">
        <img src="/images/logo.svg" alt="logo" />
        <nav className="hidden md:block">
          <ul className="flex gap-x-8 text-GrayishViolet">
            <li>
              <a href="#" className="hover:text-DarkViolet">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-DarkViolet">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-DarkViolet">
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        {showMenu ? (
          <button className="md:hidden text-GrayishViolet" onClick={toggleMenu}>
            <FaTimes size={25} />
          </button>
        ) : (
          <button className="md:hidden text-GrayishViolet" onClick={toggleMenu}>
            <FaBars size={25} />
          </button>
        )}

        <div className="hidden md:flex items-center gap-x-8 font-semibold text-GrayishViolet">
          <button className="hover:text-VeryDarkViolet">Login</button>
          <button className="bg-Cyan px-4 py-2 rounded-3xl text-white  relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-Gray/20 hover:before:rounded-3xl">Sign Up</button>
        </div>
      </div>
      {showMenu && <Nav />}
    </header>
  );
};
export default Header;
