import { FC, useEffect, useState } from 'react';
import { connect } from 'socket.io-client';
import ordersServiceApi from '@/service/ordersServiceApi';

const socket = connect(ordersServiceApi.url);

const ActiveSessions: FC = () => {
  const [activeSessions, setActiveSessions] = useState<number>(1);

  useEffect(() => {
    socket.emit('new-connection', 'new-connection');
  }, []);

  useEffect(() => {
    socket.on('user-disconnect', (data) => {
      setActiveSessions(data);
    });
  });

  useEffect(() => {
    socket.on('new-connection', (data) => {
      setActiveSessions(data);
    });
  });

  return <p className='h3'>{`Активных сессий: ${activeSessions}`}</p>;
};

export default ActiveSessions;
