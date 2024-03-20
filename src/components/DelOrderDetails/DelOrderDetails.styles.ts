import styled from '@emotion/styled';

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Img = styled.img``;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  & > p {
    margin-bottom: 0;
  }
`;
