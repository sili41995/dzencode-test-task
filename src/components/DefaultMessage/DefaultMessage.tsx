import { FC } from 'react';
import { IProps } from './DefaultMessage.types';

const DefaultMessage: FC<IProps> = ({ message }) => (
  <p className='h4'>{message}</p>
);

export default DefaultMessage;
