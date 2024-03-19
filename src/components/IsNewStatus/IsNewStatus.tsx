import { FC } from 'react';
import { IProps } from './IsNewStatus.types';
import { Container } from './IsNewStatus.styled';

const IsNewStatus: FC<IProps> = ({ isNew }) => (
  <Container className='h5' isNew={isNew}>
    {isNew ? 'Свободен' : 'В ремонте'}
  </Container>
);

export default IsNewStatus;
