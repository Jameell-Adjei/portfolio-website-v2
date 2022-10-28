import React, { useRef } from "react";
import PropTypes from "prop-types";
import ProjectDesc from "./ProjectDesc";
import ProjectImage from "./ProjectImage";
import { useOnScreen } from "../helperFuncs";

interface PIProps {
  title: string;
  desc: string;
  tags: string[];
  src?: string;
  link?: string;
}

const ProjectItem: React.FC<PIProps> = ({ title, desc, link, tags, src }) => {
  const ref: any = useRef<HTMLElement>(null);

  const itemOnScreen = useOnScreen(ref, {
    threshold: 0.25,
  });

  return (
    <div
      className={`project-item m-fadeOut ${itemOnScreen ? "m-fadeIn" : ""}`}
      ref={ref}
    >
      <h3 className="project-grid__item--title">{title}</h3>
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
    </div>
  );
};
ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectItem;
