import { FC } from 'react';
import { IProps } from './Status.types';
import { Container } from './Status.styled';

const Status: FC<IProps> = ({ isNew }) => <Container isNew={isNew}></Container>;

export default Status;
