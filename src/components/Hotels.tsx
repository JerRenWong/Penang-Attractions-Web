import React from 'react';
import '../styles/Hotels.css';

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: 'Eastern & Oriental Hotel',
      description: 'Historic luxury hotel with colonial charm',
      location: 'Georgetown',
      price: '$$$$',
      amenities: ['Sea view', 'Pool', 'Spa', 'Fine dining']
    },
    {
      id: 2,
      name: 'Shangri-La Rasa Sayang',
      description: 'Beachfront resort with tropical gardens',
      location: 'Batu Ferringhi',
      price: '$$$$',
      amenities: ['Beach access', 'Pool', 'Spa', 'Multiple restaurants']
    },
    {
      id: 3,
      name: 'Hotel Jen Penang',
      description: 'Modern city hotel with great connectivity',
      location: 'Georgetown',
      price: '$$$',
      amenities: ['City view', 'Pool', 'Gym', 'Restaurant']
    },
    {
      id: 4,
      name: 'Seven Terraces',
      description: 'Boutique heritage hotel in restored shophouses',
      location: 'Georgetown',
      price: '$$$',
      amenities: ['Heritage architecture', 'Fine dining', 'Cultural experience']
    }
  ];

  return (
    <div className="hotels-page">
      <div className="hotels-hero">
        <h1>Where to Stay in Penang</h1>
        <p>From luxury resorts to heritage boutique hotels</p>
      </div>

      <div className="hotels-grid">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <div className="hotel-content">
              <h3>{hotel.name}</h3>
              <p className="description">{hotel.description}</p>
              <div className="hotel-details">
                <p><strong>Location:</strong> {hotel.location}</p>
                <p><strong>Price Range:</strong> {hotel.price}</p>
                <div className="amenities">
                  <strong>Amenities:</strong>
                  <ul>
                    {hotel.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
