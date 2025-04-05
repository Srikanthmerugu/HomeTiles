import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
  {/* <div className='contact-image'>
        <img className='cantact-hero' src="https://img.freepik.com/premium-photo/luxurious-showroom-displaying-highend-building-materials-like-marble-exotic-woods-designer-ti_841543-77346.jpg?w=1800"/>
      </div> */}
       <header className="contact-header">
      <div className="header-overlay">
        <div className="contact-container1">
          <h2>Contact Vitero<sup>®</sup>{" "} Tiles</h2>
          <p className="contact-subtitle">Your Premium Source for Tiles & Marble</p>
          <div className="breadcrumb">
            <Link to="/"><span>Home</span></Link> / <span className='breadcrumb-old'>Contact Us</span>
          </div>
        </div>
      </div>
    </header>
    <div className="contact-container">
   
       <div className="contact-image hero-img-box animate__animated animate__fadeInRight">
              <div className="tailimg-container">
                <div className="tailimg-grid">
                  <div className="tailimg-main-image">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2015.jpg?t=st=1728382310~exp=1728385910~hmac=b5368b85fcfdda3e98fb467bbbd667ce0ec146766d8a624630cd43f4117918d0&w=826" alt="Main Image"/>
                  </div>

                  <div className="tailimg-right-images">
                    <div className="tailimg-top-right">
                      <img src="https://img.freepik.com/free-vector/colored-realistic-ceramic-floor-tiles-horizontal-set-with-squares-different-types-styles-tiles_1284-29013.jpg?t=st=1728383150~exp=1728386750~hmac=ec13e78a002ef3e835ce349398a28ca95a333c307246fd9fa7b415a695b8ab6b&w=900" alt="Top Right Image"/>
                    </div>
                    <div className="tailimg-bottom-right">
                      <img src="https://img.freepik.com/free-photo/uneven-sandstone-tile-wall-surface_53876-74691.jpg?t=st=1728383096~exp=1728386696~hmac=68c3e7758ef6c382cdb32f2ff4469cd98eace92508f8066c8c6278f360eab864&w=996" alt="Bottom Right Image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      {/* Left side image */}
     
     

      {/* Right side contact form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Ex: sample@gmail.com" />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Ex: john" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="number">Number</label>
            <input type="number" id="email" placeholder="Ex: 9876543210" />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="contact-submit-button">Send Message</button>
        </form>
      </div>
    </div>
     <div className="contact-map">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6478590180946!2d78.40784827508398!3d17.428679083465568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91343158a399%3A0xd7148128d9762888!2sVitero%20Tiles!5e0!3m2!1sen!2sin!4v1728656182746!5m2!1sen!2sin"  style={{border:"0", allowfullscreen:"", loading:"lazy" , width:"100%", height:"500PX", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>  */}


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29395.830884932602!2d81.49219376890419!3d16.535967085310475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a362d001b81b065%3A0x28120ad331bfe12f!2sVitero%20Tiles!5e0!3m2!1sen!2sin!4v1743882986691!5m2!1sen!2sin"  style={{border:"0", allowfullscreen:"", loading:"lazy" , width:"100%", height:"500PX", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>








      </div>
    </div>

  );
};

export default Contact;
