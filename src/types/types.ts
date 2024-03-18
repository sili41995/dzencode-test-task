export interface IPrice {
  value: number;
  symbol: string;
  isDefault: number;
}

export type Prices = IPrice[];

export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: Prices;
  order: number;
  date: string;
}

export type Products = IProduct[];

export interface IOrder {
  id: number;
  title: string;
  date: string;
  description: string;
  products: Products;
}

export type Orders = IOrder[];

export interface IProductsState {
  items: Products;
  isLoading: boolean;
  error: null | string;
}

export interface IOrdersState {
  items: Orders;
  isLoading: boolean;
  error: null | string;
}

export interface IState {
  products: IProductsState;
  orders: IOrdersState;
}
