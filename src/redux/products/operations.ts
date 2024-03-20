import { createAsyncThunk } from '@reduxjs/toolkit';
import ordersServiceApi from '@/service/ordersServiceApi';
import { IProduct, Products } from '@/types/types';

export const fetchProducts = createAsyncThunk<
  Products,
  undefined,
  { rejectValue: string }
>(
  'products/fetchAll',
  async (
    _,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const result = await ordersServiceApi.fetchProducts(signal);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteProduct = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: string }
>(
  'products/delete',
  async (id: string, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await ordersServiceApi.deleteProduct(id);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
