
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartConfirmation from './pages/CartConfirmation';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar /><br /><br /><br />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart-confirmation" element={<CartConfirmation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;