import ordersServiceApi from '@/service/ordersServiceApi';
import { Products } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
