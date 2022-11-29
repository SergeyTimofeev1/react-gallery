import './App.css';
import Navbar from './components/UI/navbar/NavbarUi';
import Gallery from './components/gallery/Gallery';
import { useState } from 'react';
import GalleryService from './components/service/GalleryService';

function App() {

  const [galleyItems, setGalleryItems] = useState([])

  async function fetchGalleryItems() {
    const response = await GalleryService.getAll()
    setGalleryItems([...galleyItems,...response.data])
    console.log('clicked');
  }

  return (
    <div className="App">
      <Navbar getItems={fetchGalleryItems}/>
      <Gallery items={galleyItems}/>
    </div>
  );
}

export default App;
