import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import shoeImage from '../assets/nike1.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container mb-5">
      <div className="bg-light rounded-4 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between my-4 mx-auto w-100" style={{ maxWidth: '1279px' }}>
        {/* Image en haut sur mobile, à droite sur grand écran */}
        <img 
          src={shoeImage} 
          alt="Shoe" 
          className="mb-4 mb-md-0 order-1 order-md-2" 
          style={{ maxWidth: '400px', width: '50%' }} 
        />

        {/* Texte en dessous de l'image sur mobile, à gauche sur grand écran */}
        <div className="text-center text-md-start order-2 order-md-1">
          <h5 className='fs-1' style={{ color: '#FF6F3C' }}>25% OFF</h5>
          <h1 className="fw-bold">Summer Sale</h1>
          <p>Discover our summer styles with discount</p>
          <Link to="/product/1" className="btn btn-dark px-5 py-3" style={{ width: '100%', maxWidth: '300px' }}>
            Shop Now →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
