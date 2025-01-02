import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const scrollToHighlights = (e: React.MouseEvent) => {
    e.preventDefault();
    const highlightsSection = document.querySelector('.highlights');
    if (highlightsSection) {
      highlightsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Penang</h1>
          <p>A Fusion of Culture, Heritage and Modernity</p>
          <a href="#highlights" className="btn btn-primary" onClick={scrollToHighlights}>
            Explore Now
          </a>
        </div>
      </section>

      <section className="highlights" id="highlights">
        <div className="container">
          <div className="highlights-grid">
            <Link to="/food" className="highlight-card">
              <div className="highlight-image">
                <img 
                  src="https://placehold.co/600x400/f44336/ffffff?text=Penang+Food" 
                  alt="Penang Food"
                />
              </div>
              <div className="highlight-content">
                <h3>Food Paradise</h3>
                <p>Discover world-renowned street food, from Char Kway Teow to Assam Laksa. Penang's culinary scene is a melting pot of flavors that will tantalize your taste buds.</p>
                <span className="highlight-link">Explore Food →</span>
              </div>
            </Link>

            <Link to="/attractions" className="highlight-card">
              <div className="highlight-image">
                <img 
                  src="https://placehold.co/600x400/2196f3/ffffff?text=Penang+Attractions" 
                  alt="Penang Attractions"
                />
              </div>
              <div className="highlight-content">
                <h3>Rich Heritage</h3>
                <p>Experience UNESCO World Heritage sites, vibrant street art, and cultural landmarks. From Georgetown's historic streets to Penang Hill's scenic views.</p>
                <span className="highlight-link">View Attractions →</span>
              </div>
            </Link>

            <Link to="/hotels" className="highlight-card">
              <div className="highlight-image">
                <img 
                  src="https://placehold.co/600x400/4caf50/ffffff?text=Penang+Hotels" 
                  alt="Penang Hotels"
                />
              </div>
              <div className="highlight-content">
                <h3>Luxurious Stays</h3>
                <p>Rest in comfort at our selection of premium hotels and resorts. From heritage boutique hotels to modern luxury resorts with ocean views.</p>
                <span className="highlight-link">Find Hotels →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
