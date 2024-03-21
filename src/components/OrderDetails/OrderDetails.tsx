import { FC, useState } from 'react';
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
import ModalWin from '@/components/ModalWin';
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
import DelProductForm from '@/components/DelProductForm';

const OrderDetails: FC<IProps> = ({ order }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const { products, title } = order;
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.from ?? PagePaths.homePath;
  const isLoading = useAppSelector(selectIsLoading);
  const shouldShowOrdersList = Boolean(products.length);

  const onCloseBtnClick = () => {
    navigate(redirectPath);
  };

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
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
          {products.map((product) => (
            <>
              <ListItem className='list-group-item' key={product._id}>
                <Status isNew={product.isNew} />
                <img src={product.photo} alt={title} width='60' height='60' />
                <ProductTitle
                  serialNumber={product.serialNumber}
                  title={title}
                />
                <IsNewStatus isNew={product.isNew} />
                <DelBtn onClick={setModalWinState} disabled={isLoading} />
              </ListItem>
              {showModalWin && (
                <ModalWin
                  setModalWinState={setModalWinState}
                  children={
                    <DelProductForm
                      product={product}
                      disabled={isLoading}
                      setModalWinState={setModalWinState}
                      onClick={onDelBtnClick}
                    />
                  }
                />
              )}
            </>
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
