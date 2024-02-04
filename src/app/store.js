import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './features/cars/carSlice';
import { favoritesReducer } from './features/favorifeSlice';

const carsRersistConfig = {
  key: 'carList',
  storage,
  whitelist: ['cars'],
};
const favoritePersistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    carsList: persistReducer(carsRersistConfig, carsReducer),
    favorites: persistReducer(favoritePersistConfig, favoritesReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
