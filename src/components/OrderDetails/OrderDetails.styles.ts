import styled from '@emotion/styled';
import { IStyledProps } from './OrderDetails.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.p`
  margin-bottom: 0;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.greenColor};
`;

export const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.greenColor};
  padding: ${({ theme }) => theme.spacing(2)};

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const BtnTitle = styled.span`
  margin-bottom: 0;
`;

export const List = styled.ul`
  flex-grow: 1;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Status = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.greenColor};
`;

export const IsNewStatus = styled.p<IStyledProps>`
  color: ${({ isNew, theme }) =>
    isNew ? theme.colors.greenColor : theme.colors.redColor};
`;
