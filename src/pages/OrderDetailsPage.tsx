import DefaultMessage from '@/components/DefaultMessage';
import OrderDetails from '@/components/OrderDetails';
import { Messages, PagePaths } from '@/constants';
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
    <DefaultMessage message={Messages.invalidId} />
  );
};

export default OrderDetailsPage;
