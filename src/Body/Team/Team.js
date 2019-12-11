import React from 'react';
import './Team.scss'; 

import { team } from './../../data/data';
import WorkerCard from './WorkerCard/WorkerCard';

const Team = (props) => (
  <div className="wrapper">
    <div className='team' id="team">
      {team.map(({id, img, name, position, body}) => 
        <WorkerCard
          key={id} 
          id={id}
          img={img} 
          name={name} 
          position={position} 
          body ={body}
        />)}
    </div>
  </div>
);


export default Team;
