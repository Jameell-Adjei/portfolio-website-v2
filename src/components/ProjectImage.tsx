import React from "react";
interface ProjectImgProps {
  src?: string;
}
const ProjectImage: React.FC<ProjectImgProps> = ({ src }) => {
  return (
      <img src={src} alt="" className="project-img"/>
  );
};

export default ProjectImage;
