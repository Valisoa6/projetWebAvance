// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={product.image_url || 'https://via.placeholder.com/300'} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{product.brand}</h5>
          <p className="card-text text-muted">{product.name}</p>
          <p className="card-text fw-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
