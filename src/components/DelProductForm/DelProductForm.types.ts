import { IProduct } from '@/types/types';

export interface IProps {
  product: IProduct;
  disabled: boolean;
  onClick: () => void;
  setModalWinState: () => void;
}
