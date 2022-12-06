import React from 'react';
import GalleryItem from '../../components/galleryItem/GalleryItem';
import cl from './PresonalGallery.module.css'

const PresonalGallery = ({ likedItems }) => {
  return (
    <div className={cl.gallery}>
      <h1>Личная галерея</h1>
      <div className={cl.gallery__inner}>
        {
          likedItems.map(item =>
            <GalleryItem
              item={item}
              key={item.id + item.title}
              id={item.id}
              title={item.title}
              url={item.thumbnailUrl}
            // getLikedItem={getLikedItem}
            // removeLikedItem={removeLikedItem}
            />
          )
        }
      </div>
    </div>
  );
}

export default PresonalGallery;
