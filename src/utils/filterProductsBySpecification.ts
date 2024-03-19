import { IFilterProductsProps, Products } from '@/types/types';

const filterProductsBySpecification = ({
  products,
  filter,
}: IFilterProductsProps): Products =>
  products.filter(({ specification }) =>
    filter
      ? specification.toLocaleLowerCase() === filter.toLocaleLowerCase()
      : products
  );

export default filterProductsBySpecification;
