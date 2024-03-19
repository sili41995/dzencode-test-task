import { FC } from 'react';
import { IProps } from './Title.types';

const Title: FC<IProps> = ({ title }) => <p className='h2'>{title}</p>;

export default Title;
