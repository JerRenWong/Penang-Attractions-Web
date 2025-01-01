import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🌴 Penang Tourism
        </Link>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/food" className="nav-link" onClick={() => setIsOpen(false)}>Food</Link>
          </li>
          <li className="nav-item">
            <Link to="/attractions" className="nav-link" onClick={() => setIsOpen(false)}>Attractions</Link>
          </li>
          <li className="nav-item">
            <Link to="/hotels" className="nav-link" onClick={() => setIsOpen(false)}>Hotels</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
