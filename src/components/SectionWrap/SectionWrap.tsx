import { FC } from 'react';
import { Container } from './SectionWrap.styled';
import { IProps } from './SectionWrap.types';

const SectionWrap: FC<IProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default SectionWrap;
