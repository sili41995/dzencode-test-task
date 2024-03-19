import { useMemo } from 'react';
import { useAppSelector } from './redux';
import { selectProducts } from '@/redux/products/selectors';
import useSetSearchParams from './useSetSearchParams';
import { SearchParamsKeys } from '@/constants';
import { filterProductsBySpecification, filterProductsByType } from '@/utils';
import { Products } from '@/types/types';

const useFilteredCars = (): Products => {
  const products = useAppSelector(selectProducts);
  const { searchParams } = useSetSearchParams();
  const type = searchParams.get(SearchParamsKeys.type) ?? '';
  const specification = searchParams.get(SearchParamsKeys.specification) ?? '';

  const filteredProductsByType = useMemo(
    () => filterProductsByType({ products, filter: type }),
    [products, type]
  );

  const filteredProducts = useMemo(
    () =>
      filterProductsBySpecification({
        products: filteredProductsByType,
        filter: specification,
      }),
    [filteredProductsByType, specification]
  );

  return filteredProducts;
};

export default useFilteredCars;
