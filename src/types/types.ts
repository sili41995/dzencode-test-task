import { MouseEvent } from 'react';

export interface IPrice {
  value: number;
  symbol: string;
  isDefault: number;
}

export type Prices = IPrice[];

export interface IProduct {
  _id: string;
  serialNumber: number;
  isNew: boolean;
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
  _id: string;
  title: string;
  date: string;
  description: string;
  products: Products;
}

export type NewOrder = Omit<IOrder, 'products'>;

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

export interface IGetOrderDateParams {
  orderMonth: string;
  orderDate: string;
}

export interface IGetOrderPrice {
  defPrice: number;
  price: number;
  defSymbol: string;
  symbol: string;
}

export type Func = () => void;

export type DivClickEvent = MouseEvent<HTMLDivElement>;
