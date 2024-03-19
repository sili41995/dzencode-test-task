import { IFilterProductsProps, Products } from '@/types/types';

const filterProductsByType = ({
  products,
  filter,
}: IFilterProductsProps): Products =>
  products.filter(({ type }) =>
    filter ? type.toLocaleLowerCase() === filter.toLocaleLowerCase() : products
  );

export default filterProductsByType;
