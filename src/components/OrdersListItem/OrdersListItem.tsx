import { FC, useState } from 'react';
import { IProps } from './OrdersListItem.types';
import { NavLink, useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';
import {
  ListBtn,
  ListItem,
  Products,
  Title,
  Wrapper,
} from './OrdersListItem.styled';
import { FaListUl } from 'react-icons/fa';
import { getOrderDateParams, getOrderPrice } from '@/utils';
import ModalWin from '@/components/ModalWin';
import DelOrderForm from '@/components/DelOrderForm';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoading } from '@/redux/orders/selectors';
import { useDeleteOrder } from '@/hooks';
import DelBtn from '@/components/DelBtn';

const OrdersListItem: FC<IProps> = ({ order }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const deleteOrder = useDeleteOrder();
  const isLoading = useAppSelector(selectIsLoading);
  const location = useLocation();
  const { _id, title, products, date } = order;
  const isActive = location.pathname.includes(_id);
  const isOrdersPage =
    location.pathname.endsWith(PagePaths.orders) ||
    location.pathname.endsWith(`${PagePaths.orders}/`) ||
    location.pathname === PagePaths.homePath;
  const productsCount = products.length;
  const { orderDate, orderMonth } = getOrderDateParams(date);
  const { defPrice, price, defSymbol, symbol } = getOrderPrice(products);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  const onDelBtnClick = () => {
    deleteOrder(_id);
  };

  return (
    <>
      <ListItem
        className={`list-group-item ${isActive && 'active'}`}
        aria-current={isActive && 'true'}
      >
        <NavLink to={`${PagePaths.orders}/${_id}`} state={{ from: location }}>
          {isOrdersPage && <Title className='h6'>{title}</Title>}
          <ListBtn type='button' className='btn btn-light'>
            <FaListUl size={20} />
          </ListBtn>
          <Products>
            <span className='h5'>{productsCount}</span>
            <span className='h6'>Продукта</span>
          </Products>
          <Wrapper>
            <p className='h6'>{orderMonth} / 12</p>
            <p className='h5'>{orderDate}</p>
          </Wrapper>
          <Wrapper>
            <span className='h6'>{`${price} ${symbol}`}</span>
            <span className='h5'>{`${defPrice} ${defSymbol}`}</span>
          </Wrapper>
        </NavLink>
        <DelBtn onClick={setModalWinState} disabled={false} />
      </ListItem>
      {showModalWin && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={
            <DelOrderForm
              products={products}
              disabled={isLoading}
              setModalWinState={setModalWinState}
              onClick={onDelBtnClick}
            />
          }
        />
      )}
    </>
  );
};

export default OrdersListItem;
