import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://652514f667cfb1e59ce68a81.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (params, thunkAPI) => {
    const options = {
      params,
    };
    try {
      const { data } = await axios.get('/adverts', options);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
