import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Nos produits</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ textAlign: 'center' }}>
              {/* Première image seulement */}
              {product.images?.length > 0 && (
                <img
                  src={`http://localhost:8000/storage/${product.images[0]}`}
                  alt={product.marque}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
              )}
            </div>
            <h2 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{product.marque}</h2>
            <p style={{ fontWeight: 'bold' }}>{product.prix} €</p>
            <p style={{ color: '#555' }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
