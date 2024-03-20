import AnimatedContainer from '@/components/AnimatedContainer';
import DefaultMessage from '@/components/DefaultMessage';
import OrderDetails from '@/components/OrderDetails';
import { Messages } from '@/constants';
import { useTargetOrder } from '@/hooks';
import { FC } from 'react';

const OrderDetailsPage: FC = () => {
  const targetOrder = useTargetOrder();

  return (
    <AnimatedContainer>
      {targetOrder ? (
        <OrderDetails order={targetOrder} />
      ) : (
        <DefaultMessage message={Messages.invalidId} />
      )}
    </AnimatedContainer>
  );
};

export default OrderDetailsPage;
