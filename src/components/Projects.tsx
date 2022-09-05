import React from "react";
import ProjectItem from "./ProjectItem";
import { useOnViewport } from "../helperFuncs";
import { colorVertTags, movieTrackerTags } from "../data";

const Projects: React.FC = () => {
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
          title="Movie Tracker"
          desc="A web application that allow users to track movies that have watched and save the titles of movies that wish to watch later."
          tags={movieTrackerTags}
          src={'src/assests/images/original movie tracker image v2.png'}
        />

        <ProjectItem
          title="ColorVert"
          desc="An Google Chorme extension that aids colorblind individuals in navigating the web."
          link="https://github.com/HamzaWaseemBajwa/ColorVert-browser-extension"
          tags={colorVertTags}
          src={'src/assests/images/ColorVert Logo.png'}
        />
      </div>
    </div>
  );
};

export default Projects;
