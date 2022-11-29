import React from 'react';
import './GalleryItem.css'

const GalleryItem = ({ id, title, url }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-item__wrapper">
        <img className="gallery-item__img" src={url} alt="gallery-item" />
        <div className="gallery-item__content">
          <div className="gallery-item__id">{id}</div>
          <h2 className="gallery-item__title">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
