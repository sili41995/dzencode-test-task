import { FC } from 'react';
import { useFilteredProducts } from '@/hooks';
import ProductsListItem from '@/components/ProductsListItem';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';
import { List } from './Products.styled';

const Products: FC = () => {
  const products = useFilteredProducts();
  const showProductsList = Boolean(products.length);

  return showProductsList ? (
    <List className='list-group'>
      {products.map((product) => (
        <ProductsListItem product={product} key={product._id} />
      ))}
    </List>
  ) : (
    <DefaultMessage message={Messages.emptyFilteredProductsList} />
  );
};

export default Products;
