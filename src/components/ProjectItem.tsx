import React from "react";
import PropTypes from "prop-types";

interface PIProps {
  title: string;
  desc: string;
  tags?: string[]; // remove the optional ? later
  link?: string;
}

const ProjectItem: React.FC<PIProps> = ({ title, desc, link, tags }) => {
  return (
    <>
      <h1 className="project-grid__item--title">{title}</h1>
      <a
        className="project-grid__item"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-grid-item-desc">
          <p>{desc}</p>
          <div className="project-item-tags">
            {tags?.map((tag) => (
              <p className="project-item-tag">{tag}</p>
            ))}
          </div>
        </div>
      </a>
    </>
  );
};
ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectItem;
