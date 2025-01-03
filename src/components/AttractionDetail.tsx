import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import attractionsData from '../data/attractions.json';
import { AttractionItem } from '../types/attractions';
import ImageModal from './ImageModal';
import '../styles/AttractionDetail.css';

const AttractionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [attraction, setAttraction] = useState<AttractionItem | null>(null);

  useEffect(() => {
    const allItems = attractionsData.categories.flatMap(category => category.items);
    const found = allItems.find(item => item.id.toString() === id);
    setAttraction(found || null);
  }, [id]);

  if (!attraction) {
    return (
      <div className="attraction-detail-error">
        <h2>Attraction not found</h2>
        <button onClick={() => navigate('/attractions')}>Back to Attractions</button>
      </div>
    );
  }

  const images = Array.isArray(attraction.image) ? attraction.image : [attraction.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="attraction-detail">
      <button className="back-button" onClick={() => navigate('/attractions')}>
        ← Back to Attractions
      </button>

      <div className="attraction-detail-content">
        <div className="attraction-detail-header">
          <h1>{attraction.name}</h1>
          <div className="attraction-rating">⭐ {attraction.rating.toFixed(1)}</div>
        </div>

        <div className="attraction-image-gallery">
          <img 
            src={images[currentImageIndex]} 
            alt={attraction.name} 
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
            {attraction.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="attraction-details">
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{attraction.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Entry Fee:</span>
              <span className="detail-value">{attraction.entryFee}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Opening Hours:</span>
              <span className="detail-value">{attraction.openingHours}</span>
            </div>
          </div>

          <div className="attraction-description">
            <h2>About</h2>
            <p>{attraction.description}</p>
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

export default AttractionDetail;
