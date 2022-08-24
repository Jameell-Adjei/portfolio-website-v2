import React from "react";
import ProjectItem from "./ProjectItem";
import { useOnViewport } from "../helperFuncs";
import { colorVertTags, movieTrackerTags } from "../data";

const Project: React.FC = () => {
  useOnViewport(
    { rootMargin: "0px 0px -250px 0px", threshold: 0 },
    ".project-container",
    "animate"
  );
  return (
    <div className="global project-container basePadding" id="projects">
      <h2 className="project__main-header">Projects I’ve worked on</h2>
      <div className="project-grid">
        <ProjectItem
          title="Portfolio Website"
          desc="As a way to better portray myself and my work to potential employers I created this website mainly using React and SCSS."
          link="https://github.com/Jameell-Adjei/portfolio-website"
        />

        <ProjectItem
          title="ColorVert"
          desc="An Google Chorme extension that aids colorblind individuals in navigating the web."
          link="https://github.com/HamzaWaseemBajwa/ColorVert-browser-extension"
          tags={colorVertTags}
        />

        <ProjectItem
          title="Email Client"
          desc="A web application that allow users to track movies that have watched and save the titles of movies that wish to watch later."
          tags={movieTrackerTags}
        />
      </div>
    </div>
  );
};

export default Project;
