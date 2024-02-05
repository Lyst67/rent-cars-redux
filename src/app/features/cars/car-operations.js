import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://652514f667cfb1e59ce68a81.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ completed, page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/adverts?completed=${completed}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// const fetchItemsByPage = createAsyncThunk(
//   'items/fetchByPage',
//   async ({ page }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `https://api.example.com/items?page=${page}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
