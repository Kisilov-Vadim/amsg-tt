import React from 'react';
import './AdvantCard.scss';
import { PropTypes } from 'prop-types';

const AdvantCard = ({img, title, body}) => (
  <div className="card">
    <img src={img} className="card__img" alt="feature" />
    <span className="card__title">{title}</span>
    <p className="card__info">{body}</p>
  </div>
);

AdvantCard.propTypes = {
  img: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired
}

export default AdvantCard;