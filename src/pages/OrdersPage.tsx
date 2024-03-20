import AddBtn from '@/components/AddBtn';
import AddOrderForm from '@/components/AddOrderForm';
import AnimatedContainer from '@/components/AnimatedContainer';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import ModalWin from '@/components/ModalWin';
import Orders from '@/components/Orders';
import SectionWrap from '@/components/SectionWrap';
import Title from '@/components/Title';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchOrders } from '@/redux/orders/operations';
import { selectIsLoading, selectOrders } from '@/redux/orders/selectors';
import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const OrdersPage: FC = () => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
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

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  const onAddBtnClick = () => {
    setModalWinState();
  };

  return (
    <AnimatedContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <SectionWrap>
          <Container>
            <AddBtn onClick={onAddBtnClick} />
            <Title title={pageTitle} />
          </Container>
          <Container>
            <Orders />
            <Outlet />
          </Container>
        </SectionWrap>
      )}
      {showModalWin && (
        <ModalWin setModalWinState={setModalWinState}>
          <AddOrderForm />
        </ModalWin>
      )}
    </AnimatedContainer>
  );
};

export default OrdersPage;
