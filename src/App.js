import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    idealFor: [],
    category: [],
    priceRange: [0, 1000]
  });
  const [rightfilters,setRightfilters] = useState('newest')
  const [searchInput, setSearchInput] = useState('');


  const search = (input) => {
    setSearchInput(input);
  };

   useEffect(() => {
    const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?sort=${filters}&search=${searchInput}`);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      let filtered = data.filter(product =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );

  
      if (filters.category.length > 0) {
        filtered = filtered.filter(product =>
          filters.category.includes(product.category)
        );
      }

      
      if (filters.idealFor.length > 0) {
        filtered = filtered.filter(product =>
          filters.idealFor.includes(product.gender || product.type || '')
        );
      }

      
      filtered = filtered.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );

      setProducts(filtered);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
     fetchProducts();
   }, [searchInput, filters]);

  


  const handleFilterChange = (filterType, value, checked) => {
    setFilters(prev => {
      if (filterType === 'price') {
        return { ...prev, priceRange: [0, value] };
      }
      
      const updatedFilters = [...prev[filterType]];
      if (checked) {
        updatedFilters.push(value);
      } else {
        const index = updatedFilters.indexOf(value);
        if (index > -1) updatedFilters.splice(index, 1);
      }
      
      return { ...prev, [filterType]: updatedFilters };
    });
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <Header search={search} searchInput={searchInput}/>
      <main className="main-content">
        <Filters onFilterChange={handleFilterChange} />
        <ProductGrid products={products} rightfilters={rightfilters} setRightfilters={setRightfilters}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
