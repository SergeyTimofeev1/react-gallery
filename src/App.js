import './App.css';
import Navbar from './components/UI/navbar/NavbarUi';
import Gallery from './pages/gallery/Gallery';
import { useState } from 'react';
import GalleryService from './service/GalleryService';
import MainPage from './pages/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom'
import PresonalGallery from './pages/personalGallery/PresonalGallery';


function App() {

  const [galleyItems, setGalleryItems] = useState([])

  async function fetchGalleryItems() {
    const response = await GalleryService.getAll()
    setGalleryItems([...galleyItems, ...response.data])
  }


  return (
    <div className="App">
      <Navbar getItems={fetchGalleryItems}/>
      <Routes>
        <Route path='/main-page' element={<MainPage/>}/>
        <Route path='/gallery' element={<Gallery items={galleyItems}/>}/>
        <Route path='/personal-gallery' element={<PresonalGallery/>}/>
      </Routes>
          
    </div>
  );
}

export default App;
