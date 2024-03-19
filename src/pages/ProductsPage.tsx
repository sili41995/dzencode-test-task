import Loader from '@/components/Loader';
import Products from '@/components/Products';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchProducts } from '@/redux/products/operations';
import { selectIsLoading, selectProducts } from '@/redux/products/selectors';
import { FC, useEffect } from 'react';

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const products = useAppSelector(selectProducts);

  useEffect(() => {
    const promise = dispatch(fetchProducts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? <Loader /> : <Products products={products} />;
};

export default ProductsPage;
