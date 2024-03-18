import { IState } from '@/types/types';

const initialState: IState = {
  products: {
    items: [],
    isLoading: false,
    error: null,
  },
  orders: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export default initialState;
