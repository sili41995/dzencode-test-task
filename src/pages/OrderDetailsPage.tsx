import OrderDetails from '@/components/OrderDetails';
import { PagePaths } from '@/constants';
import { useAppSelector } from '@/hooks/redux';
import { selectOrders } from '@/redux/orders/selectors';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailsPage: FC = () => {
  const orderId = useParams()[PagePaths.dynamicParam];
  const orders = useAppSelector(selectOrders);
  const targetOrder = orders.find(({ _id }) => _id === orderId);

  return targetOrder ? (
    <OrderDetails order={targetOrder} />
  ) : (
    <h1 className='display-6'>Invalid id</h1>
  );
};

export default OrderDetailsPage;
