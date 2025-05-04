import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import shoeImage from '../assets/nike1.jpg';

function Hero() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="bg-light rounded-4 p-5 d-flex align-items-center justify-content-between my-4 mx-4 w-100" style={{ maxWidth: '1279px' }}>
        <div>
          <h5 className='fs-1' style={{ color: '#FF6F3C' }}>25% OFF</h5>
          <h1 className="fw-bold">Summer Sale</h1>
          <p>Discover our summer styles with discount</p>
          <button className="btn btn-dark px-5 py-3">
            Shop Now →
          </button>

        </div>
        <img src={shoeImage} alt="Shoe" style={{ maxWidth: '400px' }} />
      </div>
    </div>
  );
}

export default Hero;
