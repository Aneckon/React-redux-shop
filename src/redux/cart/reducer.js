import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsCart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.itemsCart.push(action.payload);
    },
    removeCart: (state, action) => {
      state.itemsCart = state.itemsCart.filter((car) => car.id !== action.payload.id);
    },
  },
});

export const { setCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
