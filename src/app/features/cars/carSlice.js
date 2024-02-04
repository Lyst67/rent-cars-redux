import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './car-operations';

const ITEMS_PER_PAGE = 12;

export const carsSlice = createSlice({
  name: 'carsList',
  initialState: {
    cars: [],
    page: 1,
    notFound: true,
    isLoading: false,
    error: null,
  },
  reducers: {
    removePage(state) {
      state.page = 1;
      state.cars = [];
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
        state.cars = [
          ...state.cars,
          ...action.payload.slice(
            state.cars.length,
            state.cars.length + ITEMS_PER_PAGE
          ),
        ];
        if (action.payload.length >= 1) {
          state.notFound = false;
          state.page = state.page + 1;
        } else {
          state.notFound = true;
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
