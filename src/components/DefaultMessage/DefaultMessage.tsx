import { FC } from 'react';
import { IProps } from './DefaultMessage.types';

const DefaultMessage: FC<IProps> = ({ message }) => (
  <h1 className='display-6'>{message}</h1>
);

export default DefaultMessage;
