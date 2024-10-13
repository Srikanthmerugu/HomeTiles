import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left side image */}
      <div className="contact-image">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6478590180946!2d78.40784827508398!3d17.428679083465568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91343158a399%3A0xd7148128d9762888!2sVitero%20Tiles!5e0!3m2!1sen!2sin!4v1728656182746!5m2!1sen!2sin" width="600" height="450" style={{border:"0", allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>      
      </div>

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
            <input type="email" id="email" placeholder="Ex: Ruchi" />
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
  );
};

export default Contact;
