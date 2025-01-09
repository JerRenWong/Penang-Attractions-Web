import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import hotelsData from '../data/hotels.json';
import '../styles/Hotels.css';

interface HotelItem {
  id: number;
  name: string;
  description: string;
  location: string;
  priceRange: string;
  contact: string;
  rating: number;
  image: string | string[];
  amenities: string[];
}

interface Category {
  name: string;
  items: HotelItem[];
}

interface HotelsData {
  categories: Category[];
}

const Hotels = () => {
  const location = useLocation();
  const categoryFromNav = location.state?.category || 'all';
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromNav);

  useEffect(() => {
    setCategories((hotelsData as HotelsData).categories);
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryFromNav);
  }, [categoryFromNav]);

  const allItems = categories.flatMap(category => category.items);
  const displayItems = selectedCategory === 'all'
    ? allItems
    : categories.find(c => c.name === selectedCategory)?.items || [];

  return (
    <div className="hotels">
      <section className="hotels-hero">
        <div className="hotels-hero-content">
          <h1 className="section-heading">Stay in Penang</h1> {/* Add section-heading class */}
          <p>Find your perfect accommodation from luxury resorts to boutique hotels</p>
        </div>
      </section>

      <div className="hotels-content">
        <h2 className="search-title">🏨Search Hotels🏨</h2>
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
          {displayItems.map(item => (
            <div key={item.id} className="hotel-card">
            <Card
              key={item.id}
              id={item.id}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
