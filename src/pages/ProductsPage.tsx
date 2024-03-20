import AnimatedContainer from '@/components/AnimatedContainer';
import Container from '@/components/Container';
import DefaultMessage from '@/components/DefaultMessage';
import Filter from '@/components/Filter';
import Loader from '@/components/Loader';
import Products from '@/components/Products';
import SectionWrap from '@/components/SectionWrap';
import Title from '@/components/Title';
import { Messages } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchProducts } from '@/redux/products/operations';
import { selectIsLoading, selectProducts } from '@/redux/products/selectors';
import { FC, useEffect } from 'react';

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const isLoading = useAppSelector(selectIsLoading);
  const pageTitle = `Продукты / ${products.length}`;
  const showProductsList = Boolean(products.length);

  useEffect(() => {
    const promise = dispatch(fetchProducts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <AnimatedContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <SectionWrap>
          <Container>
            <Title title={pageTitle} />
            <Filter />
          </Container>
          <Container>
            {showProductsList ? (
              <Products />
            ) : (
              <DefaultMessage message={Messages.emptyProductsList} />
            )}
          </Container>
        </SectionWrap>
      )}
    </AnimatedContainer>
  );
};

export default ProductsPage;
