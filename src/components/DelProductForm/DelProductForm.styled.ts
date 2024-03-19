import styled from '@emotion/styled';

export const Title = styled.p``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ListItem = styled.li``;

export const Button = styled.button``;
