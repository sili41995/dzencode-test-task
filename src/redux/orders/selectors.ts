import { IState } from '@/types/types';

export const selectOrders = (state: IState) => state.orders.items;

export const selectError = (state: IState) => state.orders.error;

export const selectIsLoading = (state: IState) => state.orders.isLoading;
