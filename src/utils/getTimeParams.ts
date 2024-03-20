import { ru } from 'date-fns/locale';
import { format, setDefaultOptions } from 'date-fns';
import { DateFormats } from '@/constants';
import { IGetTimeParams } from '@/types/types';

const getTimeParams = (date: Date): IGetTimeParams => {
  setDefaultOptions({ locale: ru });
  const day = format(date, DateFormats.dayOfWeek);
  const fullDate = format(date, DateFormats.clockDate);
  const time = format(date, DateFormats.clockTime);

  return { day, fullDate, time };
};

export default getTimeParams;
