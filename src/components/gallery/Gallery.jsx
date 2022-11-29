import React, { useState } from 'react';
import GalleryItem from '../galleryItem/GalleryItem';
import cl from './Gallery.module.css'

const Gallery = ({ items }) => {

  return (
    <div className={cl.gallery}>
      {items.map(item =>
        <GalleryItem key={item.id} id={item.id} title={item.title} url={item.thumbnailUrl} />
      )}
    </div>
  );
}

export default Gallery;
