import { FC } from 'react';
import Clock from '@/components/Clock';
import { Container } from './TopMenu.styled';
import ActiveSessions from '@/components/ActiveSessions';

const TopMenu: FC = () => (
  <Container>
    <ActiveSessions />
    <Clock />
  </Container>
);

export default TopMenu;
