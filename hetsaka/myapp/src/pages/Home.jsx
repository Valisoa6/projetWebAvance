import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Hero />
      <ProductList />
    </div>
  );
};

export default Home;