import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './car-operations';

const ITEMS_PER_PAGE = 12;

export const carsSlice = createSlice({
  name: 'carsList',
  initialState: {
    cars: [],
    page: 1,
    limit: 12,
    completed: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    removePage(state) {
      state.page = 1;
      state.cars = [];
      state.completed = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.page = state.page + 1;
        state.cars = [...state.cars, ...action.payload];
        if (action.payload.length < 12) {
          state.completed = true;
        } else {
          state.completed = false;
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { removePage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
