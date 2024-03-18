import { FC } from 'react';
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

const OrdersListItem: FC<IProps> = ({ order }) => {
  const { _id, title, products, date } = order;
  const { pathname } = useLocation();
  const isActive = pathname.includes(_id);
  const productsCount = products.length;
  const { orderDate, orderMonth } = getOrderDateParams(date);
  const { defPrice, price, defSymbol, symbol } = getOrderPrice(products);

  return (
    <ListItem
      className={`list-group-item ${isActive && 'active'}`}
      aria-current={isActive && 'true'}
    >
      <NavLink to={`${PagePaths.orders}/${_id}`}>
        <span className='h6'>{title}</span>
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
      <DelBtn type='button' className='btn btn-light'>
        <RiDeleteBin6Fill />
      </DelBtn>
    </ListItem>
  );
};

export default OrdersListItem;
