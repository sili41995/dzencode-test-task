import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(10)};
  text-transform: capitalize;
`;

export const DateWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  & > p {
    margin-bottom: 0;
  }
`;

export const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  & > svg {
    color: ${({ theme }) => theme.colors.greenColor};
  }

  & > p {
    margin-bottom: 0;
  }
`;
