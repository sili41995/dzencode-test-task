import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { IProductsState } from '@/types/types';
import { fetchProducts } from './operations';

const productsState: IProductsState = initialState.products;

const productsSlice = createSlice({
  name: 'products',
  initialState: productsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: initialState.orders.error,
        items: payload,
      }))
      .addMatcher(isAnyOf(fetchProducts.pending), (state) => ({
        ...state,
        isLoading: true,
      }))
      .addMatcher(isAnyOf(fetchProducts.rejected), (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload as string,
      }));
  },
});

export default productsSlice.reducer;
