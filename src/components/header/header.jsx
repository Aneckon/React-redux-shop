import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { totalPriceCalc } from '../utils';

import Logo from '../image/sitelogo.svg';
import favorite from '../image/favorite.svg';
import cart from '../image/cart_shopping_icon 1.svg';

import './header.css';

export const Header = () => {
  const items = useSelector((state) => state.cart.itemsCart);

  const totalPrice = totalPriceCalc(items);

  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={Logo} alt="logo" />
      </NavLink>
      <div className="header__menu">
        <NavLink to="/favorite">
          <img src={favorite} alt="favorite" />
        </NavLink>
        <NavLink to="/cart">
          <img src={cart} alt="cart" />
        </NavLink>
        <p>{totalPrice} грн.</p>
      </div>
    </header>
  );
};
