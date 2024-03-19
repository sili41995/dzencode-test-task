import Status from '@/components/Status';
import ProductTitle from '@/components/ProductTitle';
import IsNewStatus from '@/components/IsNewStatus';
import Guarantee from '@/components/Guarantee';
import { getDateParams, getGuaranteeDate, getOrderPrice } from '@/utils';
import { IProps } from './ProductsListItem.types';
import { FC, useState } from 'react';
import Price from '@/components/Price';
import Date from '@/components/Date';
import DelBtn from '@/components/DelBtn';
import { ListItem } from './ProductsListItem.styled';
// import ModalWin from '@/components/ModalWin';

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
  } = product;
  const { end, start } = getGuaranteeDate(guarantee);
  const { defPrice, defSymbol, price, symbol } = getOrderPrice([product]);
  const { month, formattedDate } = getDateParams(date);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  // const onDelBtnClick = () => {};

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
      {/* {showModalWin && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={
            <DelOrderForm
              products={products}
              disabled={isLoading}
              setModalWinState={setModalWinState}
              onClick={onDelBtnClick}
            />
          }
        />
      )} */}
    </>
  );
};

export default ProductsListItem;
