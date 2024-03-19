import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toasts } from '@/utils';
import { useAppDispatch } from '@/hooks/redux';
import { Messages } from '@/constants';
import { deleteProduct } from '@/redux/products/operations';

const useDeleteProduct = () => {
  const [productId, setProductId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      dispatch(deleteProduct(productId))
        .unwrap()
        .then(() => {
          toasts.successToast(Messages.delProductSuccess);
        })
        .catch((error) => {
          toasts.errorToast(error);
        });
    }
  }, [dispatch, navigate, productId]);

  return setProductId;
};

export default useDeleteProduct;
