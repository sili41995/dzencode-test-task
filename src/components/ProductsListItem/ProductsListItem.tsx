import { FC, useState } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoading } from '@/redux/products/selectors';
import Status from '@/components/Status';
import ProductTitle from '@/components/ProductTitle';
import IsNewStatus from '@/components/IsNewStatus';
import Guarantee from '@/components/Guarantee';
import Price from '@/components/Price';
import Date from '@/components/Date';
import DelBtn from '@/components/DelBtn';
import DelProductForm from '@/components/DelProductForm';
import ModalWin from '@/components/ModalWin';
import { getDateParams, getGuaranteeDate, getOrderPrice } from '@/utils';
import { useDeleteProduct } from '@/hooks';
import { IProps } from './ProductsListItem.types';
import { ListItem } from './ProductsListItem.styled';

const ProductsListItem: FC<IProps> = ({ product }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const {
    guarantee,
    isNew,
    photo,
    title,
    serialNumber,
    date,
    type,
    specification,
    _id,
  } = product;
  const { end, start } = getGuaranteeDate(guarantee);
  const { defPrice, defSymbol, price, symbol } = getOrderPrice([product]);
  const { month, formattedDate } = getDateParams(date);
  const isLoading = useAppSelector(selectIsLoading);
  const deleteProduct = useDeleteProduct();

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  const onDelBtnClick = () => {
    deleteProduct(_id);
  };

  return (
    <>
      <ListItem className='list-group-item'>
        <Status isNew={isNew} />
        <img src={photo} alt={title} width='60' height='60' />
        <ProductTitle serialNumber={serialNumber} title={title} />
        <IsNewStatus isNew={isNew} />
        <Guarantee start={start} end={end} />
        <Price
          defPrice={defPrice}
          defSymbol={defSymbol}
          price={price}
          symbol={symbol}
        />
        <p className='h5'>{type}</p>
        <p className='h5'>{specification}</p>
        <Date date={formattedDate} month={month} />
        <DelBtn onClick={setModalWinState} disabled={false} />
      </ListItem>
      {showModalWin && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={
            <DelProductForm
              product={product}
              disabled={isLoading}
              setModalWinState={setModalWinState}
              onClick={onDelBtnClick}
            />
          }
        />
      )}
    </>
  );
};

export default ProductsListItem;
