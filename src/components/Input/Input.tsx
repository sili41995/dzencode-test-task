import { FC } from 'react';
import { IProps } from './Input.types';

const Input: FC<IProps> = ({ label, settings, type }) => (
  <div className='input-group mb-3'>
    <span className='input-group-text' id='inputGroup-sizing-default'>
      {label}
    </span>
    <input
      type={type}
      className='form-control'
      aria-label='Sizing example input'
      aria-describedby='inputGroup-sizing-default'
      {...settings}
    />
  </div>
);

export default Input;
