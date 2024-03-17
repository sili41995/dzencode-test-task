import styled from '@emotion/styled';

export const Header = styled.header`
  /* display: inline-block; */
  /* min-width: 100%; */
  /* padding-top: ${({ theme }) => theme.spacing(5)}; */
  /* padding-bottom: ${({ theme }) => theme.spacing(5)}; */
`;

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  width: ${({ theme }) =>
    theme.containerWidth.desktop + theme.padding.container * 2}px;
  padding-left: ${({ theme }) => `${theme.padding.container}px`};
  padding-right: ${({ theme }) => `${theme.padding.container}px`};
  margin-left: auto;
  margin-right: auto;
`;

export const Main = styled.main``;

export const Section = styled.section`
  /* padding-top: ${({ theme }) => theme.padding.container}px; */
  /* padding-bottom: ${({ theme }) => theme.padding.container}px; */
`;
