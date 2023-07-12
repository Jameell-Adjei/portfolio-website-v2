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
          href="https://docs.google.com/document/d/1f6We-Nsb0aF1b9KS6F_0_kQrapwgyCG4fbnR4rWH4ZM/view"
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
