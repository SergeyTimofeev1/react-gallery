import React from 'react';
import ButtonUi from '../button/ButtonUi'
import cl from './NavbarUi.module.css'
import { Routes, Route, Link } from 'react-router-dom'


const Navbar = ({ getItems, ...props }) => {

  return (
    <div className={cl.navbar} {...props}>
      <ButtonUi>Главная</ButtonUi>
      <ButtonUi onClick={getItems}>Галерея</ButtonUi>
      <ButtonUi>Понравилось</ButtonUi>
    </div>
  );
}

export default Navbar;
