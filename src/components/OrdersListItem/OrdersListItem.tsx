import { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaListUl } from 'react-icons/fa';
import { selectIsLoading } from '@/redux/orders/selectors';
import { useAppSelector } from '@/hooks/redux';
import { useDeleteOrder } from '@/hooks';
import { PagePaths } from '@/constants';
import { getDateParams, getOrderPrice } from '@/utils';
import ModalWin from '@/components/ModalWin';
import DelOrderForm from '@/components/DelOrderForm';
import DelBtn from '@/components/DelBtn';
import Date from '@/components/Date';
import Price from '@/components/Price';
import { IProps } from './OrdersListItem.types';
import { ListBtn, ListItem, Products, Title } from './OrdersListItem.styled';

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
  const { month, formattedDate } = getDateParams(date);
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
          <Date month={month} date={formattedDate} />
          <Price
            defPrice={defPrice}
            defSymbol={defSymbol}
            price={price}
            symbol={symbol}
          />
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
