import { combineReducers } from '@reduxjs/toolkit';
import ordersReducer from '@/redux/orders/ordersSlice';
import productsReducer from '@/redux/products/productsSlice';

const rootReducer = combineReducers({
  orders: ordersReducer,
  products: productsReducer,
});

export default rootReducer;
