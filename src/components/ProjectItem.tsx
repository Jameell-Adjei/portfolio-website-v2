import React from "react";
import PropTypes from "prop-types";
import ProjectDesc from "./ProjectDesc";
import ProjectImage from "./ProjectImage";

interface PIProps {
  title: string;
  desc: string;
  tags: string[];
  src?: string;
  link?: string;
}

const ProjectItem: React.FC<PIProps> = ({ title, desc, link, tags, src }) => {
  return (
    <>
      <h1 className="project-grid__item--title">{title}</h1>
      <div className="project-item-wrapper">
        <ProjectImage src={src} />
        <a
          className="project-grid__item"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectDesc tags={tags} desc={desc} />
        </a>
      </div>
    </>
  );
};
ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectItem;
