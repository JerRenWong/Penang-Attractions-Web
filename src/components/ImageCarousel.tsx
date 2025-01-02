import React from 'react';
import '../styles/ImageCarousel.css';

export interface ImageType {
  url: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageType[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 0) return null;

  return (
    <div className="image-carousel">
      <img src={images[currentIndex].url} alt={images[currentIndex].alt} />
      {images.length > 1 && (
        <div className="carousel-controls">
          <button onClick={goToPrevious} className="carousel-button prev">
            ‹
          </button>
          <button onClick={goToNext} className="carousel-button next">
            ›
          </button>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
