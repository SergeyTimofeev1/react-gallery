import React from 'react';
import PersonalGalleryItem from '../../components/personalGalleryItem/PersonalGalleryItem';
import cl from './PresonalGallery.module.css'

const PresonalGallery = ({ likedItems, removeLikedItem }) => {
  return (
    <div className={cl.gallery}>
      <h1>Личная галерея</h1>
      <div className={cl.gallery__inner}>
        {
          likedItems.map(item =>
            <PersonalGalleryItem
              item={item}
              key={item.id + item.title}
              id={item.id}
              title={item.title}
              url={item.thumbnailUrl}
              // getLikedItem={getLikedItem}
              removeLikedItem={removeLikedItem}
            />
          )
        }
      </div>
    </div>
  );
}

export default PresonalGallery;
