import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hotelsData from '../data/hotels.json';
import ImageModal from './ImageModal';
import '../styles/AttractionDetail.css';

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

const HotelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [hotel, setHotel] = useState<HotelItem | null>(null);

  useEffect(() => {
    const allItems = hotelsData.categories.flatMap(category => category.items);
    const found = allItems.find(item => item.id.toString() === id);
    setHotel(found || null);
  }, [id]);

  if (!hotel) {
    return (
      <div className="attraction-detail-error">
        <h2>Hotel not found</h2>
        <button onClick={() => navigate('/hotels')}>Back to Hotels</button>
      </div>
    );
  }

  const images = Array.isArray(hotel.image) ? hotel.image : [hotel.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="attraction-detail">
      <button className="back-button" onClick={() => navigate('/hotels')}>
        ← Back to Hotels
      </button>

      <div className="attraction-detail-content">
        <div className="attraction-detail-header">
          <h1>{hotel.name}</h1>
          <div className="attraction-rating">⭐ {hotel.rating.toFixed(1)}</div>
        </div>

        <div className="attraction-image-gallery">
          <img 
            src={images[currentImageIndex]} 
            alt={hotel.name}
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}
          />
          {images.length > 1 && (
            <>
              <button className="image-nav prev" onClick={previousImage}>❮</button>
              <button className="image-nav next" onClick={nextImage}>❯</button>
              <div className="image-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="attraction-info">
          <div className="attraction-tags">
            {hotel.amenities.map(amenity => (
              <span key={amenity} className="tag">{amenity}</span>
            ))}
          </div>

          <div className="attraction-details">
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{hotel.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Price Range:</span>
              <span className="detail-value">{hotel.priceRange}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Contact:</span>
              <span className="detail-value">{hotel.contact}</span>
            </div>
          </div>

          <div className="attraction-description">
            <h2>About</h2>
            <p>{hotel.description}</p>
          </div>
        </div>
      </div>

      {showModal && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setShowModal(false)}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
};

export default HotelDetail;
