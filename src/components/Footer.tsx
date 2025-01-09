import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column - Contact Information */}
        <div className="footer-left">
          <div className="footer-header">
            <h1>Contact Us</h1>
            <p>Connect with us today and let us make your Penang adventure unforgettable!</p>
          </div>

          <div className="contact-info">
            <p><strong>Email:</strong> info@penangtourism.com</p>
            <p><strong>Phone:</strong> +60 4-123 4567</p>
            <p><strong>Address:</strong> 12 Beach Street, Georgetown, 10300 Penang, Malaysia</p>
          </div>

          <div className="social-links">
            <strong>Social Media:</strong>
            <div className="social-icons">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="footer-right">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0746083544655!2d100.33849937475834!3d5.421213135001445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac38b6b5b0b6f%3A0x2c3f4cd3b4cc2d0c!2sBeach%20Street%2C%20George%20Town%2C%20Penang!5e0!3m2!1sen!2smy!4v1704702716130!5m2!1sen!2smy"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
