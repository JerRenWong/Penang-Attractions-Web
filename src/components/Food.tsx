import React, { useState, useEffect } from 'react';
import Card from './Card';
import foodData from '../data/food.json';
import '../styles/Food.css';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  tags: string[];
}

interface Category {
  name: string;
  items: FoodItem[];
}

const Food = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setCategories(foodData.categories);
  }, []);

  const allItems = categories.flatMap(category => category.items);
  const displayItems = selectedCategory === 'all' 
    ? allItems 
    : categories.find(c => c.name === selectedCategory)?.items || [];

  return (
    <div className="food">
      <section className="food-hero">
        <div className="food-hero-content">
          <h1>Penang Food Guide</h1>
          <p>Discover the best local delicacies and street food</p>
        </div>
      </section>

      <div className="food-content">
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

        <div className="food-grid">
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
                Price: item.price
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
