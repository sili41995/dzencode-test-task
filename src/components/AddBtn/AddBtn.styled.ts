import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 50%;
`;
