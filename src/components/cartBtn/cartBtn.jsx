import React from 'react';

import './cartBtn.css';

export const CartBtn = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
