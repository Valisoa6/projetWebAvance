import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../index.css'; // si tu mets les styles séparément

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Erreur lors du chargement des produits', error));
  }, []);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mb-5">
      <h4 className="fw-bold mb-4">Explore our latest drops</h4>

      {/* Mobile version */}
      <div className="d-block d-md-none position-relative">
        <div
          ref={containerRef}
          className="d-flex no-scrollbar"
          style={{
            overflowX: 'hidden',
          }}
        >
          {products.map(product => (
            <div className="me-3" style={{ minWidth: '250px', flex: '0 0 auto' }} key={product.id}>
              <div className="card h-100 border-0">
                <img
                  src={`http://localhost:8000/images/${product.images[0]}`}
                  className="card-img-top"
                  alt={product.nom}
                />
                <div className="card-body">
                  <h5 className="fw-bold card-title">{product.marque}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="fw-bold card-text">${product.prix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-start mt-3 gap-2 d-md-none">
          <button
            className="btn rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
              border: 'none'
            }}
            onClick={() => scroll('left')}
          >
            &lt;
          </button>
          <button
            className="btn rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
              border: 'none'
            }}
            onClick={() => scroll('right')}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Desktop version */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 d-none d-md-flex">
        {products.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100 border-0">
              <img
                src={`http://localhost:8000/images/${product.images[0]}`}
                className="card-img-top"
                alt={product.nom}
              />
              <div className="card-body">
                <h5 className="fw-bold card-title">{product.marque}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold card-text">${product.prix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;