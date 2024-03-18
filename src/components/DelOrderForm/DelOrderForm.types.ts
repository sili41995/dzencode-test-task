import { Products } from '@/types/types';

export interface IProps {
  products: Products;
  disabled: boolean;
  onClick: () => void;
  setModalWinState: () => void;
}
