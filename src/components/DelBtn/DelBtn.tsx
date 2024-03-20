import { FC } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Button } from './DelBtn.styled';
import { IProps } from './DelBtn.types';

const DelBtn: FC<IProps> = ({ onClick, disabled }) => (
  <Button
    type='button'
    className='btn btn-light'
    onClick={onClick}
    disabled={disabled}
  >
    <RiDeleteBin6Fill />
  </Button>
);

export default DelBtn;
