import { FC } from 'react';
import { IProps } from './DelOrderDetails.types';
import { Img, List, ListItem, TitleWrap } from './DelOrderDetails.styles';

const DelOrderDetails: FC<IProps> = ({ products }) => (
  <List className='list-group'>
    {products.map(({ photo, serialNumber, title }) => (
      <ListItem className='list-group-item'>
        <Img src={photo} alt={title} width='80' height='80' />
        <TitleWrap>
          <p className='display-6'>{title}</p>
          <p className='display-6'>{serialNumber}</p>
        </TitleWrap>
      </ListItem>
    ))}
  </List>
);

export default DelOrderDetails;
