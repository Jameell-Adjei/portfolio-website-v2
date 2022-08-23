import React from "react";
import { useOnViewport } from "../helperFuncs";

const About: React.FC = () => {
  useOnViewport(
    { rootMargin: "0px 0px -250px 0px", threshold: 0 },
    ".about-section",
    "animate"
  );
  return (
    <section className="global about-section basePadding" id="about-section">
      <h1 className="about__title">About Me</h1>

      <p className="about-desc">
        I worked as a Assistant Developer/Designer at IdeasFWD for almost 2
        years. There, I created hundreds of mockups and designs in Figma and
        implemented those designs with a combination of HTML, JavaScript, and
        CSS.
      </p>

      <p className="about-desc">
        My favorite aspect of doing this kind of work is seeing a project come
        to life. From design to fully implemented creating websites has been a
        passion of mine for as long as I can remember. I am currently looking
        for a position as a front-end or a full-stack developer. Please reach
        out to via email to connect.
      </p>

      <p className="about-desc">
        I work with React.js, HTML, JavaScript, and CSS/SCSS to create quality
        front-end products. For the backend I work with Express and MongoDB.
      </p>
      <ul className="skill-list">
        <li className="skill-list__item">JavaScript (ES6/ES2015)</li>
        <li className="skill-list__item">React</li>
        <li className="skill-list__item">CSS/SCSS</li>
        <li className="skill-list__item">MongoDB</li>
        <li className="skill-list__item">Mongoose</li>
        <li className="skill-list__item">Express</li>
        <li className="skill-list__item">Node.js</li>
      </ul>
    </section>
  );
};

export default About;
