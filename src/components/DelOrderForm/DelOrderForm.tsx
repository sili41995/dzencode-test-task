import { FC } from 'react';
import DelOrderDetails from '@/components/DelOrderDetails';
import { IProps } from './DelOrderForm.types';
import {
  Button,
  ButtonsList,
  Container,
  ListItem,
  Title,
} from './DelOrderForm.styled';

const DelOrderForm: FC<IProps> = ({
  products,
  onClick,
  disabled,
  setModalWinState,
}) => {
  return (
    <Container>
      <Title className='h3'>Вы уверены, что хотите удалить этот приход?</Title>
      <DelOrderDetails products={products} />
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
