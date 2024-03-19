import styled from '@emotion/styled';

export const Button = styled.button`
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
