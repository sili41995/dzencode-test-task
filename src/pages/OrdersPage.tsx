import AddBtn from '@/components/AddBtn';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Orders from '@/components/Orders';
import SectionWrap from '@/components/SectionWrap';
import Title from '@/components/Title';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchOrders } from '@/redux/orders/operations';
import { selectIsLoading, selectOrders } from '@/redux/orders/selectors';
import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const OrdersPage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const ordersCount = useAppSelector(selectOrders).length;
  const pageTitle = `Приходы / ${ordersCount}`;

  useEffect(() => {
    const promise = dispatch(fetchOrders());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <SectionWrap>
      <Container>
        <AddBtn />
        <Title title={pageTitle} />
      </Container>
      <Container>
        <Orders />
        <Outlet />
      </Container>
    </SectionWrap>
  );
};

export default OrdersPage;
