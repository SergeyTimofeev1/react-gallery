import React, { useEffect, useState } from 'react';
import GalleryItem from '../../components/galleryItem/GalleryItem';
import cl from './Gallery.module.css'
import Modal from '../../components/UI/modal/Modal';

const Gallery = ({ addItem, removeItem, items }) => {

  const [modalActive, setModalActive] = useState(false)
  const [modal, setModal] = useState({});
  console.log(modal);


  const openModal = () => {
    setModalActive(true)
  }

  const getModalItem = (modalItem) => {
    setModal(modalItem)
  }

  return (
    <div className={cl.gallery}>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        modalItem={modal}
      />
      <h1>Галерея</h1>
      <div className={cl.gallery__inner}>
        {
          items.length !== 0
            ?
            items.map(item =>
              <GalleryItem
                addItem={addItem}
                removeItem={removeItem}
                item={item}
                key={item.id + item.title}
                id={item.id}
                title={item.title}
                url={item.thumbnailUrl}
                colorHeart='black'
                isLike={false}
                openModal={openModal}
                getModalItem={getModalItem}
              />
            )
            : <h1>Посты загружаются</h1>
        }
      </div>
    </div>
  );
}

export default Gallery;
