import React from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
  return (
    <aside className="filters">
      <div className="filters-header">
        <h2>FILTERS</h2>
        <button className="clear-all">Clear All</button>
      </div>

      <div className="filter-group">
        <h3>IDEAL FOR</h3>
        <div className="filter-options">
          <label>
            <input 
              type="checkbox" 
              name="ideal-for" 
              value="men" 
              onChange={(e) => onFilterChange('idealFor', e.target.value, e.target.checked)}
            />
            Men
          </label>
          <label>
            <input 
              type="checkbox" 
              name="ideal-for" 
              value="women"
              onChange={(e) => onFilterChange('idealFor', e.target.value, e.target.checked)}
            />
            Women
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3>PRICE</h3>
        <div className="price-slider">
          <input 
            type="range" 
            min="0" 
            max="1000" 
            defaultValue="500"
            onChange={(e) => onFilterChange('price', e.target.value)}
          />
          <div className="price-range">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      <div className="filter-group">
        <h3>CATEGORIES</h3>
        <div className="filter-options">
          <label>
            <input 
              type="checkbox" 
              name="category" 
              value="jewelry"
              onChange={(e) => onFilterChange('category', e.target.value, e.target.checked)}
            />
            Jewelry
          </label>
          <label>
            <input 
              type="checkbox" 
              name="category" 
              value="clothing"
              onChange={(e) => onFilterChange('category', e.target.value, e.target.checked)}
            />
            Clothing
          </label>
          <label>
            <input 
              type="checkbox" 
              name="category" 
              value="electronics"
              onChange={(e) => onFilterChange('category', e.target.value, e.target.checked)}
            />
            Electronics
          </label>
        </div>
      </div>             
    </aside>
  );
};

export default Filters;