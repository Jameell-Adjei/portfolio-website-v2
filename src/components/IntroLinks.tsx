import React from "react";

const IntroLinks: React.FC = () => {
  return (
    <ul className="intro__linkList">
      <li>
        <a
          rel="noopener noreferrer"
          href="https://github.com/Jameell-Adjei"
          target="_blank"
          className="intro__linkListItem underline-hover-effect"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jameell-adjei-994132225/"
          target="_blank"
          className="intro__linkListItem underline-hover-effect"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1103L-nbrfVDtOxeuEMDJD4pasL7hOWKe/view"
          target="_blank"
          className="intro__linkListItem underline-hover-effect"
        >
          Resume
        </a>
      </li>

{/* 
      <li>
        <a
          rel="noopener noreferrer"
          href="mailto:jameelladjei@gmail.com" 
          className="intro__linkListItem underline-hover-effect"
        >
          Contact Me via Email
        </a>
      </li> */}
    </ul>
  );
};

export default IntroLinks;
