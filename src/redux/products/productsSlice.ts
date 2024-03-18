import { createSlice } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { IProductsState } from '@/types/types';

const productsState: IProductsState = initialState.products;

const productsSlice = createSlice({
  name: 'products',
  initialState: productsState,
  reducers: {},
});

export default productsSlice.reducer;
