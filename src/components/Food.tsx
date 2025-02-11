import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  image: string | string[];
  tags: string[];
}

interface Category {
  name: string;
  items: FoodItem[];
}

interface FoodData {
  categories: Category[];
}

interface LocationState {
  category?: string;
}

const Food = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(state?.category || 'all');

  useEffect(() => {
    setCategories((foodData as FoodData).categories);
  }, []);

  useEffect(() => {
    if (state?.category) {
      setSelectedCategory(state.category);
    }
  }, [state?.category]);

  const allItems = categories.flatMap(category => category.items);
  const displayItems = selectedCategory === 'all'
    ? allItems
    : categories.find(c => c.name === selectedCategory)?.items || [];

  return (
    <div className="food">
      <section className="food-hero" style={{ backgroundImage: 'url(https://image-tc.galaxy.tf/wijpeg-9xkd7jsi4osl14ht9nrfqvwyd/family-nyonya-dishes-penang.jpg?width=1920)' }}>
        <div className="food-hero-content">
          <h1>Penang Food Paradise</h1>
          <p>Discover the diverse flavors of Penang's world-renowned cuisine</p>
        </div>
      </section>

      <div className="food-content">
        <h2 className="search-title">🥟Search Food🥟</h2>
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
      </div>
      <div className="food-content">
        <div className="food-grid">
          {displayItems.map(item => (
            <Card
              key={item.id}
              id={item.id}
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
