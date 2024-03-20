import { getTimeParams } from '@/utils';
import { FC, useEffect, useRef, useState } from 'react';
import { Container, DateWrap, TimeWrap } from './Clock.styled';
import { LuClock9 } from 'react-icons/lu';

const Clock: FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const intervalId = useRef<number>();
  const { day, fullDate, time } = getTimeParams(date);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <Container>
      <DateWrap>
        <p className='h4'>{day}</p>
        <p className='h4'>{fullDate}</p>
      </DateWrap>
      <TimeWrap>
        <LuClock9 size={16} />
        <p className='h4'>{time}</p>
      </TimeWrap>
    </Container>
  );
};

export default Clock;
