import { FC } from 'react';
import { IProps } from './Date.types';
import { Container } from './Date.styled';

const Date: FC<IProps> = ({ date, month }) => (
  <Container>
    <p className='h6'>{month} / 12</p>
    <p className='h5'>{date}</p>
  </Container>
);

export default Date;
