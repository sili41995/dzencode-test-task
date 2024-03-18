import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  overflow-y: scroll;
`;

export const Container = styled.div`
  width: 540px;
  position: relative;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(10)};
`;

export const CloseBtn = styled.button`
  position: absolute;

  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.lightgreyColor};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  &:is(:hover, :focus) svg {
    color: ${({ theme }) => theme.colors.accentColor};
  }

  & svg {
    display: block;
    color: #121417;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
