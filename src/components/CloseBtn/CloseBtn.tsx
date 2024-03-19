import { CgClose } from 'react-icons/cg';
import { Button } from './CloseBtn.styled';
import { IProps } from './CloseBtn.types';
import { FC } from 'react';

const CloseBtn: FC<IProps> = ({ onClick }) => (
  <Button onClick={onClick}>
    <CgClose size={20} />
  </Button>
);

export default CloseBtn;
