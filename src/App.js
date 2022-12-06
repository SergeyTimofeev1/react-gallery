import './App.css';
import Navbar from './components/UI/navbar/NavbarUi';
import Gallery from './pages/gallery/Gallery';
import { useState, useEffect } from 'react';
import GalleryService from './service/GalleryService';
import MainPage from './pages/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom'
import PresonalGallery from './pages/personalGallery/PresonalGallery';


function App() {

  const [galleryItems, setGalleryItems] = useState([])
  const [likedItems, setLikedItem] = useState([]);

  async function fetchGalleryItems() {
    const response = await GalleryService.getAll()
    setGalleryItems([...galleryItems, ...response.data])
  }

  const getLikedItem = (newLikedItem) => {
    setLikedItem([...likedItems, newLikedItem])
  }

  const removeLikedItem = (item) => {
    setLikedItem(likedItems.filter(i => i.id !== item.id))
  }
  
  const removeGalleryItem = (item) => {
    setGalleryItems(galleryItems.filter(i => i.id !== item.id))
  }

  console.log(likedItems);

  useEffect(() => {
    fetchGalleryItems()
    console.log('effect');
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/main-page' element={<MainPage/>}/>
        <Route 
          path='/gallery' 
          element=
          {
            <Gallery 
              items={galleryItems}
              getLikedItem={getLikedItem}
              removeGalleryItem={removeGalleryItem}
            />
          }
        />
        <Route 
          path='/personal-gallery' 
          element=
          {
            <PresonalGallery 
              likedItems={likedItems}
              removeLikedItem={removeLikedItem}
            />
          }
        />
      </Routes>
          
    </div>
  );
}

export default App;
