import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {RxCross2, RxHamburgerMenu} from "react-icons/rx"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full pt-5 border-b items-center shadow-lg bg-white">
      <div className="flex justify-between items-end px-4 sm:px-10">
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-[4rem] left-0 w-full bg-white shadow-lg sm:shadow-none sm:static sm:block`}
        >
          <ul className="flex flex-col sm:flex-row sm:gap-10 items-center sm:justify-end text-lg font-semibold">
            <li className="py-2 sm:py-0">
              <Link to="/home" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="py-2 sm:py-0">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Grid
              </Link>
            </li>
            <li className="py-2 sm:py-0">
              <a
                href="https://www.linkedin.com/in/rajat-bagaddeo-1b62ba311"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl font-semibold"
        >
          {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
