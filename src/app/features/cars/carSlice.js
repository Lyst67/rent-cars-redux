import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './car-operations';

export const carsSlice = createSlice({
  name: 'carsList',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const carsReducer = carsSlice.reducer;
