import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import favoriteReducer from './favorite/reducer';
import filterReducer from './filter/reducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    filter: filterReducer,
  },
});
