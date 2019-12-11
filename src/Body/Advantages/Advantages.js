import React from 'react';
import './Advantages.scss'; 

import AdvantCard from './AdvantCard/AdvantCard';

const Advantages = ({advantages}) => (
  <div className="wrapper">
    <div className="advantages" id="fitures">
      {advantages.map(({id, img, title, body}) => 
        <AdvantCard
          key={id} 
          img={img}
          title={title}
          body={body}
        />)}
    </div>
  </div>
);

export default Advantages;
