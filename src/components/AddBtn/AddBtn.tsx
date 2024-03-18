import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { StyledButton } from './AddBtn.styled';

const AddBtn: FC = () => (
  <StyledButton type='button' className='btn btn-success'>
    <FaPlus size={40} />
  </StyledButton>
);

export default AddBtn;
