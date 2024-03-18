import { useAppSelector } from '@/hooks/redux';
import { selectOrders } from '@/redux/orders/selectors';
import { FC } from 'react';
import OrdersListItem from '@/components/OrdersListItem';
import { List } from './OrdersList.styled';

const OrdersList: FC = () => {
  const orders = useAppSelector(selectOrders);

  return (
    <List className='list-group'>
      {orders.map((order) => (
        <OrdersListItem order={order} key={order._id} />
      ))}
    </List>
  );
};

export default OrdersList;
