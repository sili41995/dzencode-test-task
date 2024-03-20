import { FC } from 'react';
import Clock from '@/components/Clock';
import { Container } from './TopMenu.styled';

const TopMenu: FC = () => (
  <Container>
    <Clock />
  </Container>
);

export default TopMenu;
