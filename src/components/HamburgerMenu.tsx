import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => setIsOpen(false);
  return (
    <Menu
      isOpen={isOpen}
      right={true}
      outerContainerId={"outer-container"}
      pageWrapId={"page-wrap"}
      onStateChange={(state) => setIsOpen(state.isOpen)}
    >
      <a
        className="navbar__items--link underline-hover-effect"
        href="#intro"
        rel="noopener noreferrer"
        onClick={onClickHandler}
      >
        <div className="test">
          <img
            src="src\assests\icons\home-svgrepo-com.svg"
            alt=""
            className="HMenu-icon"
          />
        </div>
        <span className="">Home</span>
      </a>
      <a
        className="navbar__items--link underline-hover-effect"
        href="#about-section"
        rel="noopener noreferrer"
        onClick={onClickHandler}
      >
        <img
          src="src\assests\icons\information-svgrepo-com.svg"
          alt=""
          className="HMenu-icon"
        />

        <span>About</span>
      </a>

      <a
        className="navbar__items--link underline-hover-effect"
        href="#projects"
        rel="noopener noreferrer"
        onClick={onClickHandler}
      >
        <img
          src="src\assests\icons\computer-svgrepo-com.svg"
          alt=""
          className="HMenu-icon"
        />

        <span>Projects</span>
      </a>

      <a
        className="navbar__items--link underline-hover-effect"
        href="#contact"
        rel="noopener noreferrer"
        onClick={onClickHandler}
      >
        <img
          src="src\assests\icons\mail-svgrepo-com.svg"
          alt=""
          className="HMenu-icon"
        />

        <span>Contact</span>
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
