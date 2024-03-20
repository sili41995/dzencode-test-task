import { FC } from 'react';
import { IProps } from './DelProductDetails.types';
import { Container, Img, TitleWrap } from './DelProductDetails.styles';

const DelProductDetails: FC<IProps> = ({ product }) => {
  const { photo, title, serialNumber } = product;

  return (
    <Container>
      <Img src={photo} alt={title} width='80' height='80' />
      <TitleWrap>
        <p className='h4'>{title}</p>
        <p className='h4'>{serialNumber}</p>
      </TitleWrap>
    </Container>
  );
};

export default DelProductDetails;
