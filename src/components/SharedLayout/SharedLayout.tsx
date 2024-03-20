import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import TopMenu from '@/components/TopMenu';
import { Container, Header, Main, Section } from './SharedLayout.styled';

const SharedLayout: FC = () => (
  <>
    <Header>
      <Container>
        <TopMenu />
      </Container>
    </Header>
    <Main>
      <Section>
        <Container>
          <NavBar />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </Main>
  </>
);

export default SharedLayout;
