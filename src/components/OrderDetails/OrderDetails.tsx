import { FC } from 'react';
import { IProps } from './OrderDetails.types';

const OrderDetails: FC<IProps> = ({ order }) => {
  const { products } = order;

  return <ul>{products.map(({ _id }) => _id)}</ul>;
};

export default OrderDetails;
