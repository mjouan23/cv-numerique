import React from 'react';

import './Card.css'


function Card({ title, content, image, icons }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        {title && <h3>{title}</h3>}
        {content && <p>{content}</p>}
      </div>
      {/* <div className="icons"></div> */}
    </div>
  );
}

export default Card;
