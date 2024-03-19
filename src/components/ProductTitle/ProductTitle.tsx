import { FC } from 'react';
import { IProps } from './ProductTitle.types';

const ProductTitle: FC<IProps> = ({ title, serialNumber }) => (
  <div>
    <p className='h5'>{title}</p>
    <p className='h6'>{serialNumber}</p>
  </div>
);

export default ProductTitle;
