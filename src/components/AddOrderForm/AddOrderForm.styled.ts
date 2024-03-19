import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Title = styled.p`
  margin-bottom: 0;
  text-align: center;
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ListItem = styled.li``;
