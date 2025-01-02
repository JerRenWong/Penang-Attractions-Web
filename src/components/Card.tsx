import React from 'react';
import '../styles/Card.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  rating?: number;
  details: Record<string, string>;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  tags,
  rating,
  details
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
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
