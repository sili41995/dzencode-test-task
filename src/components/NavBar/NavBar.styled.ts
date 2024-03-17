import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const ImgWrap = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const SettingsBtn = styled.button`
  position: absolute;
  bottom: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 50%;
`;

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
