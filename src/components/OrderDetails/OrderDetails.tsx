import { FC } from 'react';
import { IProps } from './OrderDetails.types';
import {
  AddBtn,
  BtnTitle,
  Container,
  IconWrap,
  IsNewStatus,
  List,
  ListItem,
  Status,
  Title,
} from './OrderDetails.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseBtn from '@/components/CloseBtn';
import { Messages, PagePaths } from '@/constants';
import { FaPlus } from 'react-icons/fa';
import DelBtn from '@/components/DelBtn';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoading } from '@/redux/orders/selectors';
import DefaultMessage from '../DefaultMessage';

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
              <Status></Status>
              <img src={photo} alt={title} width='60' height='60' />
              <div>
                <p className='h5'>{title}</p>
                <p className='h6'>{serialNumber}</p>
              </div>
              <IsNewStatus className='h5' isNew={isNew}>
                {isNew ? 'Свободен' : 'В работе'}
              </IsNewStatus>
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
