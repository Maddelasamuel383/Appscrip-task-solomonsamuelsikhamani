import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, rightfilters, setRightfilters }) => {
  return (
    <div className="product-grid-container">
      <div className="product-grid-header">
        <div className="product-count">
          {products.length} Products
        </div>
        <div className="sort-options">
          <select onChange={(e) => setRightfilters(e.target.value)} value={rightfilters}>
            <option value="featured">Featured</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;