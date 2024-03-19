import ordersServiceApi from '@/service/ordersServiceApi';
import { IOrder, NewOrder, Orders } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk<
  Orders,
  undefined,
  { rejectValue: string }
>(
  'orders/fetchAll',
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

export const deleteOrder = createAsyncThunk<
  IOrder,
  string,
  { rejectValue: string }
>(
  'orders/delete',
  async (id: string, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await ordersServiceApi.deleteOrder(id);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addOrder = createAsyncThunk<
  IOrder,
  NewOrder,
  { rejectValue: string }
>(
  'orders/add',
  async (
    data: NewOrder,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await ordersServiceApi.addOrder(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
