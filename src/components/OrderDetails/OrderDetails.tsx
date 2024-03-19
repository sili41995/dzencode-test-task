import { FC } from 'react';
import { IProps } from './OrderDetails.types';
import { Container, List } from './OrderDetails.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseBtn from '@/components/CloseBtn';
import { PagePaths } from '@/constants';

const OrderDetails: FC<IProps> = ({ order }) => {
  const { products } = order;
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.from ?? PagePaths.homePath;

  const onCloseBtnClick = () => {
    navigate(redirectPath);
  };

  return (
    <Container>
      <List className='list-group'>
        {products.map(({ _id }) => (
          <li className='list-group-item' key={_id}>
            <p>{_id}</p>
          </li>
        ))}
      </List>
      <CloseBtn onClick={onCloseBtnClick} />
    </Container>
  );
};

export default OrderDetails;
