import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './Modal.css'


const Modal = ({ active, setActive, modalItem }) => {


  return (
    <div
      className={!active ? 'modal' : 'modal active'}
      onClick={() => setActive(false)}
    >
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <h1>{modalItem.title}</h1>
        <img className="modal__img" src={modalItem.url} alt="modal-img" />
      </div>
    </div>
  );
}

export default Modal;
