import React from 'react';
import './Projects.scss'; 

import {projects} from '../../data/data'; 
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = (props) => (
  <div className="projects" id="works">
    {projects.map(({img, id}) => 
      <ProjectCard 
        img={img} 
        key={id}
        id={id}
      />)}
  </div>
);


export default Projects;
