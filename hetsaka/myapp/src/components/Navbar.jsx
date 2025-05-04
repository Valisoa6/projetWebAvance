// Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white border-bottom py-3 fixed-top">
      <div className="container d-flex justify-content-between align-items-center px-3 px-md-4">
        <p className="fs-4 fw-bold text-decoration-none" style={{ margin: 0 }}>
          SUN CO.
        </p>
        <button className="btn btn-outline-dark">🛒 View Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;