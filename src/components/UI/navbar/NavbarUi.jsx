import React from 'react';
import ButtonUi from '../button/ButtonUi';
import cl from './NavbarUi.module.css'

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <ButtonUi>Главная</ButtonUi>
      <ButtonUi>Галерея</ButtonUi>
      <ButtonUi>Вход</ButtonUi>
    </div>
  );
}

export default Navbar;