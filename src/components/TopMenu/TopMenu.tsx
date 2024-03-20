import { FC } from 'react';
import Clock from '@/components/Clock';
import ActiveSessions from '@/components/ActiveSessions';
import { Container } from './TopMenu.styled';

const TopMenu: FC = () => (
  <Container>
    <ActiveSessions />
    <Clock />
  </Container>
);

export default TopMenu;
