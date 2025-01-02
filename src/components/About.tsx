import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Your Guide to Penang's Treasures</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section video-section">
          <h2>Meet Our Team</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="About Penang Tourism"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="video-description">
            Welcome to Penang Tourism! We are a passionate team of students working to showcase the best of what Penang has to offer.
            This project is part of our web development course, where we aim to create an intuitive and informative platform for
            visitors to discover Penang's rich culture, delicious food, and stunning attractions.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to showcasing the vibrant culture, rich heritage, and unique experiences that Penang has to offer. 
            Our mission is to help visitors discover the authentic charm of Penang, from its world-renowned street food to its 
            historic architecture and modern attractions.
          </p>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> info@penangtourism.com</p>
            <p><strong>Phone:</strong> +60 4-123 4567</p>
            <p><strong>Address:</strong> 12 Beach Street, Georgetown, 10300 Penang, Malaysia</p>
            <p><strong>Social Media:</strong></p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
