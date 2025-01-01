import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Penang</h1>
          <p>Experience the Pearl of the Orient</p>
          <Link to="/attractions" className="btn btn-primary">Explore Now</Link>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>Rich Heritage</h3>
              <p>UNESCO World Heritage Site with a blend of cultures and architecture</p>
            </div>
            <div className="highlight-card">
              <h3>Culinary Paradise</h3>
              <p>World-renowned street food and traditional delicacies</p>
            </div>
            <div className="highlight-card">
              <h3>Modern Comfort</h3>
              <p>Luxurious resorts and boutique hotels for your perfect stay</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
