import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};

  & span,
  & p {
    margin-bottom: 0;
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};

    &.active {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ListBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 50%;
  border-color: transparent;
  background-color: transparent;
`;

export const Products = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
