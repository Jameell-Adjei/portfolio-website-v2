import React from "react";
import { slide as Menu } from 'react-burger-menu'
import HamburgerMenu from "./HamburgerMenu";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="" className="navbar__logo">
        <svg
          width="32px"
          height="36px"
          viewBox="0 0 32 36"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Created with Lunacy</desc>
          <g id="Group-2" transform="translate(2.5 2.5)">
            <path
              d="M0 0L27 0L27 17.9754L27 31L13.5 31L0 31L0 0Z"
              transform="matrix(-1 0 0 -1 27 31)"
              id="Line-2"
              fill="none"
              fillRule="evenodd"
              stroke="#DEE3ED"
              strokeWidth="5"
            />
            <g id="J" fill="#DEE3ED" transform="translate(8 1)">
              <path d="M10.032 8.83834L8.304 8.83834L8.304 18.9183Q8.304 21.0303 7.248 22.0863Q6.192 23.1423 4.296 23.1423Q2.76 23.1423 1.836 22.4823Q0.912 21.8223 0.408 20.7663L1.68 19.8063Q2.184 20.7903 2.772 21.1383Q3.36 21.4863 4.152 21.4863Q5.424 21.4863 5.988 20.7903Q6.552 20.0943 6.552 18.9183L6.552 8.83834L3.456 8.83834L3.456 7.30234L10.032 7.30234L10.032 8.83834Z" />
            </g>
          </g>
        </svg>
      </a>
      <div className="navbar__items">
        <a
          className="navbar__items--link underline-hover-effect"
          href="#intro"
          rel="noopener noreferrer"
        >
          <span className="">Home</span>
        </a>
        <a
          className="navbar__items--link underline-hover-effect"
          href="#about-section"
          rel="noopener noreferrer"
        >
          <span>About</span>
        </a>

        <a
          className="navbar__items--link underline-hover-effect"
          href="#projects"
          rel="noopener noreferrer"
        >
          <span>Projects</span>
        </a>

        <a
          className="navbar__items--link underline-hover-effect"
          href="#contact"
          rel="noopener noreferrer"
        >
          <span>Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
