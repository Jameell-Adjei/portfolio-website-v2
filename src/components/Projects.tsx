import React from "react";
import ProjectItem from "./ProjectItem";
import { colorVertTags, movieTrackerTags, meetTags } from "../data";

const Projects: React.FC = () => {
  return (
    <section className="global project-container basePadding" id="projects">
      <h2 className="project__main-header">Projects I’ve worked on</h2>
      <div className="project-grid">
        <ProjectItem
          title="Meet: Landing Page"
          desc="A landing page designed for a mock product that is a group chat application."
          link="https://kaleidoscopic-rabanadas-1b02f1.netlify.app/"
          tags={meetTags}
          src={"/images/meet landing page logo.png"}
        />
        <ProjectItem
          title="Movie Tracker"
          desc="A web application that allow users to track movies that have watched and save the titles of movies that wish to watch later."
          tags={movieTrackerTags}
          src={"/images/original movie tracker image v2.png"}
        />

        <ProjectItem
          title="ColorVert"
          desc="An Google Chorme extension that aids colorblind individuals in navigating the web."
          link="https://github.com/HamzaWaseemBajwa/ColorVert-browser-extension"
          tags={colorVertTags}
          src={"/images/ColorVert Logo.png"}
        />
      </div>
    </section>
  );
};

export default Projects;
