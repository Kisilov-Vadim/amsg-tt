import React, {useState} from 'react';
import './Testimonials.scss'; 
import { quotes } from './../../data/data';

const Testimonials = (props) => {

  const [id, setId] = useState(1)
  
  return (
    <div className="testimonials" name="testimonials">
      <div className="testimonials__left"></div>
      <div className="testimonials__right">
        <blockquote>“{quotes[id].quote}”</blockquote>
        <p>{quotes[id].name}</p>
        <div className="testimonials__right-dashes">
          <div 
            className={id === 0 ? 'active' : 'disable'}
            onClick={() => setId(0)}
          ></div>
          <div 
            className={id === 1 ? 'active' : 'disable'}
            onClick={() => setId(1)}
          ></div>
          <div 
            className={id === 2 ? 'active' : 'disable'}
            onClick={() => setId(2)}
          ></div>
          <div 
            className={id === 3 ? 'active' : 'disable'}
            onClick={() => setId(3)}
          ></div>
          <div 
            className={id === 4 ? 'active' : 'disable'}
            onClick={() => setId(4)}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
