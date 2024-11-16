// components/ModalButton.js
import React from 'react';

const ModalButton = ({ onClick, children}) => (
  
  <button className='bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded' onClick={onClick}>
    {children}
  </button>

);

export default ModalButton;