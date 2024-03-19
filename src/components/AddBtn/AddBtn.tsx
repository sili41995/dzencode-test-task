import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { StyledButton } from './AddBtn.styled';
import { IProps } from './AddBtn.types';

const AddBtn: FC<IProps> = ({ onClick }) => (
  <StyledButton type='button' className='btn btn-success' onClick={onClick}>
    <FaPlus size={40} />
  </StyledButton>
);

export default AddBtn;
