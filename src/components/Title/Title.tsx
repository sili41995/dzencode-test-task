import { FC } from 'react';
import { IProps } from './Title.types';
import { Text } from './Title.styled';

const Title: FC<IProps> = ({ title }) => <Text className='h2'>{title}</Text>;

export default Title;
