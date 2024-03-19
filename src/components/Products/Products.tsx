import { useAppSelector } from '@/hooks/redux';
import { selectProducts } from '@/redux/products/selectors';
import { FC } from 'react';
import ProductsListItem from '../ProductsListItem';

const Products: FC = () => {
  const products = useAppSelector(selectProducts);

  return (
    <ul className='list-group'>
      {products.map((product) => (
        <ProductsListItem product={product} key={product._id} />
      ))}
    </ul>
  );
};

export default Products;
