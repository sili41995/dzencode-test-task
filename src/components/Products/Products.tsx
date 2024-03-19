import { FC } from 'react';
import ProductsListItem from '@/components/ProductsListItem';
import { useFilteredProducts } from '@/hooks';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';

const Products: FC = () => {
  const products = useFilteredProducts();
  const showProductsList = Boolean(products.length);

  return showProductsList ? (
    <ul className='list-group'>
      {products.map((product) => (
        <ProductsListItem product={product} key={product._id} />
      ))}
    </ul>
  ) : (
    <DefaultMessage message={Messages.emptyFilteredProductsList} />
  );
};

export default Products;
