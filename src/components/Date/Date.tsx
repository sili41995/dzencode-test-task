import { FC } from 'react';
import { IProps } from './Date.types';
import { Container, FullDate } from './Date.styled';

const Date: FC<IProps> = ({ date, month }) => (
  <Container>
    <p className='h6'>{month} / 12</p>
    <FullDate className='h5'>{date}</FullDate>
  </Container>
);

export default Date;
