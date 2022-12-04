import React from 'react';
import ButtonUi from '../button/ButtonUi'
import cl from './NavbarUi.module.css'
import { Link } from 'react-router-dom'


const Navbar = ({ getItems, ...props }) => {

  return (
    <div className={cl.navbar} {...props}>
      <ButtonUi>
        <Link to='/main-page'>Главная</Link>
      </ButtonUi>
      <ButtonUi onClick={getItems}>
        <Link to='/gallery'>Галерея</Link>
      </ButtonUi>
      <ButtonUi>
        <Link to='/personal-gallery'>Понравилось</Link>
      </ButtonUi>
    </div>
  );
}

export default Navbar;
