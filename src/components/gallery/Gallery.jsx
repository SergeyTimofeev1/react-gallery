import React, { useState } from 'react';
import GalleryItem from '../galleryItem/GalleryItem';
import cl from './Gallery.module.css'

const Gallery = ({ items }) => {

  const [likedItems, setLikedItem] = useState([]);

  const getLikedItem = (newLikedItem) => {
    setLikedItem([...likedItems, newLikedItem])
  }

  const removeLikedItem = (item) => {
    setLikedItem(likedItems.filter(i => i.id !== item.id))
  }

  console.log(likedItems);

  return (
    <div className={cl.gallery}>
      {items.map(item =>
        <GalleryItem
          item={item}
          key={item.id + item.title}
          id={item.id}
          title={item.title}
          url={item.thumbnailUrl}
          getLikedItem={getLikedItem}
          removeLikedItem={removeLikedItem}
        />
      )}
    </div>
  );
}

export default Gallery;
