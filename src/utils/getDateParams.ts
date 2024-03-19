import { DateFormats } from '@/constants';
import { IGetDateParams } from '@/types/types';
import { format, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';

const getDateParams = (date: string): IGetDateParams => {
  setDefaultOptions({ locale: ru });
  const month = format(date, DateFormats.monthNumber);
  const formattedDate = format(date, DateFormats.fullDate);

  return { month, formattedDate };
};

export default getDateParams;
