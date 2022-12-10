import React from 'react';
import './Modal.css'


const Modal = ({ active, setActive }) => {
  return (
    <div
      className={!active ? 'modal' : 'modal active'}
      onClick={() => setActive(false)}
    >
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <h1>Информация о картинке</h1>
      </div>
    </div>
  );
}

export default Modal;
