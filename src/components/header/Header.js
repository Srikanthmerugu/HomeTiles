import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    studyAbroad: false,
    media: false,
    services: false,
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="navbar">
      <div className="top-bar">
        <div className="contact-info">
          <p><i className="phone-icon">📞</i>+91 85558 25755</p>
          <p><i className="phone-icon">📱</i>+91 90309 22159</p>
          <p><i className="email-icon">✉️</i>info@triospaceoverseas.com</p>
        </div>
        <div className="social-icons">
          <FaFacebookF className="icon icons-1" />
          <FaInstagram className="icon icons-2" />
          <FaWhatsapp className="icon icons-3" />
        </div>
      </div>

      <div className="navbar-container">
        <div className="logo">
          <h1>STUDY ABROAD</h1>
        </div>

        <div className={`small-screen ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="close-button" onClick={toggleMobileMenu}>
            <FaTimes />
          </div>
          <ul className="nav-links large-nav">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
                
              <a >Study Abroad</a>
              <div className="dropdown-menu">
                <a href="/study-abroad/country1">Study in USA</a>
                <a href="/study-abroad/country2">Study in UK</a>
                <a href="/study-abroad/country2">Study in Canada</a>
                <a href="/study-abroad/country2">Study in Australia</a>
                <a href="/study-abroad/country2">Study in France</a>
                <a href="/study-abroad/country2">Study in Ireland</a>
                <a href="/study-abroad/country2">More..</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a>Media</a>
              <div className="dropdown-menu">
                <a href="/test-prep/ielts">Photography</a>
                <a href="/test-prep/gmat">Video Editing</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a >Services</a>
              <div className="dropdown-menu">
                <a href="/services/consulting">Consulting</a>
                <a href="/services/visa">Visa Assistance</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>


          
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "" : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
