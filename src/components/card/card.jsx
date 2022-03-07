import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CartBtn } from '..';
import { removeCart, setCart } from '../../redux/cart/reducer';
import { removeFavorite, setFavorite } from '../../redux/favorite/reducer';

import favoriteblack from '../image/favoriteblack.svg';
import favoriteActive from '../image/favoriteActive.svg';

import './card.css';

export const Card = ({ name, image, price, unavaible, id }) => {
  const dispatch = useDispatch();

  const itemsCart = useSelector((state) => state.cart.itemsCart);
  const isItemCart = itemsCart.some((itemsCart) => itemsCart.id === id);

  const itemsFavorite = useSelector((state) => state.favorite.itemsFavorite);
  const isItemFavorite = itemsFavorite.some((itemsFavorite) => itemsFavorite.id === id);

  const handleFavorite = () => {
    if (isItemFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(setFavorite({ id, name, image, price }));
    }
  };

  const handleCart = () => {
    if (isItemCart) {
      dispatch(removeCart({ id }));
    } else {
      dispatch(setCart({ id, name, image, price, unavaible }));
    }
  };

  return (
    <div className={unavaible ? 'card unavaible' : 'card'}>
      <div className="card__title">
        <h2>{name}</h2>
        <img
          className="favoriteblack"
          onClick={handleFavorite}
          src={isItemFavorite ? favoriteActive : favoriteblack}
          alt="favoriteblack"
        />
      </div>
      <img className="card__image" src={image} alt="images" />
      <div className="card__price">
        <CartBtn onClick={handleCart}>{isItemCart ? 'Забрати з корзини' : 'В корзину'}</CartBtn>
        <p>{price} грн.</p>
      </div>
      {unavaible && <div className="product__panel-unavaible">{unavaible}</div>}
    </div>
  );
};
