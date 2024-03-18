import { FC } from 'react';
import { IProps } from './Title.types';

const Title: FC<IProps> = ({ title }) => <h3 className='display-3'>{title}</h3>;

export default Title;
