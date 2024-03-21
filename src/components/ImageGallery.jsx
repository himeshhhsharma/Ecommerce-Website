import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';

function ImageGallery() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = ['../images/avatar1.jpg', '../images/avatar1.jpg', '../images/avatar1.jpg']; // Replace with your image URLs

  const openCarousel = (index) => {
    setSelectedIndex(index);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <div key={index} className="image-wrapper" onClick={() => openCarousel(index)}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
            <FontAwesomeIcon icon={faExpand} className="expand-icon" />
          </div>
        ))}
      </div>
      
      {showCarousel && (
        <div className="carousel-overlay">
          <div className="carousel-content">
            <FontAwesomeIcon icon={faArrowLeft} className="prev-icon" onClick={handlePrev} />
            <Carousel activeIndex={selectedIndex} onSelect={() => {}}>
              {images.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={imageUrl} alt={`Image ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
            <FontAwesomeIcon icon={faArrowRight} className="next-icon" onClick={handleNext} />
            <FontAwesomeIcon icon={faExpand} className="close-icon" onClick={closeCarousel} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
