import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { cars: [] },
  reducers: {
    toggleFavorite(state, action) {
      let findIndex = state.cars.findIndex(car => car.id === action.payload.id);
      if (findIndex === -1) {
        state.cars.push(action.payload);
      } else {
        state.cars.splice(findIndex, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
