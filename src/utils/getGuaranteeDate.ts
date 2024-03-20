import { format } from 'date-fns';
import { DateFormats } from '@/constants';
import { IGuarantee } from '@/types/types';

const getGuaranteeDate = ({ end, start }: IGuarantee): IGuarantee => {
  const startDate = format(start, DateFormats.guaranteeDate);
  const endDate = format(end, DateFormats.guaranteeDate);

  return { start: startDate, end: endDate };
};

export default getGuaranteeDate;
