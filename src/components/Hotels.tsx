import React, { useState, useEffect } from 'react';
import Card from './Card';
import hotelsData from '../data/hotels.json';
import '../styles/Hotels.css';

interface HotelItem {
  id: number;
  name: string;
  description: string;
  location: string;
  priceRange: string;
  rating: number;
  image: string;
  amenities: string[];
  contact: string;
}

interface Category {
  name: string;
  items: HotelItem[];
}

const Hotels = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setCategories(hotelsData.categories);
  }, []);

  const allItems = categories.flatMap(category => category.items);
  const displayItems = selectedCategory === 'all'
    ? allItems
    : categories.find(c => c.name === selectedCategory)?.items || [];

  return (
    <div className="hotels">
      <section className="hotels-hero">
        <div className="hotels-hero-content">
          <h1>Stay in Penang</h1>
          <p>Find the perfect accommodation for your visit</p>
        </div>
      </section>

      <div className="hotels-content">
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

        <div className="hotels-grid">
          {displayItems.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.name}
              description={item.description}
              tags={item.amenities}
              rating={item.rating}
              details={{
                Location: item.location,
                'Price Range': item.priceRange,
                Contact: item.contact
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
