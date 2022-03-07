import { createSlice } from "@reduxjs/toolkit";

const favoriveSlice = createSlice({
  name: 'favorite',
  initialState: {
    itemsFavorite: []
  },
  reducers: {
    setFavorite: (state, action) => {
      state.itemsFavorite.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.itemsFavorite = state.itemsFavorite.filter((car) => car.id !== action.payload.id);
    }
  }
})

export const {setFavorite, removeFavorite} = favoriveSlice.actions
export default favoriveSlice.reducer