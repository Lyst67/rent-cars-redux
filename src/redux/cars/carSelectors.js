import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.carsList.cars;
export const selectisLoading = state => state.carsList.isLoading;
export const selectisError = state => state.carsList.isError;
export const selectFavoritesCars = createSelector();
