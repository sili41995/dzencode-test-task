import ordersServiceApi from '@/service/ordersServiceApi';
import { Orders } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk<
  Orders,
  undefined,
  { rejectValue: string }
>(
  'contacts/fetchAll',
  async (
    _,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const result = await ordersServiceApi.fetchOrders(signal);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
