import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { CartBtn } from '../../../components';
import { totalPriceCalc } from '../../../components/utils';
import { removeCart } from '../../../redux/cart/reducer';
import { removeFavorite, setFavorite } from '../../../redux/favorite/reducer';

import favoriteblack from '../../../components/image/favoriteblack.svg';
import favoriteActive from '../../../components/image/favoriteActive.svg';

import './cart.css';

export const Cart = () => {
  const dispatch = useDispatch();
  const itemsCart = useSelector((state) => state.cart.itemsCart);

  const itemsFavorite = useSelector((state) => state.favorite.itemsFavorite);
  const isItemFavorite = itemsFavorite.some(
    (itemsFavorite) => itemsFavorite.id === itemsFavorite.id,
  );

  const handleRemoveCart = (id) => {
    dispatch(removeCart({ id }));
  };

  const handleFavorite = (id, name, image, price) => {
    if (isItemFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(setFavorite({ id, name, image, price }));
    }
  };

  return (
    <div className="cart">
      <div className="hed">
        <h1>Корзина</h1>
      </div>
      <div className="cart__content row">
        {itemsCart.length > 0 ? (
          itemsCart.map((items) => (
            <div key={items.id} className="col-xl-4 col-md-6">
              <div className={items.unavaible ? 'card unavaible' : 'card'}>
                <div className="card__title">
                  <h2>{items.name}</h2>
                  <img
                    className="favoriteblack"
                    onClick={() => handleFavorite(items.id, items.name, items.image, items.price)}
                    src={isItemFavorite ? favoriteActive : favoriteblack}
                    alt=""
                  />
                </div>
                <img className="card__image" src={items.image} alt="images" />
                <div className="card__price">
                  <CartBtn onClick={() => handleRemoveCart(items.id)}>Забрати з корзини</CartBtn>
                  <p>{items.price} грн.</p>
                </div>
                {items.unavaible && (
                  <div className="product__panel-unavaible">{items.unavaible}</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <h3>Корзина пуста</h3>
        )}
      </div>
      {itemsCart.length > 0 ? (
        <footer className="footer">
          <p>Підсумок: {totalPriceCalc(itemsCart)} грн.</p>
          <NavLink to="/order" className="cart__btn">
            Оформити заказ
          </NavLink>
        </footer>
      ) : null}
    </div>
  );
};
