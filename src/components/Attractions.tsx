import React from 'react';
import '../styles/Attractions.css';

const attractions = [
  {
    id: 1,
    name: 'Georgetown Heritage',
    description: 'UNESCO World Heritage Site featuring unique architecture and culture',
    image: '/images/georgetown.jpg',
  },
  {
    id: 2,
    name: 'Kek Lok Si Temple',
    description: 'The largest Buddhist temple in Malaysia',
    image: '/images/kek-lok-si.jpg',
  },
  {
    id: 3,
    name: 'Penang Hill',
    description: 'Historic hill station with panoramic views',
    image: '/images/penang-hill.jpg',
  },
  {
    id: 4,
    name: 'Batu Ferringhi',
    description: 'Famous beach destination with night markets',
    image: '/images/batu-ferringhi.jpg',
  },
  {
    id: 5,
    name: 'Penang Street Art',
    description: 'Famous murals and installations around Georgetown',
    image: '/images/street-art.jpg',
  },
];

const Attractions = () => {
  return (
    <div className="attractions">
      <h1>Tourist Attractions in Penang</h1>
      <div className="attractions-grid">
        {attractions.map((attraction) => (
          <div key={attraction.id} className="attraction-card">
            <img src={attraction.image} alt={attraction.name} />
            <div className="attraction-content">
              <h3>{attraction.name}</h3>
              <p>{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
