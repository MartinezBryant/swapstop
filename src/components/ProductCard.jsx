// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageSrc} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.condition}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default ProductCard;
