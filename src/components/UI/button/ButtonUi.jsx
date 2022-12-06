import React from 'react';
import cl from './ButtonUi.module.css'

const ButtonUi = ({ children, ...props }) => {
  return (
    <button className={cl.navbar__button}  {...props}>
      {children}
    </button>
  );
}

export default ButtonUi;
