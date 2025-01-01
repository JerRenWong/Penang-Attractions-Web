import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted guide to exploring Penang</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to showcasing the best of Penang's rich cultural heritage,
            culinary delights, and tourist attractions. Our mission is to help visitors
            experience the authentic charm of Penang while supporting local communities
            and preserving our cultural heritage.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Local Expertise</h3>
              <p>Insider knowledge from local experts who know Penang inside out</p>
            </div>
            <div className="service-card">
              <h3>Curated Experiences</h3>
              <p>Carefully selected attractions, restaurants, and accommodations</p>
            </div>
            <div className="service-card">
              <h3>Travel Planning</h3>
              <p>Comprehensive guides to help you plan your perfect Penang adventure</p>
            </div>
            <div className="service-card">
              <h3>Cultural Insights</h3>
              <p>Deep understanding of local customs, festivals, and traditions</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> info@penangtourism.com</p>
            <p><strong>Phone:</strong> +60 4-123 4567</p>
            <p><strong>Address:</strong> 12 Beach Street, Georgetown, 10300 Penang, Malaysia</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
