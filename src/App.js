// TODO Сравнить два массива likedItems и galleryItems(передать массив galleryItems пропом в PresonalGallery 
// TODO отрисовывать галери айтем в зависимости от стэйта,если лайкед
// TODO в масив лайкедайтемс передавать только айди(не надо тянуть весь массив объектов)

import './App.css';
import Navbar from './components/UI/navbar/NavbarUi';
import Gallery from './pages/gallery/Gallery';
import { useState, useEffect } from 'react';
import GalleryService from './service/GalleryService';
import MainPage from './pages/main/MainPage';
import { Routes, Route } from 'react-router-dom'
import PresonalGallery from './pages/personalGallery/PresonalGallery';

function App() {

  const [galleryItems, setGalleryItems] = useState([])
  const [likedItems, setLikedItem] = useState([])

  const addLikedItem = (newLikedItem) => {
    setLikedItem([...likedItems, newLikedItem])
  }

  const removeLikedItem = (item) => {
    setLikedItem(likedItems.filter(i => i.id !== item.id))
  }

  // Загрузка галереи с сервера
  async function fetchGalleryItems() {
    const response = await GalleryService.getAll()
    setGalleryItems([...galleryItems, ...response.data])
  }

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
              addItem={addLikedItem}
              removeItem={removeLikedItem}
              items={galleryItems}
            />
          }
        />
        <Route 
          path='/personal-gallery' 
          element=
          {
            <PresonalGallery 
              likedItems={likedItems}
            />
          }
        />
      </Routes>
          
    </div>
  );
}

export default App;
