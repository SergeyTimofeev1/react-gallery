import React from 'react';
import GalleryItemButton from '../UI/galleryItemButton/GalleryItemButton';

const PersonalGalleryItem = ({ item, id, title, url, removeLikedItem }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-item__wrapper">
        <div className="gallery-item__header">
          <GalleryItemButton
            onClick={(e) => {
              removeLikedItem(item)
            }}
          >
            <span className="material-symbols-outlined">
              heart_minus
            </span>
          </GalleryItemButton>
          <GalleryItemButton>
            <span className="material-symbols-outlined">
              info
            </span>
          </GalleryItemButton>
          <GalleryItemButton>
            <span className="material-symbols-outlined">
              preview
            </span>
          </GalleryItemButton>
        </div>
        <img className="gallery-item__img" src={url} alt="gallery-item" />
        <div className="gallery-item__content">
          <div className="gallery-item__id">{id}</div>
          <h2 className="gallery-item__title">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default PersonalGalleryItem;
