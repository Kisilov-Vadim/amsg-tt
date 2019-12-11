import React from 'react';
import PropTypes from 'prop-types';
import './WorkerCard.scss'; 

const WorkerCard = ({img, id, name, position, body}) => (
  <div className='worker'>
    <img src={img} alt={name} className="worker__img" />
    <span className="worker__name">{name}</span>
    <span className="worker__position">{position}</span>
    <p className="worker__body">{body}</p>
    <div className="worker__social">
      <img src="./img/team/social/facebook.svg" alt="facebook" />
      <img src="./img/team/social/twitter.svg" alt="twitter" />
      <img src="./img/team/social/linkedin.svg" alt="linkedin" />
    </div>
  </div>
);

WorkerCard.propTypes = {
  img: PropTypes.string.isRequired, 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired, 
  position: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,
};



export default WorkerCard;
