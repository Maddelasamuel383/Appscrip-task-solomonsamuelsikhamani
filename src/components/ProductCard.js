import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <button className="wishlist-btn">♡</button>
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;