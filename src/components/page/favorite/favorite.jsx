import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartBtn } from '../../../components';
import { removeCart, setCart } from '../../../redux/cart/reducer';
import { removeFavorite } from '../../../redux/favorite/reducer';

import favoriteActive from '../../../components/image/favoriteActive.svg';

import './favorite.css';

export const Favorite = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorite.itemsFavorite);

  const itemsCart = useSelector((state) => state.cart.itemsCart);
  const isItemCart = itemsCart.some((itemsCart) => itemsCart.id === itemsCart.id);

  const handleRemoveCart = (id, name, price, image) => {
    if (isItemCart) {
      dispatch(removeCart({ id }));
    } else {
      dispatch(setCart({ id, name, image, price }));
    }
  };

  const handleFavorite = (id) => {
    dispatch(removeFavorite({ id }));
  };

  return (
    <div className="favorite">
      <div className="hed">
        <h1>Улюблене</h1>
      </div>
      <div className="row">
        {items.length > 0 ? (
          items.map((items) => (
            <div key={items.id} className="col-xl-4 col-md-6">
              <div className={items.unavaible ? 'card unavaible' : 'card'}>
                <div className="card__title">
                  <h2>{items.name}</h2>
                  <img
                    className="favoriteblack"
                    onClick={() => handleFavorite(items.id)}
                    src={favoriteActive}
                    alt="favoriteActive"
                  />
                </div>
                <img className="card__image" src={items.image} alt="images" />
                <div className="card__price">
                  <CartBtn
                    onClick={() =>
                      handleRemoveCart(items.id, items.name, items.price, items.image)
                    }>
                    {isItemCart ? 'Забрати з корзини' : 'В корзину'}
                  </CartBtn>
                  <p>{items.price} грн.</p>
                </div>
                {items.unavaible && (
                  <div className="product__panel-unavaible">{items.unavaible}</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <h3>Улублених нема</h3>
        )}
      </div>
    </div>
  );
};
