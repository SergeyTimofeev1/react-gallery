import React from 'react';
import cl from './ButtonUi.module.css'

const ButtonUi = ({ children }) => {
  return (
    <button className={cl.navbar__button}>
      {children}
    </button>
  );
}

export default ButtonUi;
