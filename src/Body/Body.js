import React from 'react';
import './Body.scss'; 

import Advantages from './Advantages/Advantages';
import Projects from './Projects/Projects';
import Team from './Team/Team';
import Testimonials from './Testimonials/Testimonials';
import Downloads from './Downloads/Downloads';

const Body = ({advantages}) => (
  <>
    <Advantages advantages={advantages}/>
    <Projects />
    <Team />
    <Testimonials />
    <Downloads />
  </>
);

export default Body;
