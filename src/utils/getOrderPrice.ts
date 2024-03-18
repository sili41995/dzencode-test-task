import { IGetOrderPrice, Products } from '@/types/types';

const getOrderPrice = (products: Products): IGetOrderPrice => {
  const allPrices = products.flatMap((product) => product.price);
  const prices = allPrices.reduce(
    (acc, { isDefault, value, symbol }) =>
      isDefault
        ? { ...acc, defPrice: acc.defPrice + value, defSymbol: symbol }
        : { ...acc, price: acc.price + value, symbol },
    { defPrice: 0, price: 0, defSymbol: '', symbol: '' }
  );

  return prices;
};

export default getOrderPrice;
