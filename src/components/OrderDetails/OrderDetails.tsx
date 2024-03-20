import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { selectIsLoading } from '@/redux/orders/selectors';
import { useAppSelector } from '@/hooks/redux';
import { Messages, PagePaths } from '@/constants';
import CloseBtn from '@/components/CloseBtn';
import DelBtn from '@/components/DelBtn';
import DefaultMessage from '@/components/DefaultMessage';
import IsNewStatus from '@/components/IsNewStatus';
import ProductTitle from '@/components/ProductTitle';
import Status from '@/components/Status';
import { IProps } from './OrderDetails.types';
import {
  AddBtn,
  BtnTitle,
  Container,
  IconWrap,
  List,
  ListItem,
  Title,
} from './OrderDetails.styles';

const OrderDetails: FC<IProps> = ({ order }) => {
  const { products, title } = order;
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.from ?? PagePaths.homePath;
  const isLoading = useAppSelector(selectIsLoading);
  const shouldShowOrdersList = Boolean(products.length);

  const onCloseBtnClick = () => {
    navigate(redirectPath);
  };

  const onDelBtnClick = () => {};

  return (
    <Container>
      <Title className='h3'>{title}</Title>
      <AddBtn type='button' className='btn btn-light'>
        <IconWrap>
          <FaPlus size={20} />
        </IconWrap>
        <BtnTitle className='h6'>Добавить продукт</BtnTitle>
      </AddBtn>
      {shouldShowOrdersList ? (
        <List className='list-group'>
          {products.map(({ _id, photo, title, serialNumber, isNew }) => (
            <ListItem className='list-group-item' key={_id}>
              <Status isNew={isNew} />
              <img src={photo} alt={title} width='60' height='60' />
              <ProductTitle serialNumber={serialNumber} title={title} />
              <IsNewStatus isNew={isNew} />
              <DelBtn onClick={onDelBtnClick} disabled={isLoading} />
            </ListItem>
          ))}
        </List>
      ) : (
        <DefaultMessage message={Messages.emptyProductsList} />
      )}
      <CloseBtn onClick={onCloseBtnClick} />
    </Container>
  );
};

export default OrderDetails;
