import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Penang Tourism
        </Link>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/food" className="nav-link" onClick={closeMenu}>
              Food
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/attractions" className="nav-link" onClick={closeMenu}>
              Attractions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hotels" className="nav-link" onClick={closeMenu}>
              Hotels
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/community" className="nav-link" onClick={closeMenu}>
              Community
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
