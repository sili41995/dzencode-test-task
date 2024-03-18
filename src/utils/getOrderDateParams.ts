import { DateFormats } from '@/constants';
import { IGetOrderDateParams } from '@/types/types';
import { format, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';

const getOrderDateParams = (date: string): IGetOrderDateParams => {
  setDefaultOptions({ locale: ru });
  const orderMonth = format(date, DateFormats.monthNumber);
  const orderDate = format(date, DateFormats.fullDate);

  return { orderMonth, orderDate };
};

export default getOrderDateParams;
