import styled from '@emotion/styled';
import { IStyledProps } from './IsNewStatus.types';

export const Container = styled.p<IStyledProps>`
  color: ${({ isNew, theme }) =>
    isNew ? theme.colors.greenColor : theme.colors.primaryFontColor};
`;
