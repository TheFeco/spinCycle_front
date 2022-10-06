import React, { Fragment, useRef, useEffect, useCallback } from 'react';
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton } from './modalstyled';


export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();


  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <Fragment>
      {showModal ? (
        <div></div>
      ) : null}
    </Fragment>
  );
};