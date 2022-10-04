import React from "react";

interface TSProps {
  title: string;
  className: string;
}

const TechSkill: React.FC<TSProps> = ({ title, className }) => {
  return (
    <div className="tech-skill embla__slide">

        <i className={className + " colored"}> </i>
        <span className="techSkillTitle">{title}</span>
    
    </div>
  );
};

export default TechSkill;
