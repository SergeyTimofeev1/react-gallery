import React, { useState } from 'react';
import './GalleryItem.css'
import GalleryItemButton from '../UI/galleryItemButton/GalleryItemButton';

const GalleryItem = ({ id, title, url, getLikedItem, removeLikedItem, removeGalleryItem, item }) => {

  const [liked, setLiked] = useState(false);

  const setLikeOnItem = (e) => {
    if (!liked) {
      getLikedItem(item)
      setLiked(true)
      e.target.style.color = 'red'
      setTimeout(() => {
        removeGalleryItem(item)
      }, 300);
    } else {
      removeLikedItem(item)
      setLiked(false)
      e.target.style.color = 'black'
    }
  }

  return (
    <div className="gallery-item">
      <div className="gallery-item__wrapper">
        <div className="gallery-item__header">
          <GalleryItemButton
            onClick={(e) => {
              setLikeOnItem(e)
            }}
          >
            <span className="material-symbols-outlined">
              heart_plus
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

export default GalleryItem;
