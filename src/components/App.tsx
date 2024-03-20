import { PagePaths } from '@/constants';
import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';

const OrdersPage = lazy(() => import('@/pages/OrdersPage'));
const OrderDetailsPage = lazy(() => import('@/pages/OrderDetailsPage'));
const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const SettingsPage = lazy(() => import('@/pages/SettingsPage'));
const UsersPage = lazy(() => import('@/pages/UsersPage'));
const GroupsPage = lazy(() => import('@/pages/GroupsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  return (
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
        <Route path={PagePaths.settings} element={<SettingsPage />} />
        <Route path={PagePaths.users} element={<UsersPage />} />
        <Route path={PagePaths.groups} element={<GroupsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
