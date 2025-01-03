import React from 'react';
import '../styles/ImageModal.css';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrevious();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={images[currentIndex]} alt={`Full view ${currentIndex + 1}`} />
        
        {images.length > 1 && (
          <>
            <button className="modal-nav prev" onClick={onPrevious}>❮</button>
            <button className="modal-nav next" onClick={onNext}>❯</button>
            
            <div className="modal-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
