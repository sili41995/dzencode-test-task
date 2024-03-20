import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};

  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;
