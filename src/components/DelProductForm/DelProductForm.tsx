import { FC } from 'react';
import { IProps } from './DelProductForm.types';
import {
  Button,
  ButtonsList,
  Container,
  ListItem,
  Title,
} from './DelProductForm.styled';
import DelProductDetails from '@/components/DelProductDetails';

const DelOrderForm: FC<IProps> = ({
  product,
  onClick,
  disabled,
  setModalWinState,
}) => {
  return (
    <Container>
      <Title className='h3'>Вы уверены, что хотите удалить этот продукт?</Title>
      <DelProductDetails product={product} />
      <ButtonsList>
        <ListItem>
          <Button
            type='button'
            className='btn btn-light'
            onClick={setModalWinState}
          >
            Отменить
          </Button>
        </ListItem>
        <ListItem>
          <Button
            type='button'
            className='btn btn-danger'
            onClick={onClick}
            disabled={disabled}
          >
            Удалить
          </Button>
        </ListItem>
      </ButtonsList>
    </Container>
  );
};

export default DelOrderForm;
