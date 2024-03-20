import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;
