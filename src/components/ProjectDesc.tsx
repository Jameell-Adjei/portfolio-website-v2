import React from 'react'

interface PDProps {
    desc: string;
    tags: string[]; 
  }
const ProjectDesc: React.FC<PDProps> = ({ desc, tags}) => {
  return (
    <div className="project-grid-item-desc">
    <p>{desc}</p>
    <div className="project-item-tags">
      {tags.map((tag) => (
        <p className="project-item-tag">{tag}</p>
      ))}
    </div>
  </div>
  )
}

export default ProjectDesc