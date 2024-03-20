import { ChangeEvent, FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectProducts } from '@/redux/products/selectors';
import { SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { getFiltersValues } from '@/utils';
import { Container, Label } from './Filter.styled';

const Filter: FC = () => {
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const type = searchParams.get(SearchParamsKeys.type) ?? '';
  const specification = searchParams.get(SearchParamsKeys.specification) ?? '';
  const products = useAppSelector(selectProducts);
  const { specifications, types } = getFiltersValues(products);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name: key, value } = e.currentTarget;
    updateSearchParams({ key, value });
  };

  return (
    <Container>
      <Label>
        <span>Тип:</span>
        <select
          className='form-select'
          aria-label='Default select example'
          value={type}
          onChange={onSelectChange}
          name={SearchParamsKeys.type}
        >
          <option value=''>All</option>
          {types.map((type) => (
            <option value={type.toLowerCase()} key={type}>
              {type}
            </option>
          ))}
        </select>
      </Label>
      <Label>
        <span>Спецификация:</span>
        <select
          className='form-select'
          aria-label='Default select example'
          value={specification}
          onChange={onSelectChange}
          name={SearchParamsKeys.specification}
        >
          <option value=''>All</option>
          {specifications.map((specification) => (
            <option value={specification.toLowerCase()} key={specification}>
              {specification}
            </option>
          ))}
        </select>
      </Label>
    </Container>
  );
};

export default Filter;
