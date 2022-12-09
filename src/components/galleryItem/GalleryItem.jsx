import React, { useRef, useState } from 'react';
import './GalleryItem.css'
import GalleryItemButton from '../UI/galleryItemButton/GalleryItemButton';

const GalleryItem = ({ id, title, url, addItem, removeItem, item }) => {

  const [liked, setLiked] = useState(false);
  const like = useRef()

  const addLikedPost = () => {
    const newLikedItem = item
    like.current.style.color = 'red'
    addItem(newLikedItem)
    setLiked(true)
  }

  // Удаление лайкнутых постов
  const removeLikedItem = () => {
    removeItem(item)
    setLiked(false)
    like.current.style.color = 'black'
  }

  return (
    <div className="gallery-item">
      <div className="gallery-item__wrapper">
        <div className="gallery-item__header">
          <GalleryItemButton
            onClick={() => {
              liked ? removeLikedItem() : addLikedPost()
            }}
          >
            <span ref={like} className="material-symbols-outlined">
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
