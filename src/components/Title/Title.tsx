import { FC } from 'react';
import { IProps } from './Title.types';
import { StyledTitle } from './Title.styled';

const Title: FC<IProps> = ({ title }) => (
  <StyledTitle className='h2'>{title}</StyledTitle>
);

export default Title;
