import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        setProducts(response.data);
        const index = response.data.findIndex(p => p.id === parseInt(id));
        if (index !== -1) {
          setCurrentIndex(index);
        }
      })
      .catch(error => console.error('Erreur lors du chargement des produits', error));
  }, [id]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === 2 ? 0 : prev + 1));
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products[currentIndex];

    const imageURL = `http://localhost:8000/images/${product.images[0]}`;

    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        marque: product.marque,
        prix: product.prix,
        description: product.description,
        image: imageURL,
        quantity: quantity,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setQuantity(1);
    navigate('/cart-confirmation');
  };

  if (products.length === 0) return <div className="text-center mt-5">Chargement...</div>;

  const product = products[currentIndex];

  return (
    <div className="container-fluid py-5" style={{ maxWidth: '1200px' }}>
      <div className="row gx-5" style={{ minHeight: '90vh' }}>
        <div className="col-md-6 d-flex flex-column">
          <div className="flex-fill rounded d-flex flex-column me-3">
            <img
              src={`http://localhost:8000/images/${product.images[0]}`}
              alt={product.nom}
              className="img-fluid mb-3"
              style={{ maxHeight: '450px', width: '120%', objectFit: 'cover' }}
            />
            <div className="d-flex justify-content-center align-items-center mt-3" style={{ position: 'relative', left: '-100px' }}>
              <button className="btn btn-outline-secondary rounded-circle me-2" onClick={handlePrev}>&lt;</button>
              <span className="mx-5">
                <span className={currentIndex === 0 ? 'text-dark point' : 'text-muted point'}>●</span>
                <span className={currentIndex === 1 ? 'text-dark point' : 'text-muted point'}>●</span>
                <span className={currentIndex === 2 ? 'text-dark point' : 'text-muted point'}>●</span>
              </span>
              <button className="btn btn-outline-secondary rounded-circle ms-2" onClick={handleNext}>&gt;</button>
            </div>
          </div>

          <div className="flex-fill rounded bg-white overflow-auto mt-4 p-3">
            <h4 className="fw-bold mb-3">Description</h4>
            <div className="border-top my-3"></div>
            <div style={{ lineHeight: '1.6' }}>
              <p>Energize yours look with a fresh take on heritage adidas <br />
                  style.The <span className="mb-3">{product.description}</span> cut a classic profile <br />
                  with a modern suede upper.Your walk across campus or <br />
                  commute across town has never looked or felt this <br />
                  good. <br />
                  <ul>
                    <li>Regular fit</li>
                    <li>Lace closure </li>
                    <li>Rubber outsole with vulcanized look </li>
                    <li>Imported</li>
                  </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column gap-3">
          <div className="flex-fill shadow p-3 rounded bg-white">
            <h5 className="fw-bold mb-3">{product.marque}</h5>
            <h3 className="text-bold">{product.description}</h3>
            <h4 className="fw-bold mb-4">${product.prix}</h4>
            <div className="border-top my-3"></div>

            <div className="mb-3">
              <strong>Quantity</strong>
              <div className="d-flex align-items-center mt-2">
                <button onClick={handleDecrease} className="btn btn-outline-secondary px-3">−</button>
                <span className="mx-3">{quantity}</span>
                <button onClick={handleIncrease} className="btn btn-outline-secondary px-3">+</button>
              </div>
            </div>

            <button className="btn btn-dark w-100 py-3 mt-3 fw-bold" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="flex-fill rounded d-flex align-items-center">
            <img
              src={`http://localhost:8000/images/${product.images[1] || product.images[0]}`}
              alt="Produit complémentaire"
              className="img-fluid"
              style={{ maxHeight: '450px', width: '120%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
