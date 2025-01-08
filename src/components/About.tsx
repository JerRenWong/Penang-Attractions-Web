import React from 'react';
import '../styles/About.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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

        <div className="form-container">
          <h2>Send a message to us!</h2>
          <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" rows={4}></textarea>
            <button>Send Message</button>
          </form>
        
        </div>
      </section>
    </div>
  );
};

export default About;
