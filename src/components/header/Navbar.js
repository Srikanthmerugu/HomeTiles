import React, { useState } from 'react'
import './Header.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
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
    <div>
       <div className="navbar-container">
        <div className="logo">
        <img src="./assets/logo.png" alt="Logo" className="Footer-logo" />

          {/* <h1>𝑯𝒐𝒎𝒆 𝑻𝒊𝒍𝒆𝒔</h1> */}
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
                
              <a >Products</a>
              <div className="dropdown-menu">
                <a href="/study-abroad/country1">Flore Tiles</a>
                <a href="/study-abroad/country2">Wall tiles</a>
                <a href="/study-abroad/country2">Parking Tiles</a>
                <a href="/study-abroad/country2">More..</a>
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
              <a href="/contact">Gallary</a>
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
    </div>
  )
}

export default Navbar
