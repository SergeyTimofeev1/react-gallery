import React from 'react';
import cl from './GalleryItemButton.module.css'

const GalleryItemButton = ({ children, ...props }) => {
  return (
    <button className={cl.galleryButton} {...props}>{children}</button>
  );
}

export default GalleryItemButton;
