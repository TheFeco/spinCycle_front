import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalOverlay,
} from "./styled";
import { ModalWrapper, ModalImg, ModalContent, CloseModalButton } from './modalstyled';

const Modal = ({ trainer, active, hideModal }) => {
  return (
    <Fragment>
      {active && (
        <ModalBlock>
            <ModalOverlay onClick={()=> hideModal()}></ModalOverlay>
            <ModalWrapper >
              <ModalImg  src={trainer.img} alt={trainer.name} />
              <ModalContent>
                <h1>{trainer.name}</h1>
                <h2>{trainer.title}</h2>
                <p>{trainer.description}</p>
                <h3>FUN FACTS</h3>
                <p><span>{trainer.fun_fact1}</span></p>
                <p><span>{trainer.fun_fact2}</span></p>
                <p><span>{trainer.fun_fact3}</span></p>
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