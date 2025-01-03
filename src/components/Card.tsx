import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';

interface CardProps {
  id: number;
  image: string | string[];
  title: string;
  description: string;
  tags?: string[];
  rating?: number;
  details: Record<string, string>;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  title,
  description,
  tags,
  rating,
  details
}) => {
  const navigate = useNavigate();
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div className="card" onClick={() => navigate(`/attraction/${id}`)}>
      <div className="card-image">
        <img src={images[currentImageIndex]} alt={title} />
        {images.length > 1 && (
          <>
            <button className="image-nav prev" onClick={previousImage}>❮</button>
            <button className="image-nav next" onClick={nextImage}>❯</button>
            <div className="image-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => handleDotClick(e, index)}
                />
              ))}
            </div>
          </>
        )}
        {rating && (
          <div className="card-rating">
            ⭐ {rating.toFixed(1)}
          </div>
        )}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-details">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="detail-item">
              <span className="detail-label">{key}:</span>
              <span className="detail-value">{value}</span>
            </div>
          ))}
        </div>

        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
