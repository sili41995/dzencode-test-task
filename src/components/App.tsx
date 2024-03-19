import { PagePaths } from '@/constants';
import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import { useAppSelector } from '@/hooks/redux';
import { selectIsOrdersLoading } from '@/redux/orders/selectors';
import { selectIsProductsLoading } from '@/redux/products/selectors';
import Loader from '@/components/Loader';

const OrdersPage = lazy(() => import('@/pages/OrdersPage'));
const OrderDetailsPage = lazy(() => import('@/pages/OrderDetailsPage'));
const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const isOrdersLoading = useAppSelector(selectIsOrdersLoading);
  const isProductsLoading = useAppSelector(selectIsProductsLoading);
  const isLoading = isOrdersLoading || isProductsLoading;

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<OrdersPage />} />
        <Route path={PagePaths.orders} element={<OrdersPage />}>
          <Route
            path={`:${PagePaths.dynamicParam}`}
            element={<OrderDetailsPage />}
          />
        </Route>
        <Route path={PagePaths.products} element={<ProductsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
