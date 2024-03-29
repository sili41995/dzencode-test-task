import { IState } from '@/types/types';

export const selectProducts = (state: IState) => state.products.items;

export const selectError = (state: IState) => state.products.error;

export const selectIsLoading = (state: IState) => state.products.isLoading;
