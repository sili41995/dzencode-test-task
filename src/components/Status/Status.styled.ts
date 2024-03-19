import styled from '@emotion/styled';
import { IStyledProps } from './Status.types';

export const Container = styled.span<IStyledProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isNew, theme }) =>
    isNew ? theme.colors.greenColor : theme.colors.primaryFontColor};
`;
