import { IGetFiltersValues, Products } from '@/types/types';

const getFiltersValues = (products: Products): IGetFiltersValues => {
  const types = products.map(({ type }) => type);
  const specifications = products.map(({ specification }) => specification);

  const uniqueTypes = new Set(types);
  const uniqueSpecifications = new Set(specifications);

  return {
    types: [...uniqueTypes],
    specifications: [...uniqueSpecifications],
  };
};

export default getFiltersValues;
