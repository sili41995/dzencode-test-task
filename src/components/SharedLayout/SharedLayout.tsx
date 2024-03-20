import { FC, Suspense } from 'react';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Loader from '@/components/Loader';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import TopMenu from '@/components/TopMenu';

const SharedLayout: FC = () => {
  return (
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
};

export default SharedLayout;
