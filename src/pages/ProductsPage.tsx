import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Products from '@/components/Products';
import SectionWrap from '@/components/SectionWrap';
import Title from '@/components/Title';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchProducts } from '@/redux/products/operations';
import { selectIsLoading, selectProducts } from '@/redux/products/selectors';
import { FC, useEffect } from 'react';

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const isLoading = useAppSelector(selectIsLoading);
  const pageTitle = `Продукты / ${products.length}`;

  useEffect(() => {
    const promise = dispatch(fetchProducts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <SectionWrap>
      <Container>
        <Title title={pageTitle} />
      </Container>
      <Products />
    </SectionWrap>
  );
};

export default ProductsPage;
