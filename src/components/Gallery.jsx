import React, { useState, useRef } from 'react';
import './Gallery.css';
import { FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';

import initialImage from '../assets/buildings.jpg';

function Gallery() {
  const [images, setImages] = useState([
    initialImage,
    initialImage,
    initialImage,
    initialImage, 
  ]);
  
  
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const fileInputRef = useRef(null);

  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImageUrls]);
  };

  
  const scroll = (direction) => {
    const totalImages = images.length;
    
    if (direction === 'left') {
      if (currentIndex === 0) return;
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      if (currentIndex >= totalImages - 3) return;
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  
  const getImagesToDisplay = () => {
    return images.slice(currentIndex, currentIndex + 3);
  };

  const imagesToDisplay = getImagesToDisplay();

  return (
    <div className="gallery-card-container">
     
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden-file-input"
      />

     
      <div className="gallery-top-icons">
        <div className="gallery-icon-circle">?</div>
        <div className="gallery-grid-icon">
          <div className="gallery-grid-cube"></div>
          <div className="gallery-grid-cube"></div>
          <div className="gallery-grid-cube"></div>
          <div className="gallery-grid-cube"></div>
          <div className="gallery-grid-cube"></div>
          <div className="gallery-grid-cube"></div>
        </div>
      </div>

  
      <div className="gallery-header">
        <div className="gallery-title">Gallery</div>
        <div className="gallery-controls">
          
          <button className="add-image-btn" onClick={triggerFileInput}>
            <FaPlus size={14} /> 
            ADD IMAGE
          </button>
          
     
          <button 
            className="arrow-btn" 
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft size={18} />
          </button>

         
          <button 
            className="arrow-btn" 
            onClick={() => scroll('right')}
            disabled={currentIndex >= images.length - 3}
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>

     
      <div className="image-gallery-wrapper">
        <div className="image-list">
          {imagesToDisplay.map((imgSrc, index) => (
            <div className="image-container" key={index}>
              <img src={imgSrc} alt={`gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;