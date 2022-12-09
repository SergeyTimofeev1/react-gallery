import React, { useEffect, useState } from 'react';
import GalleryItem from '../../components/galleryItem/GalleryItem';
import GalleryService from '../../service/GalleryService';
import cl from './Gallery.module.css'

const Gallery = ({ addItem, removeItem, items }) => {



  return (
    <div className={cl.gallery}>
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
              />
            )
            : <h1>Посты загружаются</h1>
        }
      </div>
    </div>
  );
}

export default Gallery;
