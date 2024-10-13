import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer-container">
      <div className="Footer-content">
        {/* Logo and Description */}
        <div className="Footer-card">
          <img src="./assets/logo.png" alt="Logo" className="Footer-logo" />
          {/* <h1>𝑯𝒐𝒎𝒆 𝑻𝒊𝒍𝒆𝒔</h1> */}

          <p className="Footer-description">
            Transform your space with our premium tiles and marble. Quality and elegance that lasts a lifetime.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="Footer-card">
          <h4 className="Footer-title">Quick Links</h4>
          <ul className="Footer-navLinks">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="Footer-card">
          <h4 className="Footer-title">Follow Us</h4>
          <div className="Footer-socialMedia">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="Footer-card">
          <h4 className="Footer-title">Contact Us</h4>
          <p>1234 Tile Street, Marble City</p>
          <p>Email: info@tilesmarble.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="Footer-bottom">
        <p>&copy; 2024 Tiles & Marble. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
