import React from 'react';
import '../styles/Food.css';

const Food = () => {
  const foods = [
    {
      id: 1,
      name: 'Char Kway Teow',
      description: 'Famous stir-fried rice noodles with prawns, cockles, and bean sprouts',
      location: 'Siam Road, Georgetown',
      price: 'RM 6-8'
    },
    {
      id: 2,
      name: 'Assam Laksa',
      description: 'Spicy-sour fish soup with thick rice noodles and fresh herbs',
      location: 'Air Itam Market',
      price: 'RM 5-7'
    },
    {
      id: 3,
      name: 'Nasi Kandar',
      description: 'Rice served with various curry dishes and side dishes',
      location: 'Line Clear, Georgetown',
      price: 'RM 8-15'
    },
    {
      id: 4,
      name: 'Cendol',
      description: 'Traditional dessert with green rice flour jelly and coconut milk',
      location: 'Penang Road Famous Teochew Chendul',
      price: 'RM 4-6'
    }
  ];

  return (
    <div className="food-page">
      <div className="food-hero">
        <h1>Penang Food Paradise</h1>
        <p>Discover the world-renowned street food culture</p>
      </div>
      
      <div className="food-grid">
        {foods.map(food => (
          <div key={food.id} className="food-card">
            <div className="food-content">
              <h3>{food.name}</h3>
              <p className="description">{food.description}</p>
              <div className="food-details">
                <p><strong>Best at:</strong> {food.location}</p>
                <p><strong>Price:</strong> {food.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
