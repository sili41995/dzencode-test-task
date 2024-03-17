import { PagePaths } from '@/constants';
import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';

const OrdersPage = lazy(() => import('@/pages/OrdersPage'));
const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<OrdersPage />} />
        <Route path={PagePaths.orders} element={<OrdersPage />} />
        <Route path={PagePaths.products} element={<ProductsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
