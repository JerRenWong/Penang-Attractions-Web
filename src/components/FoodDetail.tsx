import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import foodData from '../data/food.json';
import ImageModal from './ImageModal';
import '../styles/AttractionDetail.css';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  location: string;
  price: string;
  rating: number;
  image: string[];
  tags: string[];
}

const FoodDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [food, setFood] = useState<FoodItem | null>(null);

  useEffect(() => {
    const allItems = foodData.categories.flatMap(category => category.items);
    const found = allItems.find(item => item.id.toString() === id);
    setFood(found || null);
  }, [id]);

  if (!food) {
    return (
      <div className="attraction-detail-error">
        <h2>Food spot not found</h2>
        <button onClick={() => navigate('/food')}>Back to Food</button>
      </div>
    );
  }

  const images = Array.isArray(food.image) ? food.image : [food.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="attraction-detail">
      <button className="back-button" onClick={() => navigate('/food')}>
        ← Back to Food
      </button>

      <div className="attraction-detail-content">
        <div className="attraction-detail-header">
          <h1>{food.name}</h1>
          <div className="attraction-rating">⭐ {food.rating.toFixed(1)}</div>
        </div>

        <div className="attraction-image-gallery">
          <img 
            src={images[currentImageIndex]} 
            alt={food.name}
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
            {food.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="attraction-details">
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{food.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Price Range:</span>
              <span className="detail-value">{food.price}</span>
            </div>
          </div>

          <div className="attraction-description">
            <h2>About</h2>
            <p>{food.description}</p>
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

export default FoodDetail;
