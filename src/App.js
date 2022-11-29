import './App.css';
import Navbar from './components/UI/navbar/NavbarUi';
import Gallery from './components/gallery/Gallery';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Gallery/>
    </div>
  );
}

export default App;
