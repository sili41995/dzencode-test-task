import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { IOrdersState } from '@/types/types';
import { fetchOrders } from './operations';

const ordersState: IOrdersState = initialState.orders;

const ordersSlice = createSlice({
  name: 'orders',
  initialState: ordersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: initialState.orders.error,
        items: payload,
      }))
      .addMatcher(isAnyOf(fetchOrders.pending), (state) => ({
        ...state,
        isLoading: true,
      }))
      .addMatcher(isAnyOf(fetchOrders.rejected), (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload as string,
      }));
  },
});

export default ordersSlice.reducer;
