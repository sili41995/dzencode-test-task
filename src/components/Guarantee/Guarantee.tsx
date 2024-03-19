import { FC } from 'react';
import { IProps } from './Guarantee.types';
import { Container } from './Guarantee.styled';

const Guarantee: FC<IProps> = ({ start, end }) => (
  <Container>
    <p className='h5'>
      <span className='h6'>c</span> {start}
    </p>
    <p className='h5'>
      <span className='h6'>по</span> {end}
    </p>
  </Container>
);

export default Guarantee;
