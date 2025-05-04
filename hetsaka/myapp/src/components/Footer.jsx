// Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-100 fixed-bottom" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="text-start text-white">
            ©SUN CO.
          </div>
          <div className="text-between text-white">
            © 2023 dot.cards text task. All rights reserved
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="text-white"><FaFacebook /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;