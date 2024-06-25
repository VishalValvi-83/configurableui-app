import React from 'react';

const Card = ({ id, description, name, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Card;