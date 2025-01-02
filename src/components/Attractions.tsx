import React, { useState, useEffect } from 'react';
import Card from './Card';
import attractionsData from '../data/attractions.json';
import '../styles/Attractions.css';

interface AttractionItem {
  id: number;
  name: string;
  description: string;
  location: string;
  entryFee: string;
  rating: number;
  image: string;
  openingHours: string;
  tags: string[];
}

interface Category {
  name: string;
  items: AttractionItem[];
}

const Attractions = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setCategories(attractionsData.categories);
  }, []);

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
          {displayItems.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.name}
              description={item.description}
              tags={item.tags}
              rating={item.rating}
              details={{
                Location: item.location,
                'Entry Fee': item.entryFee,
                'Opening Hours': item.openingHours
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attractions;
