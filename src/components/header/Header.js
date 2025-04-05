import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

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
          <p><i className="phone-icon">📞{" "}</i>+91 9014479656</p>
          {/* <p><i className="phone-icon">📱 {" "}</i>+91 0000000000</p> */}
          <p><i className="email-icon">✉️</i> {" "}Vltsstores@gmail.com</p>
        </div>
        <div className="social-icons">
          <FaFacebookF className="icon icons-1" />
          <FaInstagram className="icon icons-2" />
          <FaWhatsapp className="icon icons-3" />
        </div>
      </div>

      <div className="navbar-container">
        <div className="logo">
        <img src="./assets/logo.png" alt="Logo" className="header-logo" />

          {/* <h1>𝑯𝒐𝒎𝒆 𝑻𝒊𝒍𝒆𝒔</h1> */}
        </div>

        <div className={`small-screen ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="close-button" onClick={toggleMobileMenu}>
            <FaTimes />
          </div>
          <ul className="nav-links large-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
                
              <a >Products ⏷</a>
              <div className="dropdown-menu">
                <Link to="/flore-tiles">
                Flore Tiles</Link>
                <Link to="/wall-tiles">Wall tiles</Link>
                <Link to="/parking-tiles">Parking Tiles</Link>
                {/* <a href="/featured">More..</a> */}
              </div>
            </li>

            {/* <li className="nav-item dropdown">
              <a>Media</a>
              <div className="dropdown-menu">
                <a href="/test-prep/ielts">Photography</a>
                <a href="/test-prep/gmat">Video Editing</a>
              </div>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a >Services</a>
              <div className="dropdown-menu">
                <a href="/services/consulting">Consulting</a>
                <a href="/services/visa">Visa Assistance</a>
              </div>
            </li> */}
            <li className="nav-item">
              <a href="/gallery">Gallary</a>
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
