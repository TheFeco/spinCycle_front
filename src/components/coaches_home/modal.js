import React, { Fragment } from "react";
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  Modal2,
  Modal2Close
} from "./styled";
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton } from './modalstyled';

const Modal = ({ title, footer, children, active, hideModal }) => {
  return (
    <Fragment>
      {active && (
        <ModalBlock>
            <ModalOverlay onClick={()=> hideModal()}></ModalOverlay>
            <ModalWrapper >
              <ModalImg src={require('./modal.png')} alt='camera' />
              <ModalContent>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
              </ModalContent>
              <CloseModalButton
                    aria-label='Close modal'
                    onClick={()=> hideModal()}
                >
                    X
                </CloseModalButton>
            </ModalWrapper>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default Modal;