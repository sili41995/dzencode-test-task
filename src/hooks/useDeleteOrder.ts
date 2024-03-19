import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toasts } from '@/utils';
import { deleteOrder } from '@/redux/orders/operations';
import { useAppDispatch } from '@/hooks/redux';
import { Messages, PagePaths } from '@/constants';

const useDeleteOrder = () => {
  const [orderId, setOrderId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const redirectPath = PagePaths.orders + search;

  useEffect(() => {
    if (orderId) {
      dispatch(deleteOrder(orderId))
        .unwrap()
        .then(() => {
          if (pathname.includes(orderId)) {
            navigate(redirectPath);
          }
          toasts.successToast(Messages.delOrderSuccess);
        })
        .catch((error) => {
          toasts.errorToast(error);
        });
    }
  }, [dispatch, navigate, orderId, pathname, redirectPath]);

  return setOrderId;
};

export default useDeleteOrder;
