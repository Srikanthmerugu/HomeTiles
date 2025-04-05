import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Importing react-icons

const Footer = () => {
  return (
    <footer className="Footer-container">
      <div className="Footer-content">
        {/* Logo and Description */}
        <div className="Footer-card">
          <img src="./assets/logo.png" alt="Logo" className="Footer-logo" />
          <p className="Footer-description">
            Transform your space with our premium tiles and marble. Quality and
            elegance that lasts a lifetime.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="Footer-card">
          <h4 className="Footer-title">Quick Links</h4>
          <ul className="Footer-navLinks">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links with Icons */}
        <div className="Footer-card">
          <h4 className="Footer-title">Follow Us</h4>
          <div className="Footer-socialMedia">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="Footer-card">
          <h4 className="Footer-title">Contact Us</h4>
          <p>Chinnamiram, Chinamiram Rural, Andhra Pradesh 534204</p>
          <p>
            Email:{" "}
            <a href="mailto:Vltsstores@gmail.com">Vltsstores@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+919014479656">9014479656</a>
          </p>
        </div>

        {/* Gallery Section */}
        <div className="Footer-card">
          <h4 className="Footer-title">Gallery</h4>
          <div className="Footer-gallery">
            <img
              src="https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439817.jpg?t=st=1728374236~exp=1728377836~hmac=4d3d23af2ea07bf43dffc15b56ec864bf043841c18e394e888e31d696be00243&w=360"
              alt="Tile Image 1"
            />
            <img
              src="https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439817.jpg?t=st=1728374236~exp=1728377836~hmac=4d3d23af2ea07bf43dffc15b56ec864bf043841c18e394e888e31d696be00243&w=360"
              alt="Tile Image 2"
            />
            <img
              src="https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439817.jpg?t=st=1728374236~exp=1728377836~hmac=4d3d23af2ea07bf43dffc15b56ec864bf043841c18e394e888e31d696be00243&w=360"
              alt="Tile Image 3"
            />
            <img src="https://via.placeholder.com/150" alt="Tile Image 4" />
            <img src="https://via.placeholder.com/150" alt="Tile Image 3" />
            <img
              src="https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439817.jpg?t=st=1728374236~exp=1728377836~hmac=4d3d23af2ea07bf43dffc15b56ec864bf043841c18e394e888e31d696be00243&w=360"
              alt="Tile Image 4"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="Footer-bottom">
        <p>&copy; 2025 Tiles & Marble. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
