import './App.css';
import Navbar from './components/UI/navbar/NavbarUi';
import Gallery from './components/gallery/Gallery';
import { useState } from 'react';
import GalleryService from './components/service/GalleryService';
 import { BrowserRouter } from 'react-router-dom'

function App() {

  const [galleyItems, setGalleryItems] = useState([])

  async function fetchGalleryItems() {
    const response = await GalleryService.getAll()
    setGalleryItems([...galleyItems, ...response.data])
  }


  return (
      <BrowserRouter>
        <div className="App">
          <Navbar getItems={fetchGalleryItems}/>
          <Gallery items={galleyItems}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
