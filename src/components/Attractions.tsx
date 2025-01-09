import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import attractionsData from '../data/attractions.json';
import { Category, AttractionsData } from '../types/attractions';
import '../styles/Attractions.css';

const Attractions = () => {
  const location = useLocation();
  const categoryFromNav = location.state?.category || 'all';
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromNav);

  useEffect(() => {
    setCategories((attractionsData as AttractionsData).categories);
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryFromNav);
  }, [categoryFromNav]);

  const allItems = categories.flatMap(category => category.items);
  const displayItems = selectedCategory === 'all'
    ? allItems
    : categories.find(c => c.name === selectedCategory)?.items || [];

  return (
    <div className="attractions">
      <section className="attractions-hero">
        <div className="attractions-hero-content">
          <h1>Discover Penang</h1>
          <p>Explore the island's most iconic attractions and hidden gems</p>
        </div>
      </section>

      <div className="attractions-content">
        <h2 className="search-title">🚲Search Attractions🚲</h2>
        <div className="category-filter">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category.name}
              className={`filter-btn ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="attractions-grid">
          {displayItems.map(item => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.name}
              description={item.description}
              details={{
                Location: item.location,
                'Entry Fee': item.entryFee,
                'Opening Hours': item.openingHours
              }}
              rating={item.rating}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attractions;
