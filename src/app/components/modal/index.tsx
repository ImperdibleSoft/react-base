import * as React from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Wrapper, LockBodyScreen } from './styles';

export { Header, Body, Footer } from './styles';

interface OwnProps {
  children: React.ReactChild;
  handleClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<OwnProps> = ({ children, handleClose, isOpen }: OwnProps) => {
  const portal = document.getElementById('modal-root');

  return isOpen && portal
    ? createPortal(
        <>
          <LockBodyScreen />
          <Backdrop onClick={handleClose} />
          <Wrapper>{children}</Wrapper>
        </>,
        portal
      )
    : null;
};

export default Modal;
