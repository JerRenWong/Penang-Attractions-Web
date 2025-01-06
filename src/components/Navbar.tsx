import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import foodData from '../data/food.json';
import attractionsData from '../data/attractions.json';
import hotelsData from '../data/hotels.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFoodDropdown, setShowFoodDropdown] = useState(false);
  const [showAttractionsDropdown, setShowAttractionsDropdown] = useState(false);
  const [showHotelsDropdown, setShowHotelsDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowFoodDropdown(false);
    setShowAttractionsDropdown(false);
    setShowHotelsDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          🌴 Penang Tourism
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
          <li className={`nav-item dropdown ${showFoodDropdown ? 'active' : ''}`}>
            <div 
              className="nav-link dropdown-trigger"
              onClick={() => setShowFoodDropdown(!showFoodDropdown)}
              onMouseEnter={() => setShowFoodDropdown(true)}
              onMouseLeave={() => setShowFoodDropdown(false)}
            >
              Food
            </div>
            <ul 
              className={`dropdown-menu ${showFoodDropdown ? 'show' : ''}`}
              onMouseEnter={() => setShowFoodDropdown(true)}
              onMouseLeave={() => setShowFoodDropdown(false)}
            >
              <li>
                <Link to="/food" state={{ category: 'all' }} className="dropdown-item" onClick={closeMenu}>
                  All Food
                </Link>
              </li>
              {foodData.categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to="/food"
                    state={{ category: category.name }}
                    className="dropdown-item" 
                    onClick={closeMenu}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={`nav-item dropdown ${showAttractionsDropdown ? 'active' : ''}`}>
            <div 
              className="nav-link dropdown-trigger"
              onClick={() => setShowAttractionsDropdown(!showAttractionsDropdown)}
              onMouseEnter={() => setShowAttractionsDropdown(true)}
              onMouseLeave={() => setShowAttractionsDropdown(false)}
            >
              Attractions
            </div>
            <ul 
              className={`dropdown-menu ${showAttractionsDropdown ? 'show' : ''}`}
              onMouseEnter={() => setShowAttractionsDropdown(true)}
              onMouseLeave={() => setShowAttractionsDropdown(false)}
            >
              <li>
                <Link to="/attractions" state={{ category: 'all' }} className="dropdown-item" onClick={closeMenu}>
                  All Attractions
                </Link>
              </li>
              {attractionsData.categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to="/attractions"
                    state={{ category: category.name }}
                    className="dropdown-item" 
                    onClick={closeMenu}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={`nav-item dropdown ${showHotelsDropdown ? 'active' : ''}`}>
            <div 
              className="nav-link dropdown-trigger"
              onClick={() => setShowHotelsDropdown(!showHotelsDropdown)}
              onMouseEnter={() => setShowHotelsDropdown(true)}
              onMouseLeave={() => setShowHotelsDropdown(false)}
            >
              Hotels
            </div>
            <ul 
              className={`dropdown-menu ${showHotelsDropdown ? 'show' : ''}`}
              onMouseEnter={() => setShowHotelsDropdown(true)}
              onMouseLeave={() => setShowHotelsDropdown(false)}
            >
              <li>
                <Link to="/hotels" state={{ category: 'all' }} className="dropdown-item" onClick={closeMenu}>
                  All Hotels
                </Link>
              </li>
              {hotelsData.categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to="/hotels"
                    state={{ category: category.name }}
                    className="dropdown-item" 
                    onClick={closeMenu}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
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
