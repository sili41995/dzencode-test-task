import Loader from '@/components/Loader';
import OrdersList from '@/components/OrdersList';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchOrders } from '@/redux/orders/operations';
import { selectIsLoading } from '@/redux/orders/selectors';
import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const OrdersPage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    const promise = dispatch(fetchOrders());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <OrdersList />
      <Outlet />
    </>
  );
};

export default OrdersPage;
