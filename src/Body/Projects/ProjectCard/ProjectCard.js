import React from 'react';
import './ProjectCard.scss'; 

const ProjectCard = ({img, id}) => (
  <div className="projectCard">
    <img src={img} alt="project" className={`projectCard ${id > 6 ? 'delete' : null}`} />
    <div className={`projectCard__info ${id > 6 ? 'delete' : null}`}>
      <span className='projectCard__info-title'>Project Name</span>
      <p className='projectCard__info-body'>User Interface Design</p>
    </div>
  </div>
);


export default ProjectCard;


