import React, { useRef } from "react";
import { useOnScreen } from "../helperFuncs";
import TechSkillsCarosuel from "./TechSkillsCarosuel";

const About: React.FC = () => {
  const ref: any = useRef<HTMLElement>(null);

  const about = useOnScreen(ref, {
    threshold: 0.25,
  });

  return (
    <>
      <section
        className={`global about-section basePadding m-fadeOut ${about ? 'm-fadeIn' : ""}`}
        id="about-section"
        ref={ref}
      >
        <h2 className="about__title">About Me</h2>

        <p className="about-desc">
          I worked as an Assistant Developer/Designer at{" "}
          <a
            href="https://www.ideasfwd.io/"
            className="about-section__link"
            target={"_blank"}
          >
            {" "}
            IdeasFWD
          </a>{" "}
          for over a year. There, I created hundreds of high fidelity mockups and designs in
          Figma and implemented them with a combination of HTML,
          JavaScript, and CSS.
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
          front-end products. For the backend I typically work with Node.js,
          Express, and MongoDB.
        </p>
        <TechSkillsCarosuel />
      </section>
    </>
  );
};

export default About;
