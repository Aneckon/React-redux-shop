import React from 'react';
import { NavLink } from 'react-router-dom';

import './order.css';

export const Order = () => {
  return (
    <div className="order">
      <h1>Дякую що оформили заказ</h1>
      <NavLink to="/">Назад</NavLink>
    </div>
  );
};
