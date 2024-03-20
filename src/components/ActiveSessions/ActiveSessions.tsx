import ordersServiceApi from '@/service/ordersServiceApi';
import { FC, useEffect, useState } from 'react';
import { connect } from 'socket.io-client';

const socket = connect(ordersServiceApi.url);

const ActiveSessions: FC = () => {
  const [activeSessions, setActiveSessions] = useState<number>(0);

  useEffect(() => {
    socket.emit('new-connection', 'new-connection');
  }, []);

  useEffect(() => {
    socket.on('new-connection', (data) => {
      setActiveSessions(data);
    });
  }, []);

  return <div>{activeSessions}</div>;
};

export default ActiveSessions;
