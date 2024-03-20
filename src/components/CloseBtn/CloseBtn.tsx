import { FC } from 'react';
import { CgClose } from 'react-icons/cg';
import { Button } from './CloseBtn.styled';
import { IProps } from './CloseBtn.types';

const CloseBtn: FC<IProps> = ({ onClick }) => (
  <Button onClick={onClick}>
    <CgClose size={20} />
  </Button>
);

export default CloseBtn;
