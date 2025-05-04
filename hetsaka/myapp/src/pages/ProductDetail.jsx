import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Erreur de chargement du produit', error));
  }, [id]);

  if (!product) return <div className="container mt-5">Chargement...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={`http://localhost:8000/storage/${product.images[0]}`} alt={product.nom} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.nom}</h2>
          <p>{product.description}</p>
          <h4>{product.prix} Ar</h4>
          <button className="btn btn-dark">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
