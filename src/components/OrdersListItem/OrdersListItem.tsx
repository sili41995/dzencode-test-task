import { FC, useState } from 'react';
import { IProps } from './OrdersListItem.types';
import { NavLink, useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';
import {
  DelBtn,
  ListBtn,
  ListItem,
  Products,
  Wrapper,
} from './OrdersListItem.styled';
import { FaListUl } from 'react-icons/fa';
import { getOrderDateParams, getOrderPrice } from '@/utils';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import ModalWin from '@/components/ModalWin';
import DelOrderForm from '@/components/DelOrderForm';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoading } from '@/redux/orders/selectors';

const OrdersListItem: FC<IProps> = ({ order }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const { _id, title, products, date } = order;
  const { pathname } = useLocation();
  const isActive = pathname.includes(_id);
  const isOrdersPage =
    pathname.endsWith(PagePaths.orders) ||
    pathname.endsWith(`${PagePaths.orders}/`) ||
    pathname === PagePaths.homePath;
  const productsCount = products.length;
  const { orderDate, orderMonth } = getOrderDateParams(date);
  const { defPrice, price, defSymbol, symbol } = getOrderPrice(products);
  const isLoading = useAppSelector(selectIsLoading);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  const onDelBtnClick = () => {};

  return (
    <ListItem
      className={`list-group-item ${isActive && 'active'}`}
      aria-current={isActive && 'true'}
    >
      <NavLink to={`${PagePaths.orders}/${_id}`}>
        {isOrdersPage && <span className='h6'>{title}</span>}
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
      <DelBtn
        type='button'
        className='btn btn-light'
        onClick={setModalWinState}
      >
        <RiDeleteBin6Fill />
      </DelBtn>
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
    </ListItem>
  );
};

export default OrdersListItem;
