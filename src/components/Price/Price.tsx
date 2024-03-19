import { FC } from 'react';
import { IProps } from './Price.types';
import { Container } from './Price.styled';

const Price: FC<IProps> = ({ price, defPrice, symbol, defSymbol }) => (
  <Container>
    <p className='h6'>{`${price} ${symbol}`}</p>
    <p className='h5'>{`${defPrice} ${defSymbol}`}</p>
  </Container>
);

export default Price;
