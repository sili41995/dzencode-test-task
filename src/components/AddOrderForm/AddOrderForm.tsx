import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '@/hooks/redux';
import { addOrder } from '@/redux/orders/operations';
import Input from '@/components/Input';
import { InputTypes, Messages } from '@/constants';
import { NewOrder } from '@/types/types';
import { toasts } from '@/utils';
import { ButtonsList, Container, ListItem, Title } from './AddOrderForm.styled';

const AddOrderForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewOrder>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    errors.title && toasts.errorToast(Messages.titleReqErr);
    errors.description && toasts.errorToast(Messages.descriptionReqErr);
    errors.date && toasts.errorToast(Messages.dateReqErr);
  }, [errors, isSubmitting]);

  const onResetBtnClick = () => {
    reset();
  };

  const handleFormSubmit: SubmitHandler<NewOrder> = (data) => {
    const date = new Date(data.date).toString();
    const newOrder = { ...data, date };

    dispatch(addOrder(newOrder))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.addOrderSuccess);
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <Container>
      <Title className='h4'>Добавить приход</Title>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          label='Title'
          settings={{ ...register('title', { required: true }) }}
          type={InputTypes.text}
        />
        <Input
          label='Description'
          settings={{ ...register('description', { required: true }) }}
          type={InputTypes.text}
        />
        <Input
          label='Date'
          settings={{ ...register('date', { required: true }) }}
          type={InputTypes.dateTimeLocal}
        />
        <ButtonsList>
          <ListItem>
            <button
              type='button'
              className='btn btn-light'
              onClick={onResetBtnClick}
            >
              Сбросить
            </button>
          </ListItem>
          <ListItem>
            <button type='submit' className='btn btn-primary'>
              Добавить
            </button>
          </ListItem>
        </ButtonsList>
      </form>
    </Container>
  );
};

export default AddOrderForm;
