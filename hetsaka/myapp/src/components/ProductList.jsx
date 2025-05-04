import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Erreur lors du chargement des produits', error));
  }, []);

  return (
    <div className="container mb-5">
      <h4 className="fw-bold mb-4">Explore our latest drops</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {products.map(product => (
          <div className="col-sm-6 col-md-3 mb-4" key={product.id}>
            <div className="card h-100 border-0">
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <img
                  src={`http://localhost:8000/storage/${product.images[0]}`}
                  className="card-img-top"
                  alt={product.nom}
                />
              </Link>
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