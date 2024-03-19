import { FC, useEffect } from 'react';
import { IProps } from './ModalWin.types';
import { createPortal } from 'react-dom';
import { DivClickEvent } from '@/types/types';
import { Backdrop, Container } from './ModalWin.styled';
import CloseBtn from '@/components/CloseBtn';

const ModalWin: FC<IProps> = ({ children, setModalWinState }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const hideModalWin = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    window.addEventListener('keydown', hideModalWin);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState]);

  const hideModalWin = (e: DivClickEvent) => {
    if (e.target === e.currentTarget) {
      setModalWinState();
    }
  };

  return (
    modalRoot &&
    createPortal(
      <Backdrop onClick={hideModalWin}>
        <Container>
          <CloseBtn onClick={setModalWinState} />
          {children}
        </Container>
      </Backdrop>,
      modalRoot
    )
  );
};

export default ModalWin;
