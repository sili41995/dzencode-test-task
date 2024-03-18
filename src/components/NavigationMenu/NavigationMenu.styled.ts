import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const ListItem = styled.li`
  & > a {
    color: #000000;
    text-align: center;
  }
`;
