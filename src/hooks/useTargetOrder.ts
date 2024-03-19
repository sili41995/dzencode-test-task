import { selectOrders } from '@/redux/orders/selectors';
import { useAppSelector } from './redux';
import { useParams } from 'react-router-dom';
import { PagePaths } from '@/constants';

const useTargetOrder = () => {
  const orderId = useParams()[PagePaths.dynamicParam];
  const orders = useAppSelector(selectOrders);
  return orders.find(({ _id }) => _id === orderId);
};

export default useTargetOrder;
