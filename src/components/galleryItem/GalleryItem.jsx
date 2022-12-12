import React, { useRef, useState, useEffect } from 'react';
import './GalleryItem.css'
import GalleryItemButton from '../UI/galleryItemButton/GalleryItemButton';

const GalleryItem = ({ id, title, url, addItem, removeItem, item, colorHeart, isLiked, openModal, getModalItem }) => {

  const [liked, setLiked] = useState(false);
  const like = useRef()

  const addLikedPost = () => {
    const newLikedItem = item
    addItem(newLikedItem)
    setLiked(true)
    isLiked = true
    colorHeart = 'red'
    like.current.className = 'material-symbols-outlined ' + colorHeart
  }

  // Удаление лайкнутых постов
  const removeLikedItem = () => {
    removeItem(item)
    setLiked(false)
    isLiked = false
    colorHeart = 'black'
    like.current.className = 'material-symbols-outlined ' + colorHeart
  }

  const setModalOpen = () => {
    openModal(true)
  }

  const getModalInfo = () => {
    getModalItem(item)
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
            {
              !isLiked
                ?
                <span ref={like} className={colorHeart + ' material-symbols-outlined'}>
                  heart_plus
                </span>
                :
                <span ref={like} className={colorHeart + ' material-symbols-outlined'}>
                  heart_plus
                </span>
            }

          </GalleryItemButton>
          <GalleryItemButton>
            <span className="material-symbols-outlined">
              info
            </span>
          </GalleryItemButton>
          <GalleryItemButton onClick={() => {
            setModalOpen()
            getModalInfo()
          }
          }>
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
